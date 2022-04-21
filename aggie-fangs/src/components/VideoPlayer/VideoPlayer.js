const Videoplayer = ({ videoId }) => {
    if (!videoId) {
      return (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold"}}>
          Search for a video
        </p>
      );
    }
    return (
      <div className="video-player">
        <iframe class="video-iframe"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={videoId}
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </div>
    );
  };
   
  export default Videoplayer;