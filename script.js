
// side bar manu

function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}

//  Remove Calculator box Selected
function removeCalculator(button) {
    button.parentNode.remove();
}

// Popap for about
function openPopup() {
document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
document.getElementById("popupOverlay").style.display = "none";
}

window.onclick = function(event) {
let popupOverlay = document.getElementById("popupOverlay");
if (event.target === popupOverlay) {
closePopup();
}
}


function showModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function createCalculator(type) {
    
    if (type === "Silver") return silver() 
    if (type === "Gold") return gold();
    if (type === "Legend") return legend();

    if (type === "Galaxy") return galaxy();
    if (type === "Star") return star();
    if (type === "Moon") return moon();
    if (type === "Sun") return sun();

}

function addCalculator(type) {
    const container = document.getElementById("calcContainer");
    if(createCalculator(type)){
        container.appendChild(createCalculator(type));
        hideModal();
    }
    else{
        alert("Baqi Bahi Kal Ana ")
    }
    
}



 // silver js======================================


// finding center of Numbers Functions
function C_of_P_1R(p,R1){

    let ans= (p+R1)/2;
    return ans;
}

function C_of_P_1S(p,S1){
    let ans= (p+S1)/2;
    return ans;
}

function C_of_1R_2R(R1,R2){
    
    let ans= (R1+R2)/2;
    return ans;
}

function C_of_1S_2S(S1,S2){
    let ans= (S1+S2)/2;
    return ans;
}


// Functions
function R1(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (2 * p) - l;
    return ans;
}

function S1(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (2 * p) - h;
    return ans;
}

function R2(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (p + h) - l;
    return ans;
}

function S2(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (p + l) - h;
    return ans;
}

function calcP(h, l, c) {
    const sum = h + l + c;
    const ans = sum / 3;
    return ans;
}

//silver html=================================
function silver() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.draggable = true;
    calc.innerHTML = `
    <button class="close-btn" onclick="removeCalculator(this)">X</button>
    <div class="child-calculator-nav">
            <h3 >Silver<h3>
            <img src="img/screenshot.png" alt="screenshot" class="child-screenshot" onclick="takeScreenshot_child(this)">
        </div>
       <form action="">
           <label for="name">Name </label>
           <input type="text" class="name-input" placeholder="name" required>
           <br>
           <label for="h">Enter <span>H </span> </label>
           <input type="number" class="h-input" placeholder="H" required>
           <br>
           <label for="l">Enter <span>L </span> </label>
           <input type="number" class="l-input" placeholder="L" required>
           <br>
           <label for="c">Enter <span>C </span> </label>
           <input type="number" class="c-input" placeholder="C" required>
           <br>
       </form>
       <button class="sub">Submit</button>
       <button class="clear">Clear All</button>
       <hr>
       <div class="ans">
           <h4 class="name">Calculation of</h4>
           <h4 class="red">2R is: <span class="R2 light"></span></h4>
           <h4 class="red">1R is: <span class="R1 light"></span></h4>
           <h4>P is: <span class="P"></span></h4>
           <h4 class="green">1S is: <span class="S1 light"></span></h4>
           <h4 class="green">2S is: <span class="S2 light"></span></h4>
           <hr>
           <h4 class="red">C of 1R and 2R: <span class="c_of_r1_r2 light"></span></h4>
           <h4 class="red">C of P and 1R: <span class="c_of_p_r1 light"></span></h4>
           <h4>P is: <span class="P1"></span></h4>
           <h4 class="green">C of P and 1S: <span class="c_of_p_s1 light"></span></h4>
           <h4 class="green">C of 1S and 2S: <span class="c_of_s1_s2 light"></span></h4>
       </div>
    `;

    // Attach event listeners to the calculator instance
    calc.querySelector(".sub").addEventListener("click", function () {
        silver_submit(calc);
    });

    calc.querySelector(".clear").addEventListener("click", function () {
        silver_clear(calc);
    });


    // Keyboard event listener
    calc.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            silver_submit(calc);
        }
        if (event.key === "Delete") {
            silver_clear(calc);
        }
    });


    return calc;
}

function silver_submit(calc) {
    // Input fields
    const name = calc.querySelector(".name-input").value;
    const h = parseFloat(calc.querySelector(".h-input").value);
    const l = parseFloat(calc.querySelector(".l-input").value);
    const c = parseFloat(calc.querySelector(".c-input").value);

    // Check input fields
    if (!name || isNaN(h) || isNaN(l) || isNaN(c)) {
        alert("Fill all Input Boxes correctly.");
        return;
    }

    // Calculations
    let ans_p = calcP(h, l, c);
    let ans_r1 = R1(h, l, c);
    let ans_s1 = S1(h, l, c);
    let ans_r2 = R2(h, l, c);
    let ans_s2 = S2(h, l, c);
    let ans_C_of_P_1R = C_of_P_1R(ans_p, ans_r1);
    let ans_C_of_P_1S = C_of_P_1S(ans_p, ans_s1);
    let ans_C_of_1R_2R = C_of_1R_2R(ans_r1, ans_r2);
    let ans_C_of_1S_2S = C_of_1S_2S(ans_s1, ans_s2);

    // Update results in the specific calculator
    calc.querySelector(".name").textContent = `Calculation of ${name}`;
    calc.querySelector(".P").textContent = ans_p;
    calc.querySelector(".R1").textContent = ans_r1;
    calc.querySelector(".S1").textContent = ans_s1;
    calc.querySelector(".R2").textContent = ans_r2;
    calc.querySelector(".S2").textContent = ans_s2;
    calc.querySelector(".c_of_p_r1").textContent = ans_C_of_P_1R;
    calc.querySelector(".c_of_p_s1").textContent = ans_C_of_P_1S;
    calc.querySelector(".P1").textContent = ans_p;
    calc.querySelector(".c_of_r1_r2").textContent = ans_C_of_1R_2R;
    calc.querySelector(".c_of_s1_s2").textContent = ans_C_of_1S_2S;
}

