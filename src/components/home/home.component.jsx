import { useEffect, useState } from "react";
import AOS from "aos";

import SideBar from "../sidebar/sidebar.component";
import Routes from "../routes/routes.component";
import Privacy from "../privacy/privacy.component";
import Blueprint from "../blueprint/blueprint.component";

import "aos/dist/aos.css";
import "./home.styles.scss";

const Home = () => {
	const [activePage, setActivePage] = useState("blueprint");

	useEffect(() => {
		AOS.init();
	});

	return (
		<main className="main-container">
			<SideBar setActivePage={setActivePage} />

			<div className={`content ${activePage === "blueprint" ? "blueprint-active" : "routes-active"}`}>
				{activePage === "blueprint" && <Blueprint />}
				{activePage === "routes" && <Routes />}
				{activePage === "privacy" && <Privacy />}
			</div>
		</main>
	);
};

export default Home;
