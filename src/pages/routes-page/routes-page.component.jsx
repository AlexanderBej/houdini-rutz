import "./routes-page.styles.scss";

import { routesData } from "../../utils/routes.data";
import Route from "../../components/route/route.component";
import { flowsData } from "../../utils/flows.data";

const RoutesPage = () => {
	return (
		<div className="routes-page">
			<Route data={routesData} type={'route'}/>
			<Route data={flowsData} type={'flow'}/>
		</div>
	)
};

export default RoutesPage;
