import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import thunkMiddleware from 'redux-thunk';
import { IS_ANDROID } from '~constants/index';

import rootReducer from '~reducers/rootReducer';

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  //   action?.meta?.arg?.queryCacheKey &&
  //     console.log(
  //       `
  // ${action?.meta?.baseQueryMeta?.request?.url ? `\u001b[34m` : `\u001b[32m`}${
  //         action?.meta?.arg?.queryCacheKey
  //       }
  // ${action?.meta?.baseQueryMeta?.request?.url || ''}
  //     `
  //     );
  // if (isRejectedWithValue(action)) {
  //   console.log(
  //     `
  //         \u001b[31mWe got a rejected action!
  //         ${action?.meta?.arg?.queryCacheKey}
  //         ${action?.meta?.baseQueryMeta?.request?.url}
  //         ${JSON.stringify(action?.payload?.data, null, 2)}
  //       `
  //   );
  // }

  // User Blocked : {type : 'auth_exception_user_blocked' , code:401}
  // Token Expired : {type : 'auth_exception_token_expired' , code:401}

  // const code = action?.payload?.data?.code;
  // const type = action?.payload?.data?.type;

  // if (code === 401 && type === 'auth_exception_user_blocked') {
  //   DeviceEventEmitter.emit(LOGIN_EXPIRED_TYPES.USER_BLOCKED);
  // }

  // if (code === 401 && type === 'auth_exception_token_expired') {
  //   DeviceEventEmitter.emit(LOGIN_EXPIRED_TYPES.TOKEN_EXPIRED);
  // }

  return next(action);
};

const persistConfig = {
  key: 'root',
  storage: IS_ANDROID ? FilesystemStorage : AsyncStorage,
  blacklist: [],
};
export type RootState = ReturnType<typeof store.getState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: any[] = [thunkMiddleware, rtkQueryErrorLogger];

if (__DEV__) {
}
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
      immutableCheck: false,
    }).concat(middlewares),
});
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store);

export default store;
