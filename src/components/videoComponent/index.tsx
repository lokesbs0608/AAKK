import React, { useState } from "react";
import { Skeleton } from "@mui/material";

const VideoComponent = ({ embedId, height, width }: any) => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  return (
    <div style={{ borderRadius: "10px" }}>
      {!videoLoaded && (
        <div style={{width:`${width}`,  }} >
          <Skeleton
            variant="rectangular"
            width={width}
            height={height}
            animation="wave"
            // sx={{ bgcolor: `linear-gradient(to right, #ea4c4c, #f4a04e, #f6dc5b, #5b9c5a, #5b6fa1, #8b478d)` }}
          />
        </div>
      )}
      <iframe
        width={width ? width : "100%"}
        height={height ? height : "600px"}
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        onLoad={() => setVideoLoaded(true)}
        style={{ display: videoLoaded ? "block" : "none" }}
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;