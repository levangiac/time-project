import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { unionBy } from 'lodash';

interface UserState {
  user: any;
  token: string | null;
  password: string;
  username: string;
}

const initialState: UserState = {
  user: { autoLogin: false, rememberID: false },
  token: null,
  username: '',
  password: '',
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    clearUserData: (state: UserState) => {
      state.user = {
        ...initialState,
        rememberID: state.user?.rememberID,
        username: state?.user?.rememberID ? state?.user?.username : '',
      };
    },
    cacheUserInfo: (state: UserState, action: PayloadAction<{}>) => {
      state.user = { ...state.user, ...action.payload };
    },
    cacheToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    cacheUsernamePassword(
      state: UserState,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addMatcher(
  //       userServices?.endpoints?.login?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = payload;
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.register?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...payload?.data, autoLogin: false, rememberID: false };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.getUserProfile?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.checkInToday.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = {
  //           ...state.user,
  //           numberClover: payload?.numberClover,
  //           numberCloverFree: payload?.numberCloverFree,
  //         };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.updateProfile?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices.endpoints.buyFreeTrial.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.getUserProfile?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.getUserProfile?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices?.endpoints?.payClover?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices.endpoints?.sendTestResult?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices.endpoints?.checkInToday?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices.endpoints?.updateDoneFirstActivity?.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.user = { ...state.user, ...payload };
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices.endpoints.getSystemSetting.matchFulfilled,
  //       (state, { payload, meta }) => {
  //         state.listSystemSetting = payload;
  //       }
  //     );

  //     builder.addMatcher(
  //       userServices.endpoints?.getPushNotification?.matchFulfilled,
  //       (state, action) => {
  //         const page = action.meta?.arg?.originalArgs?.page || 1;
  //         if (page === 1) {
  //           state.listPushNotices = action.payload;
  //         } else {
  //           state.listPushNotices = unionBy([...state.listPushNotices, ...action.payload], 'id');
  //         }
  //       }
  //     );
  //     builder.addMatcher(
  //       userServices.endpoints?.updatePushNoticeStatus?.matchFulfilled,
  //       (state, action) => {
  //         state.listPushNotices = [...state.listPushNotices].map((item: PushNotificationProps) => {
  //           if (item?.id === action.payload.id) {
  //             console.log({
  //               ...item,
  //               isRead: action.payload.isRead,
  //             });
  //             return {
  //               ...item,
  //               isRead: action.payload.isRead,
  //             };
  //           }
  //           return item;
  //         });
  //       }
  //     );
  //   },
});

export const { clearUserData, cacheUserInfo, cacheToken, cacheUsernamePassword } =
  userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
