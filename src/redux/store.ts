import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import placeReducer from "./reducer/place-reducer";
import consignmentReducer from "./reducer/consignment-reducer";
import historySlice from "./slices/historySlice";
import valueSlice from "./slices/valueSlice";

// ? redux-persist and middleware
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "persistHistory",
  storage,
  whitelist: ["history"],
};

export const store = configureStore({
  reducer: {
    place: placeReducer,
    consignment: consignmentReducer,
    value: valueSlice,
    history: persistReducer(persistConfig, historySlice),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
