export default function SearchModule(number) {
  const tgLang = $(".btnLang");
  if (tgLang) {
    tgLang.on("click", function () {
      $(this).next().slideToggle(500);
      $(this).toggleClass("active");
    });
    $(document).mouseup(function (e) {
      if (!tgLang.is(e.target) && tgLang.has(e.target).length === 0) {
        tgLang.next().slideUp(500);
        $(tgLang).removeClass("active");
      }
    });
  }
}
