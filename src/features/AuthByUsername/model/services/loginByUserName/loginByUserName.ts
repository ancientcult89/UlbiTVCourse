import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "entities/User";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
      try{
          const response = await axios.post('http://localhost:8000/login', authData);
          return response.data;
      }
      catch (e) {
          console.log(e);
          return thunkAPI.rejectWithValue('error');
      }
  }
);