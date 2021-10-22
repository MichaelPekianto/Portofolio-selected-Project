const form= document.getElementById('form');
const username= document.getElementById('username');
const password= document.getElementById('password');
const email= document.getElementById('email');
const diamond= document.getElementById('diamond');
const silver= document.getElementById('silver');
const gold= document.getElementById('gold');
const cek= document.getElementById('cek');
const terms=document.getElementById('termsncond');
const subsselect=document.getElementById('subsplan');
const option=document.getElementById('option');
const radiogender=document.getElementById('radiogender');
const male=document.getElementById('Male');
const female=document.getElementById('Female');
const others=document.getElementById('Others');
const confpassword=document.getElementById('confpassword');
var nam=0,pw=0,mail=0,confpass=0,gen=0,subs=0,term=0;
form.addEventListener('submit',(e)=>{
e.preventDefault();
validateAll();

});
function valid() {
    if(nam!=1){
        return;
    }else if(pw!=1){
        return;
    }else if(mail!=1){
        return;
    }else if(confpass!=1){
        return;
    }else if(gen!=1){
        return;
    }else if(subs!=1){
        return;
    }else if(term!=1){
        return;
    }else{
        document.location.href="../html/index.html";
    }
}
function validateAll() {

    const usernameval=username.value.trim();
    const passwordval=password.value.trim();
    const emailval=email.value.trim();
    const confpassval=confpassword.value.trim();
    const subsselectval=subsselect.value;
    
    var spec=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(usernameval==''){
       nam=0
        setError(username,'Username cannot be empty!');    
    
    }else if(!alphanum(usernameval)){
        nam=0
        setError(username,'Username is not alphanumeric!');    
    }else if(spec.test(usernameval)){
        nam=0;
        setError(username,'Username shouldn'/'t have any special character!');   
    }
    else{
        nam=1;
        setSuccess(username);
          
    }
    if(passwordval==''){
      pw=0;
        setError(password,'Password cannot be empty!');    
    
    }else if(passwordval.length<6){
        pw=0;
    setError(password,'Your password is less than the minimum length!');
    }else{
        pw=1;
        setSuccess(password);
        
    }
    if(confpassval==''){
        confpass=0;
        setError(confpassword,'Password cannot be empty!');    
    
    }else if(confpassval.length<6){
    confpass=0;
    setError(confpassword,'Your password is less than the minimum length!');
    }else if(confpassval.localeCompare(passwordval)!=0){
    setError(confpassword,'Your password is not match!');
    confpass=0;
    setError(password,'Your password is not match!');
    }else{
        confpass=1;
        setSuccess(confpassword);
        
    }
    if(emailval==''){
       mail=0;
        setError(email,'E-mail cannot be empty!');    
    
    }else if(!emailcheck(emailval)){
        mail=0;
        setError(email,'E-mail is not valid!');   
    }else{
        mail=1;
        setSuccess(email);
        
    }
    
    if(!male.checked&&!female.checked&&!others.checked){
        gen=0;
        setError1(radiogender,'You have to pick one option!');  
    }else{
        gen=1;
        if(male.checked){
        setSuccess1(radiogender);
        }if(female.checked){
        setSuccess1(radiogender);
        }if(others.checked){
        setSuccess1(radiogender);
        }
        
    }
 
    if(subsselectval==''){
        subs=0;
        setError3(option,'You have to choose one option!');    
    }else{
        setSuccess3(option);
        subs=1;
    }
    if(!termsncond.checked){
       term=0;
        setError2(cek,'You must agree to the terms and conditions to continue.');  
    }else{
        setSuccess2(cek);
        term=1;     
    }
    valid();    
}
function alphanum(username) {
   var al=(/[0-9]/i);
   var bl=(/[a-z]/i);
   
    if(al.test(username) && bl.test(username)){
        return true;
    }
    return false;
}
function setError3(input,message) {
    const formControl= input.parentElement;
    
    const small= formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control3 error';
}
function setSuccess3(input) {
    const formControl= input.parentElement;
    formControl.className='form-control3 success';
}
function setSuccess2(input){
    const formControl= input.parentElement;
    formControl.className='form-control2';
}
function setError2(input,message) {
    const formControl= input.parentElement;
    const small =formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control2 error';
}
function setError1(input,message) {
    const formControl= input.parentElement;
    const small =formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control1 error';
}
function setSuccess1(input){
    const formControl= input.parentElement;
    formControl.className='form-control1';
}
function emailcheck(email) {
    if(email.endsWith('.com') && email.includes('@')){
        return true;
    }
    return false;
}
function setError(input,message) {
    const formControl= input.parentElement;
    const small =formControl.querySelector('small');

    small.innerText=message;
    formControl.className='form-control error';
}
function setSuccess(input) {
    const formControl= input.parentElement;
    formControl.className='form-control success';
}