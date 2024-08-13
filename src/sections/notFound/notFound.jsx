import './notFound.css'
import HoverButton from './../../components/hoverButton/hoverButton';

function NotFound() {
  return (
    <div className="pageNotFound flexColumn centeredText">
      <h1>404</h1>
      <div>
        <h2>Oops! Page not found</h2>
        <p>We couldn’t find the page you were looking for. It might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
      <HoverButton link="/" variant="white" title="BACK TO HOMEPAGE"/>
    </div>
  );
}

export default NotFound;

