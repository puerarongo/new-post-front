import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";
import IPlaceBody from "../../helpers/interface/placeBody.interface";

export const getPlaceData: any = createAsyncThunk(
  "place/getPlace",
  async (body: IPlaceBody, thunkAPI) => {
    try {
      const req = await axios({
        method: "post",
        url: `${BASE_URL}/places`,
        data: body,
      });
      console.log("operation getPlace", req);
      return req.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
