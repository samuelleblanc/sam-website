$(window).on("load resize scroll", function() {
  $(".home-section").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
      $(this)
        .find("#about:before, #experience:before,#projects:before,#featured:before,#tags:before")
        .css({ left: leftPosition });
  });
});