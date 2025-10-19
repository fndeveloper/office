import {  signInWithEmailAndPassword , db , auth,updateDoc, deleteDoc,getDoc,doc ,collection, addDoc, getDocs ,Timestamp  } from "./firebaseconfig.js";

// =============== LOGIN CODE START ===================
const loginForm = document.getElementById("login_btn");


if (loginForm) {
  loginForm.addEventListener("click", async (e) => {
    e.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`✅ Login successful! Welcome ${user.email}`);
      window.location.href = "dashboard.html";
    } catch (error) {
      alert(`❌ Error: ${error.message}`);
      console.error(error);
    }
  });
}


// =============== LOGIN CODE END ===================


// ================= sidebar code start ======================
var sidebar=document.getElementById("sidebar");
if(sidebar){

  fetch("siderbar.html")
  .then((res => res.text()))
  .then((e)=>{
    sidebar.innerHTML=`${e}`
  })
}
// ================= sidebard code end =====================



// ================= topbar code start ======================
var topbar=document.getElementById("topbar");
if(topbar){

  fetch("topbar.html")
  .then((res => res.text()))
  .then((e)=>{
    topbar.innerHTML=`${e}`
    
// ================= DROPDOWN FETCH CODE START ======================

var Total_Dropdown=document.getElementById("Total_Dropdown");
var Pagedrodown=document.getElementById("Pagedrodown");

var lenght_drop=[];
if(Total_Dropdown || Pagedrodown){
  async function fetchDropdownData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'dropdown'));

      querySnapshot.forEach((doc) => {
      num++;
      lenght_drop.push(doc.data())
      // ============ LENGHT OF DRODPWIN START ============
      // if(Total_Dropdown){
      
        Total_Dropdown.innerHTML=lenght_drop.length;
      // }
      // ============ LEMGHT OF DRODPWON END ============== 
console.log(doc.data().name);

// ============== SELECT DROPDWON CODE START =================
Pagedrodown.innerHTML+=`
  <option value="${doc.data().name}">${doc.data().name}</option>
`
// ============== SELECT DRODPWON CODE END ===================
      
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

fetchDropdownData()
}
  })
}
// ================= topbard code end =====================


// ================= DROPDOWNN CREATE CODE START ======================


if(document.getElementById('dropdownForm')){
document.getElementById('dropdownForm').addEventListener('submit', async function(event) {
  event.preventDefault();


  const dropdownName = document.getElementById('dropdownName').value;
  const dropdownLink = document.getElementById('dropdownLink').value.trim();

  try {
    // Save data to Firestore
    await addDoc(collection(db, 'dropdown'), {

      dropdown_name: dropdownName,
      dropdown_link: dropdownLink,
       times: new Date().toDateString()
    });

    alert('Data Saved!');
    document.getElementById('dropdownForm').reset(); // Clear the form
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
}
// ================= DROPDOWNN CREATE CODE END ======================
// ================= DROPDOWN FETCH CODE START ======================
var componet_innerhtml = document.getElementById("componet_innerhtml");
var num = 0;

if (componet_innerhtml) {
  async function fetchDropdownData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'dropdown'));
      componet_innerhtml.innerHTML = "";
      num = 0;

      querySnapshot.forEach((docSnap) => {
        num++;
        const data = docSnap.data();

        componet_innerhtml.innerHTML += `
          <tr data-id="${docSnap.id}">
            <th class="col-1 border fw-lighter">${num}</th>
            <td class="col-3">${data.dropdown_link ? data.dropdown_link : ""}</td>
            <td class="col-3">${data.dropdown_link ? data.dropdown_link : ""}</td>
            <td class="col-2">${data.times ? data.times : ""}</td>
            <td class="col-1 text-center">
              <button class="editBtn bg-transparent border-0 shadow-lg p-1 rounded-3">
                <i class="fas fa-edit"></i>
              </button>
              <button class="dltBtn bg-transparent border-0 shadow-lg p-1 rounded-3">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      });

      attachEventListeners();

    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  // =========== ATTACH EVENTS ===========
  function attachEventListeners() {
    const editButtons = document.querySelectorAll(".editBtn");
    const deleteButtons = document.querySelectorAll(".dltBtn");

    // ====== EDIT BUTTON ======
    editButtons.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const row = e.target.closest("tr");
        const docId = row.getAttribute("data-id");
        const docRef = doc(db, "dropdown", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const currentLink = data.dropdown_link || "";
          const currentTimes = data.times || "";

          const newLink = prompt("Edit dropdown link:", currentLink);
          if (newLink === null) return; // cancel

          const newTimes = prompt("Edit times:", currentTimes);
          if (newTimes === null) return; // cancel

          try {
            await updateDoc(docRef, {
              dropdown_link: newLink.trim(),
              times: newTimes.trim()
            });
            alert("Record updated successfully!");
            fetchDropdownData();
          } catch (err) {
            console.error("Error updating document:", err);
          }
        }
      });
    });

    // ====== DELETE BUTTON ======
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const row = e.target.closest("tr");
        const docId = row.getAttribute("data-id");

        if (confirm("Are you sure you want to delete this record?")) {
          try {
            await deleteDoc(doc(db, "dropdown", docId));
            alert("Record deleted successfully!");
            fetchDropdownData();
          } catch (err) {
            console.error("Error deleting document:", err);
          }
        }
      });
    });
  }

  // Initial fetch
  fetchDropdownData();
}
// ================= DROPDOWN FETCH CODE END ======================
