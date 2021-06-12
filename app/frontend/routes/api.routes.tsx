import { ApiResponse } from "#types/api.type";
import axios from "axios";
import firebase from "firebase/app";

const ApiRoutes = {
  signIn: async (credential: firebase.auth.UserCredential) => {
    try {
      const res = await axios.post("/api/sign-in", { credential });
      console.log(res);

      if (!res.data.success) throw Error();

      return ApiResponse.success();
    } catch (err) {
      console.log(err);
      return ApiResponse.failure();
    }
  },
};

export default ApiRoutes;
