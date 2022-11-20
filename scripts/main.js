/* https://skillbox.ru/media/code/kak_sdelat_tyemnuyu_temu_dlya_sayta/ */
var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme() {
  let lightTheme = "styles/style.css";
  let darkTheme = "styles/style2.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);

  Save(theme);
}
