import React from 'react';
import img1 from '../Asset/img1.png';
import img from '../Asset/img.png';
import img2 from '../Asset/img2.png';
import img3 from '../Asset/img3.png';
import img4 from '../Asset/img4.png';
import img5 from '../Asset/img5.png';
import img6 from '../Asset/img6.png';
import img7 from '../Asset/img7.png';

function Content() {
  const videoData = [
    {
      thumbnail: img,
      title: "React Full Course|Full Stack Develop ",
      channel: "Balachandra",
      views: "680K views",
      timestamp: "1 year ago",
    },
    {
      thumbnail: img2,   
      title: "Python Tutorial - Python Full Course for Beginners",
      channel: "Programming with mosh",
      views: "5M views",
      timestamp: "7 year ago",
    },
    {
      thumbnail: img1,
      title: "Master MySQL: Complete 3-Hour SQL Tutorial for Beginners",
      channel: "Master Mind",
      views: "1.1M views",
      timestamp: "1 month ago",
    },
    {
      thumbnail: img3,
      title: "India Today LIVE TV: Gunfire Heard AP Dhillon's Canada Home ",
      channel: "India Today",
      views: "1M views",
      timestamp: "1 day ago",
    },
    {
      thumbnail: img4,
      title: "Are you ready to discover my new channel?",
      channel: "UR Cristiano",
      views: "18 views",
      timestamp: "12 days ago",
    },
    {
      thumbnail: img5,
      title: "2022 Michelin GT Challenge at VIR",
      channel: "IMSA Offical",
      views: "1.3M views",
      timestamp: "1.5 year ago",
    },
    {
      thumbnail: img6,
      title: "Marriage Biryani Cooking In Village | Biryani Recipe",
      channel: "Village cooking channel",
      views: "45M views",
      timestamp: "4 year ago",
    },
    {
      thumbnail: img7,
      title: "Avengers infinity war climax fight scene in tamil ",
      channel: "G WOOD",
      views: "27M views",
      timestamp: "2 year ago",
    },
    
  
  ];

  return (
    <div className="content">
      <div className="videoGrid">
        {videoData.map((video, index) => (
          <div key={index} className="videoCard">
            <img className="videoCard__thumbnail" src={video.thumbnail} alt={video.title} />
            <div className="videoCard__info">
              
              <h2>{video.title}</h2>
              <p>{video.channel}</p><br></br>
              <p>{video.views} • {video.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
