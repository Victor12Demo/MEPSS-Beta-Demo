

  /** ===========================================
      Sidenav open/close
  ============================================ */
  document.addEventListener("DOMContentLoaded", function (evt){
  document.getElementById('sidenav-open-btn').onclick = function () {
    document.getElementById('sidenav').classList.add('active');
    document.getElementById('sidenav-close-btn').classList.add('open');
  }

  document.getElementById('sidenav-close-btn').onclick = function () {
    document.getElementById('sidenav').classList.remove('active');
    document.getElementById('sidenav-close-btn').classList.remove('open');
  };
  
  });