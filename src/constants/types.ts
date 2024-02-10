export enum BookingType {
  CASH = 'CASH',
  WALLET = 'WALLET',
  TRANSFER = 'TRANSFER',
  CARD = 'CARD',
}

export enum MethodType {
  COD = 'COD',
  WALLET = 'WALLET',
}

export enum PaymentStatus {
  NOT_PAID = 'NOT_PAID',
  PAID = 'PAID',
  PENDING = 'PENDING',
}

export enum DiscountType {
  CURRENCY = 'CURRENCY',
  PERCENT = 'PERCENT',
}

export enum ActivityOrder {
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
  CONFIRMED = 'CONFIRMED',
  WAITING = 'WAITING',
}

export enum BookingActivityType {
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
  CONFIRMED = 'CONFIRMED',
  WAITING = 'WAITING',
  ASSIGNED = 'ASSIGNED',
}
export enum ComboType {
  COMBO = 'COMBO',
  PRODUCT = 'PRODUCT',
}

export enum DayFilterType {
  TODAY = 'TODAY',
  YESTERDAY = 'YESTERDAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  LAST_MONTH = 'LAST_MONTH',
  OPTIONAL = 'OPTIONAL',
}

export enum SortFilterType {
  LATEST = 'LATEST',
  OLDEST = 'OLDEST',
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
  ATOZ = 'ATOZ',
  ZTOA = 'ZTOA',
}

export interface HomeProps {
  start: string;
  end: string;
}

export interface ProductProps {
  id: string;
  title: string;
  price: string;
  description?: string;
}

export interface FeeCloverProps extends ProductProps {
  isDiscount: boolean;
  cost: number;
  costDisCount: number;
  type: 'inapp' | 'iap';
}

export interface SubcriptionProps extends ProductProps {
  note?: string;
  subscriptionPeriodNumberIOS?: string;
  subscriptionPeriodUnitIOS?: '' | 'YEAR' | 'MONTH' | 'WEEK' | 'DAY';
  type: 'subs' | 'sub';
}

export interface TextInputProps {
  value?: string;
  error?: string;
  success?: string;
}

// export interface NotificationProps {
//   id: string;
//   viewAllContent: string;
//   title: string;
//   date: string;
// }

export interface DetailMoneyProps {
  id: string;
  title: string;
  dateTime: string;
  type: number;
  cost: number;
  costAll: number;
}

export interface NameBankProps {
  id: string;
  name: string;
}

export interface DataPolicyProps {
  id: string;
  title?: string;
  description?: string;
  personal_information?: string;
  note_withdrawal?: string;
  term_of_use?: string;
}

export interface UserProps {
  id: number;
  username?: string;
  nickname?: string;
  numberClover?: number;
  numberCloverFree?: number;
  isStudy?: boolean;
  fee?: number;
  role?: string;
  cardNumber?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  createdAt?: string;
  updatesAt?: string;
  fullname?: string;
  autoLogin?: boolean;
  rememberID?: boolean;
  status?: number; //0: off 1 năm, 1 bình thường
  subscriptionStudy?: 'TRIAL' | '3_MONTH' | '12_MONTH' | '1_MONTH' | '6_MONTH' | '0';
  startSubscription?: string;
  expiredSubscription?: string;
  haveFreeCourseTrial?: boolean;
  isDoneBasicTest?: boolean;
  level?: string;
  isLoginDaily: boolean;
  loginDays: string; //"[1,2,3,4...31]""
  isFirstGame: boolean;
  totalMoney?: number;
  tokenDevice?: string;
  advMarketing?: string;
  isFirstLogin?: boolean;
  loginAppDays: string;
}

export interface authProps {
  password: TextInputProps;
}
export interface payloadChangPassword {
  oldPassword: TextInputProps;
  password: TextInputProps;
  idUser: string;
}
export interface payloadFindId {
  username: string;
}
export interface payloadFindPassword {
  id: string;
  password: TextInputProps;
  confirmPassword: TextInputProps;
}
export interface RankingProps {
  id: number;
  competition_id: number;
  user_id: number;
  round_id: number;
  point: number;
  created_at: string;
  updated_at: string;
  user?: UserProps;
  rank?: number;
  score_earned: number;
  score_bonus: number;
  correct_answer_num: number;
  wrong_answer_num: number;
  bonus_time_ms: number;
  start_time_ms: number;
  end_time_ms: number;
  competition?: CompetitionProps;
  have_noti?: number;
}

