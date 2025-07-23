document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-button');
  const overlay = document.getElementById('menu-overlay');
  const coursesToggle = document.getElementById('courses-toggle');
  const submenu = document.getElementById('courses-dropdown');
  const exploreButton = document.getElementById('Explore-button');
  
  toggleBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  coursesToggle.addEventListener('click', function (e) {
    e.preventDefault();
    submenu.classList.toggle('show');
    this.classList.toggle('open');
  });

  document.querySelectorAll("#side-menu a").forEach(menuLink => {//queryselector returns all the elements within an element as nodelist
    menuLink.addEventListener("click", () => {
        document.getElementById("side-menu").classList.remove("active");
        document.getElementById("menu-overlay").classList.remove("active");
    });
  });

  });

