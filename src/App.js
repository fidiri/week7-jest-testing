export const add = (value1, value2) => { 
    return value1 + value2;
};

export const total = (shipping, subTotal) => {
    return '$' + add(shipping, subTotal);
};

export function highestScore(students) {
    let result = null;
    let highScore = 0;
  
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.score > highScore) {
        highScore = student.score;
        result = student;
      }
    }
  
    return result;
  }
  exports.generateText = (name, age) => {
    //return output text
    return '${name} (${age} years old)';
  };