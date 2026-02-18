import { useState } from "react";

export default function ChannelSection({ channel, likes }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [subscribed, setSubscribed] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setDisliked(false);
      setLikeCount(likeCount + 1);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      setDisliked(true);
      setLiked(false);
      if (liked) setLikeCount(likeCount - 1);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mt-3 pb-3 border-bottom">
      <div className="d-flex align-items-center">
        <img
          src={channel.avatar}
          alt="avatar"
          className="rounded-circle"
          width="45"
          height="45"
        />

        <div className="ms-3">
          <div className="fw-semibold">{channel.name}</div>
        </div>

        <button
          onClick={() => setSubscribed((s) => !s)}
          aria-pressed={subscribed}
          aria-label={
            subscribed
              ? `Unsubscribe from ${channel.name}`
              : `Subscribe to ${channel.name}`
          }
          className="btn btn-dark btn-sm rounded-pill ms-4 px-3"
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <div
          className="d-flex align-items-center rounded-pill px-3 py-2"
          style={{ backgroundColor: "#f2f2f2", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5e5e5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f2f2f2")}
        >
          <button
            onClick={handleLike}
            className="btn p-0 border-0 bg-transparent d-flex align-items-center"
          >
            <i
              className={`bi ${liked ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}`}
              style={{ fontSize: "18px" }}
            ></i>
          </button>

          <span className="ms-2 me-3 small">{likeCount}</span>

          <div style={{ width: "1px", height: "20px", backgroundColor: "#ccc" }}></div>

          <button onClick={handleDislike} className="btn p-0 border-0 bg-transparent ms-3">
            <i
              className={`bi ${disliked ? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-down"}`}
              style={{ fontSize: "18px" }}
            ></i>
          </button>
        </div>

        <button
          className="btn d-flex align-items-center gap-2 rounded-pill px-3 py-2"
          style={{ backgroundColor: "#f2f2f2", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5e5e5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f2f2f2")}
        >
          <i className="bi bi-share" style={{ fontSize: "18px" }}></i>
          <span className="small">Share</span>
        </button>
      </div>
    </div>
  );
}