(function () {
  'use strict';
  let toTopElement = document.createElement('a'); // створюєм ссилку
  toTopElement.setAttribute('href', '#');
  toTopElement.className = 'scroll';
  toTopElement.innerHTML = '↑';
  document.body.appendChild(toTopElement);


  toTopElement.onclick = function (evt) {
    evt.preventDefault();
    let start          = Date.now(); // збері//     //обробник скроллу
    let scrollTimeout; // використаємо прийом throttle, щоб подія скроллу не визивалась при кожному пікселі, а з таймаутом в 100 мілісекунд
    let SCROLL_TIMEOUT = 100; // Задаємо таймаут
    let OFFSE_TO_TOP   = 300; // Через скільки пікселів прокрутки з'явиться елемент

    window.addEventListener('scroll', function (evt) {
      clearTimeout(scrollTimeout); // Очищаємо таймаут, якщо не скроллиться
      scrollTimeout = setTimeout(function () { // обробляємо скролл кожні 100 мілісекунд

        if (window.pageYOffset > OFFSE_TO_TOP) {
          toTopElement.classList.add('scroll--visible'); //Додаєм клас
        } else {
          toTopElement.classList.remove('scroll--visible'); // Прибираєм клас
        }
      }, SCROLL_TIMEOUT)

    });

    //обробник клікугаємо час початку
    let SCROLL_TIME = 500; // загальний час на скролл
    let INTERVAL    = 20; // інтервал
    let distance    = window.pageYOffset; //Дистанція скроллу в момент кліку
    let timer       = setInterval(function () { // Таймер
      let timePassed = Date.now() - start; // Скільки пройшло часу
      window.scrollBy(0, -distance / (SCROLL_TIME / INTERVAL)); // Скролим
      if (timePassed > SCROLL_TIME) clearInterval(timer); //Якщо пройшло більше часу ніж відведено на анімацію - чистим таймер
    }, INTERVAL);
  }
}());