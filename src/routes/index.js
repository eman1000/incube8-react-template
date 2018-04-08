import Home from "./Home/container/HomeContainer";
import Update from "./Update/container/UpdateContainer";

const routes = [
  {
    path: "/",
    component: Home,
    exact:true
  },
  {
    path: "/ticket/:id",
    component: Update
  }

];
export default routes;