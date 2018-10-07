import Splash from "views/Marketing/Splash.jsx";
import Login from "views/Marketing/Login.jsx";
import Signup from "views/Marketing/Signup.jsx";

var staticRoutes = [
  {
    path: "/splash",
    name: "Splash",
    icon: "design_app",
    component: Splash
  },
  {
    path: "/login",
    name: "Login",
    icon: "design_app",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "design_app",
    component: Signup
  },
  { redirect: true, path: "/", pathTo: "/splash", name: "Splash" }
  
];
export default staticRoutes;
