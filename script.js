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
    if (type === "Diamond") return diamond();
    if (type === "Legend") return legend();

    
}

function addCalculator(type) {
    const container = document.getElementById("calcContainer");
    if(createCalculator(type)){
        container.appendChild(createCalculator(type));
        hideModal();
    }
    else{
        alert("by")
    }
    
}


//silver html=================================
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


function silver() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.innerHTML = `
        <h3>Silver <h3>
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





















function gold() {
    const calc = document.createElement("div");
    calc.className = "calculator";
    calc.innerHTML = `
        <h3>Gold <h3>
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







function diamond(){
    alert("phla yai use kar la bahii");
}

function legend(){
    alert("Baan rha ha abii kal ana ")
}





// side bar manu

        function openSidebar() {
            document.getElementById("sidebar").classList.add("open");
        }

        function closeSidebar() {
            document.getElementById("sidebar").classList.remove("open");
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
        