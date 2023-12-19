document.write(`
<header class="header_section">
    <div class="header_bottom">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container fixed-top" id="navbar">
        <a class="navbar-brand " href="#index" id="logo"> EDUCASALTA </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
            <li class="nav-item active">
                <a class="nav-link" href="#index">INICIO <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Instituciones">INSTITUCIONES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#SobreNosotros">SOBRE NOSOTROS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACTO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>
                    ACCEDER
                </span>
                </a>
            </li>
            <form class="form-inline justify-content-center">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
            </ul>
        </div>
        </nav>
    </div>
    </div>
</header>
`);
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  