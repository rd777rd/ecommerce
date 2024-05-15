function Validation(values) {
    let error={}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern= /^.{8,}$/

    if(values.firstName === ""){
    error.firstName = 'First name should not be empty'
    }
    else {
        error.firstName=""
    }
    if (values.lastName ==="") {
        error.lastName  = "Last name shouldn't be empty"
    }
    else {
        error.lastName =""
    }
    if (values.birthDate ==="") {
        error.birthdate  = "Birthdate shouldn't be empty"
    }
    else {
        error.birthDate =""
    }
    if (values.address ==="") {
        error.address  = "Address shouldn't be empty"
    }
    else {
        error.address =""
    }
    if(values.email === ""){
        error.email = 'Email should not be empty'
        }
        else if(!email_pattern.test(values.email)) {
            error.email = "Email didn't match "
        }
        else {
            error.email=""
        }
    
    if (values.password === "") {
        error.password  = "Password shouldn't be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password ="Password didn't match"
    }
    else {
        error.password =""
    }
    return error;
}

export default Validation;