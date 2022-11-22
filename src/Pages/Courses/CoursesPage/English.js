import ImageAndSvg from "../../../Components/CourseTemplate/ImageAndSvg"
import Form from "../../../Components/SpanishCourse/Form"
import ImageEnglish from '../../../AssetsSpecial/right1.png'
import EnglishCover from '../../../Assets/CourseAssets/up1.png'


function English(){
    const titleAndText = [
        {
            title: "Vocabular de Engleza"
        }
    ]

    const dataSections = [
        {
            text: '4 Sectiuni'
        },
        {
            text: "23 Aptitudini"
        }
    ]

    return(
        <div className="container">
            <ImageAndSvg
            upImage={EnglishCover}
            title={titleAndText[0].title}
            fir={dataSections[0].text}
            two={dataSections[1].text}
            /> 
            <Form 
            imageRight={ImageEnglish}
            />
        </div>
    )
}

export default English