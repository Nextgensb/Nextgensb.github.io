window.onload = function(){
    let welcomText = `WE WELCOME YOU TO ...`;
    let hold = document.createElement("div");
   let holder = document.getElementById("kiki");
	holder.appendChild(hold);
    let i = 0;
    let tm = setInterval(function(){
        if(i < welcomText.length){
            hold.innerHTML += welcomText.charAt(i);
            i++;
        }else{
            clearInterval(tm);
            var iter = setInterval(function(){
                let txt = holder.textContent;
                let n = -1;
                if(txt.length > 0){
                    holder.textContent = txt.slice(0,n);
                    n--;
                }else{
                    clearInterval(iter);
                    let rext = `THE NEXTGEN SCOREBOARD`;
                        let hode = document.createElement("div");
                        holder.appendChild(hode);
                        var t = 0;
                    var interv = setInterval(function(){
                        if(t < rext.length){
                            hode.innerHTML += rext.charAt(t);
                            t++;
                        }else{
                            clearInterval(interv);
                        }
                    }, 100);
                }
            }, 50);
        }
    },200);
}
var linkes = ["https://www.answers.com/search?q=what%20are%20alkanes", "https://www.goodreads.com/quotes/tag/attributed-no-source", "https://www.answers.com/search?q=what+is+space+physics", "https://byjus.com/biology/diseases/"];
var textHolder = ["Know your Chemistry: alkenes", "Be yourself, everyone else is already taken ~ Oscar Wilde", "Learn your physics", "Know your biology at byjus"];
var backs = ["https://images.unsplash.com/photo-1693919653649-27492e78899d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlbWlzdHJ5JTNBJTIwYWxrYW5lc3xlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_vector-1711987780595-38b176997836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2t5JTIwc3Vuc2V0fGVufDB8fDB8fHww", "https://media.istockphoto.com/id/1614252539/photo/the-moon-against-the-background-of-the-starry-night-sky-moon-and-stars-view-from-space.webp?b=1&s=170667a&w=0&k=20&c=ntA4xsP9Zu7Mu39x-3bTNNa5mtMAV-z6cmWmULcbUk4=", "https://media.istockphoto.com/id/1451790531/photo/microscopic-magnification-legionella-pneumophila-gram-negative-bacillus-that-causes-pneumonia.webp?b=1&s=170667a&w=0&k=20&c=4Z5B0u5h6sKZTICev7LCnxU-01X_MUn1kfiiuOR5HhE="];
var link = document.getElementById("link-holder");
var i = 0;
var adInterval = setInterval(function(){
  link.href = linkes[i];
  link.innerHTML = textHolder[i];
  link.style.backgroundImage = `url(${backs[i]})`;
  i = (i + 1) % linkes.length;
}, 10000);
let btn = document.getElementById("pliee");
btn.addEventListener("click", function(){
	const originalContents = document.body.innerHTML;
	const printContents = document.getElementById("prin").innerHTML;
document.write(printContents);
window.print();
location.reload();
});

