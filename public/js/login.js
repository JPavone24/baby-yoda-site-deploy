console.log(localStorage)

$('#login-submit').click(function(){
  var email = $('#email').val().trim()
  localStorage.setItem('email', email)
})  