function silver_clear(calc) {
    // Clear inputs
    calc.querySelector(".name-input").value = "";
    calc.querySelector(".h-input").value = "";
    calc.querySelector(".l-input").value = "";
    calc.querySelector(".c-input").value = "";

    // Clear output
    calc.querySelector(".name").textContent = `Calculation of`;
    calc.querySelector(".P").textContent = "";
    calc.querySelector(".R1").textContent = "";
    calc.querySelector(".S1").textContent = "";
    calc.querySelector(".R2").textContent = "";
    calc.querySelector(".S2").textContent = "";
    calc.querySelector(".c_of_p_r1").textContent = "";
    calc.querySelector(".c_of_p_s1").textContent = "";
    calc.querySelector(".P1").textContent = "";
    calc.querySelector(".c_of_r1_r2").textContent = "";
    calc.querySelector(".c_of_s1_s2").textContent = "";
}



// =/????????????????????????????????????????????????????
//=================Gold code start=======================
function gold() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.draggable = true;
    calc.innerHTML = `
    <button class="close-btn" onclick="removeCalculator(this)">X</button>
   <div class="child-calculator-nav">
            <h3 >Gold<h3>
            <img src="img/screenshot.png" alt="screenshot" class="child-screenshot" onclick="takeScreenshot_child(this)">
        </div>
        <form action="">
            <label for="name">Name </label>
            <input type="text" id="name" placeholder="name" required>
            <br>
            <label for="h">Enter <span>H </span> </label>
            <input type="number" id="h" placeholder="H" required>
            <br>
            <label for="l">Enter <span>L </span> </label>
            <input type="number" id="l" placeholder="L" required>
            <br>
            <label for="c">Enter <span>C </span> </label>
            <input type="number" id="c" placeholder="C" required>
            <br>
        </form>
        <button class="sub">Submit</button>
        <button class="clear">Clear All</button>

        <hr>
        <div class="ans">
            <h4 class="name">Calculation of</h3>
            <h4 class="red">3R is : <span class="R3 light"></span></h4>
            <h4 class="red">2R is : <span class="R2 light"></span></h4>
            <h4 class="red">1R is : <span class="R1 light"></span></h4>
            <h4>P is : <span class="P"></span></h4>
            <h4 class="green">1S is : <span class="S1 light"></span></h4>
            <h4 class="green">2S is : <span class="S2 light"></span></h4>
            <h4 class="green">3S is : <span class="S3 light"></span></h4>
            <hr>
            <h4 class="red">C of 2R and 3R : <span class="c_of_r2_r3 light"></span></h4>
            <h4 class="red">C of 1R and 2R : <span class="c_of_r1_r2 light"></span></h4>
            <h4 class="red">C of P and 1R : <span class="c_of_p_r1 light"></span></h4>
            <h4>P is : <span class="P1"></span></h4>
            <h4 class="green">C of p and 1S : <span class="c_of_p_s1 light"></span></h4>
            <h4 class="green">C of 1S and 2S : <span class="c_of_s1_s2 light"></span></h4>
            <h4 class="green">C of 2S and 3S : <span class="c_of_s2_s3 light"></span></h4>
        </div>
    `;

    // Attach event listeners to the calculator instance
    calc.querySelector(".sub").addEventListener("click", function () {
        gold_submit(calc);
    });

    calc.querySelector(".clear").addEventListener("click", function () {
        gold_clear(calc);
    });


    // Keyboard event listener
    calc.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            gold_submit(calc);
        }
        if (event.key === "Delete") {
            gold_clear(calc);
        }
    });


    return calc;
}

// 🛠️ Submit Function
function gold_submit(calc) {
    // Corrected input field selectors
    const name = calc.querySelector("#name").value;
    const H = calc.querySelector("#h").value;
    const L = calc.querySelector("#l").value;
    const C = calc.querySelector("#c").value;

    // Check input fields
    if (name === "" || H === "" || L === "" || C === "") {
        alert("Fill all Input Box Please");
        return;
    }

    // Convert to numbers
    const h = parseFloat(H);
    const l = parseFloat(L);
    const c = parseFloat(C);

    if (isNaN(h) || isNaN(l) || isNaN(c)) {
        console.error("Please enter valid numbers in all input fields.");
        return;
    }

    // Calculations
    let ans_p = calcP(h, l, c);
    let ans_r1 = R1(h, l, c);
    let ans_r2 = R2(h, l, c);
    let ans_r3 = R3(h, l, c);
    let ans_s1 = S1(h, l, c);
    let ans_s2 = S2(h, l, c);
    let ans_s3 = S3(h, l, c);

    // Center calculations
    let ans_C_of_P_1R = C_of_P_1R(ans_p, ans_r1);
    let ans_C_of_1R_2R = C_of_1R_2R(ans_r1, ans_r2);
    let ans_C_of_2R_3R = C_of_2R_3R(ans_r2, ans_r3);
    let ans_C_of_P_1S = C_of_P_1S(ans_p, ans_s1);
    let ans_C_of_1S_2S = C_of_1S_2S(ans_s1, ans_s2);
    let ans_C_of_2S_3S = C_of_2S_3S(ans_s2, ans_s3);

    // Display results inside the current calculator
    calc.querySelector(".name").textContent = `Calculation of ${name}`;
    calc.querySelector(".R1").textContent = ans_r1;
    calc.querySelector(".R2").textContent = ans_r2;
    calc.querySelector(".R3").textContent = ans_r3;
    calc.querySelector(".P").textContent = ans_p;
    calc.querySelector(".S1").textContent = ans_s1;
    calc.querySelector(".S2").textContent = ans_s2;
    calc.querySelector(".S3").textContent = ans_s3;

    // Center values
    calc.querySelector(".c_of_p_r1").textContent = ans_C_of_P_1R;
    calc.querySelector(".c_of_r1_r2").textContent = ans_C_of_1R_2R;
    calc.querySelector(".c_of_r2_r3").textContent = ans_C_of_2R_3R;
    calc.querySelector(".P1").textContent = ans_p;
    calc.querySelector(".c_of_p_s1").textContent = ans_C_of_P_1S;
    calc.querySelector(".c_of_s1_s2").textContent = ans_C_of_1S_2S;
    calc.querySelector(".c_of_s2_s3").textContent = ans_C_of_2S_3S;
}

