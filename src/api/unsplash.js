import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 02d6d04173538abd66e152da377e602d8e3bad0a0278886709c3ac3714581556"
  }
});
