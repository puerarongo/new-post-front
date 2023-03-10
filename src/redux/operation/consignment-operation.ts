import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";
import IConsignmentBody from "../../helpers/interface/consignmentBody.interface";

export const getConsignmentData: any = createAsyncThunk(
  "consignment/getConsignment",
  async (body: IConsignmentBody) => {
    try {
      const req = await axios({
        method: "post",
        url: `${BASE_URL}/consignment`,
        data: body,
      });
      console.log("operation getConsignment", req);
      return req.data;
    } catch (err) {
      console.log(err);
    }
  }
);
