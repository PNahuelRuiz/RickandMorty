import SearchBar from "../searchbar/SearchBar"
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return(
        <nav>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <SearchBar onSearch={onSearch}/>
        </nav>

    )
}

export default Nav;