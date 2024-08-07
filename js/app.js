
const inputBox = document.getElementById("input-box");
const outputBox = document.querySelector(".output");
const kayBox = document.getElementById("kay-box");

const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ",",",".","1","2","3","4","5","6","7","8","9","0"/* end of alpha and numbers */,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","|","?","<",">",":",";","'","[","]","{","}"];
const code0 = ["#","@","&","*","+","!","^",")","=","%","(","-","$","_","/","|","<","}",";","]","[","{",">",":","'","~","x",",",".","c","p","q","l","s","k","w","m","d","v" /* end of alpha and numbers */,"a","r","g","e","z","y","j","b","n","o","i","u","5","8","2","4","6","7","3","1","9","0","t","h","f","`","?","،"];
const code2 = ["2","r","!","k","(","o","z","$","q","5","+","f","#","c","9","l","~","d","7","e","*","m","8","@","%","u","?","|","/","4","s","&","0","=","3","y","}","b","j" /* end of alpha and numbers */,"g","`","1",";","<","t","6","n","h","-","a","i",".","p","^",":","v","'",")","w","_","x",">",",","{","[","]","،"];
const code3 = ["4","m","*","r","e","p","#","o","1","v","z","5","?","9","t","g","&","3","a","h","0","x","q","2","@","~"," ","!",")","6","n","+","%","w",">","(","'",";","d" /* end of alpha and numbers */,"-","f","=","7","^","b","u","`","،","|",":","8","i","/","s","y","_","$","<",",","[","{","}","]","c","j","k","l"];

/* the arabic alpha  */
const abjed = ['ا','أ','إ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي','ئ','ء','ؤ','ى','ة','آ',' ',',','.','"',':',';',')','(','!','?','-','%','*','#','+','/','$'];
const acode1 = ['ى','ء','خ','ق','ع','ف','غ','م','ح','ي','ا','إ','ل','ؤ','ة','أ','ظ','ج','ز','و','ن','ذ','ه','ص','ئ','ش','ض','د','ر','ث','س','ط','ك','ت','آ','ب',' ','.','!','"',';',':','(','#','?','$','+','*','%','/','-',')',','];

let kay = ""
let text = ""



// btns
const codingBtn = document.getElementById("coding-btn");
const darkBtn = document.querySelector(".dark-btn");
const lightBtn = document.querySelector(".light-btn");
const theBody = document.getElementsByTagName("body");

codingBtn.addEventListener("click", function(){

    kay = kayBox.value;
    text = inputBox.value;
    text = text.toLowerCase();
    outputBox.textContent = coding(kay)
});

// set the date
const date = document.querySelector(".date");

const year = new Date().getFullYear();

if (year > 2023) {
    date.innerHTML = "2023-" + year;
}
else {
    date.innerHTML = year;
}

// ******* dark theme **********

darkBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-theme")
    console.log("the dark theme is on")
    darkBtn.classList.add("hidden")
    lightBtn.classList.remove("hidden")
})

//****** light theme *******

lightBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-theme")
    console.log("the light theme is on")
    lightBtn.classList.add("hidden")
    darkBtn.classList.remove("hidden")
})

// the real-code

function getIndex(text,kay){
    let indx = []
    if(kay === "acode1"){ // arabic array
        for(let i=0;i<text.length;i++){
            indx.push(abjed.indexOf(text.charAt(i)));
        }
    }
    else{
        for(let i=0;i<text.length;i++){
            indx.push(alpha.indexOf(text.charAt(i)));
        }
    }
    return indx;
}

function coding(kay){
    outputBox.style.color = "black";
    let cod = []
    indx = getIndex(text,kay);
    if(kay === "code0"){
        for (let i = 0; i < indx.length; i++) {
            cod.push(code0[indx[i]]);
        }
        return cod.join("");
    }
    else if(kay === "code2"){
        for (let i = 0; i < indx.length; i++) {
            cod.push(code2[indx[i]]);
        }
        return cod.join("");
    }
    else if(kay === "code3"){
        for (let i = 0; i < indx.length; i++) {
            cod.push(code3[indx[i]]);
        }
        return cod.join("");
    }
    else if(kay === "acode1"){
        for (let i = 0; i < indx.length; i++) {
            cod.push(acode1[indx[i]]);
        }
        return cod.join("");
    }
    else if(kay === " " || ""){
        outputBox.style.color = "red";
        return "please write the coding kay.";
    }
    else{
        outputBox.style.color = "red";
        return "the kay is wrong, please try again."
    }
}