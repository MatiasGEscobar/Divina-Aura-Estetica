export const validateRegister = (input) => {
    const errors = {};

    const nameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
    if(!nameRegex.test(input.name)) {
        errors.name = "su nombre debe tener entre 3 y 16 caracteres";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(input.email)) {
        errors.email = "Email no valido";
    }

    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if(!birthDateRegex.test(input.birthDate)) {
        errors.birthDate = "Fecha de nacimiento no valida";
    }

    const nDniRegex = /^\d{8}$/;
    if(!nDniRegex.test(input.nDni)) {
        errors.nDni = "Dni no valido";
    }

    const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
    if(!usernameRegex.test(input.username)) {
        errors.username = "Su nombre de usuario debe tener entre 3 y 16 caracteres";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(input.password)) {
        errors.password = "La contraseña debe tener al menos una letra mayúscula, debe contener al menos una letra minúscula, al menos un número, al menos un carácter especial y una longitud mínima de 8 caracteres";
    }

    return errors;
    
}

export const validateLogin = (input) => {
    const errors = {};

    const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
    if(!usernameRegex.test(input.username)) {
        errors.username = "Su nombre de usuario debe tener entre 3 y 16 caracteres";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(input.password)) {
        errors.password = "La contraseña debe tener al menos una letra mayúscula, debe contener al menos una letra minúscula, al menos un número, al menos un carácter especial y una longitud mínima de 8 caracteres";
    }

    return errors;
    
}