import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
  import { getDatabase, ref, get, set, push, query, orderByChild, onValue } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

    
 const firebaseConfig = {
    apiKey: "AIzaSyAV7M-zZkGYQ0knqwj_Ye6h6Kv8t8es0Xs",
    authDomain: "ndejjesports-fd835.firebaseapp.com",
    databaseURL: "https://ndejjesports-fd835-default-rtdb.firebaseio.com",
    projectId: "ndejjesports-fd835",
    storageBucket: "ndejjesports-fd835.firebasestorage.app",
    messagingSenderId: "790541678240",
    appId: "1:790541678240:web:958631d2e7f1f71c94fbc5",
    measurementId: "G-6BCLJS55LZ"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);
    const auth = getAuth(app);
    
    var usernameInput = document.querySelector("#username");
    var emailInput = document.querySelector("#email");
    var passwordInput = document.querySelector("#password");
    var userRole = document.querySelector("#role");
    var sportInChargeInput = document.querySelector("#sport");
    var adminPasswordInput = document.querySelector("#admin-password");
    var submitBtn = document.querySelector("#submitbtn");

    submitBtn.addEventListener('click', () => {
       var email = emailInput.value;
        var password = passwordInput.value;
        var username = usernameInput.value;
        var role = userRole.value;
        var sportInCharge = sportInChargeInput.value;
       var adminPassword = adminPasswordInput.value;
        
        if (role === "admin") {
           var adminPassRef = ref(db, "adminpass/");
           get(adminPassRef)
           .then((snapshot) => {
              var data = snapshot.val();
              Object.keys(data).forEach((key) => {
                 if (data[key].passcode === adminPassword.trim()) {        
                    
                    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            var uid = userCredential.user.uid;
            var adminUserRef = push(ref(db, "users/"))
            set(adminUserRef, {
               username: username,
               email: email,
               uid: uid,
               role: role,
               sportInCharge: sportInCharge,
               adminPassword: adminPassword
            })
            .then(()=>{
                emailInput.value = "";
                passwordInput.value = "";
                usernameInput.value = "";
                userRole.value = "";
                sportInChargeInput.value = "";
                adminPasswordInput.value = "";
              
                // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the specified page
    document.getElementById("admin-dashboard").classList.add('active');
            });
        });                           
                 } else {
                    alert('Please enter correct Admin Password');
                 }   
                     });    
           });
        } else {
           createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            var uid = userCredential.user.uid;
            var normalUserRef = push(ref(db, "users/"))
            set(normalUserRef, {
               username: username,
               email: email,
               uid: uid,
               role: role
            })
            .then(()=>{
                emailInput.value = "";
                passwordInput.value = "";
                usernameInput.value = "";
                userRole.value = "";
                
                // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the specified page
    document.getElementById("user-dashboard").classList.add('active');
            });
        });      
            
        }
    });

var logoutBtns = document.querySelectorAll("#logoutbtn");
logoutBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      signOut(auth)
      .then(()=>{
         showPage('welcome-page');
      });
   });
});

document.addEventListener('DOMContentLoaded', () => {
   onAuthStateChanged(auth, (user) => {
      
   });
});
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

var clubA = document.querySelector("#clubA");
var scoreA = document.querySelector("#scoreA");
var clubB = document.querySelector("#clubB");
var scoreB = document.querySelector("#scoreB");
var mvplayer = document.querySelector("#mvp");
var gameDate = document.querySelector("#game-date");
var gameSubmitBtn = document.querySelector("#game-submit-btn");

var gameRecordingTab = document.querySelector("#game-recording-section");

gameSubmitBtn.addEventListener('click', () => {
   var currentSport = adminHeader.dataset.id;
   alert(currentSport);
   var gameRef = push(ref(db, 'games/' + currentSport));
   
   set(gameRef, {
      teamone: clubA.value,
      scoreone: scoreA.value,
      teamtwo: clubB.value,
      scoretwo: scoreB.value,
      mvp: mvplayer.value,
      gamedate: gameDate.value
   }).then(() => {
      clubA.value = "";
      scoreA.value = "";
      clubB.value = "";
      scoreB.value = "";
      mvplayer.value = "";
      gameDate.value = "";
      
      gameRecordingTab.style.display = "none";
   });
});

onValue()



