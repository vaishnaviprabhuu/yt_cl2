import { useState } from "react";
import CommentItem from "./CommentItem";

export default function CommentsSection({ comments }) {
  const [showAll, setShowAll] = useState(false);

  const visibleComments = showAll
    ? comments
    : comments.slice(0, 2);

  return (
    <div className="mt-4">
      <h6 className="fw-semibold mb-3">{comments.length} Comments</h6>

      <div className="d-flex align-items-center mb-4">
        <img
          src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-little-girl-600nw-2579821615.jpg"
          alt="user"
          className="rounded-circle"
          width="35"
          height="35"
        />
        <input
          type="text"
          className="form-control border-0 border-bottom ms-3"
          placeholder="Add a comment..."
        />
      </div>

      {visibleComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

      {comments.length > 2 && (
        <div
          className="mt-2"
          style={{ cursor: "pointer", fontWeight: "500" }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Comments"}
        </div>
      )}
    </div>
  );
}