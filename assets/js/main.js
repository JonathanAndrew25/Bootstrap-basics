let personName = prompt("What is your name")

// const h3El = document.getElementsByTagName("h3")
const workshopTxtEl = document.getElementById("Workshop-txt")

let welcomeTxt;

console.log(personName, personName === '' );

if((personName === null) || (personName <= 3)){
    welcomeTxt = "Workshop is happening currently."
} else{
    welcomeTxt = "Welcome "+ personName +", Workshop is happening currently."

}
// const welcomeTxt = "Welcome "+ personName +", Workshop is happening currently."

workshopTxtEl.innerText = welcomeTxt

// console.log(welcomeTxt);
// console.dir(workshopTxtEl.innerText);


// Datatypes
// const myName = "Andrew" //String
// const age = 21 //Number
// const isAlive = true  //(Boolean)
// const hobbies = ["eating", "watching movies"] //Array
// const parents = {
//     fatherName: "yyy",
//     motherName: "zzz"
// } //object

// alert(`Welcome ${personName}, to coding-workshop Tamil`)



// confirm("Do you want to delete this?")

// // Variables
// let name = 'Andrew'

// // alert("Welcome " + name + ", to Coding-workshop Tamil")


// // alert("Welcome Andrew, to CodinAndrewag-workshop Tamil")