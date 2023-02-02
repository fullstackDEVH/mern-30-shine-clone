import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IService {

};

interface IService {

};

interface BookingState {
    salon : string;
    services: IService[];
    time : string;
    startOfDate : string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};
  
const initialState = {
    salon : "",
    services: [],
    startOfDate : "",
    time : "",
    loading: 'idle',
} as BookingState;

interface MyKnownError{
  errorMessage: string;
};



const fetchBooking = createAsyncThunk<
  string, //Return type of the payload creator
  BookingState, //  First argument to the payload creator, format interface
  {
    extra: {
      jwt: string
    },
    rejectValue : MyKnownError
  }
>(
    'users/fetchById',
    // Declare the type your function argument here:
    async (user: {}, { rejectWithValue, extra }) => {
        const { } = user
        const response = await fetch(`https://reqres.in/api/users/${1}`, {
          method: 'PUT',
          // headers: {
          //   Authorization: `Bearer ${extra.jwt}`,
          // },
          body: JSON.stringify(user),
        })
        if (response.status === 400) {
          // Return the known error for future handling
          return rejectWithValue((await response.json()) as MyKnownError)
        }
        return (await response.json()) as string
      
    }
  )

const bookingSlice = createSlice({
    name: 'bookingInfor',
    initialState,
    reducers: {
        setSalon : (state, action : PayloadAction<string>) => {
            state.salon = action.payload;
        },
        setService : (state, action : PayloadAction<IService>) => {
          
        },
        setTime : (state, action) => {

        }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchUserById.pending, (state, action) => {
        //   // both `state` and `action` are now correctly typed
        //   // based on the slice state and the `pending` action creator
        // })
      },
    
  })


export const { setSalon } = bookingSlice.actions;
export default bookingSlice.reducer;
