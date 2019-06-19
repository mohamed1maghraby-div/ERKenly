  $(document).ready(function() {
  var nice = $("html").niceScroll({
            cursorcolor:"#05987e",
            cursorwidth:10,
            cursoropacitymin:0.9,
            background:"#a0d6cd",
            cursorborder:"2px solid #05987e",
            cursorborderradius: 0,
            autohidemode:'leave',
                                 });
      $("#ascrail2000").css({'top': '50px','right':'20px'});
$("#div1").html($("#div1").html()+' '+nice.version);
                                                        });

