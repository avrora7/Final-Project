import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  { path: "/admin/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/admin/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/admin/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/admin/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/admin/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/admin/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography
  }
  ,
  { redirect: true, path: "/admin", pathTo: "/admin/dashboard", name: "Dashboard" }
];
export default dashRoutes;
