import Splash from "views/Marketing/Splash.jsx";

var staticRoutes = [
  {
    path: "/splash",
    name: "Splash",
    icon: "design_app",
    component: Splash
  },
  { redirect: true, path: "/", pathTo: "/splash", name: "Splash" }
  
];
export default staticRoutes;
