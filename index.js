document.querySelector("form").addEventListener("submit",jobApply)

let jobArr;
if(localStorage.getItem("jobList")==null){
  let jobArr=[];
}
else{
  jobArr=JSON.parse(localStorage.getItem("jobList"));
}
console.log(jobArr);

function jobApply(){
  event.preventDefault();
  let jobObj={
    personName:document.querySelector("#name").value,
    personAge:document.querySelector("#age").value,
    personGender:document.querySelector("#gender").value,
    personEmail:document.querySelector("#email").value,
    personPhone:document.querySelector("#Phone").value,

  }
  jobArr.push(jobObj);
  localStorage.setItem("jobList",JSON.stringify(jobArr));
}