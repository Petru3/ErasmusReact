import Img from '../../Assets/Assets1part/milo-rossi-TT_bF-kqeME-unsplash.jpg'

function TextForm() {
    const formText = [
        {
           title: "Erasmus+ este programul Uniunii Europene în domeniile educației, formării, tineretului și sportului pentru perioada 2021-2027, fiind gestionat de Comisia Europeană.",
           listOne: "OBIECTIVUL GENERAL",
           paragOne: "Obiectivul general al programului este de a sprijini, prin învățarea pe tot parcursul vieții, dezvoltarea educațională, personală și profesională a persoanelor care își desfășoară activitatea în domeniul educației, formării, tineretului și sportului, atât în Europa, cât și în afara ei, contribuind astfel la o creștere economică durabilă, la crearea de locuri de muncă de calitate, la coeziunea socială, la stimularea inovării și la consolidarea identității europene și a cetățeniei active."
        },
        {
            listTwo: "PRIORITĂȚILE PROGRAMULUI ERASMUS",
        }
    ]

  return (
    <div className="part2">
        <div className="line-overtext-and-image">
            <svg viewBox="0 0 614 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 94.3117C36.3571 31.8011 123.953 -62.2099 191.477 61.8307C275.883 216.881 171.617 192.98 153.562 151.919C135.508 110.859 103.912 1.77155 237.968 12.8028C372.024 23.8341 302.265 115.787 364 151.919C426.5 188.5 439.274 81.4418 497.5 61.8307C544.081 46.1418 584 94.3117 613 124M613 124L597.5 73M613 124L559.5 111" stroke="#0F0D0D"/>
            </svg>   
        </div>
        <div className="parag">
                <p id="prg">
                   <h3>{formText[0].title}</h3>
                   <ul className="one-list">
                       <h3>{formText[0].listOne}</h3>
                       <p>{formText[0].paragOne}</p>
                   </ul>
                   <ul className="two-list">
                       <h3>{formText[1].listTwo}</h3>
                       <p>Incluziune şi diversitate<br/>
                          Transformarea digitală<br/>
                          Participarea la viața democratică, valorile comune și angajamentul civic<br/>
                          Mediul şi combaterea schimbărilor climatice
                        </p>
                    </ul>
                </p>
        </div>
        <div class="image-on-the-right">
            <img src={Img} alt="imgRight"/>
        </div>
    </div>
  )
}

export default TextForm