

function AccountType(type){
    return(
        <div className="inline-group">
           <input type="radio" name="statut"/>
           <h3>{type.subtext}</h3>
        </div>
    )
}

export default AccountType