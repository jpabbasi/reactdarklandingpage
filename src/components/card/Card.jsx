import './card.css'

const Card = ({children, className, onClick, variant}) => {
  return (
    <div>
      <article className={`card ${className} ${variant}`} onClick={onClick}>
        {children}
      </article>
    </div>
  )
}

export default Card
