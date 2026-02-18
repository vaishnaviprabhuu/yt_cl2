export default function CommentItem({ comment }) {
  return (
    <div className="d-flex mb-3">
      <img
        src={comment.avatar}
        alt="avatar"
        className="rounded-circle"
        width="35"
        height="35"
      />

      <div className="ms-3">
        <div className="fw-semibold small">
          {comment.user}
        </div>
        <div className="small text-muted">
          {comment.text}
        </div>
      </div>
    </div>
  );
}