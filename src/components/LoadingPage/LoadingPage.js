import React from 'react'

import TallProjector from "../../assets/tall-projector.gif"
import "./LoadingPage.css"

const LoadingPage = () => {

    return (
            <section className='loading-container' aria-label='loading'>
                <div className='loading-text' aria-label='loading'>
                    <div className='loading-word'>Lights!</div>
                    <div className='loading-word'>Camera!</div>
                    <div className='loading-word'>Action!🎬</div>
                </div>
                <div className='loading'>
                    <img src={ TallProjector } alt="Tall Projector"></img>
                </div>
            </section>
    )
}

export default LoadingPage