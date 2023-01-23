const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');
const valuePage = document.querySelector('.input-page');
const valueLimit = document.querySelector('.input-limit');

// Функция возвращает fetch
const useRequest = (page, limit) => {
  fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
      result = response.json();
      return result;
    })
    .then((data) => {
      localStorage.setItem('myJSON', JSON.stringify(data));
      localStorage.setItem('myPage', page);
      localStorage.setItem('myLimit', limit);
    
      displayResult(data);
    })
    .catch(() => { 
      console.log('Ошибка!');
    });
};

// Функция обработки результата
function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
      <div>
        <img src="${item.download_url}" class="image" />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
};

// Обработчик события
btnNode.addEventListener('click', () => {
  let page = +valuePage.value;
  let limit = +valueLimit.value;
  if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
    useRequest(page, limit);
  } else if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
      resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else if (limit < 1 || limit > 10 || isNaN(limit)) {
      resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
  } else {
      resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  }
});

// Вывод сохраненного localStorage
const myJSON = localStorage.getItem('myJSON');
if (myJSON) {
  // console.log('localStorage JSON saved', myJSON);
  displayResult(JSON.parse(myJSON));
  valuePage.value = localStorage.getItem('myPage');
  valueLimit.value = localStorage.getItem('myLimit');
}

const btnClear = document.querySelector('.clear-storage');

// Полная очистка localStorage
btnClear.addEventListener('click', () => {
  localStorage.clear();
  resultNode.innerHTML = "Тут будет результат...";
  valuePage.value = null;
  valueLimit.value = null;
});
