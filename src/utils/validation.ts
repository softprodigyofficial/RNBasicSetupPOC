/**
 * Function will validate the string(check emojis & special chars.)
 * @param name
 * @return boolean
 */
export const speacialValidation = (name: string) => {
  const specialCharReg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const emojiReg =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
  return specialCharReg.test(name) || emojiReg.test(name);
};