// 🛠️ Clear Function
function gold_clear(calc) {
    // Corrected input field selectors
    calc.querySelector("#name").value = "";
    calc.querySelector("#h").value = "";
    calc.querySelector("#l").value = "";
    calc.querySelector("#c").value = "";

    // Clear displayed results
    calc.querySelector(".name").textContent = `Calculation of `;
    calc.querySelector(".R1").textContent = "";
    calc.querySelector(".R2").textContent = "";
    calc.querySelector(".R3").textContent = "";
    calc.querySelector(".P").textContent = "";
    calc.querySelector(".S1").textContent = "";
    calc.querySelector(".S2").textContent = "";
    calc.querySelector(".S3").textContent = "";

    // Clear center values
    calc.querySelector(".c_of_p_r1").textContent = "";
    calc.querySelector(".c_of_r1_r2").textContent = "";
    calc.querySelector(".c_of_r2_r3").textContent = "";
    calc.querySelector(".P1").textContent = "";
    calc.querySelector(".c_of_p_s1").textContent = "";
    calc.querySelector(".c_of_s1_s2").textContent = "";
    calc.querySelector(".c_of_s2_s3").textContent = "";
}





// finding center of Numbers Functions
function C_of_P_1R(p,R1){

    let ans= (p+R1)/2;
    return ans;
}

function C_of_P_1S(p,S1){
    let ans= (p+S1)/2;
    return ans;
}

function C_of_1R_2R(R1,R2){
    
    let ans= (R1+R2)/2;
    return ans;
}

function C_of_2R_3R(R2,R3){
    
    let ans= (R2+R3)/2;
    return ans;
}

function C_of_1S_2S(S1,S2){
    let ans= (S1+S2)/2;
    return ans;
}

function C_of_2S_3S(S2,S3){
    let ans= (S2+S3)/2;
    return ans;
}


// Functions
//R
function R1(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (2 * p) - l;
    return ans;
}


function R2(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (p + h) - l;
    return ans;
}

function R3(h, l, c) {
    const p = calcP(h, l, c);
    const ans = 2*(p - l) + h;
    return ans;
}
//S
function S1(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (2 * p) - h;
    return ans;
}

function S2(h, l, c) {
    const p = calcP(h, l, c);
    const ans = (p + l) - h;
    return ans;
}

function S3(h, l, c) {
    const p = calcP(h, l, c);
    const ans = l - 2*(h - p);
    return ans;
}

//P
function calcP(h, l, c) {
    const sum = h + l + c;
    const ans = sum / 3;
    return ans;
}

// Gold End



//+=====++=======++========+==========================
// Galaxy code========================================


function galaxy() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.draggable = true;
    calc.innerHTML = `
    <button class="close-btn" onclick="removeCalculator(this)">X</button>
   <div class="child-calculator-nav">
            <h3 >Galaxy<h3>
            <img src="img/screenshot.png" alt="screenshot" class="child-screenshot" onclick="takeScreenshot_child(this)">
        </div>
       <form action="">
           <label for="name">Name </label>
           <input type="text" class="name-input" placeholder="name" required>
           <br>
           <label for="h">Enter <span>H </span> </label>
           <input type="number" class="h-input" placeholder="H" required>
           <br>
           <label for="l">Enter <span>L </span> </label>
           <input type="number" class="l-input" placeholder="L" required>
           <br>
           <label for="c">Enter <span>C </span> </label>
           <input type="number" class="c-input" placeholder="C" required>
           <br>
       </form>
       <button class="sub">Submit</button>
       <button class="clear">Clear All</button>
       <hr>
       <div class="ans">
           <h4 class="name">Calculation of</h4>
           <h4 class="red">3R is: <span class="R3 light"></span></h4>
           <h4 class="red">2R is: <span class="R2 light"></span></h4>
           <h4 class="red">1R is: <span class="R1 light"></span></h4>
           <h4>P is: <span class="P"></span></h4>
           <h4 class="green">1S is: <span class="S1 light"></span></h4>
           <h4 class="green">2S is: <span class="S2 light"></span></h4>
           <h4 class="green">3S is: <span class="S3 light"></span></h4>
           
       </div>
    `;

    // Attach event listeners to the calculator instance
    calc.querySelector(".sub").addEventListener("click", function () {
        galaxy_submit(calc);
    });

    calc.querySelector(".clear").addEventListener("click", function () {
        galaxy_clear(calc);
    });


    // Keyboard event listener
    calc.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            galaxy_submit(calc);
        }
        if (event.key === "Delete") {
            galaxy_clear(calc);
        }
    });


    return calc;
}



function galaxy_submit(calc) {
    // Input fields
    const name = calc.querySelector(".name-input").value;
    const h = parseFloat(calc.querySelector(".h-input").value);
    const l = parseFloat(calc.querySelector(".l-input").value);
    const c = parseFloat(calc.querySelector(".c-input").value);

    // Check input fields
    if (!name || isNaN(h) || isNaN(l) || isNaN(c)) {
        alert("Fill all Input Boxes correctly.");
        return;
    }

    // Calculations
    let ans_p = G_P(h, l, c);
    let ans_r1 = G_R1(h, l, c);
    let ans_r2 = G_R2(h, l, c);
    let ans_r3 = G_R3(h, l, c);
    let ans_s1 = G_S1(h, l, c);
    let ans_s2 = G_S2(h, l, c);
    let ans_s3 = G_S3(h, l, c);


    // Update results in the specific calculator
    calc.querySelector(".name").textContent = `Calculation of ${name}`;
    calc.querySelector(".R3").textContent = ans_r3;
    calc.querySelector(".R2").textContent = ans_r2;
    calc.querySelector(".R1").textContent = ans_r1;
    calc.querySelector(".P").textContent = ans_p;
    calc.querySelector(".S1").textContent = ans_s1;
    calc.querySelector(".S2").textContent = ans_s2;
    calc.querySelector(".S3").textContent = ans_s3;
    
}

function galaxy_clear(calc) {
    // Clear inputs
    calc.querySelector(".name-input").value = "";
    calc.querySelector(".h-input").value = "";
    calc.querySelector(".l-input").value = "";
    calc.querySelector(".c-input").value = "";

    // Clear output
    calc.querySelector(".name").textContent = `Calculation of`;
    calc.querySelector(".P").textContent = "";
    calc.querySelector(".R1").textContent = "";
    calc.querySelector(".R3").textContent = "";
    calc.querySelector(".S1").textContent = "";
    calc.querySelector(".R2").textContent = "";
    calc.querySelector(".S2").textContent = "";
    calc.querySelector(".S3").textContent = "";
    
}

