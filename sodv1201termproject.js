/* SODV 1201 Introduction to Web Programming
SODV 1201 Term Project- Co-Worker Work Spaces and Properties
 Program designed and coded by: SODV 1201 Group 2: Sasha Greene,  Gurleen Kaur, Paul K Kho, Evan Maclean
 Instructor:                   Dima Marachi
 Due       :     Phase 1   : June 2 2022
                 Phase 2   : June 30 2022
*/

// Landing Page (Home Page )

// Look at console
$(function() {

	var loginName;
	var loginPassword;
    var loginmobilephone;
    var rolechoice;
	var newAccount = [loginName, loginPassword, loginmobilephone, rolechoice];

	$('#login-btn').on('click', function() {
		var loginUsername = $("#login-username").val();
		var loginPassword = $("#login-password").val();
        var loginmobilephone = $("#login-mobilephone").val();
        var loginrole = $("#roleChoice").val();

		if (loginName == newAccount[0] && loginPassword == newAccount[1]  &&  loginmobilephone == newAccount[2]
            &&  loginmobilephone ==newAccount[3]  &&  loginrole == newAccount[4]  ) {
			console.log("Current Username: " + newAccount[0]);
			console.log("Current Password: " + newAccount[1]);
            console.log("Current Phone Number:"+ newAccount[2]);
            console.log("Current Email: " + newAccount[3]);
            console.log("You had chosen:" + newAccount[4]);
			console.log("Logged In Successful.");
		} else {
			console.log("Attempted Username " + loginUsername);
			console.log("Attempted Password " + loginPassword);
			console.log("Login Failed.");
		};
	});

	$('#Entrybtn').on('click', function() {
		var newUser = $("#newUser").val();
		var newPassword = $("#newpassword").val();
		var newEmail = $("#newemail").val();
        var newPhoneNumber = $("#newPhoneNumber" ).val();
        var newRole = $("#newRole").val();
    var newUserValid = false;
    var newPasswordValid = false;
    var newEmailValid = false;
    var newPhoneValid = false;
    var newRoleValid = false;
    var newUserObject = $("#newUser");
    var newPasswordObject = $("#newpassword");
    var newEmailObject = $("#newemail");
    var newPhoneNumberObject =$("#newPhoneNumber");
    var newRoleObject = $("#newRole");

    var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
    var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validate.test(newUser) || (newUser).length == 0) {
      $(newUserObject).addClass("error")
      $(newUserObject).val("No special characters or spaces please.")
    } else {
      newUserValid = true;
      newUser = $(newUserObject).val();
    }

    if(!validate.test(newPassword) || (newPassword).length == 0) {
      $(newPasswordObject).addClass("error");
      $(newPasswordObject).val("No special characters or spaces allowed.");
    } else {
      newPasswordValid = true;
      newPassword = $(newPasswordObject).val();
    }

    if(!validateEmail.test(newEmail)) {
      $(newEmailObject).addClass("error");
      $(newEmailObject).val(" Please enter a valid email.");
    } else {
      newEmailValid = true;
      console.log("Account Email " + newEmailObject.val())
    }

    if(!validate.test(newPhoneNumber) || (newPhoneNumber).length == 0) {
        $(newPhoneNumberObject).addClass("error")
        $(newPhoneNumberObject).val("Please enter valid phone number format.")
      } else {
        newPhoneValid = true;
        newPhoneNumber = $(newPhoneNumberObject).val();
      }

    if(validate.test(newRole) || (newRole).length == 0 ) {
        if (newRole != "owner" || newRole != "coworker" ) {
            $(newRole).addClass("error")
            $(newRole).val("Data fields must not be empty.")
        }
      } else {
        newRoleValid = true;
        newRole = $(newRoleObject).val();
      }

    $(newUsernameObject).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    $(newPasswordObject).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    $(newEmailObject).on('click', function () {
      $(this).val("");
      $(this).removeClass("error");
    });

    $(newPhoneNumberObject).on('click', function () {
        $(this).val("");
        $(this).removeClass("error");
      });

    $(newRoleObject).on('click', function () {
        $(this).val("");
        $(this).removeClass("error");
      });

		newAccount = [newUsername, newPassword, newEmail, newPhoneNumber, newRole ];
		console.log("User Name: " + newAccount[0]);
		console.log("Password: " + newAccount[1]);
        console.log("Email: " + newAccount[2]);
        console.log("Mobile Phone Number: " + newAccount[3]);
        console.log("Role: " + newAccount[4]);

		if(newUserValid == true && newPasswordValid == true && newEmailValid == true && newPhoneValid == true
            && newRole == true ) {
      $('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
    }
	});

	$('.message a').on('click', function() {
		$('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
	});
});


//  Owner-Co-Worker Web Page Functions

$(function(){
    var loginUserName;
    var loginPassword;
    var account =[loginUserName, loginPassword];
    $("#LoginBtn").on("click", function() {
        var loginOwnerName = $("#UserName").val();
        var loginOwnerPassword = $("#Password").val();
        if(loginOwnerName == account[0] && loginOwnerPassword == account[1]) {
            console.log("Current User is: " + account[0]);
            console.log("Current Password is: " + account[1]);
            console.log("Log in Approved.");
        } else {
            console.log("Attempted User Name " + loginOwnerName);
            console.log("Attempted Password is: " + loginOwnerPassword);
            console.log("Access Denied. ");
        }
    })
    $('#create-button').on('click', function() {
		var createUsernameEntry = $("#create-username").val();
		var createPasswordEntry = $("#create-password").val();
        var createUsernameValid = false;
        var createPasswordValid = false;
        var createUsernameObject = $("#create-username");
        var createPasswordObject = $("#create-password");
        var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
        if(!validate.test(createUsernameEntry) || (createUsernameEntry).length == 0) {
            $(createUsernameObject).addClass("error")
            $(createUsernameObject).val("No special characters or spaces.")
          } else {
            createUsernameValid = true;
            var createUsername = $(createUsernameObject).val();
          }

          if(!validate.test(createPasswordEntry) || (createPasswordEntry).length == 0) {
            $(createPasswordObject).addClass("error");
            $(createPasswordObject).val("No special characters or spaces.");
          } else {
            createPasswordValid = true;
            var createPassword = $(createPasswordObject).val();
          }
          $(createUsernameObject).on('click', function () {
            $(this).val("");
            $(this).removeClass("error");
          });

          $(createPasswordObject).on('click', function () {
            $(this).val("");
            $(this).removeClass("error");
          });
          account = [createUsername, createPassword];
		console.log("Account Username " + account[0]);
		console.log("Account Password " + account[1]);

		if(createUsernameValid == true && createPasswordValid == true) {
      $('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
    }
	});

	$('.message a').on('click', function() {
		$('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
	});
})

// Co-Worker Web Page Functions

$(function(){
    var loginUserName;
    var loginPassword;
    var account =[loginUserName, loginPassword];
     $("#LoginBtn").on("click", function() {
        var loginOwnerName = $("#UserName").val();
        var loginOwnerPassword = $("#Password").val();
        if(loginOwnerName == account[0] && loginOwnerPassword == account[1]) {
            console.log("Current User is: " + account[0]);
            console.log("Current Password is: " + account[1]);
            console.log("Log in Approved.");
        } else {
            console.log("Attempted User Name " + loginOwnerName);
            console.log("Attempted Password is: " + loginOwnerPassword);
            console.log("Access Denied. ");
        }
    })
    $('#create-button').on('click', function() {
		var createUsernameEntry = $("#create-username").val();
		var createPasswordEntry = $("#create-password").val();
        var createUsernameValid = false;
        var createPasswordValid = false;
        var createUsernameObject = $("#create-username");
        var createPasswordObject = $("#create-password");
        var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
        if(!validate.test(createUsernameEntry) || (createUsernameEntry).length == 0) {
            $(createUsernameObject).addClass("error")
            $(createUsernameObject).val("No special characters or spaces.")
          } else {
            createUsernameValid = true;
            var createUsername = $(createUsernameObject).val();
          }

          if(!validate.test(createPasswordEntry) || (createPasswordEntry).length == 0) {
            $(createPasswordObject).addClass("error");
            $(createPasswordObject).val("No special characters or spaces.");
          } else {
            createPasswordValid = true;
            var createPassword = $(createPasswordObject).val();
          }
          $(createUsernameObject).on('click', function () {
            $(this).val("");
            $(this).removeClass("error");
          });

          $(createPasswordObject).on('click', function () {
            $(this).val("");
            $(this).removeClass("error");
          });
          account = [createUsername, createPassword];
		console.log("Account Username " + account[0]);
		console.log("Account Password " + account[1]);

		if(createUsernameValid == true && createPasswordValid == true) {
      $('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
    }
	});

	$('.message a').on('click', function() {
		$('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "fast");
	});


})





