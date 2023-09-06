import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosClient from "../utils/axiosClient";

// export const getMyInfo = createAsyncThunk(
//   "/users/me",
//   // async (body, thunkAPI) => {
//   // as body is declared but not used so writing underscrore in place of that "_"
//   async (_, thunkAPI) => {
//     try {
//       console.log("asyncthunkgetMyInfo");
//       const responseAsyncThunk = await axiosClient.get("/users/me");

//       console.log(`api called from getInfo configSlice`, responseAsyncThunk);

//       return responseAsyncThunk;
//     } catch (err) {
//       console.log("error in app reducer", err);
//       return Promise.reject(err);
//     } finally {
//       // dispatching another action from here
//       // thunkAPI.dispatch(setLoading(false));
//     }
//   }
// );

const courseSlice = createSlice({
  name: "courseSlice",
  // initialState can accessed anywhre inside the app a
  initialState: {},
  extraReducers: (builder) => {
    // when builder.addcase is getting fulfilled then  we want whatever data we get ,it should be saved
    // in the profile
    builder.addCase((state, action) => {
      // after getting from the above and it comes inside the action.payload , we update the
      // myProfile state
      state.myCourse = [
        { id: 1, name: "Course 1", price: "987" },
        { id: 2, name: "Course 2", price: "387" },
        { id: 3, name: "Course 3", price: "687" },
        { id: 4, name: "Course 4", price: "687" },
        { id: 5, name: "Course 5", price: "547" },
      ];
    });
  },

  // you need to pass or add extraReducer , when we introduce  asyncthunk in it
  // pending or rejected state can also be handled
  //   extraReducers: (builder) => {
  //     // when builder.addcase is getting fulfilled then  we want whatever data we get ,it should be saved
  //     // in the profile
  //     builder.addCase(getMyInfo.fulfilled, (state, action) => {
  //       console.log(action.payload);
  //       // after getting from the above and it comes inside the action.payload , we update the
  //       // myProfile state
  //       state.myProfile = action.payload;
  //     });
  //   },
});

export default courseSlice.reducer;
