console.log("you are connected")

$("#register-submit").on("click", function() {
    event.preventDefault();
    var User = {
      firstName: $("#first-name").val().trim(),
      lastName: $("#first-name").val().trim(),
      userName: $("#username").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password1").val().trim(),
    };
    console.log(User)  
    
    $.post("http://localhost:8080/api/users", User)
    .then(function(data) {
      console.log("add.html", data);
      alert("Adding character...");
    });
  });  