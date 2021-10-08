$( document ).ready(function() {
/* =========================
  # Nav Pills Home 
 =========================== */
  $('#nav-pills .nav-item a').click(function() {
    $(this).tab('show');
  });

  /* =========================
  # Switch font size 
 =========================== */

  $('.change-font').on('click', 'a', function (e) {
    e.preventDefault();
    $('.change-font a.size').removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('font-size-1')) {
      $('body').removeClass('text-size-2');
      $('body').removeClass('text-size-3');
      $('body').addClass('text-size-1');
    } else if ($(this).hasClass('font-size-2')) {
      $('body').removeClass('text-size-1');
      $('body').removeClass('text-size-3');
      $('body').addClass('text-size-2');
    } else if ($(this).hasClass('font-size-3')) {
      $('body').removeClass('text-size-2');
      $('body').removeClass('text-size-1');
      $('body').addClass('text-size-3 ');
    }
  });
  
});

