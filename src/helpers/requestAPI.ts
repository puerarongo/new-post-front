import axios from "axios";
const headers: any = { "content-type": "application/x-www-form-urlencoded" };
const data: any = {
  apiKey: "e08e4cf65d8fd8256438f016b698ac72",
  modelName: "Address",
  calledMethod: "getWarehouseTypes",
  methodProperties: {},
};

const requestAPI = async () => {
  const res = await axios({
    method: "post",
    url: "https://api.novaposhta.ua/v2.0/json/",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
  return res;
};

export default requestAPI;
