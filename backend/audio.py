import soundfile as sf
import io
from google.cloud import speech
client = speech.SpeechClient()
import base64
import os
import datetime
import matplotlib.pyplot as plt
from scipy.io import wavfile
import numpy as np
from pydub import AudioSegment
from pydub.silence import split_on_silence


def get_overall_score(pace, word_choice, eloquence, pronunciation):

    final = word_choice + pronunciation
    final += ((158 - abs(158 - pace))/158) * 100

    final += (50 / (50 + eloquence)) * 100

    return round(final/4, 1)
def get_word_choice(k):
    d = {}
    
    x = 0
    for i in k:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
            x += 1

    return float(x / len(k)) * 100

def get_nlp(k):
    a = 0
    for i in k:
        if i == "by":
            a += 1
    if a/len(k) > 0.1:
        return "Passive Voice"
    else:
        return "Active Voice"

def process(k):
    final = [[], [], []]
    confidence = 0

    for i in k.results[0].alternatives[0].words:
        
        final[0].append(i.word)
        final[1].append(i.start_time.total_seconds())

        final[2].append(i.end_time.total_seconds())
    return final, k.results[0].alternatives[0].confidence

def transcribe_file(file_name):

    with io.open(file_name, "rb") as audio_file:
        content = audio_file.read()
        audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="en-US",
        enable_word_time_offsets=True,
    )

    response = client.recognize(config=config, audio=audio)

    return response

def write_to_file(k, type):
    if type == 0:
        f = open("audio.mp3", "wb")
        f.write(base64.b64decode(k))
        os.system("ffmpeg -i audio.mp3 audio.wav")
        os.system("ffmpeg -y  -i audio.wav  -acodec pcm_s16le -f s16le -ac 1 -ar 16000 audio.raw")
        

    else:
        f = open("audio.wav", "wb")
        f.write(base64.b64decode(k))
        os.system("ffmpeg -y  -i audio.wav  -acodec pcm_s16le -f s16le -ac 1 -ar 16000 audio.raw")

def get_length(file_name):
    f = sf.SoundFile(file_name)
    return len(f) / f.samplerate

def get_data(k):
    encode_string = bytes(k, 'utf-8')
    write_to_file(encode_string, 0)
    k = transcribe_file("audio.raw")
    
    f, confidence = process(k)
    
    length = get_length("audio.wav")
    pace = int((len(f[2])/ f[2][len(f[2]) - 1]) * 60 + 0.5)
    word_choice_score = get_word_choice(f[0])

    final_audio = AudioSegment.from_wav('audio.wav')
    
    num_filler = 0
    ff = [0]

    for i in range(0, len(f[1])):
        ff.append(f[1][i])
        ff.append(f[2][i])

    ff.append(length)
    

    final_extract = AudioSegment.silent(duration=20)

    for i in range(0, len(ff) - 1):
        if i % 2 == 0:
            final_extract += final_audio[ff[i] * 1000:ff[i + 1] * 1000]
            
        else:
            extract = final_audio[ff[i] * 1000:ff[i + 1] * 1000]
            dBFS = extract.dBFS
            chunks = split_on_silence(extract, 
                min_silence_len = 100,
                silence_thresh = dBFS-16,
            )
            
            final_extract += chunks[len(chunks) - 1]
            num_filler += len(chunks) - 1


    final_extract.export("output.mp3", format="mp3")
    s = str(base64.b64encode(open("output.mp3", "rb").read()))
    s = s[2:len(s) - 1]
    os.remove("audio.mp3")
    os.remove("audio.wav")
    os.remove("audio.raw")
    os.remove("output.mp3")
    return {"status":"success", "NLP":get_nlp(f[0]), "output_audio":s, "pronunciation":round(confidence * 100, 1), "pace":pace, "word_choice":word_choice_score, "eloquence":num_filler, "overall_score":get_overall_score(pace, word_choice_score, num_filler, confidence)}


s = str(base64.b64encode(open("test.mp3", "rb").read()))
s = s[2:len(s) - 1]
print(get_data(s))