/* Нужно получить JS-объект:
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
*/

// JSON-объект
const jsonString=`
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

// Парсинг JSON
const listNode = JSON.parse(jsonString);
const studentNodes = listNode.list;
const studentList = [];

studentNodes.forEach((node) => {
    student = {};
  
    student.name = node.name;
    student.age = Number(node.age);
    student.prof = node.prof;
  
    studentList.push(student);
});


const result = {};
result.list = studentList;

console.log('result', result);