import React from "react";
import "./Trailers.css"
import ReactPlayer from "react-player"

const Trailers = ({videos}) => {
    const videoTrailers = videos.map(video => {
        const {id, key} = video
        return <ReactPlayer key={id} width={`12vw`} height={`12vh`}
                url={`https://www.youtube.com/watch?v=${key}`}
                />
    })
    return (
        <div className="trailer-videos">
            {videoTrailers}
        </div>
    )
}

export default Trailers