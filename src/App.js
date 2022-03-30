let arrObj = [
  {
    id: 1,
    text: "wake up",
    isCompleted: false
  },
  {
    id: 2,
    text: "take a shower",
    isCompleted: false
  },
  {
    id: 3,
    text: "have breakfast",
    isCompleted: false
  },
  {
    id: 4,
    text: "go to work",
    isCompleted: true
  }
];

let arrTwo = [...arrObj];
let arrThree = [...arrTwo];
let temporaryTodos = [];


export const todos = () => arrObj;

export const addTodo = (text, idNum) => {

  arrTwo.push({
    id: idNum,
    text: text,
    isCompleted: false
  });
  
  return arrTwo;
};


export function eraseTodo(id) {
  
  
  for (let i = 0; i < arrTwo.length; i++)
  {
    if (arrTwo[i].id !== id) temporaryTodos.push(arrTwo[i]);
  }
  
  return temporaryTodos;
};


export function update(id, text) {

  for (let i = 0; i < arrThree.length; i++)
  {
    if (arrThree[i].id === id) arrThree[i].text= text;
  }

  return arrThree;
};

exports.generateText = (name, age) => {
  //return output text
  return '${name} (${age} years old)';
};