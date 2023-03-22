import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navbar.component.scss";

const Navbar = ({ searchSetter }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Computer Shop
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Computers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="laptops"
                >
                  Laptops
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/accessories"
                >
                  Accessories
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/parts"
                >
                  Computer Parts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Create Your Own Computer
                </a>
              </li>
            </ul>
            <form className="d-flex input-group w-auto" id="searchInput">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) =>
                  searchSetter(event.target.value.trim().toLowerCase())
                }
              />
            </form>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navbar;
