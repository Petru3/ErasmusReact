
import CheckBoxes from '../LoginComponents/CheckBoxes'
import AccountType from '../LoginComponents/AccountType'

function Check() {
  const dataCheck = [
    {
      id:1,
      profil: "Matematica-Informatica"
    },
    {
      id:2,
      profil: "Hotelier(Turism si alimentatie)"
    },
    {
      id:3,
      profil: "Automatica si calculatoare"
    },
    {
      id:4,
      profil: "Industrie Alimentara"
    }
  ]
  const accountType = [
    {
      id:1,
      subtext: "Student"
    },
    {
      id: 2,
      subtext: "Tutore"
    }
  ]

  const marks = dataCheck.map(item => {
    return(
      <CheckBoxes 
          key={item.id}
          text={item.profil}
      />
    )
  })
  const typesAccount = accountType.map(element => {
    return(
      <AccountType
          key={element.id}
          subtext={element.subtext}
      />
    )
  })

  return (
    <div className="check">
      <div className="two-guess">
        <div className="unorder">
          {marks}
        </div>
      </div>
      <div className="statut">
        <div className="order">
            {typesAccount}
        </div>
      </div>
    </div>
    
  )
}

export default Check