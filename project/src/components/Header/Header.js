import SiteTitle from './SiteTitle/SiteTitle';
import SiteLogo from './SiteLogo/SiteLogo';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <SiteLogo />
        <SiteTitle />
      </div>
    </header>
  );
};

export default Header;
