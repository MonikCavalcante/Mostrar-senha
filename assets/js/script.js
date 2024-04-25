
    const password = document.getElementById('password');
    const icon = document.getElementById('icon');

function mostrar(){

   if(password.type === 'password'){
    password.setAttribute('type','text');
    icon.classList.add('fechado')
   
   }
   else{
    password.setAttribute('type','password')
    icon.classList.remove('fechado')
   
   }
}