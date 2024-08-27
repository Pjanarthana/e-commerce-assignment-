export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_UP = 'SIGN_UP';

export const signIn = (email, password) => {
  // In a real app, you would make an API call here
  return {
    type: SIGN_IN,
    payload: { email }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const signUp = (email, password) => {
  // In a real app, you would make an API call here
  return {
    type: SIGN_UP,
    payload: { email }
  };
};