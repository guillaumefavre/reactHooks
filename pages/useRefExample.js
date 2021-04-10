import React from 'react'

import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const useRefExample = () => {

    return  <div>
                <ImageToggleOnMouseOver 
                    firstImage="static/images/hideThePainHarold_1.PNG"
                    secondImage="static/images/hideThePainHarold_2.PNG" />
            </div>
}

export default useRefExample