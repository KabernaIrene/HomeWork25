/*
1. Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
2. Ід має бути введений в інпут (валідація: ід від 1 до 100) 
   Якщо знайдено пост, то вивести на сторінку блок з постом 
   і зробити кнопку для отримання комкоментарів до посту.
3. Зробити завдання використовуючи проміси, перехопити помилки.
*/

const button = document.querySelector('button');


async function fetchData () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const inputMeaning = document.querySelector('input');
        const inputValue = inputMeaning.value;
        const data = await response.json();
        console.log(data);

       
        const divCont = document.querySelector('div');
        const divContArr = Array.from(divCont.children);

        divContArr[0].innerText = data[inputValue].title;
        divContArr[1].innerText = data[inputValue].body;

        

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

button.addEventListener('click', fetchData);


  