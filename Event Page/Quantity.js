
const plusCart = document.querySelector(".plusCart");
const minusCart = document.querySelector(".minusCart");
const numCart = document.querySelector(".numCart");

let b = 1;

plusCart.addEventListener("click", () => {
    b++;
    numCart.innerText = b;
});

minusCart.addEventListener("click", () => { 
    if (b >= 1) {
        b--;
        numCart.innerText = b;
    }
});
document.getElementById("register-form").addEventListener
("submit", function(e){
    validateData();
})

function validateData()
{
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("con-password");
    const age = document.getElementById("age");
    const date = document.getElementById("date");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const agreement = document.getElementById("agreement");
    const today = new Date();
    const birthDate = new Date(date.value);
    const minDate = new Date(
        today.getFullYear() -17,
        today.getMonth(),
        today.getDate()
    );

    // Javascript Dialog Box:
    // 1. alert
    // 2. prompt
    // 3. confirm
    if(firstName.value.trim().length < 5)
        {
            alert("First name must be at least 5 characters!");
        } 
    else if(lastName.value.trim().length < 5)
        {
            alert("Last name must be at least 5 characters!");
        }
    else if(!email.value.endsWith("@gmail.com"))
        {
             alert ("Email must end with '@gmail.com'!");
        }
    else if(!checkAlphaNum(password))
        {
            alert("Password must be alphanumeric!");
        }
    else if(confirmPass.value !== password.value)
        {
            alert("Confirm password must be the same with password");
        }
    else if(age.value < 17 || birthDate > minDate)
        {
            alert("You must be at least 17 years old to register");
        }
    else if(!male.checked && !female.checked)
        {
            alert("Gender must be selected! Gays are not allowed!");
        }
    else if(!agreement.checked)
        {
            alert("Agreement must be checked");
        }
    else
        {
            const result = confirm("Are you sure you want to submit?");
            if(result)
                {
                    const name = prompt("What is your nickname?");
                    alert("Hello, " + name);
                }
            else
                {  
                    alert("Cancelled");
                }
        }
}

function checkAlphaNum(password)
{
    let isAlpha = false;
    let isNum = false;
    
    for(let i = 0 ; i < password.length ; i++){
        if(isNaN(password[i]))
            {
                isAlpha = true;
            }
        else
            {
                isNum = true;
            }
        
            if(isAlpha && isNum)
                {
                    return true;
                }
    }
    return false;
}