import VideoComponent from "../../components/videoComponent";
import React, { useEffect, useState, useReducer } from "react";
import styles from "./styles.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { log } from "console";

const Interviews = () => {
  const [playList, setPlaylist]: any = useState();
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");

  const [selectedPlayList, setSelectedPlayList]: any = useState({
    id: "PLhl5LbscojEJuSfZKSf3dSSyTZSGl3b4H",
    title: "Blouse embroidery ",
    description: "",
  });
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleUpdate = () => {
    forceUpdate();
  };

  useEffect(() => {
    getVideos();
  }, [selectedPlayList]);

  const apiKey = "AIzaSyAEoJ8hvE3Ixee4cxCRYKdMLITKNgIV5LA";
  const playlistId = selectedPlayList?.id;
  const maxReslut = 9;

  var url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=${maxReslut}`;

  const getVideos = async () => {
    setPlaylist([]);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.nextPageToken) {
          setNextPageToken(data?.nextPageToken);
        } else {
          setNextPageToken("");
        }
        if (data?.prevPageToken) {
          setPrevPageToken(data?.prevPageToken);
        } else {
          setPrevPageToken("");
        }

        const videos = data?.items?.map(
          (item: {
            snippet: {
              resourceId: { videoId: any };
              title: any;
              // thumbnails: { default: { url: any } };
            };
          }) => {
            return {
              id: item.snippet.resourceId.videoId || "",
              title: item?.snippet?.title || "",
              // thumbnail: item.snippet.thumbnails.default.url,
            };
          }
        );
        console.log(videos, ">>>>>");

        setPlaylist(videos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNextPage = () => {
    if (nextPageToken) {
      url += `&pageToken=${nextPageToken}`;
    }
    getVideos();
  };
  const handlePrevPage = () => {
    if (nextPageToken) {
      url += `&pageToken=${prevPageToken}`;
    }
    getVideos();
  };
  const playlist = [
    {
      id: "PLhl5LbscojEJuSfZKSf3dSSyTZSGl3b4H",
      title: "Blouse Embroidery ",
      description: "",
    },
    {
      id: "PLhl5LbscojEJm9Ku6Rz_cz92BgZOuhOcZ",
      title: "Aari Embroidery",
      description: "",
    },
  ];
  const handlePlayList = (data: any) => {
    setPlaylist([]);
    setSelectedPlayList(data);
  };

  return (
    <div >
      <div className={styles.playListfelx}>
        {playlist.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handlePlayList(item)}
              className={
                selectedPlayList?.id === item?.id
                  ? styles.playlistContainer_active
                  : styles.playlistContainer
              }
            >
              {item?.title}
            </div>
          );
        })}
      </div>
      <div className="overflow-y-auto h-600">
  <div className="flex flex-wrap flex-row m-0 mx-auto p-1">
    {playList?.map((item: any, index: any) => {
      return (
        <div
          key={index}
          className="lg:w-1/3 sm:w-1/2 p-2"
          hidden={item?.thumbnail === ""}
        >
          {item?.thumbnail !== " " && (
            <VideoComponent
              height={"200px"}
              width={"350px"}
              embedId={item?.id}
            />
          )}
        </div>
      );
    })}
  </div>
</div>

      {(nextPageToken || prevPageToken) && (
        <div className="mx-auto flex items-center justify-center">
          <div>
            <Stack direction="row" spacing={2}>
              <Button
                disabled={prevPageToken === ""}
                onClick={handlePrevPage}
                style={{ backgroundColor: "#003366" }}
                variant="outlined"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                startIcon={<ArrowLeftIcon fontSize="large" />}
              >
                Prev
              </Button>
              <Button
                disabled={nextPageToken === ""}
                onClick={handleNextPage}
                style={{ backgroundColor: "#003366" }}
                variant="outlined"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                endIcon={<ArrowRightIcon fontSize="large" />}
              >
                Next
              </Button>
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interviews;
