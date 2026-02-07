// copy right
  document.getElementById("year").textContent = new Date().getFullYear();

//password view functions
var passwordInput = document.querySelector("#password");
var adminPasswordInput = document.querySelector("#admin-password");
var viewPassBtn = document.querySelector("#seePass");
var checkPass = "pass";
viewPassBtn.addEventListener("click", viewUserPass);
function viewUserPass() {
    if (checkPass === "pass") {
        passwordInput.type = "text";
        checkPass = "code";
        viewPassBtn.innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`;
    } else {
        passwordInput.type = "password";
        checkPass = "pass";
        viewPassBtn.innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`;
    }
}
var viewAdminPassBtn = document.querySelector("#seeAdmin");
var adminCheck = "true";
viewAdminPassBtn.addEventListener("click", viewAdminUserPass);
function viewAdminUserPass() {
    if (adminCheck === "true") {
        adminPasswordInput.type = "text";
        adminCheck = "False";
        viewAdminPassBtn.innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`;
    } else {
        adminPasswordInput.type = "password";
        adminCheck = "true";
        viewAdminPassBtn.innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`;
    }
    
}
