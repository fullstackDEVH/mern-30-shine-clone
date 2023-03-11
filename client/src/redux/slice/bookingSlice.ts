import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import http from '../../constant/api';


interface IService {

};

interface ISalon {

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


interface IRegion {
  name : string;
  provices : []
};

interface IRegionRespon {
  regions : IRegion[]
};

export const fetchRegions = createAsyncThunk<
  IRegionRespon | undefined , void, { }
>(
  
    'booking/regions',
    async (_ , {})  => {
      try {
          
        const response = await http.get("/regions/all");
        console.log('res', response)

        if (response.status === 200 ) {
  
          return response.data as IRegionRespon;
        }
      
      } catch (err) {
          const error = err as AxiosError<MyKnownError> ;  // this os the lines 
          if (!error.response) {
            throw err;
          }
          // return thunkApi.rejectWithValue(error.response?.data);
      }
    }
  );

  export const fetchProvices = createAsyncThunk(
    'booking/provices',
    async (_ , thunkApi)  => {
      try {
          
        const response = await http.get("/provices/search?keyword=thanh");
        console.log(response)
        
        if (response.status === 200 ) {
  
          return response.data ;
        }
      
      } catch (err) {
          const error = err  ;  // this os the lines 
        
          return thunkApi.rejectWithValue(error);
      }
    }
  );

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
        // all region 
        builder.addCase(fetchRegions.pending, (state, action) => {
          state.loading = "pending";
        }),
        builder.addCase(fetchRegions.fulfilled, (state, action : PayloadAction<any>) => {
          state.loading = "succeeded";
        }),
        builder.addCase(fetchRegions.rejected, (state, action) => {
          state.loading = "failed";
        }),
        // provice
        builder.addCase(fetchProvices.pending, (state, action) => {
          state.loading = "pending";
        }),
        builder.addCase(fetchProvices.fulfilled, (state, action : PayloadAction<any>) => {
          state.loading = "succeeded";
          console.log('payload full ', action)
        }),
        builder.addCase(fetchProvices.rejected, (state, action) => {
          state.loading = "failed";
        })
      },
    
  })


export const { setSalon } = bookingSlice.actions;
export default bookingSlice.reducer;
