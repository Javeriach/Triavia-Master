function Navbar() {
  return (
    <nav className="navbar navbar-expand-md p-0 m-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>TriviaMaster</h1>
        </a>
        <button
          className="navbar-toggler toggle-icon"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="nav-body">
            <ul className="navbar-nav justify-content-evenly px-3">
              <li className="nav-item p-0">
                <a href="#" className=" aTag">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="aTag">
                  Rewards
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="aTag">
                  FaQs
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="aTag">
                  Blog
                </a>
              </li>
            </ul>

            <form className="d-flex sign-up-section" role="search">
              <a className=" nav-item aTag border-0" href="#">
                Login
              </a>

              <button className="btn join_Now p-1" type="submit">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
