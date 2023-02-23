// $('.btn').click(function(){
//     $(this).toggleClass('click');
//     $('.sidebar').toggleClass('show');
// })
// $('.equipos-btn').click(function(){
//     $('nav ul .equipos-show').toggleClass('show');
//     $('nav ul .first').toggleClass('rotate');
// });
// $('nav ul li').click(function(){
//     $(this).addClass('active').siblings().removeClass('active');
// })

// login javascript

const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
button.addEventListener('click', (e)=>{
e.preventDefault()
const data ={
     username: username.value,
     password: password.value,
}
console.log(data)
});
// para ver el console.log(data) comentar esto

button.addEventListener('click', function(){
     window.location.href = "../pages/index.html"
     
})
