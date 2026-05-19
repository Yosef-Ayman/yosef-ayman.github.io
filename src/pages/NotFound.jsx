import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <Page className="project-detail-page">
      <Seo title="404 Not Found" path="/404" description="The page you requested could not be found." />
      <div className="container">
        <div className="error-message">
          <p className="intro">404</p>
          <h1 className="page-title">Not Found</h1>
          <p>This route does not exist, but the portfolio is still very much alive.</p>
          <Link to="/" className="btn primary">
            Back Home
          </Link>
        </div>
      </div>
    </Page>
  );
}