var light = `<span class="material-symbols-outlined">
light_mode
</span>`;
var dark = `<span class="material-symbols-outlined">
nightlight
</span>`;
var themer = document.getElementById("themer");
var themeChanger = document.getElemenById("color-theme");
themeChanger.addEventListener("click", changeTheme);
function changeTheme(){
  var theme = "light";
  if(theme == "light"){
    themer.href = "ed.css";
    themeChanger.innerHTML = light;
    themeChanger.style.color = "black";
    themeChanger.style.backgroundColor = "white";
    theme = "dark";
  }else{
    themer.href = "board.css";
    themeChanger.innerHTML = dark;
    themeChanger.style.color = "white";
    themeChanger.style.backgroundColor = "black";
    theme = "light";
  }
}
let p_1 = document.getElementById("page_1");
let p_2 = document.getElementById("page_2");
let p_3 = document.getElementById("page_3");
let p_4 = document.getElementById("page_4");
function apper(){
    p_1.style.visibility = "hidden";
    p_2.style.visibility = "visible";
}
function reel() {
	let team1 = document.getElementById("t_1");
	let name1 = document.getElementById("team-name_1");
	let nme = document.getElementById("rell");
	
    name1.innerHTML = "";
	let tiy = team1.value.toUpperCase();
    name1.innerHTML = tiy;
    nme.innerHTML = tiy;
    team1.value = "";
}
 function toem() {
     let txt = document.getElementById("txti");
    let logo1 = document.getElementById("logo_s");
    let imgo = document.getElementById("image1001");
    let imar = document.getElementById("oinkk");
    let iomg = document.getElementById("lolip");
    let oommp = document.getElementById("image2002");

    if (logo1.files.length === 0) {
        txt.innerHTML = "No file was chosen";
    }

    const ery = logo1.files[0];
    const redt = new FileReader();
    redt.onload = function (e) {
        let imgone = document.createElement("img");
        imgone.src = e.target.result;
        imgone.classList.add("jump");

        let imgtwo = document.createElement("img");
        imgtwo.src = e.target.result;
        imgtwo.classList.add("pic");

        imgo.innerHTML = "";
        imgo.appendChild(imgone);
        imar.innerHTML = "";
        imar.appendChild(imgtwo);
        txt.innerHTML = "Logo one was submitted";
    };
    redt.readAsDataURL(ery);

    if (logo1.files.length > 1) {
        const oim = logo1.files[1];
        const reff = new FileReader();
        reff.onload = function (e) {
            let iomk = document.createElement("img");
            iomk.src = e.target.result;
            iomk.classList.add("jump");

            let im1 = document.createElement("img");
            im1.src = e.target.result;
            im1.classList.add("pic");

            iomg.innerHTML = "";
            iomg.appendChild(im1);
            oommp.innerHTML = "";
            oommp.appendChild(iomk);
            txt.innerHTML = "Successfull submission";
        };
        reff.readAsDataURL(oim);
    } else {
        txt.innerHTML = "Only one file was selected.";
    }
     logo1.files = null;
}

function ripple() {
    let team2 = document.getElementById("t_2");
    let name2 = document.getElementById("team-name_2");
    let nimee = document.getElementById("roll");
    let logo2 = document.getElementById("logo_2");
	let imkx = document.getElementById("img-holder_2");
		let hob = document.getElementById("image2002");
	
	
    name2.innerHTML = "";
	let toop = team2.value.toUpperCase();
    name2.innerHTML = toop;
    nimee.innerHTML = "";
    nimee.innerHTML = toop;
    team2.value = "";
    
}

var hour = document.getElementById("hh");
var mins = document.getElementById("mm");
var secs = document.getElementById("ss");

var h = document.getElementById("hhh");
var m = document.getElementById("mmm");
var s = document.getElementById("sss");

var hm = document.getElementById("hxh");
var mr = document.getElementById("mxm");
var sg = document.getElementById("sxs");

var hr = document.getElementById("hours");
var mn = document.getElementById("minutes");
var sc = document.getElementById("secs");

