import YouTube from 'react-youtube';

export default function VideoBox(){

    const opts = {
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
  
    return (
        <YouTube videoId="_nBlN9yp9R8" opts={opts}/>
    )
}