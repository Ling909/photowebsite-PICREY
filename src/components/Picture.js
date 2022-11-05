import React from 'react'

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <div className="imageContainer">
                <img src={data.src.large} alt="" />
            </div>
            <button>
                <a target="_blank" href={data.src.original}>
                    Download
                </a>
            </button>
        </div>
    )
}

export default Picture
