// check the password strength

function checkStrength() {
    var passwordValue = document.getElementById("password").value;

    var lengthRex = /.{8,}/ // . is used for anything and , is used for more
    var upperCaseRex = /[A-Z]/  //// - is used for from
    var loweCaseRex = /[a-z]/ 
    var digitRex = /[0-9]/ 
    var specialCharRex = /[^A-Za-z0-9]/ 

    var strength = 0

    if(lengthRex.test(passwordValue)){
        strength++;
    }

    if(upperCaseRex.test(passwordValue)){
        strength++;
    }

    if(loweCaseRex.test(passwordValue)){
        strength++;
    }

    if(digitRex.test(passwordValue)){
        strength++;
    }

    if(specialCharRex.test(passwordValue)){
        strength++;
    }

    let strengthText;
    switch (strength) {
        case 0:
            strengthText = 'very weak'
            break;

            case 1:
                strengthText = 'weak'
                break;
                
            case 2:
            strengthText = 'good'
            break;

            case 3:
            strengthText = 'strong'
            break;

            case 4:
            strengthText = 'very strong'
            break;

            case 5:
            strengthText = 'excelent'
            break;

        default:
        strengthText = 'unknown'
            break;
    
    }

    var passwordStrength = document.getElementById("strength");
    passwordStrength.textContent = "Strength is :" + strengthText

}