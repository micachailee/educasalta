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
                <a class="nav-link" href="index.html">INICIO <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html#Instituciones">INSTITUCIONES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html#SobreNosotros">SOBRE NOSOTROS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACTO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login.html">
                    <img id="user" src="img/user.svg" alt="user">
                    <span>
                        ACCEDER
                    </span>
                </a>
            </li>
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
  