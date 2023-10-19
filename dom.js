document.addEventListener("DOMContentLoaded", function () {
   const textInput = document.getElementById("textInput");
   const btnUbahWarna = document.getElementById("btn1");
   const btnAddListTabel = document.getElementById("btn2");
   const btnAddFooter = document.getElementById("btn3");
   const tableList = document.getElementsByClassName("warna");
   const addFooter = document.getElementById("footer");
 
   const merah = document.querySelector(".warna tr:nth-child(1) td");
   const biru = document.querySelector(".warna tr:nth-child(2) td");
   const kuning = document.querySelector(".warna tr:nth-child(3) td");
   const ungu = document.querySelector(".warna tr:nth-child(4) td");
   const pink = document.querySelector(".warna tr:nth-child(5) td");
 
   function clearBackGround() {
     merah.style.backgroundColor = "transparent";
     biru.style.backgroundColor = "transparent";
     kuning.style.backgroundColor = "transparent";
     ungu.style.backgroundColor = "transparent";
     pink.style.backgroundColor = "transparent";
   }
 
   btnUbahWarna.addEventListener("click", function () {
     const inputText = textInput.value;
 
     clearBackGround();
 
     if (inputText.toLowerCase() === "merah") {
       merah.style.backgroundColor = "red";
     } else if (inputText.toLowerCase() === "biru") {
       biru.style.backgroundColor = "blue";
     } else if (inputText.toLowerCase() === "kuning") {
       kuning.style.backgroundColor = "yellow";
     } else if (inputText.toLowerCase() === "ungu") {
       ungu.style.backgroundColor = "purple";
     } else if (inputText.toLowerCase() === "pink") {
       pink.style.backgroundColor = "pink";
     }
   });
 
   btnAddListTabel.addEventListener("click", function () {
     const inputText = textInput.value;
     clearBackGround();
     if (inputText) {
       let tr = document.createElement("tr");
       let td = document.createElement("td");
       td.textContent = inputText;
       td.style.backgroundColor = inputText.toLowerCase();
       tr.appendChild(td);
       tableList[0].appendChild(tr);
     }
   });
 
   btnAddFooter.addEventListener("click", function () {
     addFooter.style.display = "block";
   });
 });
 