import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ getSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    getSearch(searchValue);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ml-auto ${
        showMenu ? "show" : ""
      }`}
    >
      <div className="container-fluid">
        <Link to='/'>
          <h2 className="nav-item">MovieDb</h2>
        </Link>
        
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            showMenu ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/toprated">
                TopRated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">
                UpComing
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search movies..."
              aria-label="Search"
              value={searchValue}
              onChange={onChangeSearch}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
