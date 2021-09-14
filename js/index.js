console.log('working')
let myname = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validemail=false
let validphone= false
let validuser= false
$('#failure').hide();
$('#success').hide();
myname.addEventListener('blur',()=>{
    console.log('clicked')
    let reg = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = myname.value
    if(reg.test(str)){
        validuser=true
        myname.classList.remove('is-invalid')
    }else{
        validuser=false
        myname.classList.add('is-invalid')
    }
    console.log(validuser)
})

email.addEventListener('blur',()=>{
    console.log('clicked')
    let reg =  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    if(reg.test(str)){
        validemail=true
        email.classList.remove('is-invalid')
    }else{
        validemail=false
        email.classList.add('is-invalid')
    }
    console.log(validemail)
})

phone.addEventListener('blur',()=>{
    console.log('clicked')
    let reg =  /^([0-9]){0,11}$/;
    let str = phone.value
    if(reg.test(str)){
        validphone=true
        phone.classList.remove('is-invalid')
    }else{
        validphone=false
        phone.classList.add('is-invalid')
    }
    console.log(validphone)
})

let submit = document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(validphone&&validphone&&validuser){
        let succes = document.getElementById('success')
            succes.classList.add('show')
            console.log("submited")
            $('#failure').hide();
            $('#success').show();

            setTimeout(() => {

                $('#success').hide();
                
            }, 1000);
        

    }else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();

        setTimeout(() => {

            $('#failure').hide();
            
        }, 1000);
    }

})