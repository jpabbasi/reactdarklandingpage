import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import './hoverButton.css';

function HoverButton({ title, link, icon, variant = 'default', onClick }) {
  const renderIcon = () => {
    if (variant.includes('arrow-up')) {
      return <FiArrowUp className="icon" />;
    } else if (variant.includes('arrow')) {
      return <FiArrowUpRight className="icon" />;
    }
    return icon;
  };

  const renderText = () => {
    if (variant.includes('arrow')) {
      return (
        <div className="hoverButtonTitle">
          <span>{title}</span>
        </div>
      );
    } else {
      return (
        <div className="hoverButtonTitle">
          <span className="textUp">{title}</span>
          <span className="textDown">{title}</span>
        </div>
      );
    }
  };
  

  return (
    <Link to={link} onClick={onClick} className={`hoverButton ${variant} ${!title ? 'no-title' : ''}`}>
      <div className="hoverButtonContent">
        {renderIcon()}
        {renderText()}
      </div>
    </Link>
  );
}

export default HoverButton;