function tyym(){
    h.innerHTML = hour.value;
    m.innerHTML = mins.value;
    s.innerHTML = secs.value;

    hm.innerHTML = hour.value;
    mr.innerHTML = mins.value;
    sg.innerHTML = secs.value;

    hr.innerHTML = hour.value;
    mn.innerHTML = mins.value;
    sc.innerHTML = secs.value;

    p_3.style.visibility = "visible";
    p_2.style.visibility = "hidden";
    
    hour.value = 00;
    mins.value = 00;
    secs.value = 00;
}
let from = document.getElementById("fron");
let back = document.getElementById("back");
back.addEventListener("click", function(){
    p_3.style.visibility = "hidden";
    p_4.style.visibility = "visible";
});
from.addEventListener("click", function(){
    p_3.style.visibility = "hidden";
    p_2.style.visibility = "visible";
	
});
let score1 = document.getElementById("tio_1");
function plus_1(){
	score1.value = Number(score1.value) + 1;
}
function plus_2(){
	score1.value = Number(score1.value) + 2;
}
function plus_3(){
	score1.value = Number(score1.value) + 3;
}
let score2 = document.getElementById("tio_2");
function poly_1(){
	score2.value = Number(score2.value) + 1;
}
function poly_2(){
	score2.value = Number(score2.value) +2;
}
function poly_3(){
	score2.value = Number(score2.value) + 3;
}
let tab = document.getElementById("coww");
var bton = document.getElementById("couy");
function holdr() {
    let tm; // Declare tm outside to make it accessible globally

    function timer() {
        if (sc.innerHTML > 0) {
            sc.innerHTML = sc.innerHTML - 1;
        }
        while (sc.innerHTML == 0 && mn.innerHTML > 0) {
            sc.innerHTML = 60;
            mn.innerHTML = mn.innerHTML - 1;
        }
        while (mn.innerHTML == 0 && hr.innerHTML > 0) {
            hr.innerHTML = hr.innerHTML - 1;
            mn.innerHTML = 60;
        }
        if (sc.innerHTML == 0 && mn.innerHTML == 0 && hr.innerHTML == 0) {
            clearInterval(tm); // Clear interval using tm, not timer
            tab.style.display = "block";

            function apper() {
                let announcer = document.createElement("div");
                announcer.className = "contain";
                let nimee = document.getElementById("roll");
                let nme = document.getElementById("rell");
                let score1 = document.getElementById("tio_1");
                let score2 = document.getElementById("tio_2");

                if (Number(score1.value) > Number(score2.value)) {
                    announcer.innerHTML = nme.innerHTML + " WINS WITH " + score1.value + " POINTS.";
                } else if (Number(score1.value) == Number(score2.value)) {
                    announcer.innerHTML = "IT IS A DRAW.";
                } else {
                    announcer.innerHTML = nimee.innerHTML + " WINS WITH " + score2.value + " POINTS.";
                }
                document.body.appendChild(announcer);
                setTimeout(function () {
                    announcer.remove();
                }, 5000);
            }

            apper();
        }
    }

    if (bton.value == "START") {
        tm = setInterval(timer, 1000); // Assign interval ID to tm
        bton.value = "PAUSE";
    } else {
        clearInterval(tm); // Clear interval using tm, not timer
        bton.value = "START";
    }
}

tab.addEventListener("click",function(){
	let table = document.getElementById("retab");
	let row = table.insertRow(-1);
	let c1 = row.insertCell(0);
	let c2 = row.insertCell(1);
	let c3 = row.insertCell(2);
	let c4 = row.insertCell(3);
	let nme = document.getElementById("rell");
	let nimee = document.getElementById("roll");
	let name1 = document.getElementById("team-name_1");
    let name2 = document.getElementById("team-name_2"); 
	
	c1.innerHTML = nme.innerHTML;
    nme.innerHTML = "TEAM ONE";
	c2.innerHTML = score1.value;
    score1.value = "0";
	
	c3.innerHTML = nimee.innerHTML;
    nimee.innerHTML = "TEAM TWO"
	c4.innerHTML = score2.value;
    score2.value = "0";
    
    name1.innerHTML = "TEAM ONE";
    name2.innerHTML = " TEAM TWO";
	
	p_4.style.visibility = "hidden";
	p_1.style.visibility = "visible";
    
    tab.style.display = "none";
    
    
});
function extra(){
    let extraholder = document.getElementById("extratime");
    let exthr = document.getElementById("hrs");
    let extmin = document.getElementById("mns");
    let extsec = document.getElementById("scs");
    
    let currentHours = parseInt(hr.innerHTML, 10);
    let currentMinutes = parseInt(mn.innerHTML, 10);
    let currentSeconds = parseInt(sc.innerHTML, 10);

    // Parse the extra time values
    let extraHours = parseInt(exthr.value, 10) || 0;
    let extraMinutes = parseInt(extmin.value, 10) || 0;
    let extraSeconds = parseInt(extsec.value, 10) || 0;

    // Add the extra time to the current time
    let totalSeconds = currentSeconds + extraSeconds;
    let totalMinutes = currentMinutes + extraMinutes + Math.floor(totalSeconds / 60);
    let totalHours = currentHours + extraHours + Math.floor(totalMinutes / 60);

    // Normalize the time values
    totalSeconds = totalSeconds % 60;
    totalMinutes = totalMinutes % 60;

    // Update the DOM with the new time values
    hr.innerHTML = totalHours;
    mn.innerHTML = totalMinutes;
    sc.innerHTML = totalSeconds;

    // Clear the input values
    exthr.value = "";
    extmin.value = "";
    extsec.value = "";

    // Hide the extra time input holder
    extraholder.style.display = "none";
}

function appear(){
    let extraholder = document.getElementById("extratime");
    extraholder.style.visibility = "visible";
}

