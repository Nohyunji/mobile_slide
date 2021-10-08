import React ,{ useState, useEffect } from "react";
import './App.css';

function App() {
  const [media, setMedia] = useState([
    {
      id: 1,
      url:"/img/couple.mp4"
    },{
      id: 2,
      url:`/img/diving.mp4`
    }
  ]);

  // const [slide, setSlide] = useState(media[0].id); 
  // const [cssAdd, setCssAdd] = useState(false);

  useEffect(()=>{
    console.log("useEffect");
    // setCssAdd(true);

    setInterval(timeOut, 5000);
    
    // return () => {
    //   console.log("component is finished")
    //   console.log("--------------------------------------------------------------")
    //  }
  },[])


  const timeOut = () => {
    console.log("timeOut" , media[0].id);

    // let newMedia = [...media]; 
    let newMedia = media; 

    console.log("media",media);
    if( newMedia[0].id === 1) {
      newMedia.push({
        id: 3,
        url:`/img/lanterns-phone.mp4`
      })

      newMedia.shift();
    }

    else if( newMedia[0].id === 2) {
      newMedia.push({
        id: 1,
        url:`/img/couple.mp4`
      })

      newMedia.shift();
    }

    else if( newMedia[0].id === 3) {
      newMedia.push({
        id: 2,
        url:`/img/diving.mp4`
      })

      newMedia.shift()
    }

    setMedia(newMedia);
    
    console.log("-------------------------");
  }

  console.log("render");
    return (
      <div className="App">
        <div className="app_wrap">
          <div className="content">
            <img src ="/img/mobile.png"/>

            <div className="list_wrap">
                {media.map((media,index) =>
                  <div key={index} className="media_list">
                  {/* <div key={index} className={slide === index ? "media_list slide_time" : "media_list slide_time_reset"}> */}
                    <video autoPlay loop muted src={media.url} type="video/mp4"></video> 
                  </div>
                )}           
            </div>
          </div>
        </div>
      </div>
    );
  }

export default App;