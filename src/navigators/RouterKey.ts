function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}

export const ROOT_ROUTE_KEY = createEnum({
  BottomTab: 'BottomTab',
  OnboardingScreen: 'OnboardingScreen',
  HomeStack: 'HomeStack',
  Home: 'Home',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  IPADetail: 'IPADetail',
  Intro: 'Intro',
  Games: 'Games',
  Setting: 'Setting',
  Detail: 'Detail',

  //! MainStack HERE
});
