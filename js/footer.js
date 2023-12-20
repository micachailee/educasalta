document.write(`  <section class="info_section footer">
<div class="container">
  <div class="info_top">
    <div class="row">
      <div class="col-md-3 ">
        <a class="navbar-brand" href="#index">
          EDUCASALTA
        </a>
      </div>
      <div class="col-md-5 ">
        <div class="info_contact">
          <a href="">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>
              Contacto
            </span>
          </a>
          <a href="">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>
              +01 1234567890
            </span>
          </a>
        </div>
      </div>
      <div class="col-md-4 ">
        <div class="social_box">
          <a href="">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="info_bottom">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="info_detail">
          <h5>
            Compania
          </h5>
          <p>
            EDUCASALTA simplifica la búsqueda educativa al conectar a estudiantes y padres con opciones locales, ofreciendo información detallada y fácil de entender para decisiones informadas.
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="info_form">
          <h5>
            ESCRIBINOS
          </h5>
          <form action="">
            <input type="text" placeholder="Ingresa tu correo" />
            <input type="text" placeholder="MENSAJE" />
            <button type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="info_detail">
          <h5>
            Servicios
          </h5>
          <p>
            Conectamos a estudiantes y padres con las mejores opciones educativas locales, proporcionando información detallada para decisiones informadas y rápidas.              </p>
        </div>
      </div>
      <div class="col-lg-2 col-md-6">
        <div class="">
          <h5>
            Atajos
          </h5>
          <ul class="info_menu">
            <li>
              <a href="#index">
                Inicio
              </a>
            </li>
            <li>
              <a href="#Instituciones">
                Instituciones
              </a>
            </li>
            <li>
              <a href="#Sobrenosotros">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<!-- end info_section -->

<!-- footer section -->
<footer class="footer_section">
<div class="container">
  <p>
    &copy; <span id="displayYear"></span> Todos los derechos reservados a 
    <a href="#">EDUCASALTA</a>
  </p>
</div>
</footer>`)
document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.getElementById("sidebar");
    var footer = document.querySelector(".footer");
  
    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY;
      var mainContainer = document.querySelector(".main-container");
      var sidebarHeight = sidebar.offsetHeight;
      var mainContainerHeight = mainContainer.offsetHeight;
      var footerTop = footer.offsetTop;
  
      if (scrollTop + sidebarHeight > mainContainerHeight) {
        sidebar.classList.add("fixed");
        if (scrollTop + sidebarHeight > footerTop - sidebarHeight) {
          sidebar.style.top = mainContainerHeight - sidebarHeight + "px";
        }
      } else {
        sidebar.classList.remove("fixed");
        sidebar.style.top = "auto";
      }
    });
  });