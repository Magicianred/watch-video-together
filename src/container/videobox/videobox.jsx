import YouTube from 'react-youtube';

// Styles
import './style.css'

export default function VideoBox(props){
  
    return (
      <iframe
       allowfullscreen="allowfullscreen"
       mozallowfullscreen="mozallowfullscreen" 
       msallowfullscreen="msallowfullscreen" 
       oallowfullscreen="oallowfullscreen" 
       webkitallowfullscreen="webkitallowfullscreen"
       src={"https://www.youtube.com/embed/" + props.videoid +  "?fs=1&color=white&autohide=0&controls=0&disablekb=1"}>
          
      </iframe>
        // <YouTube videoId="_nBlN9yp9R8" opts={opts}/>
    )
}