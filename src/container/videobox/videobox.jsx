// Styles
import './style.css'

export default function VideoBox(props){
  
    return (
      <iframe
       allowFullScreen="allowfullscreen"
       mozallowfullscreen="mozallowfullscreen" 
       msallowfullscreen="msallowfullscreen" 
       oallowfullscreen="oallowfullscreen" 
       webkitallowfullscreen="webkitallowfullscreen"
       src={"https://www.youtube.com/embed/" + props.videoid +  "?fs=1&color=white&autohide=0&controls=1&disablekb=1"}>
      </iframe>
    )
}