import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "./categorySlice";
// import cartReducer from "./cartSlice";
// import appConfigSlice from "./appConfigSlice";
// import storage from "redux-persist/lib/storage";
import courseSlice from "./courseSlice";
// export default configureStore({
//   reducer: {
//     courseReducer: courseSlice,
//     // categoryReducer,
//     // cartReducer,
//   },
// });

const rootReducer = combineReducers({
  course: courseSlice.reducer,
  // other: otherSlice.reducer, // Add other reducers here
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
