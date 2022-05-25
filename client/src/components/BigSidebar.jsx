import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Wrapper from '../assets/styledComponents/BigSidebar';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
