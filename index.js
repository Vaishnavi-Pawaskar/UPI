let upi=document.querySelector("#upi-id")
let btn=document.querySelector("#validate")
let msg=document.querySelector("#msg")

btn.addEventListener("click",validate)

function validate(){

    let upiid=upi.value
    let reg=/^[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$/
    let alpha= reg.test(upiid)
  
    if(upiid===""){
        msg.style.display="block"
        msg.innerText="upi field is mandatory"

    }else if(alpha===false){
        msg.style.display="block"
        msg.innerText="please enter the valid UPI id"
    }
}


