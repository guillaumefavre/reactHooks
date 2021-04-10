import React, { useRef } from 'react'

const ImageToggleOnMouseOver = ({firstImage, secondImage}) => {

    const imageRef = useRef(null)

    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondImage
        }} 
            onMouseOut={() => {
            imageRef.current.src = firstImage
        }} 
            src={firstImage}
            alt=''
            ref={imageRef}
        />
    )
}

export default ImageToggleOnMouseOver