import '../../Styling/StylingComponents/footerCss/footer.css'
import {Link} from 'react-router-dom'
import LogoImage from '../../Assets/LeftImglogo.png'
import UELogo from '../../Assets/Assets1part/ue.jpg'

function Footer() {
  return (
    <div className='container'>
      <footer>
            <div class="link-1">
                <img id='imgUE' src={UELogo} alt="uelogo"/>
                <h4>Finanţat prin programul Erasmus+ al Uniunii Europene, Proiect nr. ref. 2020-1-RO01-KA102-078817</h4>
            </div>
            <img id="LogoImg" src={LogoImage} alt="img"/>
            <ul class="link-2">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/cultural-jurnal">Jurnal Cultural</Link></li>
                <li><Link to="/courses">Vocabulare</Link></li>
                <li><Link to="/video">Video</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/activity-jurnal">Jurnal de Activitati</Link></li>
            </ul> 
                <h6 id="copyright">Colegiul Vasile Lovinescu © , proiect Erasmus+, nr. 2020-1-RO01-KA102-078817, Tehnologiile IT în specializările VET</h6> 
        </footer>
    </div>
  )
}

export default Footer