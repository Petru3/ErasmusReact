
import FCourse from '../../Assets/Assets/dimitry-b-uDl5opHop7E-unsplash.jpg'
import TCourse from '../../Assets/Assets/william-krause-OyCU4sgQDB8-unsplash.jpg'
import CardCourse from './CardCourse'

function Page() {
  return (
    <div className='container'>
        <div className="courses">
            <CardCourse 
            path={'/courses/spanish'}
            title={"Vocabular Spaniola"}
            image={FCourse}
            />
            <CardCourse
            path={'/courses/english'}
            title={"Vocabular Engleza"}
            image={TCourse}
            />
            <CardCourse
            path={'/courses/english'}
            title={"Vocabular Engleza"}
            image={TCourse}
            />
            <CardCourse
            path={'/courses/spanish'}
            title={"Vocabular Spaniola"}
            image={FCourse}
            />
        </div>
    </div>
  )
}

export default Page