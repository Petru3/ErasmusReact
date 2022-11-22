import ImageAndSvg from "../../../Components/CourseTemplate/ImageAndSvg"
import Form from "../../../Components/SpanishCourse/Form"
import ImageSpanish from '../../../AssetsSpecial/right.png'
import SpanishCover from '../../../Assets/CourseAssets/up.png'

function Spanish(){
    const titleAndText = [
        {
            title: "Vocabular de Spaniola"
        }
    ]

    const dataSections = [
        {
            text: '5 Sectiuni'
        },
        {
            text: "11 Aptitudini"
        }
    ]

    return(
        <div className="container">
            <ImageAndSvg
            upImage={SpanishCover}
            title={titleAndText[0].title}
            fir={dataSections[0].text}
            two={dataSections[1].text}
            /> 
            <Form 
            imageRight={ImageSpanish}
            />
        </div>
    )
}

export default Spanish