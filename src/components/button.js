import react from "react"
import {ReactComponent as Comp } from '../Component2.svg';
import styled from "styled-components";
import { useState } from "react";




export default function BtnSvg(name){

return(
<svg width="458" height="116" viewBox="0 0 458 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_di_4_12)">
<rect x="79" width="300" height="108" rx="18" fill="#4F4F4F"/>
</g>
<g filter="url(#filter1_d_4_12)">
<rect x="79" y="15" width="300" height="10" fill="#787878"/>
</g>
<g filter="url(#filter2_d_4_12)">
<rect x="79" y="83" width="300" height="10" fill="#787878"/>
</g>
<g filter="url(#filter3_i_4_12)">
<rect x="79" y="25" width="300" height="58" fill="#C4C4C4"/>
</g>
<g filter="url(#filter4_d_4_12)">
<path d="M4 54L79 15.0289L79 92.9711L4 54Z" fill="#787878"/>
</g>
<g filter="url(#filter5_d_4_12)">
<path d="M454 54L379 92.9711V15.0289L454 54Z" fill="#787878"/>
</g>
<defs>
<filter id="filter0_di_4_12" x="75" y="0" width="308" height="116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_12" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_4_12"/>
</filter>
<filter id="filter1_d_4_12" x="75" y="15" width="308" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_12" result="shape"/>
</filter>
<filter id="filter2_d_4_12" x="75" y="83" width="308" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_12" result="shape"/>
</filter>
<filter id="filter3_i_4_12" x="79" y="25" width="300" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_12"/>
</filter>
<filter id="filter4_d_4_12" x="0" y="15.0289" width="83" height="85.9423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_12" result="shape"/>
</filter>
<filter id="filter5_d_4_12" x="375" y="15.0289" width="83" height="85.9423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_12" result="shape"/>
</filter>
</defs>

</svg>

    
    )

}