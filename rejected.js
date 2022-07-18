let rejected=JSON.parse(localStorage.getItem("rejected"));
   console.log(rejected);
    database.forEach(function(elem){
let tr=document.createElement("tr");
  let td1=document.createElement("td");
  td1.innerText=elem.personName;
  let td2=document.createElement("td");
  td2.innerText=elem.personAge;
  let td3=document.createElement("td");
  td3.innerText=elem.personGender;
  let td4=document.createElement("td");
  td4.innerText=elem.personEmail;
  let td5=document.createElement("td");
  td5.innerText=elem.personPhoneNo;
  
 tr.append(td1,td2,td3,td4,td5)
 document.querySelector("tbody").append(tr)


});