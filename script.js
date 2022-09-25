// grab all the inputs 
const userForm = document.getElementById('new-form');
const userName = document.getElementById('name');
const userMail = document.getElementById('email');
const userNumber = document.getElementById('phone-number');
//grab the msg
const msg = document.querySelector('.msg');
// grab the submit button
const btn = document.getElementsByClassName('btn')
//grab the list
const userslist = document.querySelector('#users');
//form validation
userForm.addEventListener('submit', submit)
//the submit function
function submit(e) {
    e.preventDefault(); //prevent default event

    if (userName.value === "" || userMail.value === "" || userNumber.value === "") {
       msg.classList.add('error'); 
       msg.innerHTML = "Please provide the necessary details";
         setTimeout(() => {
            msg.remove();
         }, 3000);
    } else {
        msg.classList.add('success');
        msg.innerHTML = "We will process your information shortly";
        setTimeout(() => {
            msg.remove();
         }, 3000);

         const li = document.createElement('li');
         const newUser = document.createTextNode(`${userName.value}: ${userMail.value}: ${userNumber.value}`)

         li.appendChild(newUser);
         console.log(li);

         userslist.appendChild(li);
         //empty the fields
         userMail.value = "";
         userName.value = "";
         userNumber.value = "";
       }
       
}
