function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function toggleSportSelection() {
    const role = document.getElementById('role').value;
    const sportSelection = document.getElementById('sport-selection');
    const adminPasswordSection = document.getElementById('admin-password-section');
    
    if (role === 'admin') {
        sportSelection.style.display = 'block';
        adminPasswordSection.style.display = 'block';
        document.getElementById('sport').setAttribute('required', 'required');
        document.getElementById('admin-password').setAttribute('required', 'required');
    } else {
        sportSelection.style.display = 'none';
        adminPasswordSection.style.display = 'none';
        document.getElementById('sport').removeAttribute('required');
        document.getElementById('admin-password').removeAttribute('required');
    }
}

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

