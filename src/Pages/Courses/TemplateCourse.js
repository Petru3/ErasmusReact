import React from "react"
import '../../Styling/TemplateCourse/style.css'


import ImageAndSvg from "../../Components/CourseTemplate/ImageAndSvg"
import Form from "../../Components/CourseTemplate/Form"

function TemplateCourse(){
    return(
        <div className="container">
            <ImageAndSvg/> 
            <Form />
        </div>
    )
}

export default TemplateCourse