// Galay Function Calculations
// Functions
function G_R3(h,l,c) {
    const x = G_x1(h, l, c);
    const ans = (x / 2) - l;
    return ans;
}

function G_R2(h,l,c) {
    const x = G_x3(h, l, c);
    const ans = (x / 2) - l;
    return ans;
}

function G_R1(h,l,c) {
    const x = G_x2(h, l, c);
    const ans = (x / 2) - l;
    return ans;
}


function G_S3(h,l,c) {
    const x = G_x2(h, l, c);
    const ans = (x / 2) - h;
    return ans;
}


function G_S2(h,l,c) {
    const x = G_x3(h, l, c);
    const ans = (x / 2) - h;
    return ans;
}


function G_S1(h,l,c) {
    const x = G_x1(h, l, c);
    const ans = (x / 2) - h;
    return ans;
}


function G_P(h, l, c) {
    const sum = h + (2*l) + c;
    const ans = sum / 4;
    return ans;
}

function G_x1(h, l, c) {
    const ans = (2*h)+l+c;
    return ans;
}

function G_x2(h, l, c) {
    const ans = (2*l)+h+c;
    return ans;
}

function G_x3(h, l, c) {
    const ans = (2*c)+l+h;
    return ans;
}

// Galaxy Code End



// ?????????????????????????????????
// Star Code Start 

function star() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.draggable = true;
    calc.innerHTML = `
    <button class="close-btn" onclick="removeCalculator(this)">X</button>
   <div class="child-calculator-nav">
            <h3 >Star<h3>
            <img src="img/screenshot.png" alt="screenshot" class="child-screenshot" onclick="takeScreenshot_child(this)">
        </div>
       <form action="">
           <label for="name">Name </label>
           <input type="text" class="name-input" placeholder="name" required>
           <br>
           <label for="h">Enter <span>H </span> </label>
           <input type="number" class="h-input" placeholder="H" required>
           <br>
           <label for="l">Enter <span>L </span> </label>
           <input type="number" class="l-input" placeholder="L" required>
           <br>
           <label for="c">Enter <span>C </span> </label>
           <input type="number" class="c-input" placeholder="C" required>
           <br>
       </form>
       <button class="sub">Submit</button>
       <button class="clear">Clear All</button>
       <hr>
       <div class="ans">
           <h4 class="name">Calculation of</h4>
           <h4 class="red">3R is: <span class="R3 light"></span></h4>
           <h4 class="red">2R is: <span class="R2 light"></span></h4>
           <h4 class="red">1R is: <span class="R1 light"></span></h4>
           <h4>P is: <span class="P"></span></h4>
           <h4 class="green">1S is: <span class="S1 light"></span></h4>
           <h4 class="green">2S is: <span class="S2 light"></span></h4>
           <h4 class="green">3S is: <span class="S3 light"></span></h4>
           
       </div>
    `;

    // Attach event listeners to the calculator instance
    calc.querySelector(".sub").addEventListener("click", function () {
        star_submit(calc);
    });

    calc.querySelector(".clear").addEventListener("click", function () {
        star_clear(calc);
    });


    // Keyboard event listener
    calc.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            star_submit(calc);
        }
        if (event.key === "Delete") {
            star_clear(calc);
        }
    });


    return calc;
}



function star_submit(calc) {
    // Input fields
    const name = calc.querySelector(".name-input").value;
    const h = parseFloat(calc.querySelector(".h-input").value);
    const l = parseFloat(calc.querySelector(".l-input").value);
    const c = parseFloat(calc.querySelector(".c-input").value);

    // Check input fields
    if (!name || isNaN(h) || isNaN(l) || isNaN(c)) {
        alert("Fill all Input Boxes correctly.");
        return;
    }

    // Calculations
    let ans_p = star_P(h, l, c);
    let ans_r1 = star_R1(h, l, c);
    let ans_r2 = star_R2(h, l, c);
    let ans_r3 = star_R3(h, l, c);
    let ans_s1 = star_S1(h, l, c);
    let ans_s2 = star_S2(h, l, c);
    let ans_s3 = star_S3(h, l, c);

    // Update results in the specific calculator
    calc.querySelector(".name").textContent = `Calculation of ${name}`;
    calc.querySelector(".R3").textContent = ans_r3;
    calc.querySelector(".R2").textContent = ans_r2;
    calc.querySelector(".R1").textContent = ans_r1;
    calc.querySelector(".P").textContent = ans_p;
    calc.querySelector(".S1").textContent = ans_s1;
    calc.querySelector(".S2").textContent = ans_s2;
    calc.querySelector(".S3").textContent = ans_s3;
    
}

function star_clear(calc) {
    // Clear inputs
    calc.querySelector(".name-input").value = "";
    calc.querySelector(".h-input").value = "";
    calc.querySelector(".l-input").value = "";
    calc.querySelector(".c-input").value = "";

    // Clear output
    calc.querySelector(".name").textContent = `Calculation of`;
    calc.querySelector(".P").textContent = "";
    calc.querySelector(".R1").textContent = "";
    calc.querySelector(".R3").textContent = "";
    calc.querySelector(".S1").textContent = "";
    calc.querySelector(".R2").textContent = "";
    calc.querySelector(".S2").textContent = "";
    calc.querySelector(".S3").textContent = "";
    
}

// Galay Function Calculations
// Functions
function star_R3(h,l,c) {
    const x = star_P(h, l, c);
    const ans = x + (1.000*(h-l))
    return ans;
}

function star_R2(h,l,c) {
    const x = star_P(h, l, c);
    const ans = x + (0.618 *(h-l))
    return ans;
}
function star_R1(h,l,c) {
    const x = star_P(h, l, c);
    const ans = x + (0.382 *(h-l))
    return ans;
}


function star_S1(h,l,c) {
    const x = star_P(h, l, c);
    const ans = x - (0.382 *(h-l))
    return ans;
}

function star_S2(h,l,c) {
    const x = star_P(h, l, c);
    const ans = x - (0.618 *(h-l))
    return ans;
}

function star_S3(h,l,c) {
    const x = star_P(h, l, c);
    const ans = x - (1.000*(h-l))
    return ans;
}


function star_P(h, l, c) {
    const sum = h + l + c;
    const ans = sum / 3;
    return ans;
}

//  Star Function End 

