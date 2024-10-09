//Preloader 
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

//Glightbox 
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});
