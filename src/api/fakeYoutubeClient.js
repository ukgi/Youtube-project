import axios from "axios";

export default class FakeYoutube {
  async handleSearch() {
    return axios.get("/data/searchList.json");
  }

  async handleHotTrend() {
    return axios.get("/data/hotTrend.json");
  }

  async handleRelatedVideo() {
    return axios.get("/data/relatedVideo.json");
  }

  async handleDetailInfo() {
    return axios.get("/data/Detail.json");
  }
}
