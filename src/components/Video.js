import React, { useRef, useState } from 'react'
import './css/Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Video = ({url, channel, description, song, likes, messages, shares}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className='video'>
            {
                playing ? '' : 
            <PlayArrowIcon fontSize='large' className='pause__btn' />
            }
            <video 
                onClick={handleVideoPress}
                ref={videoRef}
                src={url} 
                loop
                className="video__player"
            ></video>

            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div> 
    )
}

export default Video
