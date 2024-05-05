//1: при натисканні на кнопку "send" додати значення з поля введення в масив
//2: при натисканні на кнопку "show" відобразити значення масиву в консолі
//3: лише у випадку, якщо значення не є порожнім
//(не може бути пробілів або інших пробільних знаків) додати до масиву
//5: очистити поле введення після збереження даних
//6: відобразити всі повідомлення у списку (ul)
////////////////////////////////////////////////////
// ЗАВДАННЯ 5: біля елементів списку пододавати кнопки для видалення із списку,
// реалізувати функціонал цієї кнопки.
// ЗАВДАННЯ 6:елементи зі списку можуть бути вибрані, або не вибрані - відображати
// за допомогою зміни background-color.
// В масиві з має зберігатися інформація про те, які вибрані, 
// які ні(або окреме поле boolean, або зберігати в окремому масиві)

const messages = [];
const checkMessages = [];
const form = document.forms.rootForm;
const btnShowArray = document.getElementById('btnShowArray');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = e.target.elements.message.value.trim();
    if (v !== "") {
        messages.push(v);

        const li = document.createElement('li');
        li.innerText = v;
        listMessages.append(li);

// ЗАВДАННЯ 5: 

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'x';
        deleteButton.style.color = 'white';
        deleteButton.style.background = 'red';
        deleteButton.style.borderColor = 'tomato';
        deleteButton.style.display = 'inline'
        listMessages.append(deleteButton);

// ЗАВДАННЯ 6:   

let isCheck = false;

li.onclick = function(){
    if (!isCheck) {
        li.style.background = 'lightgray';
        checkMessages.push(li.textContent);
        isCheck = true; 
    }
    else {
        li.style.background = '';
        let indexCheck = checkMessages.indexOf(v);
        checkMessages.splice(indexCheck, 1);
        isCheck = false;
    }
};

        deleteButton.addEventListener('click', () => {
            li.remove();
            deleteButton.remove();
            
            let index = messages.indexOf(v);
            messages.splice(index, 1);

            let indexCheck = checkMessages.indexOf(v);
            checkMessages.splice(indexCheck, 1);
        });
    }

  e.target.reset();

});

btnShowArray.addEventListener('click', () => {
  console.log(messages);
});

btnShowChecked.addEventListener('click', () => {
    console.log(checkMessages);
});


