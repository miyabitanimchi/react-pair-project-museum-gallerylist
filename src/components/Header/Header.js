const Header = () => {
  return (
    <header>
      <h1 className="navBarName">
        <a href="../GalleryList/GalleryList.js">
          MUSEUM <span>of</span>
          <br />
          CANADA
        </a>
      </h1>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="../GalleryList/GalleryList.js">ABOUT</a>
          </li>
          <li>
            <a href="../GalleryList/GalleryList.js">VISIT</a>
          </li>
          <li>
            <a href="../GalleryList/GalleryList.js">EXHIBITIONS & EVENTS</a>
          </li>
          <li>
            <a href="../GalleryList/GalleryList.js">EDUCATION</a>
          </li>
          <li>
            <a href="../GalleryList/GalleryList.js">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
