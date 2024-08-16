import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import './hoverButton.css';

function HoverButton({ title, link = '#', icon, variant = 'default', onClick, style }) {
  const isExternal = link && link.startsWith('http') && !link.includes(window.location.hostname);
  const target = isExternal ? '_blank' : undefined;

  const renderIcon = () => {
    if (variant.includes('arrow-up')) {
      return <FiArrowUp className="icon" />;
    } else if (variant.includes('arrow')) {
      return <FiArrowUpRight className="icon" />;
    }
    return icon;
  };

  const renderText = () => {
    if (!title) {
      return null
    }
    if (variant.includes('arrow')) {
      return (
        <div className="hoverButtonTitle">
          <span>{title}</span>
        </div>
      );
    } else {
      return (
        <div className={`hoverButtonTitle ${variant.includes('longButton') ? 'longButtonText' : ''}`}>
          <span className="textUp">{title}</span>
          <span className="textDown">{title}</span>
        </div>
      );
    }
  };
  

  return (
    <Link
    target={target} // Usa target apenas se o link for externo
    rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ ...style}} to={link} onClick={onClick} className={`hoverButton ${variant} ${!title ? 'no-title' : ''}`}>
      <div className={`hoverButtonContent ${variant.includes('longButton') ? 'longButtonContent' : ''}`}>
        {renderIcon()}
        {renderText()}
      </div>
    </Link>
  );
}

export default HoverButton;
