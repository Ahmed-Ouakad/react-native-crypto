import {configureStore} from '@reduxjs/toolkit';
import coinReducer from './coin'
export const store = configureStore({
  reducer :{
    coin : coinReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
});
