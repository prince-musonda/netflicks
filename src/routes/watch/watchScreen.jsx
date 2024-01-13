import { useParams } from "react-router-dom";
import SWR from "swr";
import { getStreamableTrailerUrl } from "../../fetchers/fetchers";
import "./style.css";

function CustomVideoPlayer(props) {
  return (
    <div className="video_container">
      <video src={props.src} controls className="video_player"></video>
    </div>
  );
}

export default function WatchScreen() {
  const { trailerId: youtubeVideoId } = useParams();
  const {
    data: streamableVideoUrl,
    isLoading,
    isError,
    error,
  } = SWR(youtubeVideoId, getStreamableTrailerUrl);
  console.log(youtubeVideoId);
  if (isLoading) {
    return <p className="loading">Loading</p>;
  } else if (streamableVideoUrl) {
    console.log(streamableVideoUrl);
    return <CustomVideoPlayer src={streamableVideoUrl} />;
  } else if (isError) {
    return <p className="loading">{error.message}</p>;
  }
}
