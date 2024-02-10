export const validateEmail = (email: string) => {
  const emailValidate =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValidate?.test(String(email)?.trim().toLowerCase());
};
export const validateID = (id: string) => {
  const idValidate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{6,16}$/;

  return idValidate?.test(String(id)?.toLowerCase());
};

export const validateNickname = (id: string) => {
  const idValidate = /^[a-zA-Z0-9\u3131-\uD79D]{2,10}$/g;
  return idValidate?.test(String(id)?.toLowerCase());
};
export const validateNicknameSpecialCharacters = (id: string) => {
  const idValidate = /^[a-zA-Z0-9\u3131-\uD79D-._]{2,10}$/g;
  return idValidate?.test(String(id)?.toLowerCase());
};

export const getPhoneWithDash = (x: string) => {
  const y = x?.replace(/,/g, '');
  let res = '';
  let count = 0;
  for (let i = y.length - 1; i >= 0; i--) {
    res = y.charAt(i) + res;
    count++;
    if (count % 4 === 0 && i !== 0) res = `-${res}`;
  }
  return res;
};

export const getPhoneWithoutDash = (x: string) => {
  const y = x?.replace(/-/g, '');
  return y;
};
export const formatMoney = (text: string | number) => {
  if (text === 0) {
    return 0;
  }
  let reverseText = String(text).split('').reverse().join('');
  let currentConetent = '';
  for (let i = 1; i <= reverseText.length; i++) {
    if (i % 3 == 0 && i !== reverseText.length) {
      currentConetent = currentConetent + reverseText[i - 1] + ',';
    } else {
      currentConetent = currentConetent + reverseText[i - 1];
    }
  }
  currentConetent = currentConetent.split('').reverse().join('');
  return currentConetent;
};

export const validatePassword = (password: string) => {
  const passwordTest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,15}$/;
  return passwordTest.test(String(password));
};

export const validatePhone = (phone: number | string) => {
  var regexp = /^[0]{1}[0-9]{2}([0-9]{3}|[0-9]{4})[0-9]{4}$/gm;
  return regexp?.test(phone?.toString());
};
