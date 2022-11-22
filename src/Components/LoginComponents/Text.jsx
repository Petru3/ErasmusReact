function Text() {
  const textObject = [
    {
      text: 'Welcome:))',
      paragraph: 'Va rugam sa nu divulgati parola in nicio cale posibila pentru o protejare mai buna , Va multumim!!'
    }
]

  return (
    <div className="text">
      <h1>{textObject[0].text}</h1>
      <p>{textObject[0].paragraph}</p>
    </div>
  )
}

export default Text