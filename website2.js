const button1=document.querySelector("#b1");
const input=document.querySelector(".search-bar");
const input2=document.querySelector("#i1");
const button2=document.querySelector("#b2");
const transfer=document.querySelector(".transfer");
const info = document.querySelector(".information");
const main =document.querySelector(".main");
const ch = document.querySelector("#ch");
const sa = document.querySelector("#sa");
const button3=document.querySelector("#b3");
const e_transfer=document.querySelector(".e-transfer");
const us = document.querySelector("#us");
const drop=document.querySelector(".dropdown-content");
const send = document.querySelector(".send");

const dropbtn=document.querySelector(".dropbtn");

const button=document.querySelector(".button");
const b3=document.querySelector("#bf3");
const b2=document.querySelector("#bf2");
const b1=document.querySelector("#bf1");

const bt3=document.querySelector("#bt3");
const bt2=document.querySelector("#bt2");
const bt1=document.querySelector("#bt1");

const be3=document.querySelector("#bef3");
const be2=document.querySelector("#bef2");
const be1=document.querySelector("#bef1");



const from_value=document.querySelector(".from-value");
const from_evalue=document.querySelector(".from-evalue");
const to_value=document.querySelector(".to-value");


const dropdown_content=document.querySelector(".dropdown-content");

const dropdown_content2=document.querySelector(".dropdown-content2");



var chequing = 1000;
var saving = 500;
var us_account = 1500;

var from;
var to;

main.appendChild(info);
info.style.visibility="visible";

b1.addEventListener("click", e=>{
  from_value.innerHTML="Chequing";
  from=1;
})


b3.addEventListener("click", e=>{
  from_value.innerHTML="US-transfer";
  from=3;
})

b2.addEventListener("click", e=>{
  from_value.innerHTML="Savings";
  from=2;
})

bt1.addEventListener("click", e=>{
  to_value.innerHTML="Chequing";
  to=1;
})


bt3.addEventListener("click", e=>{
  to_value.innerHTML="US-transfer";
  to=3;
})

bt2.addEventListener("click", e=>{
  to_value.innerHTML="Savings";
  to=2;
})


be1.addEventListener("click", e=>{
  from_evalue.innerHTML="Chequing";
  from=1;
})


be3.addEventListener("click", e=>{
  from_evalue.innerHTML="US-transfer";
  from=3;
})

be2.addEventListener("click", e=>{
  from_evalue.innerHTML="Savings";
  from=2;
})








button1.addEventListener("click",e=>{

  
      
  //main.removeChild(transfer);
  console.log(main.hasChildNodes);

  

  main.removeChild(e_transfer);



  


  
  


  main.appendChild(info);
  info.style.visibility="visible";


})
setInterval(funct,100);

function funct() {
  ch.innerHTML= "Chequing  "+chequing+"";
  sa.innerHTML= "Savings   "+saving+"";
  us.innerHTML= "US-account   "+us_account+"";
  

}


button2.addEventListener("click", e=>{
  main.removeChild(info);
  main.appendChild(transfer);
  transfer.style.visibility="visible";

})

button3.addEventListener("click", e=> {

  main.removeChild(transfer);
  main.appendChild(e_transfer);
  e_transfer.style.visibility="visible";

})

// button3.addEventListener("click", e=>{
//   chequing++;
//   saving--;
// })

input.addEventListener("keydown",e=>{
  if (e.keyCode==13) {

    switch(from) {
      case 1:
        chequing-= input.value;
        break;
      case 2:
        saving-= input.value;
        break;
      case 3:
        us_account-= input.value;
        break;
    }

    switch(to) {
      case 1:
        chequing= chequing + Number(input.value);
        break;
      case 2:
        saving = saving + Number(input.value);
        break;
      case 3:
        us_account = us_account + Number(input.value);
        break;
    }
    
  }
})

send.addEventListener("click", e=> {


  switch(from) {
    case 1:
      chequing-= input2.value;
      break;
    case 2:
      saving-= input2.value;
      break;
    case 3:
      us_account-= input2.value;
      break;
  }

})


