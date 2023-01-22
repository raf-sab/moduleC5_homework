const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');

// Функция возвращает fetch
const useRequest = (width, height) => {
  return fetch(`https://picsum.photos/${width}/${height}`)
    .then((response) => {
      resultNode.innerHTML = `
        <img src=${response.url} class="card-image"/>
      `;
    })
    .catch(() => { 
      console.log('Ошибка!');
    });
};

// Обработчик события
btnNode.addEventListener('click', async () => {
  const width = parseInt(document.querySelector('.input-width').value);
  const height = parseInt(document.querySelector('.input-height').value);

  if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
    await useRequest(width, height);
  } else {
    resultNode.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
  }
});