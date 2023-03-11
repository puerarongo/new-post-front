import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";
import IConsignmentBody from "../../helpers/interface/consignmentBody.interface";

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
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
