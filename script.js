/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  let freq = {};
  for(let i=0; i < arr.length; i++){
    if(freq[arr[i]] === undefined){
      freq[arr[i]] = 1;
    }else{
      freq[arr[i]] = freq[arr[i]] + 1;
    }
  }
  console.log(freq)
  //Write your code here , just console.log
}

let txt = "";
function PrintStudentsbyForEach(value) {
  console.log(arr.forEach(PrintStudentsbyForEach));

 txt += value + "<br>";
  //Write your code here , just console.log
}

function addData() {
  arr.push('id',4 ,'name','dabloo', 'age', 23, 'mark',100)
  console.log(arr)
  //Write your code here, just console.log
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
