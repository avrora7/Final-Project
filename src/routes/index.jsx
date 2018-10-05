// import Dashboard from "layouts/Dashboard/Dashboard.jsx";
// var dashboardRoutes = [{ path: "/", name: "Postlogin", component: Dashboard }];
// export default dashboardRoutes;

import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import StaticPage from "layouts/StaticPage/StaticPage.jsx";
var routes = [
    { path: "/workarea", name: "Dashboard", component: Dashboard },
    { path: "/", name: "Home", component: StaticPage }
];
export default routes;