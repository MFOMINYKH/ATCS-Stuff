let age = 30;
let name = 'john';
const pi = 3.14
console.log(age);
const arr = [1, 2, 3, 4, 5, 6]

const colors = ["red", "orange", "yellow", "green"]

colors[4] = "black";

colors.push('white')

colors.pop(colors)


console.log(colors)

console.log(arr[3])
console.log(age);

const person = {
firstName: 'John',
lastName: 'Smith',
age: 30
}

console.log(person)

let message = `$(name) is $(age)`;

console.log(message);


let car = 'toyota';

const   { firstName, lastName }  =  person

const peopleJSON = JSON.stringify;

//Functions

function hello(text){
    console.log("Hello " + text)
}

hello("max")

// const convertPercent = num => 

// for(int i = 0: i < 3: i++)
// {
//     console.log("bruh");
// }

// li {
//     color: 'red';
// }
//const list = document.querySelector('#list');
console.log(list);
list.lastElementChild.style.color = 'blue';
myBigButton.style.borderRadius='50%';
pickleButton.style.borderRadius='30%';
pickleButton.style.backgroundColor='green';

const btn = document.getElementById('myButton');
const btn2 = document.getElementById('myBigButton');
const btn3 = document.getElementById('pickleButton');

btn3.addEventListener('mouseover', e=> {
    pickleButton.style.backgroundColor='lime';
});
btn3.addEventListener('mouseout', e=> {
    pickleButton.style.backgroundColor='green';

});

btn3.addEventListener('click', function(e){
    console.log("Yes I am only a pickle, I know. ")
    const newLi = document.createElement("li");
    newLi.innerHTML="I get it I am a pickle. My life is sad and I can't even feel a tickle. When I grew up I was taken from mom and dad. The gardener thought it wouldn't hurt, but it did, very bad. I wish I was a human, get things I never had. While you're a human you do much, so be very glad. Pickle this Pickle that. How about you just Pickle on someone your own size.";
    list.appendChild(newLi);
});

btn2.addEventListener('mouseover', e=> {
    myBigButton.style.backgroundColor='blue';
    myBigButton.style.borderRadius='50%';
    myBigButton.style.color='white';
});
btn2.addEventListener('mouseout', e=> {
    myBigButton.style.backgroundColor='#EFEFEF';
    myBigButton.style.color='black';

});

btn.addEventListener('click', function(e){
    if(list.lastElementChild.style.color === 'blue')
    list.lastElementChild.style.color = 'red';
    else
    list.lastElementChild.style.color = 'blue';
    console.log(list.lastElementChild.style.color)
    const child = document.getElementByTagName('li')[2];
    list.midChild.style.color='orange';
});


const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector
('#task-template');
let id = 1;

newTask.addEventListener('keyup', (e) => {
    if(e.keyCode === 13 && inputValid()){
        addTask();
    }
});

addTaskBtn.addEventListener('click', () => {
    if(inputValid()){
        addTask;
    }
});

removeCompleteBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checked = task.querySelector('input').checked;
        if(checked){
            task.remove();
        }
    })
});

function addTask(){
    const taskElement = document.importNode
    (taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = id;
    const label = taskElement.querySelector('label');
    label.htmlFor = id;
    label.append(newTask.value);
    taskList.appendChild(taskElement);
    newTask.value = '';
    id++;
}

function inputValid(){
    return newTask.value !== ''
}
