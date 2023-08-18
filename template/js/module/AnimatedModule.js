export default function AnimatedModule() {
  //cursor
  var cursor = $(".cursor");
  function moveCursor(e) {
    cursor.css({ top: e.pageY, left: e.pageX });
  }
  $(".img_point").hover(
    function () {
      $(".cursor").addClass("img_on");
    },
    function () {
      $(".cursor").removeClass("img_on");
    }
  );
  $(document)
    .on("mouseenter", ".txt_point", function (event) {
      $(".cursor").addClass("txt_on");
    })
    .on("mouseleave", ".txt_point", function () {
      $(".cursor").removeClass("txt_on");
    });
  $(window).on("mousemove", moveCursor);
}
