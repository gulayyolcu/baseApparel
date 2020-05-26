


function emailCorrection(e){
    e.preventDefault();
    let emailAddress=document.querySelector('.email').value;
    if(emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)===null){  
        console.log("invalid") ;
        let warningMsg=document.querySelector('.warning').querySelector('p');      
        warningMsg.innerHTML="Please provide a valid email";
        let email=document.querySelector('.email');
        email.style.width='330px';
        email.style.height='auto';
        email.style.backgroundImage='url(../images/icon-error.svg)';
        email.style.backgroundRepeat='no-repeat';
        email.style.backgroundPosition='75% 50%';
        email.style.backgroundSize='auto';
        let formEl=document.querySelector('.formEl');
        let formDiv=document.querySelector('.formElement');
        formDiv.insertAfter(warningMsg,formEl);
        setTimeout(()=>{
          
                let emailInput=document.querySelector('.email').value;
                emailInput="";
                document.querySelector('.warning').querySelector('p').innerHTML='';
            
        },2000);
    }else{
        console.log("valid") ;
    }
}

document.querySelector('.email').addEventListener('input',()=>{
 
    document.querySelector('.imageButton').addEventListener('click',emailCorrection);

});