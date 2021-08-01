import axios from "axios";

const KEY = "AIzaSyBOyYRd7mLXvtL-K8qy68Fx9b0J2-S2MDA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 25,
  },
});
