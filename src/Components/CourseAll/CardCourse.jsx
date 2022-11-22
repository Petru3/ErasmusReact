import { Link } from "react-router-dom"

function CardCourse({title, image, path}) {
  return (
    <div>
        <Link to={path}>
            <h2>{title} &#8594;</h2>
            <img src={image} alt="blk2img"/>
        </Link>
    </div>
  )
}

export default CardCourse