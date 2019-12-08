// for login
$(document).ready(function () {
    var socket = io();
  
    var username = $('#username');
    var admin = $('#admin');
  
    // login select buttons
    var adminLogin = $('#adminLogin');
    var studentLogin = $('#studentLogin');
  
    // select user login buttons
    var adminBTN = $('#adminBTN');
    var studentBTN = $('#studentBTN');
  
    // for students
    var notifier = $('#notifier');
  
    // login buttons to redirect to another actions
    var studentbtnlogin = $('#studentbtnlogin');
    var adminbtnlogin = $('#adminbtnlogin')
    // for admin activity
    var adminActivity = $('#adminActivity');
    var username = $('.student').val();
    var okbtn = $('#oktbn');
  
    const Lealyn = {
      "id": 1,
      "name": "Lealyn Eulin",
      "Batch": "2020B",
      "monthPaid": {
        "January": true,
        "February": true,
        "March": true,
        "April": true,
        "May": true,
        "June": true,
        "July": true,
        "August": true,
        "September": true,
        "October": true,
        "November": true,
        "December": false
      }
    }
    const Faye = {
      "id": 1,
      "name": "Faye Erika Catalvas",
      "Batch": "2020B",
      "monthPaid": {
        "January": true,
        "February": true,
        "March": true,
        "April": true,
        "May": true,
        "June": true,
        "July": true,
        "August": true,
        "September": true,
        "October": true,
        "November": true,
        "December": false
      }
    }
    const Jericho = {
      "id": 1,
      "name": "Jericho James Villahermosa",
      "Batch": "2020B",
      "monthPaid": {
        "January": true,
        "February": true,
        "March": true,
        "April": true,
        "May": true,
        "June": true,
        "July": true,
        "August": true,
        "September": true,
        "October": true,
        "November": true,
        "December": false
      }
    }
  
  
  
    // For hide and show of the login form
  
    socket.emit('user-login', "jeje");
    var paid = false;
    var isStudent = false;
  
    function notPaid() {
      if (paid == false) {
        $("#notifier").show();
      }
    }
  
    //Getting the name of the student
    $(document).ready(function () {
      
      $(".student").click(function () {
        $("#btnWithName").text($(this).text());
        socket.emit('user login', $(this).text());
      })
    })
  
    //for home page
    $(adminLogin).hide();
    $(studentLogin).hide();
    $(adminActivity).hide();
  
    $(studentBTN).click(function () {
      $(adminLogin).hide();
      $(studentLogin).show();
    });
  
    // functions for admin activity
    $(adminBTN).click(function () {
      $(studentLogin).hide();
      $(adminLogin).show();
      isStudent = false;
    });
    $(adminbtnlogin).click(function (e) {
      e.preventDefault();
      $(adminBTN).hide();
      $(studentBTN).hide();
      $(adminLogin).hide();
      $(studentLogin).hide();
      $(adminActivity).show();
      isStudent = false;
    });
  
    // functions for the student notifier
    $(studentbtnlogin).click(function (e) {
      e.preventDefault();
      $(adminBTN).hide();
      $(studentBTN).hide();
      $(adminLogin).hide();
      $(studentLogin).hide();
      var value = $('.dropdown-menu li a').text();
      console.log(value);
      $(notifier).show();
      isStudent = true;
      
    });
  
    $("#okbtn").click(function (e) {
      e.preventDefault();
      $(adminBTN).hide();
      $(studentBTN).hide();
      $(adminLogin).hide();
      $(studentLogin).hide();
      $(notifier).hide();
  
      window.setTimeout(function () {
        $(notifier).show();
      }, 3000)
  
    });
  });