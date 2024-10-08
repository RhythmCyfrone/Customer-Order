import { useState } from "react";

const useBillDetailsViewModel = (note: boolean, discount: boolean) => {
    const [isRotated, setIsRotated] = useState(false);
    const [viewBill, setViewBill] = useState(false)
    const [viewDetailsText, setViewDetailsText] = useState(true)
    const [closeText, setCloseText] = useState(false)
    const [viewMore, setViewMore] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const specialFeature = !(note || discount)
    
    const bottomPadding = isRotated?'pb-[16px]':'pb-[32px]'
    const topPadding = isRotated || (screenHeight > 750 && viewMore)?'pt-[16px]':'pt-[32px]'
    const translate = isRotated || (screenHeight > 750 && viewMore)?'-translate-y-[60%]':'-translate-y-[50%]'

    const handleIconClick = () => {
        setIsRotated(!isRotated);
        if(!viewBill)
            setViewBill(true)
        if(!closeText)
            setCloseText(true)
        if(!viewDetailsText)
            setViewDetailsText(true)
    };

    return {
        isRotated,
        setIsRotated,
        viewBill,
        setViewBill,
        viewDetailsText,
        setViewDetailsText,
        closeText,
        setCloseText,
        viewMore,
        setViewMore,
        screenHeight,
        setScreenHeight,
        specialFeature,
        bottomPadding,
        topPadding,
        translate,
        handleIconClick
    }
}

export default useBillDetailsViewModel