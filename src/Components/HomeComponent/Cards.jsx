import { Link } from "react-router-dom"
import Button from "../../shared/Button"

import SpanishCover from '../../Assets/Assets3part/Cards/spanish.jpg'
import EnglishCover from '../../Assets/Assets3part/Cards/english.jpg'


function Cards() {
    const card = [
        {
            title: "Vocabulare dezvoltate cu grija",
            subtext: "O serie de Vocabulare dezvoltate si actualizate periodic de Colegiul Vasile Lovinescu, o invatare cursiva si cu lectii de calitate.",
        },
        {
            more: "Mai multe Vocabulare"
        }
    ]
    const coursesText = [
        {
            path: "/courses/spanish",
            title: "Vocabular pentru Spaniola",
            description: "Învățați spaniola din cursurile noastre online gratuite de mai jos. Învățați conversații spaniole de bază, gramatică spaniolă pentru începători, vocabular și multe altele.",
        },
        {
            path: "/courses/english",
            title: "Vocabular pentru Engleza",
            description: "Învățați gratuit limba engleză din cursurile noastre online de mai jos. Învățați conversația de bază în limba engleză, gramatica de bază, vocabularul și multe altele."  
        }
    ]

  return (
    <div className="part3">
        <div className="text">
            <h3>{card[0].title}</h3>
            <p id="subtext">{card[0].subtext}</p>
        </div>
        <li className="cards">
            <div className="card1">
                <img src={SpanishCover} alt="coverimg1"/>
                <h4 id="title-course">{coursesText[0].title}</h4>
                <p id="course-subtext">{coursesText[0].description}</p>
                <Link to={coursesText[0].path}>
                    <Button className="class-1" />
                </Link>
            </div>
            <div className="card2">
                <img src={EnglishCover} alt="coverimg2"/>
                <h4 id="title-course">{coursesText[1].title}</h4>
                <p id="course-subtext">{coursesText[1].description}</p>
                <Link to={coursesText[1].path}>
                    <Button className="class-2" />
                </Link>
            </div>
                <Link to="/courses" class="card3">
                    <svg id="card3-svg-plus" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_522_2)">
                        <path d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100V100Z" fill="white"/>
                        <path d="M50 25C50.8288 25 51.6237 25.3292 52.2097 25.9153C52.7958 26.5013 53.125 27.2962 53.125 28.125V46.875H71.875C72.7038 46.875 73.4987 47.2042 74.0847 47.7903C74.6708 48.3763 75 49.1712 75 50C75 50.8288 74.6708 51.6237 74.0847 52.2097C73.4987 52.7958 72.7038 53.125 71.875 53.125H53.125V71.875C53.125 72.7038 52.7958 73.4987 52.2097 74.0847C51.6237 74.6708 50.8288 75 50 75C49.1712 75 48.3763 74.6708 47.7903 74.0847C47.2042 73.4987 46.875 72.7038 46.875 71.875V53.125H28.125C27.2962 53.125 26.5013 52.7958 25.9153 52.2097C25.3292 51.6237 25 50.8288 25 50C25 49.1712 25.3292 48.3763 25.9153 47.7903C26.5013 47.2042 27.2962 46.875 28.125 46.875H46.875V28.125C46.875 27.2962 47.2042 26.5013 47.7903 25.9153C48.3763 25.3292 49.1712 25 50 25V25Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_522_2">
                        <rect width="100" height="100" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <h4>{card[1].more}</h4>
                </Link>
            </li>
    </div>
  )
}

export default Cards