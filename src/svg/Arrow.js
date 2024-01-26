import React from "react"

function Arrow({Arrowcolor,fill}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 78 78" fill={fill}>
            <circle cx="39" cy="39" r="38" stroke={Arrowcolor} stroke-width="2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5862 38.2905L42.7099 32.4142L44.1241 31L51.7074 38.5833L52.4145 39.2904L51.7074 39.9975L44.1241 47.5809L42.7099 46.1667L48.5861 40.2905H25V38.2905H48.5862Z" fill={Arrowcolor}/>
        </svg>
    )
}

export default Arrow
