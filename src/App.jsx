import data from "./data/videoData.json";
import VideoTitle from "./components/VideoTitle";
import ChannelSection from "./components/ChannelSection";
import Description from "./components/Description";
import CommentsSection from "./components/CommentsSection";

export default function App() {
  if (!data) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div
      className="container"
      style={{
        maxWidth: "900px",
        marginTop: "30px",
      }}
    >
      <VideoTitle
        title={data.title}
        views={data.views}
        uploaded={data.uploaded}
      />

      <ChannelSection
        channel={data.channel}
        likes={data.likes}
      />

      <Description text={data.description} />

      <CommentsSection comments={data.comments} />
    </div>
  );
}