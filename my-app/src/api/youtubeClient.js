import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY },
    });
  }

  async handleSearch(params) {
    return this.httpClient.get("search", params);
  }

  async handleHotTrend(params) {
    return this.httpClient.get("videos", params);
  }

  async handleRelatedVideo(params) {
    return this.httpClient.get("search", params);
  }

  async handleDetailInfo(params) {
    return this.httpClient.get("channels", params);
  }
}
