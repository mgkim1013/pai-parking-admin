import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { makeStyles, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { VideoRealView } from 'views';
import { Header, Footer, Sidebar } from 'components';
import { routes } from 'variables/routes.js';
import { bgImage, logoImage, logoText, homepage, color } from 'variables/sidebar.js';
import { links, copyright } from 'variables/footer.js';
import styles from './layoutStyle.js';

let ps;

const useStyles = makeStyles(styles);

export default function Layout() {
  const classes = useStyles(); // styles

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [view, setView] = React.useState(3);
  const [fullscreen, setFullscreen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleViewSelect = (value) => {
    setView(value);
  };
  const handleScreenSelect = (value) => {
    setFullscreen(value);
    setAlertOpen(value);
  };
  const handleEscPress = (event) => {
    if (event.key === 'Escape') setFullscreen(false);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  // initialize and destroy the PerfectScrollbar
  const mainPanel = React.createRef(); // ref to initialize PerfectScrollbar on windows devices
  const main = React.createRef();
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
    window.addEventListener('keydown', handleEscPress);
    // Specify how to clean up after this effect:
    return () => {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [mainPanel]);

  const switchRoutes = (view, fullscreen) => (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.path === '/videoReal')
          return (
            <Route
              path={prop.path}
              render={(props) => <VideoRealView {...props} parent={main} view={view} fullscreen={fullscreen} />}
              key={key}
            />
          );
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );

  return (
    <div className={classes.wrapper} onKeyPress={handleEscPress}>
      {fullscreen ? (
        <div ref={mainPanel}>
          <main ref={main}>{switchRoutes(view, fullscreen)}</main>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            key={1}
            open={alertOpen}
            message="전체화면을 종료하려면 Esc를 눌러주세요."
            action={
              <IconButton aria-label="close" color="inherit" className={classes.close} onClick={handleAlertClose}>
                <CloseIcon />
              </IconButton>
            }
          />
        </div>
      ) : (
        <React.Fragment>
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
            <Header
              routes={routes}
              handleDrawerToggle={handleDrawerToggle}
              view={view}
              fullscreen={fullscreen}
              handleViewSelect={handleViewSelect}
              handleScreenSelect={handleScreenSelect}
            />
            <main ref={main} className={classes.content}>
              {switchRoutes(view, fullscreen)}
            </main>
            <Footer links={links} copyright={copyright} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
