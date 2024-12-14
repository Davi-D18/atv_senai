export function mostrarLoader(mostrar) {
  if (mostrar) {
    criarLoader();
    document.querySelector('.container-loader').style.display = 'block';
  } else if (mostrar == false) {
    document.querySelector('.container-loader').style.display = 'none';
  }
}

function criarLoader() {
  const loaderDiv = document.createElement('div');
  loaderDiv.classList.add('loader');
  const container = document.querySelector('.container-loader');
  container.appendChild(loaderDiv);
}