// ============================================
// Moon Code Start ++++++++++++++++++++++++++++


function moon() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.draggable = true;
    calc.innerHTML = `
    <button class="close-btn" onclick="removeCalculator(this)">X</button>
    <div class="child-calculator-nav">
            <h3 >Moon<h3>
            <img src="img/screenshot.png" alt="screenshot" class="child-screenshot" onclick="takeScreenshot_child(this)">
        </div>
       <form action="">
           <label for="name">Name </label>
           <input type="text" class="name-input" placeholder="name" required>
           <br>
           <label for="h">Enter <span>H </span> </label>
           <input type="number" class="h-input" placeholder="H" required>
           <br>
           <label for="l">Enter <span>L </span> </label>
           <input type="number" class="l-input" placeholder="L" required>
           <br>
           <label for="c">Enter <span>C </span> </label>
           <input type="number" class="c-input" placeholder="C" required>
           <br>
       </form>
       <button class="sub">Submit</button>
       <button class="clear">Clear All</button>
       <hr>
       <div class="ans">
           <h4 class="name">Calculation of</h4>
           <h4 class="red">2R is: <span class="R2 light"></span></h4>
           <h4 class="red">1R is: <span class="R1 light"></span></h4>
           <h4>P is: <span class="P"></span></h4>
           <h4 class="green">1S is: <span class="S1 light"></span></h4>
           <h4 class="green">2S is: <span class="S2 light"></span></h4>
           
       </div>
    `;

    // Attach event listeners to the calculator instance
    calc.querySelector(".sub").addEventListener("click", function () {
        moon_submit(calc);
    });

    calc.querySelector(".clear").addEventListener("click", function () {
        moon_clear(calc);
    });


    // Keyboard event listener
    calc.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            moon_submit(calc);
        }
        if (event.key === "Delete") {
            moon_clear(calc);
        }
    });


    return calc;
}



function moon_submit(calc) {
    // Input fields
    const name = calc.querySelector(".name-input").value;
    const h = parseFloat(calc.querySelector(".h-input").value);
    const l = parseFloat(calc.querySelector(".l-input").value);
    const c = parseFloat(calc.querySelector(".c-input").value);

    // Check input fields
    if (!name || isNaN(h) || isNaN(l) || isNaN(c)) {
        alert("Fill all Input Boxes correctly.");
        return;
    }

    // Calculations
    let ans_p = moon_P(h, l, c);
    let ans_r1 = moon_R1(h, l, c);
    let ans_r2 = moon_R2(h, l, c);
    let ans_s1 = moon_S1(h, l, c);
    let ans_s2 = moon_S2(h, l, c);
    

    // Update results in the specific calculator
    calc.querySelector(".name").textContent = `Calculation of ${name}`;
    calc.querySelector(".R2").textContent = ans_r2;
    calc.querySelector(".R1").textContent = ans_r1;
    calc.querySelector(".P").textContent = ans_p;
    calc.querySelector(".S1").textContent = ans_s1;
    calc.querySelector(".S2").textContent = ans_s2;
    
}

function moon_clear(calc) {
    // Clear inputs
    calc.querySelector(".name-input").value = "";
    calc.querySelector(".h-input").value = "";
    calc.querySelector(".l-input").value = "";
    calc.querySelector(".c-input").value = "";

    // Clear output
    calc.querySelector(".name").textContent = `Calculation of`;
    calc.querySelector(".P").textContent = "";
    calc.querySelector(".R1").textContent = "";
    calc.querySelector(".S1").textContent = "";
    calc.querySelector(".R2").textContent = "";
    calc.querySelector(".S2").textContent = "";
   
    
}


// Functions


function moon_R2(h,l,c) {
    const x = moon_P(h, l, c);
    const ans = x + (h-l);
    return ans;
}
function moon_R1(h,l,c) {
    const x = moon_P(h, l, c);
    const ans = (2 * x) - l;
    return ans;
}


function moon_S1(h,l,c) {
    const x = moon_P(h, l, c);
    const ans = (2 * x) - h;
    return ans;
}

function moon_S2(h,l,c) {
    const x = moon_P(h, l, c);
    const ans = x - (h-l);
    return ans;
}


function moon_P(h, l, c) {
    const sum = h + l + (c * 2);
    const ans = sum / 4;
    return ans;
}

//  Moon Function End 



//==========================================================
//Start of SUN Cod============================

function sun() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.draggable = true;
    calc.innerHTML = `
    <button class="close-btn" onclick="removeCalculator(this)">X</button>
        <div class="child-calculator-nav">
            <h3 >Sun<h3>
            <img src="img/screenshot.png" alt="screenshot" class="child-screenshot" onclick="takeScreenshot_child(this)">
        </div>
       <form action="">
           <label for="name">Name </label>
           <input type="text" class="name-input" placeholder="name" required>
           <br>
           <label for="h">Enter <span>H </span> </label>
           <input type="number" class="h-input" placeholder="H" required>
           <br>
           <label for="l">Enter <span>L </span> </label>
           <input type="number" class="l-input" placeholder="L" required>
           <br>
           <label for="c">Enter <span>C </span> </label>
           <input type="number" class="c-input" placeholder="C" required>
           <br>
       </form>
       <button class="sub">Submit</button>
       <button class="clear">Clear All</button>
       <hr>
       <div class="ans">
           <h4 class="name">Calculation of</h4>
           <h4 class="red">4R is: <span class="R4 light"></span></h4>
           <h4 class="red">3R is: <span class="R3 light"></span></h4>
           <h4 class="red">2R is: <span class="R2 light"></span></h4>
           <h4 class="red">1R is: <span class="R1 light"></span></h4>
           <h4>P is: <span class="P"></span></h4>
           <h4 class="green">1S is: <span class="S1 light"></span></h4>
           <h4 class="green">2S is: <span class="S2 light"></span></h4>
           <h4 class="green">3S is: <span class="S3 light"></span></h4>
           <h4 class="green">4S is: <span class="S4 light"></span></h4>
           
       </div>
    `;

    // Attach event listeners to the calculator instance
    calc.querySelector(".sub").addEventListener("click", function () {
        sun_submit(calc);
    });

    calc.querySelector(".clear").addEventListener("click", function () {
        sun_clear(calc);
    });


    // Keyboard event listener
    calc.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sun_submit(calc);
        }
        if (event.key === "Delete") {
            sun_clear(calc);
        }
    });


    return calc;
}



