
function Intro() {
  const text = [
    {
      title: "Erasmus+",
      titleSub : "Colegiul Vasile Lovinescu",
      projectNum: "Proiect Erasmus+, nr. 2020-1-RO01-KA102-078817, Tehnologiile IT în specializările VET"
    }
  ]

  return (
    <div className="part1">
        <h1>{text[0].title}</h1>
        <h3>{text[0].titleSub}</h3>
        <h5>{text[0].projectNum}</h5>
    </div>
  )
}

export default Intro