export interface PackageType {
  words: WordsProps[];
  levels?: string;
}
export interface CompetitionProps {
  id: number;
  name: string;
  content: string;
  level: string;
  start_time: string;
  end_time: string;
  status: number;
  number_of_game: number;
  number_of_user: number;
  number_of_question: number;
  is_join?: boolean;
  is_complete: boolean;
  active_date: string;
  exp: number;
  coin: number;
  created_at: string;
  updated_at: string;
  bonus: number;
  ranking?: RankingProps;
  rounds?: RoundProps[];
  time?: number;
  is_show?: boolean;
  packages?: { package: PackageType }[];
}

export interface RoundProps {
  id: number;
  competition_id?: number;
  event_id?: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  user?: UserProps;
  roundIndex?: number;
}
export interface EventProps {
  id: number;
  name: string;
  description: string;
  type: string;
  re_join: number;
  status: number;
  number_member: number;
  url: string;
  start_time: string;
  end_time: string;
  active_date: string;
  created_at: string;
  updated_at: string;
  time: number;
  time_test: number;
  rank_reward: string;
  total_reward: number;
  type_reward: string;
  image?: string;
  packages?: packagesProps[];
  rounds: RoundProps[];
  results?: ResultStudyProps[];
  is_show?: boolean;
  is_join?: boolean;
  is_complete?: boolean;
}
export interface WordsProps {
  id: number;
  package_id: number;
  id_word: string;
  word: string;
  type: string;
  meaning: string;
  time?: number;
  created_at: string;
  updated_at: string;
  level: string;
  problem_id: string;
  problem_type: string;
  problem: string;
  problem_meaning: string;
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  answer: number;
}

export interface UserCompetitionProps {
  id: number;
  competition_id?: number;
  round_id?: number;
  user_id: number;
  competition?: CompetitionProps;
  user?: UserProps;
  round?: RoundProps;
  created_at: string;
  updated_at: string;
}

export interface UserEventProps {
  id: number;
  event_id?: number;
  round_id?: number;
  user_id: number;
  user?: UserProps;
  round?: RoundProps;
  created_at: string;
  updated_at: string;
  questions: any[] | null;
  questions_round: any[] | null;
}

export type GamePlayingType = {
  game_id?: number;
  start?: string; //start_time
  end?: string; //end_time
  name: string;
  description: string; //content
  tip: string; //
  joined: boolean; // default true as this is user competition
  level: string; // level
  round_id?: number; // round_id
  round_name?: string; // round_id
  round_index?: number;
  clover: number; // fee
  completed: boolean;
  questions?: QuestionType[];
  winStreak: number;
  bonus: number; // bonus point
  competition_id?: number;
  event_id?: number;
  user_competition_id?: number;
  user_event_id?: number;
  time?: number;
  is_join?: boolean;
  is_complete?: boolean;
};

export type GameResultType = {
  game_id: number;
  name: string;
  round: string;
  score_earned: number;
  score_bonus: number;
  correct_answer_num: number;
  wrong_answer_num: number;
  bonus_time_ms: number;
  start_time_ms: number;
  end_time_ms: number;
  answer_time_list: {
    answerIndex: number;
    start_answer_time?: number;
    end_answer_time?: number;
    bonus_time?: number;
  }[];
  competition_id?: number;
  round_id?: number;
  user_competition_id?: number;
  event_id?: number;
  // comppet
};
export interface QuestionTypeStudy extends QuestionType {
  id: number;
  topic: string;
  title: string;
  question: string[];
  answers: string[];
  correct: string;
  seconds: number;
  reward: number;
  status: number; // 0: chua xuat hien, 1: da xuat hien
}
//* QuestionTypeEvnent = QuestionTypeStudy
export interface QuestionTypeEvent extends QuestionTypeStudy {}
export interface QuestionType {
  topic: string;
  title: string;
  question: string[];
  answers: string[];
  correct: string;
  seconds: number;
  reward: number;
}

export interface StudyProps {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  time: number;
  time_test: number;
  isJoined?: boolean;
  isCompleted?: boolean;
  user_study_id: number;
  packages?: packagesProps[];
  studies?: UserStudyProps[];
  result_study?: ResultStudyProps[];
  is_test?: boolean;
  user_study?: UserStudyProps[];
  multiples: string;
}

export interface packagesProps {
  id: number;
  package_id: number;
  study_id: number;
  created_at: string;
  updated_at: string;
  package: packageProps;
}

export interface packageProps {
  id: number;
  id_string: string;
  title: string;
  description: string;
  level: string;
  number_word: number;
  time_user_register: number;
  created_at: string;
  updated_at: string;
  levels: string;
  words: WordsProps[];
  is_join: boolean;
  number_user_study: number;
  is_complete: boolean;
}

