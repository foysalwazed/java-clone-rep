// // console.log('button clicking file added').addEventListener('click',fun)
// // document.getElementById('button-login').addEventListener('click',function(){

// // })

// // searce ;form submit realoading the page 

// // step - 1set Event handler

// document.getElementById('button-login')
// .addEventListener('click',function(event){
//     // step 2 prevant default behavior 
//     event.preventDefault();  
   


//     // step 3get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber) ;
//     if(phoneNumber==='5' && pinNumber === '1234' ){
//         console.log('you are logged in');

//     }
//     else{
//         alert('Wrong phone number or Pin');
//     }

// })
document.getElementById('button-login')
.addEventListener('click',function (event){
    event.preventDefault();


    // get phone number
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    // console.log(phoneNumber ,pinNumber);


    // bad way to validate
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = 'home.html';
    } else {
        alert('Wrong phone number or pin.');
    }
});