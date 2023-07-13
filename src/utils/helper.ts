import { showToast } from "./function";

var regexObject = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
  phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  alphabeticRegex: /^[A-Za-z\s]+$/,
};

export function validateEmail(email: string) {
  if (email.length > 100) return false;

  return regexObject.email.test(email);
}

export function validateAlpha(text: string) {
  if (text.length > 100) return false;
  return regexObject?.alphabeticRegex.test(text);
}

export const validatePassword = (Password: string) => {
  if (Password.length > 100) return false;
  if (Password && !regexObject.password.test(Password.replace(" ", ""))) {
    return false;
  } else {
    return true;
  }
};

/**
 * Function is use for validate the number
 * @param phoneno
 * @returns boolean
 */
export const phoneNumberValidation = (phoneno: string) => {
  let reg = /^\d{1,10}$/;
  return reg.test(phoneno);
};

export const validatePhone = (phone: string) => {
  if (regexObject?.phone.test(phone)) {
    return true;
  } else {
    showToast("Enter a valid mobile number.");
    return false;
  }
};

export const isAllNumbers = (str: string) => /^\d+$/.test(str);
export const checkIsOtp = (str: string, otpLength: number) =>
  str && isAllNumbers(str) && str.length === otpLength;