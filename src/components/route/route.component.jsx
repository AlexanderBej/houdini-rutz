import { useState } from "react";

import SearchBar from "../search-bar/search-bar.component";

import "./route.styles.scss";

const Route = ({ data, type }) => {
	const [selectedRoute, setSelectedRoute] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");

	const handleRouteClick = (route) => {
		if (selectedRoute && selectedRoute.id === route.id) {
			setSelectedRoute(null);
			return;
		}
		setSelectedRoute(route);
	};

	const filteredRoutes = data.filter(
		({ material, to }) =>
			material.toLowerCase().includes(searchQuery.toLowerCase()) || to.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="routes-container">
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder={`Search for a ${type}`} />
			<table className="routes-table">
				<thead className="table-head">
					<tr>
						<th className="header-frequency">{type === 'route' ? 'Frequency' : 'Name'}</th>
						<th className="header-material">Material</th>
						<th className="header-from">From</th>
						<th className="header-to">To</th>
						<th className="header-invisible"></th>
					</tr>
				</thead>
				<tbody className="table-body">
					{filteredRoutes.length > 0 ? (
						filteredRoutes.map((route) => {
							return (
								<tr
									key={route.id}
									onClick={() => handleRouteClick(route)}
									className={selectedRoute && selectedRoute.id === route.id ? "full-height-row" : ""}>
									<td className="data-frequency">{route.frequency}</td>
									<td className="data-material">{route.material}</td>
									<td className="data-from">
										<div className="flex-data">
											<span>{route.from.name}</span>
											{selectedRoute && selectedRoute.id === route.id && <span className="location-data">{route.from.location}</span>}
										</div>
									</td>
									<td className="data-to">
										<div className="flex-data">
											<span>{route.to.name}</span>
											{selectedRoute && selectedRoute.id === route.id && <span className="location-data">{route.to.location}</span>}
										</div>
									</td>
								</tr>
							);
						})
					) : (
						<p>No routes found</p>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Route;
