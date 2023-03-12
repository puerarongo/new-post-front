import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";
import IPlaceBody from "../../helpers/interface/placeBody.interface";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getPlaceData: any = createAsyncThunk(
  "place/getPlace",
  async (body: IPlaceBody, thunkAPI) => {
    try {
      const req = await axios({
        method: "post",
        url: `${BASE_URL}/places`,
        data: body,
      });
      return req.data;
    } catch (err: any) {
      const message = err.response.data.message;
      Notify.failure(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
