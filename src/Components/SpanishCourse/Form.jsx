
import Cell from "../../shared/Cell"

function Form({imageRight}){
    const dataCell = [
        {
            id:1,
            title: "Template Cell"
        },
        {
            id:2,
            title: "Template Cell"
        },
        {
            id:3,
            title: "Template Cell"
        },
        {
            id:4,
            title: "Introduction Course"
        },
        {
            id:5,
            title: "Template Cell"
        }
    ]
    
    const loopCells = dataCell.map(item => {
        return(
            <Cell 
            id={item.id}
            {...item}
            />
        )
    })

    return (
        <>
            <div className="cells">
            {loopCells}
            </div>
                <div class="img-right">
                    <img src={imageRight} alt="imggrid"/>
                </div>
        </>
    )

}

export default Form