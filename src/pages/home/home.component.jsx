import { useEffect } from "react";
import AOS from "aos";

import RoutesPage from "../../pages/routes-page/routes-page.component";

import "aos/dist/aos.css";
import "./home.styles.scss";

const Home = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<main className="main-container">
			<div className={`content routes-active`}>
				<div className="page-header">
					<h1>Routes</h1>
				</div>
				<section className="active-page">
				
					<RoutesPage />
				</section>
			</div>
		</main>
	);
};

export default Home;
