// ?Auto Splash Function
function goToHome() {
  setTimeout(function () {
    location.href = "index.html";
  }, 1000);
}

// ? Go to Login
function goToLogin(from) {
  switch (from) {
    case "register":
      location.href = "../login/login.html";

      break;

    default:
      location.href = "./login/login.html";
      break;
  }
}

// ? Go To Register Page
function goToRegister(from) {
  switch (from) {
    case "login":
      location.href = "../register/register.html";
      break;

    default:
      location.href = "./register/register.html";
      break;
  }
}

// ? Go to Index Page
function goToIndexPage() {
  location.href = "../index.html";
}
// function goToIndexPage(from) {
//   switch (from) {
//     default:
//       location.href = "../index.html";
//       // location.href = "../index.html" + "?from=" + from;
//       break;
//   }
// }

// ? GO to Splash Screen
function goToSplash(from) {
  switch (from) {
    case "index":
      location.href = "splash.html";
      break;

    default:
      location.href = "../splash.html";
      break;
  }
}

// * Go to Students Register
function goToStudentsReg() {
  location.href = "students_register.html";
}

// * Go to Admin Register
function goToAdminReg() {
  location.href = "admin_register.html";
}

// * Go to Students Register
function goToStudentsLogin() {
  location.href = "students_login.html";
}

// * Go to Admin Register
function goToAdminLogin() {
  location.href = "admin_login.html";
}

// ? Go To Dashboard
function goToAdminDashboard() {
  const rbs = document.querySelectorAll('input[name="role"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }

  switch (selectedValue) {
    case "Lecturer":
      location.href = "../dashboards/lecturer_dashboard.html";
      break;
    case "Academic Registrar":
      location.href = "../dashboards/ar_dashboard.html";
      break;

    default:
      location.href = "../dashboards/hod_dashboard.html";
      break;
  }
}

// function goToStudentDashboard(from) {
function goToStudentDashboard(from) {
  location.href = "../dashboards/students_dashboard.html";
}
