import React from "react";
import "./styles.css";
function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}
function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}
function constructVideoTitles(vidoesData, onVideoSelected, meta2) {
  return vidoesData.map(({snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(meta2[index].contentDetails, onVideoSelected)}>
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}
const Video = ({ data, onVideoSelected, meta2}) => {
  return <>{constructVideoTitles(data, onVideoSelected, meta2)}</>;
};

export default Video;