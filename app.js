// // const students = [
// //   { name: "Fasih", grade: "A" },
// //   { name: "Ali", grade: "B" },
// //   { name: "Sara", grade: "A" },
// //   { name: "Zain", grade: "B" }
// // ];

// // const groups = [];

// // for (let i = 0; i < students.length; i++) {
// //   const s = students[i];
// //   let found = false;

// //   // check if grade already exists
// //   for (let j = 0; j < groups.length; j++) {
// //     if (groups[j].grade === s.grade) {
// //       groups[j].students.push(s.name);
// //       found = true;
// //       break;
// //     }
// //   }

// //   // if not found, create new group
// //   if (!found) {
// //     groups.push({ grade: s.grade, students: [s.name] });
// //   }
// // }

// // console.log(groups);


// const students = [
//   { name: "Fasih", grade: "A" },
//   { name: "Sara", grade: "A" },
//   { name: "Hassan", grade: "A" },
//   { name: "Ali", grade: "B" },
//   { name: "Zain", grade: "B" }
// ];


// var newObj={};

// for (let index = 0; index < students.length; index++) {
//   const element = students[index];
//   console.log();
//   if(!newObj[element].grade){
// newObj[element]
//   }
  
// }


import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";


const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // ✅ User not logged in → redirect to login page
    window.location.href = "../login.html";
  }
});