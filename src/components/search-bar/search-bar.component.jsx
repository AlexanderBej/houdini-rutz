import { ReactComponent as SearchBarIcon } from "./../../assets/search-bar.svg";
import { ReactComponent as DeleteIcon } from "./../../assets/delete.svg";

import "./search-bar.styles.scss";

const SearchBar = ({ searchQuery, setSearchQuery, placeholder }) => {
	return (
		<div className="search-bar-container">
			<SearchBarIcon className="search-bar-icon" />
			<input
				type="text"
				placeholder={placeholder}
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
				className="search-bar"
			/>
			{searchQuery && <DeleteIcon className="delete-icon" role="button" onClick={() => setSearchQuery("")} />}
		</div>
	);
};

export default SearchBar;
