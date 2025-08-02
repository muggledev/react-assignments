function Header(props) {
  return (
    <header>
      <div className="navbar">
        <div className="home">
          <a href="#">HOME</a>
        </div>
        <nav>
          <div className="nav-label">
            <a href="#">ABOUT</a>
          </div>
          <div className="nav-label">
            <a href="#">BLOG</a>
          </div>
          <div className="nav-label">
            <a href="#">CONTACT</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
