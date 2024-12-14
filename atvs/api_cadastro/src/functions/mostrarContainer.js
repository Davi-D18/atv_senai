const resultDiv = document.getElementById('result');

export function mostrarContainer(boolean) {
  if (boolean) {
      resultDiv.style.display = 'block';
  } else if (boolean == false) {
      resultDiv.style.display = 'none';
  }
}