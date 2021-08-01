import React from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import ButtonIcon from "./components/DarkMode/ButtonIcon";
import "./App.css";

class App extends React.Component {
  state = { videos: [], videoSelected: null };

  componentDidMount() {
    this.onSearchVideos("cars");
  }

  onSearchVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0],
    });
  };

  onVideoSelected = (video) => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div className="app ui container" style={{ marginTop: "20px" }}>
        <div className="ui grid">
          <ButtonIcon />
        </div>
        <SearchBar onSubmitForm={this.onSearchVideos} />

        <div className="ui grid">
          <div className="ui row">
            <div className="sixteen wide tablet  eleven wide computer column ">
              <VideoDetail
                className="video-detail"
                video={this.state.videoSelected}
              />
            </div>
            <div className="sixteen wide tablet five wide computer  column ">
              <VideoList
                onVideoSelected={this.onVideoSelected}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