export interface UserStudyProps {
  id: number;
  user_id: number;
  study_id: number;
  created_at: string;
  updated_at: string;
  user?: UserProps;
  study?: StudyProps;
  study_target: number;
  package_id: number;
  is_test: number;
  number_remain: number;
  questions: QuestionTypeStudy[];
  result_study?: ResultStudyProps[];
}

export interface ResultStudyProps {
  id: number;
  user_id: number;
  study_id: number;
  user_study_id: number;
  point: number;
  created_at: string;
  updated_at: string;
  percent_correct: number;
  have_noti?: number;
  package_id?: number;
  question_correct?: QuestionTypeStudy[];
  question_wrong?: QuestionTypeStudy[];
}

export interface ResultEventProps {
  id: number;
  event_id: number;
  user_id: number;
  round_id: number;
  point: number;
  score_earned: number;
  score_bonus: number;
  correct_answer_num: number;
  wrong_answer_num: number;
  bonus_time_ms: number;
  start_time_ms: number;
  end_time_ms: number;
  created_at: string;
  updated_at: string;
  have_noti?: number;
}

export type StudyingType = {
  user_study_id: number;
  study_id?: number;
  name: string;
  description: string; //content
  tip: string; //
  joined: boolean; // default true as this is user competition
  level: string; // level
  clover: number; // fee
  completed: boolean;
  questions?: QuestionType[];
  winStreak: number;
  bonus: number; // bonus point
  competition_id?: number;
  percentResultTestBonus: number | null; // kiểm tra xem test chưa, nếu ch test thì tham gia test nếu test r thì hiện kết quả
  is_test: boolean; // check test ch. tạm thời dùng này đi
  multiples: string; // bội số
  target: number; // số từ mục tiêu dc set lúc trước
};

export type StudyingResultType = {
  user_study_id: number;
  studying_id: number;
  name: string;
  round: string;
  score_earned: number;
  score_bonus: number;
  correct_answer_num: number;
  wrong_answer_num: number;
  bonus_time_ms: number;
  start_time_ms: number;
  end_time_ms: number;
  answer_time_list: {
    answerIndex: number;
    start_answer_time?: number;
    end_answer_time?: number;
    bonus_time?: number;
  }[];
  competition_id?: number;
  round_id?: number;
  percentResultTestBonus: number | null; // kiểm tra xem test chưa, nếu ch test thì tham gia test nếu test r thì hiện kết quả
  is_test: boolean; // tạm thời dùng check test ch
  // comppet
  multiples: string; //multiples bội số
  target: number;
};

export interface BannerProps {
  name?: string;
  id: number;
  position: number;
  image: string;
  url: string;
  description: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

export interface SystemSettingProps {
  id: number;
  personal_information: string;
  note_withdrawal: string;
  term_of_use: string;
  created_at: string;
  updated_at: string;
}

export interface payloadWithDrawalProps {
  withDrawMoney?: string;
  nameBank: NameBankProps;
  numberBank: string;
  mask: string;
}

export interface NotificationProps {
  id: string | number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  //* mới thêm vô local
  seen: boolean;
  //* mới thêm vô local
  type: typeNotifyFCM;
  isRead?: boolean;
  //* thêm cứng action props noti
  action?: string | 'MONEY';
}

export interface PushNotificationProps {
  id: string | number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  payload: string;
  isRead?: number | boolean;
  type: typeNotifyFCM;
}
export interface NotificationFCMType {
  title: string;
  body: string;
  data: {
    type: typeNotifyFCM;
    payload: {
      route: string;
      data: string;
    };
  };
}
export enum typeNotifyFCM {
  OTHER_LOGIN = 'OTHER_LOGIN',
  COMPETITION_WINNER = 'COMPETITION_WINNER',
  INAPP = 'INAPP',
  SUBS = 'SUBS',
  DID_RENEW = 'DID_RENEW',
  EVENT_WINNER = 'EVENT_WINNER',
  FINISH_COMPETITION = 'FINISH_COMPETITION',
}
export interface RewardsStudyProps {
  id: number;
  content: string;
  level: string;
  coefficient: string;
  asset: any;
  created_at: string;
  updated_at: string;
  number_training: number;
  reward_earning: number;
  clover_amount: number;
  free_clover: number;
  paid_clover: number;
  reward: any;
  test_reward: number;
  test_progress: number;
}
export interface policyAndTermOfUseProps {
  id: number;
  personal_information: any;
  note_withdrawal: any;
  term_of_use: any;
}
