class User {
    highestScore = 0;
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

}
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("Hello");
    let username = "guest";
    let password = "";
    let user = new User(username, password);
    user.highestScore = 0;

    localStorage.setItem(username, JSON.stringify(user));

    let loginButton = document.getElementById("login");
    let registerText = document.getElementById("register-text");
    let registerButton = document.getElementById("register");
    let passwordInputBox = document.getElementById("password");
    let showPassword = document.getElementById("show-password");

    showPassword.addEventListener("click", function () {
        if (passwordInputBox.type === "password") {
            passwordInputBox.type = "text";
        } else {
            passwordInputBox.type = "password";
        }
    })

    loginButton.addEventListener("click", function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let user = JSON.parse(localStorage.getItem(username));
        if (user.password === password) {
            alert("Hello!");
            blankInputField();
            // let redirectPage = () => {
                let url = `case-NVG-driving-game.html?username=${username}`;
                window.location.href = url;
            // }
        } else {
            alert("Wrong password!");
        }
    })

    registerText.addEventListener("click", function () {
        setHidden(loginButton);
        setHidden(registerText);
        removeHidden(registerButton);
    })

    registerButton.addEventListener("click", function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let user = new User(username, password);
        localStorage.setItem(username, JSON.stringify(user));
        blankInputField();
        alert("Successfully registered!");
        setHidden(registerButton);
        removeHidden(loginButton);
        removeHidden(registerText);
    })

} else {
    // Sorry! No Web Storage support..
    alert("Your browser does not support saving scores for later comparison! Please play as guest.")
}

function removeHidden(htmlElement) {
    htmlElement.removeAttribute("hidden");
}
function setHidden(htmlElement) {
    htmlElement.setAttribute("hidden", "");
}
function blankInputField() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    // alert();
}

// let human = {
//     name: "Giang",
//     age: 25,
//     isAlive: true,
//     die: function () {
//         this.isAlive = false;
//     }
// }
// human["name"] = "Dog";
// console.log(human["name"])

