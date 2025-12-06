

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startAnimations();
});

function initializeApp() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (currentUser.role === 'admin') {
            showAdminDashboard();
        } else {
            showUserDashboard();
        }
    } else {
        showPage('welcome-page');
    }
    
    // Initialize empty data structure if not exists
    if (!localStorage.getItem('sportsData')) {
        initializeSportsData();
    }
}

function setupEventListeners() {
    // Signup form submission
    document.getElementById('signup-form').addEventListener('submit', handleSignup);
    
    // Game form submission
    document.getElementById('game-form').addEventListener('submit', handleGameSubmission);
    
    // Add ripple effect to all ripple buttons
    document.querySelectorAll('.ripple-btn').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 60%);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

function startAnimations() {
    // Animate counters when visible
    animateCounters();
    
    // Initialize live ticker
    initializeTicker();
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

function initializeTicker() {
    const tickerContent = document.getElementById('ticker-content');
    if (!tickerContent) return;
    
    const sportsData = getSportsData();
    const allGames = [];
    
    // Collect recent games from all sports
    sports.forEach(sport => {
        const games = sportsData[sport]?.games || [];
        games.slice(0, 3).forEach(game => {
            allGames.push({ ...game, sport });
        });
    });
    
    if (allGames.length === 0) {
        // Default ticker items
        const defaultItems = [
            { text: 'Welcome to Ndejje Sports!', icon: '🏆' },
            { text: '7 Clubs competing across 9 Sports', icon: '⚽' },
            { text: 'Track performance in real-time', icon: '📊' },
            { text: 'View MVPs and Rankings', icon: '⭐' },
            { text: 'Record and manage game results', icon: '🎮' }
        ];
        
        let tickerHTML = '';
        defaultItems.forEach((item, i) => {
            tickerHTML += `
                <div class="ticker-item">
                    <span>${item.icon}</span>
                    <span>${item.text}</span>
                </div>
                ${i < defaultItems.length - 1 ? '<span class="ticker-divider">|</span>' : ''}
            `;
        });
        
        // Duplicate for seamless loop
        tickerContent.innerHTML = tickerHTML + tickerHTML;
        return;
    }
    
    // Generate ticker from actual games
    let tickerHTML = '';
    allGames.forEach((game, i) => {
        const icon = sportIcons[game.sport] || '🏆';
        tickerHTML += `
            <div class="ticker-item">
                <span>${icon}</span>
                <span>${game.team1}</span>
                <span class="ticker-score">${game.score1} - ${game.score2}</span>
                <span>${game.team2}</span>
            </div>
            <span class="ticker-divider">|</span>
        `;
    });
    
    // Duplicate for seamless loop
    tickerContent.innerHTML = tickerHTML + tickerHTML;
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the specified page
    document.getElementById(pageId).classList.add('active');
    
    // Restart animations for the new page
    if (pageId === 'welcome-page') {
        animateCounters();
    }
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
    
}    } else {
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

