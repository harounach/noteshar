import validator from "validator";

/**
 * Chech if email is valid
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email: string) => {
  return validator.isEmail(email);
};

/**
 * Chech if password is valid
 * @param {string} password
 * @returns {boolean}
 */
export const isValidPassword = (password: string) => {
  return validator.isLength(password, { min: 4 });
};

/**
 * Chech if username is valid
 * @param {string} password
 * @returns {boolean}
 */
export const isValidUsername = (username: string) => {
  return validator.isLength(username, { min: 4 });
};

/**
 * Chech if passwordConfirm matches password
 * @param {string} password
 * @param {string} passwordConfirm
 * @returns {boolean}
 */
export const isPasswordsMatch = (password: string, passwordConfirm: string) => {
  return validator.equals(password, passwordConfirm);
};

/**
 * Chech if note's title is valid
 * @param {string} title
 * @returns {boolean}
 */
export const isValidNoteTitle = (title: string) => {
  return validator.isLength(title, { min: 4 });
};

/**
 * Chech if note's description is valid
 * @param {string} description
 * @returns {boolean}
 */
export const isValidNoteDescription = (description: string) => {
  return validator.isLength(description, { min: 10 });
};
