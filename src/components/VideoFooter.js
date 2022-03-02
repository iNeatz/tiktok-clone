import React from 'react'
import './css/VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div class="videoFooter__ticker">
                    <MusicNoteIcon 
                        className="videoFooter__icon"
                    />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
                <img 
                    className="videoFooter__record"
                    src="https://static.thenounproject.com/png/934821-200.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default VideoFooter
 