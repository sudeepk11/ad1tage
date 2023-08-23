import Axios from "axios";
import setAuthToken from "./setAuthToken";
import config from "./config";

export const getApi = async (action, url) => {
  try {
    let token = localStorage.getItem("auth_token");
    if (token) {
      setAuthToken(token);
    }
    let apiUrl = `${config.serverURL + config.version}${action}`;
    console.log(apiUrl);
    const response = await Axios.get(apiUrl);

    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const postApi = async (action, data) => {
  try {
    let token = localStorage.getItem("auth_token");
    if (token) {
      setAuthToken(localStorage.getItem("auth_token"));
    }
    let apiUrl = `${config.serverURL + config.version}${action}`;
    const response = await Axios.post(apiUrl, data);
    return response?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const putApi = async (action, data) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    let apiUrl = `${config.serverURL + config.version}${action}`;
    const response = await Axios.put(apiUrl, data);
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const postFormData = async (action, formData) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    const response = await Axios.post(
      `${config.serverURL + config.version}${action}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const deleteApi = async (action, data) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    let apiUrl = `${config.serverURL + config.version}${action}`;
    const response = await Axios.delete(apiUrl, data);
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};
