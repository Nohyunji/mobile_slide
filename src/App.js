import React ,{ useState, useEffect } from "react";
import './App.css';

function App() {
  const [slide, SetSlide] = useState(false);

  const media = [
    {
      id: 1,
      url:"/img/couple.mp4"
    },{
      id: 2,
      url:`/img/diving.mp4`
    },
    // {
    //   id: 3,
    //   url:`/img/lanterns-phone.mp4`
    // }
  ]

  useEffect(()=>{
    if(slide === false) {
      SetSlide(true);

      setTimeout(() => {

        media.pop(media[0]);

        console.log("media::", media);
        
        // SetSlide(false);
      }, 5000);
    }

  },[slide])

  return (
    <div className="App">
      <div className="app_wrap">
        <div className="content">
          <img src ="/img/mobile.png"/>
          
          <div className="list_wrap">
            <div className={ slide ? `media_list slide_time` : `media_list`}>
              {media.map((media, index) => 
                <video autoPlay loop muted key={index}>
                  <source src={media.url} type="video/mp4" />
                </video> 
              )}           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
