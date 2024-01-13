import { useParams } from "react-router-dom";
import SWR from "swr";
import { getStreamableTrailerUrl } from "../../fetchers/fetchers";
import "./style.css";

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
    return (
      <video src={streamableVideoUrl} controls className="video_player"></video>
    );
  } else if (isError) {
    return <p className="loading">{error.message}</p>;
  }
}
