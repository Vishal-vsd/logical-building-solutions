function isPasswordStrong(pass){
    if(typeof pass !== "string"){
        throw new Error("Password must be a string");
    }
    if(pass.length < 8) {
        throw new Error("password must be minimum of 8 characters")
    }

    const hasLowerCase = /[a-z]/.test(pass)
    if(!hasLowerCase){
        throw new Error("Password must contain atleast one lower case character")
    }

    const hasUpperCase = /[A-Z]/.test(pass)
    if(!hasUpperCase){
        throw new Error("Password must contain atleast one upper case character")
    }

    const hasNumber = /\d/.test(pass)
    if(!hasNumber){
        throw new Error("Password must contain atleast one number")
    }

    const hasSpecialCharacter = /[!@]/.test(pass)
    if(!hasSpecialCharacter){
        throw new Error("Password must contain one special character between @ & !")
    }
    
}

isPasswordStrong("Vishal@123")


function isPasswordStrong2(pass) {
    pass = pass.trim();
    if(pass.length < 0) return false;

    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789"
    const specialChars = "!@"
    let lowerCaseCharactersExists = false
    let upperCaseCharactersExists = false
    let numbersExists = false;
    let specialCharsExists = false;
    for(let char of pass){
        if(lowerCaseCharacters.includes(char)){
            lowerCaseCharactersExists = true
        }
        else if(upperCaseCharacters.includes(char)){
            upperCaseCharactersExists = true
        }
        else if(numbers.includes(char)){
            numbersExists = true
        }
        else if(specialChars.includes(char)){
            specialCharsExists = true
        }
    }

    if(lowerCaseCharactersExists && upperCaseCharactersExists && specialCharsExists && numbersExists){
        return true;
    }
    return false;
}

console.log("Vishal!1 is", isPasswordStrong2("Vishal!1"))
console.log("vishal!1 is", isPasswordStrong2("vishal!1"))
console.log("Vishald1 is", isPasswordStrong2("Vishald1"))
console.log("Vishal!@ is", isPasswordStrong2("Vishal!@"))
console.log("Vish123 is", isPasswordStrong2("Vish123"))