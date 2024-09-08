import React from 'react'
import '../../../Styles/Fonts.css'
import '../../../Styles/Shadows.css'

type SecondaryWithIconProps = {
    content: string;
    iconSrc: any
}

const SecondaryWithIcon = ({content, iconSrc}: SecondaryWithIconProps) => {
  return (
    <button className='text-center flex items-center gap-x-[8px] fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[8px] pe-[16px] hover:ShadowPrimaryHover
                    hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
    >
        <img src={iconSrc} alt="My Icon" className="icon-class" />
        {content}
    </button>
  )
}

export default SecondaryWithIcon
