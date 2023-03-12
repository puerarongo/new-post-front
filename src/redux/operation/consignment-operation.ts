import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";
import IConsignmentBody from "../../helpers/interface/consignmentBody.interface";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getConsignmentData: any = createAsyncThunk(
  "consignment/getConsignment",
  async (body: IConsignmentBody, thunkAPI) => {
    try {
      const req = await axios({
        method: "post",
        url: `${BASE_URL}/consignment`,
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
