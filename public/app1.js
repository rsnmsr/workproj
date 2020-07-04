const btn = document.querySelector('#add')
const clear = document.querySelector('#clear')

// const parentDiv = document.querySelector('#parent')

// btn.addEventListener('click', function () {
//     const form = document.createElement('form');
//     form.method = 'post';
//     form.action = '/'
//     form.classList.add('forms')


//     const nameInput = document.createElement('input')
//     nameInput.type = "text";
//     nameInput.name = 'name'
//     nameInput.placeholder = 'Enter your name'

//     const phoneInput = document.createElement('input')
//     phoneInput.type = "text";
//     phoneInput.name = 'phnNo'
//     phoneInput.placeholder = 'Enter your phone no'

//     const emailInput = document.createElement('input')
//     emailInput.type = "email";
//     emailInput.name = 'email'
//     emailInput.placeholder = 'Enter your email-Id'

//     form.append(nameInput, phoneInput, emailInput)
//     parentDiv.append(form)

// });


// clear.addEventListener('click', function () {
//     parentDiv.innerHTML = ''
// })


// const submit = document.querySelector('#submit')

// submit.addEventListener('click', function () {
//   //  const FormData = document.querySelectorAll('.forms');
//  $('form').submit(function(e){
//      console.log(e)
//  });
 
 
// })

const parentDiv = document.querySelector('form')
btn.addEventListener('click', function () {

    const nameInput = document.createElement('input')
    nameInput.type = "text";
    nameInput.name = 'name'
    nameInput.placeholder = 'Enter your name'

    const phoneInput = document.createElement('input')
    phoneInput.type = "text";
    phoneInput.name = 'phnNo'
    phoneInput.placeholder = 'Enter your phone no'

    const emailInput = document.createElement('input')
    emailInput.type = "email";
    emailInput.name = 'email'
    emailInput.placeholder = 'Enter your email-Id'

    parentDiv.append(nameInput, phoneInput, emailInput)
 

})
clear.addEventListener('click', function () {
    parentDiv.innerHTML = ''
})

const submit = document.querySelector('#submit')
submit.addEventListener('click',function(){
    $('form').submit()
})

