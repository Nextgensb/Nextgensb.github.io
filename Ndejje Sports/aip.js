
// copy right
  document.getElementById("year").textContent = new Date().getFullYear();
//chat function
var chatBtn = document.querySelector('#chat-btn');
var chatroomHolder = document.querySelector('#chatroom-holder');
var notificationHolder = document.querySelector("#notifications");
var messageHolder = document.querySelector('#messages');

chatBtn.addEventListener('click', () => {
  chatroomHolder.style.display = 'block';
  document.body.style.overflow = 'hidden';
  notificationHolder.style.display = 'none';
  messageHolder.scrollTop = messageHolder.scrollHeight;
});

// download functions
 function downloadOverallPDF() {
  const element = document.getElementById("overall-rankings");

  // Auto filename
  const today = new Date().toISOString().split("T")[0];
  const fileName = `Ndejje_overall_totals_${today}.pdf`;

  const options = {
    margin: [0.8, 0.5, 0.8, 0.5],
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then(pdf => {
      const totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.text(
          `Ndejje Sports Department   Overall totals   ${today}`,
          pdf.internal.pageSize.getWidth() / 2,
          pdf.internal.pageSize.getHeight() - 0.4,
          { align: "center" }
        );
      }
    })
    .save();
}

function downloadMvpPDF() {
  const element = document.getElementById("mvp-leaderboard");

  // Auto filename
  const today = new Date().toISOString().split("T")[0];
  const fileName = `Ndejje_mvp_${today}.pdf`;

  const options = {
    margin: [0.8, 0.5, 0.8, 0.5],
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then(pdf => {
      const totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.text(
          `Ndejje Sports Department    MVPs   ${today}`,
          pdf.internal.pageSize.getWidth() / 2,
          pdf.internal.pageSize.getHeight() - 0.4,
          { align: "center" }
        );
      }
    })
    .save();
}

function downloadPerSportPDF() {
  const element = document.getElementById("sport-tables");

  // Auto filename
  const today = new Date().toISOString().split("T")[0];
  const fileName = `Ndejje_Per_sport_totals_${today}.pdf`;

  const options = {
    margin: [0.8, 0.5, 0.8, 0.5],
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then(pdf => {
      const totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.text(
          `Ndejje Sports Department   Per sport total   ${today}`,
          pdf.internal.pageSize.getWidth() / 2,
          pdf.internal.pageSize.getHeight() - 0.4,
          { align: "center" }
        );
      }
    })
    .save();
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


function toggleGameForm() {
    const gameSection = document.getElementById('game-recording-section');
    const button = document.querySelector('.record-game-btn');
    
    if (gameSection.style.display === 'none') {
        gameSection.style.display = 'block';
        button.innerHTML = '<span class="btn-icon">❌</span> Cancel Recording';
        button.classList.remove('btn-primary', 'pulse-btn');
        button.classList.add('btn-secondary');
        
        // Set today's date as default if empty
        const dateInput = document.getElementById('game-date');
        if (!dateInput.value) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }
        
        // Scroll to form
        gameSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        gameSection.style.display = 'none';
        button.innerHTML = '<span class="btn-icon">➕</span> Record New Game';
        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary', 'pulse-btn');
        
        // Reset form
        document.getElementById('game-form').reset();
    }
}

 //toggle fixture tab
    function toggleFixtureForm() {
  const button = document.querySelector('.fixture-game-btn');
  const section = document.getElementById("match-fixture-section");
  if (section.style.display === "none") {
    section.style.display = "block";
    button.textContent = "Cancel Fixture";
        button.classList.remove('btn-primary', 'pulse-btn');
        button.classList.add('btn-secondary');
  } else {
    
  }
}
// others
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



                             
