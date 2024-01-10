

function login() {
    var phoneNumber = document.getElementById("loginPhoneNumber").value;
    sessionStorage.setItem("phoneNumber", phoneNumber);
    window.location.href = "registerPage.html";
}

function register() {
    var name = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var birthday = document.getElementById("registerBirthday").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("birthday", birthday);
    window.location.href = "displayPage.html";
   
}
function displayUserInformation() {
    var phoneNumberSpan = document.getElementById("displayPhoneNumber");
    var nameSpan = document.getElementById("displayName");
    var emailSpan = document.getElementById("displayEmail");
    var birthdaySpan = document.getElementById("displayBirthday");

   
    var phoneNumber = sessionStorage.getItem("phoneNumber") || "N/A";
    var name = sessionStorage.getItem("name") || "N/A";
    var email = sessionStorage.getItem("email") || "N/A";
    var birthday = sessionStorage.getItem("birthday") || "N/A";

    phoneNumberSpan.innerText = phoneNumber;
    nameSpan.innerText = name;
    emailSpan.innerText = email;
    birthdaySpan.innerText = birthday;
}


window.onload = function () {
    displayUserInformation();
};
