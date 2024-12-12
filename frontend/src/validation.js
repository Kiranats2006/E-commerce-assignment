const Validation = {

    validateName: (name) => {
      const nameRegex = /^[A-Za-z\s]{2,30}$/;
      if (name.length < 2) {
        return "Name cannot be less than 2 letters";
      }
      if (!nameRegex.test(name)) {
        return "Name should not have any symbols";
      }
      return true;
    },
  
    
    validatePass: (password) => {
      const passRegex = {
        minLength: 8,
        maxLength: 128,
        hasLowerCase: /[a-z]/,
        hasUpperCase: /[A-Z]/,
        hasSpecialCharacters: /[!@#$%^&*(),.?":{}|<>]/
      };
  
      if (password.length < passRegex.minLength) {
        return "Password should be more than or equal to 8 characters";
      }
      if (password.length > passRegex.maxLength) {
        return "Password should be less than or equal to 128 characters";
      }
      if (!passRegex.hasLowerCase.test(password)) {
        return "Password should have lowercase characters from a-z";
      }
      if (!passRegex.hasUpperCase.test(password)) {
        return "Password should have uppercase characters from A-Z";
      }
      if (!passRegex.hasSpecialCharacters.test(password)) {
        return "Password should have special characters";
      }
  
      return true; 
    },
  
    validateEmail: (email) => {
      if (email.length > 254) {
        return { isValid: false, error: "Email is too long" };
      }
  
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        return { isValid: false, error: "Write the email in correct format, e.g., name@example.com" };
      }
  
      return true;
    },
  };
  export default Validation;