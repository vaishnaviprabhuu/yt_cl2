export default function VideoTitle({title,views,uploaded}){
    return(
        <div className="mb-2">
            <h4 className="fw-semibold">
                {title}
            </h4>
            <p className="text-muted mb-0 small">
                 {views} {uploaded}   
            </p>
        </div>
    );
}