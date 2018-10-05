import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/workarea/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  { path: "/workarea/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/workarea/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/workarea/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/workarea/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/workarea/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/workarea/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography
  }
  ,
  { redirect: true, path: "/workarea", pathTo: "/workarea/dashboard", name: "Dashboard" }
];
export default dashRoutes;
