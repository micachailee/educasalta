document.write(`  <section class="info_section footer">
<div class="container">
      <div class="info_top">
          <div id="fo-educa">
            <p class="navbar-brand">
              EDUCASALTA
            </p>
          </div>
          <div class="">
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
  </section>

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