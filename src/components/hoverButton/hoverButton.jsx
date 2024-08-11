import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { FiArrowUp } from "react-icons/fi";
import './hoverButton.css';

function HoverButton({ title, link, icon, variant }) {
  const renderArrowIcon = () => {
    if (variant === 'arrow-up') {
      return <FiArrowUp className="icon" />;
    } else if (variant.includes('arrow')) {
      return <FiArrowUpRight className="icon" />;
    }
    return null;
  };

  return (
    <Link to={link} className={`hoverButton ${variant}`}>
      <div className="hoverButtonContent">
        {renderArrowIcon()}
        {icon}
        {variant.includes('arrow') ? (
          <span>{title}</span>
        ) : (
          <div className="hoverButtonTitle">
          <span className="textUp">{title}</span>
          <span className="textDown">{title}</span>
        </div>
        )
        }
  </div>
    </Link>
  );
}

export default HoverButton;