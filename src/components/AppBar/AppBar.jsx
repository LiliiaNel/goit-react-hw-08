import css from "./AppBar.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useMediaQuery, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = useMediaQuery('(max-width:820px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  return (
    <header className={css.header}>
      <h1 className={css.logo}>Contacts Book</h1>

      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer} className={css.menuButton}>
            <MenuIcon sx={{ color: '#223843' }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            slotProps={{ paper: { className: css.drawerPaper } }}
          >
            <div onClick={toggleDrawer}>
              <Navigation />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
          </Drawer>
        </>
      ) : (
        <>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </>
      )}
    </header>
  );
}
