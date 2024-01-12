let close = document.getElementById("nav_close");
let toggle = document.getElementById("nav_toggle");
let menu = document.getElementById("nav_menu");
let link = document.querySelectorAll(".nav_menu ul li a");

console.log(link);
if (toggle) {
  toggle.onclick = function () {
    menu.classList.add("show-menu");
  };
}
close.onclick = function () {
  menu.classList.remove("show-menu");
};
link.forEach(
  (n) =>
    (n.onclick = function () {
      menu.classList.remove("show-menu");
    })
);

gsap.from(".points", 1.5, { opacity: 0, y: -300, delay: 0.2 });
gsap.from(".rocket", 1.5, { opacity: 0, y: 300, delay: 0.3 });
gsap.from(".planet1", 1.5, { opacity: 0, y: -200, delay: 0.8 });
gsap.from(".planet2", 1.5, { opacity: 0, y: 200, delay: 1 });
gsap.from(".cloud1", 1.5, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".cloud2", 1.5, { opacity: 0, y: 200, delay: 1.3 });
gsap.from(".home_content", 1.5, { opacity: 0, y: -100, delay: 1.4 });
gsap.from(".home_content h1 img", 1.5, { opacity: 0, y: 100, delay: 1.6});
