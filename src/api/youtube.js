export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async handleSearch(search) {
    return search ? this.#searchByKeyword(search) : this.#showHotTrendVideo();
  }

  async handleRelatedVideo(videoId) {
    return this.#showRelatedVideo(videoId);
  }

  async handleDetailInfo(channelId) {
    return this.#getDetailVideoInfo(channelId);
  }

  async #searchByKeyword(search) {
    try {
      const response = await this.apiClient.handleSearch({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: search,
        },
      });
      const items = await response.data.items;
      return items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (err) {
      console.error(err.message);
    }
  }

  async #showHotTrendVideo() {
    try {
      const response = await this.apiClient.handleHotTrend({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      });
      const items = await response.data.items;
      return items;
    } catch (err) {
      console.error(err.message);
    }
  }

  async #showRelatedVideo(videoId) {
    return this.apiClient
      .handleRelatedVideo({
        params: {
          part: "snippet",
          relatedToVideoId: videoId,
          maxResults: 25,
          type: "video",
        },
      })
      .then((res) => {
        console.log("연관 동영상 데이터를 받아옵니다 🌟", res.data.items);
        return res.data.items;
      })
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
      .catch((err) => console.error(err.message));
  }

  async #getDetailVideoInfo(channelId) {
    return this.apiClient
      .handleDetailInfo({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => {
        console.log("상세 데이터를 가져옵니다 ✨", res.data.items);
        return res.data.items;
      })
      .catch((err) => console.log(err.message));
  }
}
