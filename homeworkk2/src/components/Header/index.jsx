import "./style.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a className="header__logo" href="#">
            <h2>LOGO</h2>
          </a>
          <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-item-links" href="#">Home</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-item-links" href="#">About</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-item-links" href="#">Location</a>
              </li>
            </ul>
            <a className="header__nav-link" href="#">Contact Us</a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
