import Dashboard from "views/Dashboard.js";
import UploadSpeech from "views/examples/UploadSpeech"

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
];
export default dashRoutes;
