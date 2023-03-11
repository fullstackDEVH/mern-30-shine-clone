export default {};

/*
import { createAsyncThunk, createSlice, PayloadAction, AsyncThunk} from "@reduxjs/toolkit";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface MyData {
  // ...
};

interface UserAttributes {
  name : string;
}

interface MyKnownError{
  errorMessage: string;
};

// use OMIT AND PICK to delete field in interface
export const loginUser = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    return await loginApi(body).catch((err) => {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    });
  }
);

const fetchUserById = createAsyncThunk<
  MyData, //Return type of the payload creator
  UserAttributes, //  First argument to the payload creator, format interface
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
        return (await response.json()) as MyData
      
    }
  )
  
  

interface UsersState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
  
const initialState = {
    entities: [],
    loading: 'idle',
} as UsersState
  
const slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
      prepare : {
          reducer : (state, action: PayloadAction<string>) => {

          }
          prepare : (name : string) => ({
            payload : "123"
          })
      }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchUserById.pending, (state, action) => {
        //   // both `state` and `action` are now correctly typed
        //   // based on the slice state and the `pending` action creator
        // }),
        builder.addMatcher<PendingAction>((action) => action.type.endsWith('/fulfilled'),
        (state, action ) => {
          state.loading = "pending";
        })
      },
    
  })

  export default slice.reducer;
  
  */
