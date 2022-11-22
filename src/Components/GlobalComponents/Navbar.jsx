import {Link} from 'react-router-dom'
import '../../Styling/StylingComponents/headerCss/header.css'
import LogoImage from '../../Assets/LeftImglogo.png'

function Navbar() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header").style["boxShadow"] = "0 0 50px #999999";
        document.querySelector(".header").style.background = "#eee";
        document.getElementById("hImg").style.padding = "3% 0% 0% 5em";
        document.getElementById("navbars").style.padding = "3.5%";
        document.querySelector(".header").style.height = "4vw";
      } else {
        document.querySelector(".header").style["boxShadow"] = "none";
        document.querySelector(".header").style.background = "#eee";
        document.getElementById(".header").style.background = "#111";
        document.getElementById("navbars").style.padding = "5%";
        document.querySelector(".header").style.height = "6vw";
        document.getElementById("hImg").style.padding = "5% 0% 0% 5em";
      }
    }

  return (
    <div className='container'>
      <div className="header">
            <header>
                <div className="left">
                    <Link to="/">
                        <img id="hImg" src={LogoImage} alt="headImg"/>
                    </Link>
                </div>
                <div className="right">
                    <nav>
                        <ul id="navbars">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/activity-jurnal">Jurnal de Activitati</Link></li>
                            <li><Link to="/cultural-jurnal">Jurnal Cultural</Link></li>
                            <li><Link to="/courses">Vocabulare</Link></li>
                            <li><Link to="/video">Video</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Navbar