import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { makeStyles } from '@material-ui/core/styles';
import { Header, Footer, Sidebar } from 'components';
import { routes } from 'variables/routes.js';
import { bgImage, logoImage, logoText, homepage, color } from 'variables/sidebar.js';
import { links, copyright } from 'variables/footer.js';
import styles from './nsLayoutStyle.js';

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => (
      <Route path={prop.path} component={prop.component} key={key} />
    ))}
    <Redirect from="/" to="/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function NSLayout() {
  const classes = useStyles(); // styles
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // initialize and destroy the PerfectScrollbar
  const mainPanel = React.createRef(); // ref to initialize PerfectScrollbar on windows devices
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, { suppressScrollX: true, suppressScrollY: false });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={logoText}
        logoImage={logoImage}
        homepage={homepage}
        bgImage={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Header routes={routes} handleDrawerToggle={handleDrawerToggle} />
        <main className={classes.content}>{switchRoutes}</main>
        <Footer links={links} copyright={copyright} />
      </div>
    </div>
  );
}
