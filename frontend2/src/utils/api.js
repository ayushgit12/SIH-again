import axios from "axios";

export const sendMouseDataToAPI = (data) => {
  axios
    .post("http://127.0.0.1:5000/mouse-data", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      //   console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
