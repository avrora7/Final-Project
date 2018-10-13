import Splash from "views/Marketing/Splash.jsx";
import Login from "views/Marketing/Login.jsx";
import Signup from "views/Marketing/Signup.jsx";
import CompleteProfile from "views/Business/CompleteProfile.jsx";
import ConnectToStartup from "views/Business/ConnectToStartup.jsx";
import ConnectionsWithStartups from "views/Business/ConnectionsWithStartups.jsx";
import ConnectToVendor from "views/Business/ConnectToVendor.jsx";
import ConnectionsWithVendors from "views/Business/ConnectionsWithVendors.jsx";


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
  {
    path: "/complete_profile",
    name: "CompleteProfile",
    icon: "design_app",
    component: CompleteProfile
  },
  {
    path: "/connect_to_startup",
    name: "ConnectToStartup",
    icon: "design_app",
    component: ConnectToStartup
  },
  {
    path: "/connections_with_startups",
    name: "ConnectionsWithStartups",
    icon: "design_app",
    component: ConnectionsWithStartups
  },
  {
    path: "/connect_to_vendor",
    name: "ConnectToVendor",
    icon: "design_app",
    component: ConnectToVendor
  },
  {
    path: "/connections_with_vendors",
    name: "ConnectionsWithVendors",
    icon: "design_app",
    component: ConnectionsWithVendors
  },
   
  { redirect: true, path: "/", pathTo: "/splash", name: "Splash" }
  
];
export default staticRoutes;