function sun_submit(calc) {
    // Input fields
    const name = calc.querySelector(".name-input").value;
    const h = parseFloat(calc.querySelector(".h-input").value);
    const l = parseFloat(calc.querySelector(".l-input").value);
    const c = parseFloat(calc.querySelector(".c-input").value);

    // Check input fields
    if (!name || isNaN(h) || isNaN(l) || isNaN(c)) {
        alert("Fill all Input Boxes correctly.");
        return;
    }

    // Calculations
    let ans_p = sun_P(h, l, c);
    let ans_r1 = sun_R1(h, l, c);
    let ans_r2 = sun_R2(h, l, c);
    let ans_r3 = sun_R3(h, l, c);
    let ans_r4 = sun_R4(h, l, c);
    let ans_s1 = sun_S1(h, l, c);
    let ans_s2 = sun_S2(h, l, c);
    let ans_s3 = sun_S3(h, l, c);
    let ans_s4 = sun_S4(h, l, c);

    // Update results in the specific calculator
    calc.querySelector(".name").textContent = `Calculation of ${name}`;
    calc.querySelector(".R4").textContent = ans_r4;
    calc.querySelector(".R3").textContent = ans_r3;
    calc.querySelector(".R2").textContent = ans_r2;
    calc.querySelector(".R1").textContent = ans_r1;
    calc.querySelector(".P").textContent = ans_p;
    calc.querySelector(".S1").textContent = ans_s1;
    calc.querySelector(".S2").textContent = ans_s2;
    calc.querySelector(".S3").textContent = ans_s3;
    calc.querySelector(".S4").textContent = ans_s4;
    
}

function sun_clear(calc) {
    // Clear inputs
    calc.querySelector(".name-input").value = "";
    calc.querySelector(".h-input").value = "";
    calc.querySelector(".l-input").value = "";
    calc.querySelector(".c-input").value = "";

    // Clear output
    calc.querySelector(".name").textContent = `Calculation of`;
    calc.querySelector(".P").textContent = "";
    calc.querySelector(".R1").textContent = "";
    calc.querySelector(".R2").textContent = "";
    calc.querySelector(".R3").textContent = "";
    calc.querySelector(".R4").textContent = "";
    calc.querySelector(".S1").textContent = "";
    calc.querySelector(".S2").textContent = "";
    calc.querySelector(".S3").textContent = "";
    calc.querySelector(".S4").textContent = "";
    
}


// Functions
function sun_R4(h,l,c) {
    const ans = c +((h - l) * 1.5000)
    return ans;
}
function sun_R3(h,l,c) {
    const ans = c +((h - l) * 1.2500)
    return ans;
}
function sun_R2(h,l,c) {
    const ans = c +((h - l) * 1.1666)
    return ans;
}
function sun_R1(h,l,c) {
    const ans = c +((h - l) * 1.0833)
    return ans;
}


function sun_S1(h,l,c) {
    const ans = c -((h - l) * 1.0833)
    return ans;
}
function sun_S2(h,l,c) {
    const ans = c -((h - l) * 1.1666)
    return ans;
}
function sun_S3(h,l,c) {
    const ans = c -((h - l) * 1.2500)
    return ans;
}
function sun_S4(h,l,c) {
    const ans = c -((h - l) * 1.5000)
    return ans;
}


function sun_P(h, l, c) {
    const sum = h + l + c;
    const ans = sum / 3;
    return ans;
}

//  Sun Function End 












function legend(){
    alert("Baan rha ha Abhi!")
}

// togal btn ======================

// function toggleMenu(button) {
//     let menu = button.nextElementSibling; // Find the related menu
//     let allMenus = document.querySelectorAll(".menu");

//     // Close all other menus first
//     allMenus.forEach(m => {
//         if (m !== menu) {
//             m.style.display = "none";
//         }
//     });

//     // Toggle the clicked menu
//     menu.style.display = menu.style.display === "block" ? "none" : "block";
// }

// // Close menu when clicking outside
// document.addEventListener("click", function(event) {
//     if (!event.target.matches(".menu-btnn")) {
//         document.querySelectorAll(".menu").forEach(menu => {
//             menu.style.display = "none";
//         });
//     }
// });







//=================Screen Shot Feature for parents=======
async function takeScreenshot() {
    let div = document.getElementById("calcContainer");

    html2canvas(div).then(async (canvas) => {
        let blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));

        try {
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: "screenshot.png",
                types: [{
                    description: "PNG Image",
                    accept: { "image/png": [".png"] }
                }]
            });

            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();

            alert("Screenshot saved successfully!");
        } catch (error) {
            console.error("File save cancelled or error occurred:", error);
        }
    });
}

async function takeScreenshot_child(btn) {
    let div = btn.parentElement.parentElement.parentElement; 
    html2canvas(div).then(async (canvas) => {
        let blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));

        try {
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: "screenshot.png",
                types: [{
                    description: "PNG Image",
                    accept: { "image/png": [".png"] }
                }]
            });

            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();

            alert("Screenshot saved successfully!");
        } catch (error) {
            console.error("File save cancelled or error occurred:", error);
        }
    });
}


