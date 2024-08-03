import { Link } from 'react-router-dom';
import './hoverButton.css';

function HoverButton({ title, link, icon, variant }) {
  return (
    <Link to={link} className={`hoverButton ${variant}`}>
      <div className="hoverButtonContent">
        {icon}
        <div className="hoverButtonTitle">
          <span className="textUp">{title}</span>
          <span className="textDown">{title}</span>
        </div>
      </div>
    </Link>
  );
}

export default HoverButton;