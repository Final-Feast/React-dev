// store.js: Redux store’unu ve reducer’ları birleştiren dosya.

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./auth/authSlice";
import diaryReducer from "./diary/diarySlice";
import productsReducer from "./products/productsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const productsPersistConfig = {
  key: "products",
  storage,
  whitelist: ["randomNotAllowedFoods"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  diary: diaryReducer,
  products: persistReducer(productsPersistConfig, productsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
