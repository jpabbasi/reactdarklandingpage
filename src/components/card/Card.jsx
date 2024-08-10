import './card.css'

const Card = ({children, className, onClick, variant, fade}) => {
  return (
    <div data-aos={fade} >
      <article className={`card ${className} ${variant}`} onClick={onClick}>
        {children}
      </article>
    </div>
  )
}

export default Card
