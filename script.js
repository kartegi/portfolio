
(function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');
  const info = document.querySelector('.info_box');
  const media = document.querySelector('.media');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    nav.classList.toggle('navbar_active');
  });
  window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if(scroll > 1200)
  {
    media.classList.add('media_active');
    info.classList.add('info_anim');
  }
});

} ());
