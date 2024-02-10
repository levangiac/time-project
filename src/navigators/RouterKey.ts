function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}

export const ROOT_ROUTE_KEY = createEnum({
  BottomTab: 'BottomTab',
  Splash: 'Splash',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  IPADetail: 'IPADetail',
  Intro: 'Intro',
  //! MainStack HERE
});
