import '../css/Counter.css'

const Counter = ({title, number}) => {
  return (
    <div className="counter">
        <h3 className="counter-text">{title}</h3>
        <p className="counter-number">{number}</p>
    </div>
  )
}

export default Counter