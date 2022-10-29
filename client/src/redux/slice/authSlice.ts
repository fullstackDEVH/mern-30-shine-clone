import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyData {
    // ...
  }

  interface MyKnownError{
    
  }
  
/*const fetchUserById = createAsyncThunk(
    'users/fetchById',
    // Declare the type your function argument here:
    async (user: {}, { rejectWithValue, extra }) => {
        const { } = user
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
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
  )*/
  
  

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
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchUserById.pending, (state, action) => {
        //   // both `state` and `action` are now correctly typed
        //   // based on the slice state and the `pending` action creator
        // })
      },
    
  })

  export default slice.reducer;
