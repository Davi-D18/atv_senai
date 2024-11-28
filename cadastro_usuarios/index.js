const loader = document.querySelector('.loader');
const container = document.querySelector('.container');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
    container.style.display = 'block';
  }, 1500);
});