// 1️⃣ Full Screen Toggle
function toggleFullScreen() {
    let contentDiv = document.getElementById("calcContainer");
    if (!document.fullscreenElement) {
        contentDiv.requestFullscreen().catch(err => {
            alert(`Error: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

 // 2️⃣ Mouse Wheel Zoom (Fix Extra Space Issue)
//  let scale = 1; // Default zoom level
//  let content = document.getElementById("calcContainer");

//  document.getElementById("calcContainer").addEventListener("wheel", function (event) {
//      event.preventDefault(); // Prevent default scrolling

//      let children = document.querySelectorAll(".calculator"); // Select all child elements

//      if (event.deltaY < 0) {
//          scale += 0.1; // Zoom In
//      } else {
//          scale -= 0.1; // Zoom Out
//      }

//      scale = Math.min(Math.max(scale, 0.5), 2); // Limit zoom between 0.5x and 2x

//      // Apply zoom to all child elements
//      children.forEach(child => {
//          child.style.transform = `scale(${scale})`;
//      });

//      // Dynamically adjust gap based on scale
//      let newGap = 20 / scale; // Reduce gap as scale increases
//      content.style.gap = `${newGap}px`;
//  });




// ====================================================================
// Drag and Drop Functionality 
const calcContainer = document.getElementById("calcContainer");
        let draggedItem = null;

        // Drag Start
        calcContainer.addEventListener("dragstart", (e) => {
            if (e.target.classList.contains("calculator")) {
                draggedItem = e.target;
                e.target.classList.add("dragging");
            }
        });

        // Drag Over (Allow dropping)
        calcContainer.addEventListener("dragover", (e) => {
            e.preventDefault(); // Allow dropping

            const afterElement = getDragAfterElement(calcContainer, e.clientX);
            if (afterElement == null) {
                calcContainer.appendChild(draggedItem);
            } else {
                calcContainer.insertBefore(draggedItem, afterElement);
            }
        });

        // Drag End (Reset styles)
        calcContainer.addEventListener("dragend", () => {
            if (draggedItem) {
                draggedItem.classList.remove("dragging");
                draggedItem = null;
            }
        });

        // Helper Function: Find closest element after mouse pointer
        function getDragAfterElement(container, x) {
            const draggableElements = [...container.querySelectorAll(".calculator:not(.dragging)")];

            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = x - box.left - box.width / 2;
                return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }
    





    


// market-coin-section
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
// =========================market-coin-section===================================
// Function to fetch available USDT pairs from Binance
function fetchUSDTpairs() {
    const url = 'https://api.binance.com/api/v3/exchangeInfo';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let coinSelector = document.getElementById("coinSelector");
            let symbols = data.symbols.filter(symbol => symbol.symbol.endsWith('USDT'));
            symbols.forEach(symbolData => {
                let option = document.createElement("option");
                option.value = symbolData.symbol;
                option.innerText = symbolData.symbol.replace("USDT", "");
                coinSelector.appendChild(option);
            });
            coinSelector.disabled = false; // Enable coin dropdown after loading
            updateValues();  // Fetch data for the first coin as default
        })
        .catch(error => console.error('Error fetching USDT pairs:', error));
}

// Function to fetch data from Binance for the selected coin and time frame
function fetchBinanceData(symbol, interval) {
    const url = `https://api.binance.com/api/v1/klines?symbol=${symbol}&interval=${interval}&limit=16`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const volumes = data.map(candle => parseFloat(candle[5]));  // Extract volume (5th index)

            // Last 15 candles (including current one)
            const last15Volumes = volumes.slice(0, 15); // Latest 15 candles
            const avgVolumeLast15 = calculateAverageVolume(last15Volumes);
            document.getElementById("rvol-coin").innerText = avgVolumeLast15.toFixed(2);

            // Previous 15 candles (from the second last one)
            const prev15Volumes = volumes.slice(1, 16); // The previous 15 candles
            const avgVolumePrev15 = calculateAverageVolume(prev15Volumes);
            document.getElementById("rvolPrev-coin").innerText = avgVolumePrev15.toFixed(2);

            // Other random indicators
            document.getElementById("lar-coin").innerText = getRandomValue(0, 100);
            document.getElementById("lmc-coin").innerText = getRandomValue(0, 100);
            document.getElementById("pas-coin").innerText = getRandomValue(0, 100);
            document.getElementById("atr-coin").innerText = getRandomValue(0, 100);
            document.getElementById("smp-coin").innerText = getRandomValue(0, 100);
            document.getElementById("pac-coin").innerText = getRandomValue(0, 100);
            document.getElementById("lss-coin").innerText = getRandomValue(0, 100);

            analyzeMarketTrend_coin();
            updateCoinTrend(symbol, avgVolumeLast15, avgVolumePrev15);
            fetchCoinPrice(symbol); // Fetch live price of the selected coin
        })
        .catch(error => console.error('Error fetching Binance data:', error));
}

function fetchCoinPrice(symbol) {
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const price = parseFloat(data.price);
            document.getElementById("price").innerText = price.toFixed(2);
        })
        .catch(error => console.error('Error fetching live price:', error));
}

function calculateAverageVolume(volumes) {
    const sum = volumes.reduce((acc, curr) => acc + curr, 0);
    return sum / volumes.length;
}

function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function updateValues() {
    const timeFrame = document.getElementById("timeFrame").value;
    const selectedCoin = document.getElementById("coinSelector").value;

    // Only fetch data if a coin is selected
    if (selectedCoin) {
        fetchBinanceData(selectedCoin, timeFrame);
    }
}

function analyzeMarketTrend_coin() {
    let values = document.querySelectorAll("td:nth-child(2)");
    let sum = 0;
    values.forEach(cell => sum += parseFloat(cell.innerText));
    let avg = sum / values.length;
    let trendElement = document.getElementById("marketTrend-coin");
    
    if (avg > 66) {
        trendElement.innerText = "Bullish";
        trendElement.className = "bullish";
    } else if (avg < 33) {
        trendElement.innerText = "Bearish";
        trendElement.className = "bearish";
    } else {
        trendElement.innerText = "Stable";
        trendElement.className = "stable";
    }
}

function updateCoinTrend(symbol, avgVolumeLast15, avgVolumePrev15) {
    const coinTrendElement = document.getElementById("coinTrend");
    coinTrendElement.innerHTML = `
        <strong>${symbol}</strong> - 
        Avg Volume (Last 15 Candles): ${avgVolumeLast15.toFixed(2)}<br>
        Avg Volume (Previous 15 Candles): ${avgVolumePrev15.toFixed(2)}
    `;
}

// Initial load
fetchUSDTpairs();

// "sport Second_Last_Candle_Data"
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "sport Second_Last_Candle_Data"

function fetchUSDTpairs_SLCD() {
    fetch('https://api.binance.com/api/v3/exchangeInfo')
        .then(response => response.json())
        .then(data => {
            let coinSelector = document.getElementById("coinSelector-SLCD");
            let symbols = data.symbols.filter(symbol => symbol.symbol.endsWith('USDT'));
            symbols.forEach(symbolData => {
                let option = document.createElement("option");
                option.value = symbolData.symbol;
                option.innerText = symbolData.symbol.replace("USDT", "");
                coinSelector.appendChild(option);
            });
            updateValues_SLDC();
        })
        .catch(error => console.error('Error fetching USDT pairs:', error));
}

