import React from 'react'
import '../../../Styles/Fonts.css'
import '../../../Styles/Shadows.css'

type PrimaryWithIconProps = {
    content: string;
    iconSrc: any
}

const PrimaryWithIcon = ({content, iconSrc}: PrimaryWithIconProps) => {
  return (
    <button className='text-center flex items-center gap-x-[8px] fontButtonDefault bg-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[16px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
    >
        <img src={iconSrc} alt="My Icon" className="icon-class" />
        {content}
    </button>
  )
}

export default PrimaryWithIcon
