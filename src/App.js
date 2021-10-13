import React, { useState, useEffect } from "react";
import "./App.css";

const videoList = [
  {
    id: 1,
    url: "/img/couple.mp4",
  },
  {
    id: 2,
    url: "/img/diving.mp4",
  },
  {
    id: 3,
    url: "/img/lanterns-phone.mp4",
  },
  {
    id: 4,
    url: "/img/ski.mp4",
  },
];

function App() {
  const [video, setVideo] = useState([
    {
      id: 1,
      url: "/img/couple.mp4",
    },
    {
      id: 2,
      url: `/img/diving.mp4`,
    },
  ]);

  // setInterval을 이용하여 구현하는 방법 ---------------------------
  // const [play, setPlay] = useState([false]);

  // const timeOut = () => {
  //   let i = 2;

  //   setInterval(() => {
  //     video.push(videoList[i]);
  //     setPlay([true]);

  //     video.shift();
  //     setVideo(video);

  //     if (i === videoList.length - 1) {
  //       i = 0;
  //     } else {
  //       i++;
  //     }
  //   }, 3000);
  // };

  // useEffect(() => {
  //   timeOut();
  // }, []);

  // setTimeout을 이용하여 구현하는 방법 ---------------------------
  const [slideState, setSlideState] = useState(false);
  const [cnt, setCnt] = useState(2);

  const timeOut = () => {
    setTimeout(() => {
      let newMedia = [...video];
      newMedia.push(videoList[cnt]);

      setSlideState(true);

      newMedia.shift();
      console.log("newMedia::", newMedia);

      if (cnt === videoList.length - 1) {
        setCnt(0);
      } else {
        setCnt(cnt + 1);
      }

      setVideo(newMedia);

      // let slideCnt = videoList.length - 1;
      // let newMedia = [...video];

      // if (newMedia[0].id < slideCnt) {
      //   newMedia.push(videoList[i + 2]);
      // } else if (newMedia[0].id >= slideCnt) {
      //   newMedia.push({
      //     id: newMedia[0].id - 2,
      //     url: videoList[newMedia[0].id - 3].url,
      //   });
      // }

      // setSlideState(true);

      // newMedia.shift();

      // setVideo(newMedia);
    }, 3000);
  };

  useEffect(() => {
    timeOut();
  }, [video]);

  return (
    <div className="App">
      <div className="app_wrap">
        <div className="content">
          <img src="/img/mobile.png" />

          <div className="list_wrap">
            {video.map((video, index) => (
              <div
                key={video.id}
                className={slideState && index === 0 ? "video_list slide_trans" : "video_list"}
                // className={play[index] ? "video_list slide_trans" : "video_list"}
              >
                <video autoPlay loop muted src={video.url} type="video/mp4"></video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
