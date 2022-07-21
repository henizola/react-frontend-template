import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer

import Home from "./views/home/Home";

const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout exact path='/' component={Home} layout={MainView} />
		</Switch>
	);
};
export default Routes;