function fetchBinanceData_SLDC(symbol, interval) {
    fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=17`)
        .then(response => response.json())
        .then(data => {
            if (data.length < 17) return;
            let candle = data[data.length - 2];
            document.getElementById("open").innerText = candle[1];
            document.getElementById("high").innerText = candle[2];
            document.getElementById("low").innerText = candle[3];
            document.getElementById("close").innerText = candle[4];
            document.getElementById("volume").innerText = candle[5];
            let momentum = (candle[4] - candle[1]).toFixed(2);
            document.getElementById("momentum").innerText = momentum;
            
            let last15Volumes = data.slice(0, 15).map(c => parseFloat(c[5]));
            let avgVolume = (last15Volumes.reduce((a, b) => a + b, 0) / 15).toFixed(2);
            document.getElementById("avgVolume").innerText = avgVolume;
            
            let last15Momentums = data.slice(0, 15).map(c => parseFloat(c[4]) - parseFloat(c[1]));
            let avgMomentum = (last15Momentums.reduce((a, b) => a + b, 0) / 15).toFixed(2);
            document.getElementById("avgMomentum").innerText = avgMomentum;
        })
        .catch(error => console.error('Error fetching Binance data:', error));
}

function updateValues_SLDC() {
    let timeFrame = document.getElementById("timeFrame_SLCD").value;
    let selectedCoin = document.getElementById("coinSelector-SLCD").value;
    if (selectedCoin) {
        fetchBinanceData_SLDC(selectedCoin, timeFrame);
    }
}

fetchUSDTpairs_SLCD();


// / Futture Second last candal"
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Futture Second last candal"
function fetchUSDTperpPairs_FSLC() {
    fetch('https://fapi.binance.com/fapi/v1/exchangeInfo')
        .then(response => response.json())
        .then(data => {
            let coinSelector = document.getElementById("coinSelector_FSLC");
            coinSelector.innerHTML = ""; // Clear existing options
            
            let symbols = data.symbols.filter(symbol => 
                symbol.contractType === "PERPETUAL" && 
                symbol.symbol.endsWith('USDT')
            );

            symbols.forEach(symbolData => {
                let option = document.createElement("option");
                option.value = symbolData.symbol;
                option.innerText = symbolData.symbol.replace("USDT", "") + " Perpetual";
                coinSelector.appendChild(option);
            });

            if (symbols.length > 0) {
                updateValues_FSLC(); // Auto-update first available pair
            }
        })
        .catch(error => console.error('Error fetching USDT Perpetual pairs:', error));
}

function fetchBinanceData_FSLC(symbol, interval) {
    fetch(`https://fapi.binance.com/fapi/v1/klines?symbol=${symbol}&interval=${interval}&limit=17`)
        .then(response => response.json())
        .then(data => {
            if (data.length < 17) return;
            let candle = data[data.length - 2]; // Second last candle
            document.getElementById("open_FSLC").innerText = candle[1];
            document.getElementById("high_FSLC").innerText = candle[2];
            document.getElementById("low_FSLC").innerText = candle[3];
            document.getElementById("close_FSLC").innerText = candle[4];
            document.getElementById("volume_FSLC").innerText = candle[5];

            let momentum = (parseFloat(candle[4]) - parseFloat(candle[1])).toFixed(2);
            document.getElementById("momentum_FSLC").innerText = momentum;

            let last15Volumes = data.slice(data.length - 16, data.length - 1).map(c => parseFloat(c[5]));
            let avgVolume = (last15Volumes.reduce((a, b) => a + b, 0) / 15).toFixed(2);
            document.getElementById("avgVolume_FSLC").innerText = avgVolume;

            let last15Momentums = data.slice(data.length - 16, data.length - 1).map(c => parseFloat(c[4]) - parseFloat(c[1]));
            let avgMomentum = (last15Momentums.reduce((a, b) => a + b, 0) / 15).toFixed(2);
            document.getElementById("avgMomentum_FSLC").innerText = avgMomentum;
        })
        .catch(error => console.error('Error fetching Binance Futures data:', error));
}

function updateValues_FSLC() {
    let timeFrame = document.getElementById("timeFrame_FSLC").value;
    let selectedCoin = document.getElementById("coinSelector_FSLC").value;
    if (selectedCoin) {
        fetchBinanceData_FSLC(selectedCoin, timeFrame);
    }
}

// Initialize everything
fetchUSDTperpPairs_FSLC();


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function fetchUSDTCoins_BFC() {
    try {
        let response = await fetch('https://api.binance.com/api/v3/exchangeInfo');
        let data = await response.json();
        let select = document.getElementById("coinPair");
        
        data.symbols.forEach(symbol => {
            if (symbol.quoteAsset === "USDT" && symbol.status === "TRADING") {
                let option = document.createElement("option");
                option.value = symbol.symbol;
                option.text = symbol.symbol;
                select.appendChild(option);
            }
        });
    } catch (error) {
        console.error("Error fetching USDT coins:", error);
    }
}

async function updateMarketPrice_BFC() {
    let coin = document.getElementById("coinPair").value;
    try {
        let response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${coin}`);
        let data = await response.json();
        document.getElementById("entryPrice").value = data.price;
    } catch (error) {
        console.error("Error fetching market price:", error);
    }
}

function calculatePnL() {
    let positionType = document.getElementById("positionType").value;
    let leverage = parseFloat(document.getElementById("leverage").value);
    let entryPrice = parseFloat(document.getElementById("entryPrice").value);
    let exitPrice = parseFloat(document.getElementById("exitPrice").value);
    let quantity = parseFloat(document.getElementById("quantity").value);
    
    let initialMargin = quantity / leverage;
    let pnl = (positionType === "long") ? (exitPrice - entryPrice) * (quantity / entryPrice) : (entryPrice - exitPrice) * (quantity / entryPrice);
    let roi = (pnl / initialMargin) * 100;
    
    document.getElementById("initialMargin").innerText = initialMargin.toFixed(2) + " USDT";
    document.getElementById("pnl").innerText = pnl.toFixed(2) + " USDT";
    document.getElementById("roi").innerText = roi.toFixed(2) + " %";
}

fetchUSDTCoins_BFC();
setInterval(updateMarketPrice_BFC, 300000); // Refresh price every 5 minutes


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ==========================================================================
