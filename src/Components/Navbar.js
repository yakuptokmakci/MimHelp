function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
         <img src="/Images/Tr/CompanyLogo.png"/>
          </a> 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginTop:'30px'}}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Modüller
                </a>
              </li>
            </ul>
            <span class="navbar-text">
                <p>Destek: <a href="destek@mimware.com">destek@mimware.com</a></p>
                <p>Telefon: +90 (850) 840 20 10</p>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
