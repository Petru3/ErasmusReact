import GitHubLogo from '../../Assets/Assets3part/DevelopersInfoAssets/GitHub-Mark-Light-120px-plus.png'
import FacebookLogo from '../../Assets/Assets3part/DevelopersInfoAssets/facebbok.png'
import InstagramLogo from '../../Assets/Assets3part/DevelopersInfoAssets/instagram.png'
import { Link } from 'react-router-dom'

function DevInfo() {
    const NameAndPart = [
        {
            Nicolas: "Nicolas Morasanu - BackEnd and Server Engineer",
        },
        {
            Catalin: "Gherasim Petru Catalin - FrontEnd and React Developer",
        },
        {
            Solcanu: "Solcanu Pavel Alexandru - FrontEnd and React Developer",
        },
        {
            Andrei: "Popescu Andrei -FrontEnd and React Developer",
        }
    ];

  return (
    <div className="part4">
        <div className="infoDevelops">
        <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/software-developing-team-1024x683.jpg" alt='imageNoi'/>
        <ul className='right-block-info'>
            <h2>Programmers who worked on this Web Application</h2>
            <h3>{NameAndPart[0].Nicolas}</h3>
            <Link to="https://github.com/darkykek" target="_blank">
                <img src={GitHubLogo} alt="logos" />
            </Link>
            <h3>{NameAndPart[1].Catalin}</h3>
            <Link to="https://github.com/Petru3" target="_blank">
                <img src={GitHubLogo} alt="logos" />
            </Link>
            <Link to="https://www.facebook.com/petrucatalin.gherasim" target="_blank">
                <img src={FacebookLogo} alt="logos" />
            </Link>
            <Link to="https://www.instagram.com/petru.cata_/" target="_blank">
                <img src={InstagramLogo} alt="logos" />
            </Link>
            <h3>{NameAndPart[2].Solcanu}</h3>
            <Link to="https://www.facebook.com/pavelalexandru.solcanu" target="_blank">
                <img src={FacebookLogo} alt="logos" />
            </Link>
            <Link to="https://www.instagram.com/alexsolcanu/" target="_blank">
                <img src={InstagramLogo} alt="logos" />
            </Link>
            <h3>{NameAndPart[3].Andrei}</h3>
            <Link to="https://github.com/lenyziskamora" target="_blank">
                <img src={GitHubLogo} alt="logos" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100083994593834" target="_blank">
                <img src={FacebookLogo} alt="logos" />
            </Link>
            <Link to="https://www.instagram.com/andrei_p0pescu/" target="_blank">
                <img src={InstagramLogo} alt="logos" />
            </Link>
        </ul>
        </div>
    </div>
  )
}

export default DevInfo