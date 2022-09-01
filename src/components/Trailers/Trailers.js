import React from "react";
import "./Trailers.css"
import ReactPlayer from "react-player"

const Trailers = ({videos}) => {
    console.log('vdieo prop', videos)
    const trailerStyle = {
        display: `flex`,
    }
    const videoTrailers = videos.map(video => {
        const {id, key} = video
        return <ReactPlayer key={id} width={`300px`} height={`250px`}
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