import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { RootState } from '../../store/store.ts';
import { logout } from '../../store/slices/authSlice.ts';
import styles from './Header.module.css';
import { Button } from '@mui/material';

export function Header() {
  const dispatch = useDispatch();

  const { isAuthenticated, userEmail } = useSelector(
    (state: RootState) => state.authReducer
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <NavLink to="/" className={styles.appLogo}>
          <div className={styles.logo}>
            <img
              className={styles.logo_image}
              src="https://www.pngall.com/wp-content/uploads/2017/01/Growth-Chart.png"
              alt="logo"
            />
            <span className={styles.logo_text}>Levels</span>
          </div>
        </NavLink>

        <nav className={styles.links}>
          <NavLink className={styles.link} to="/add-salary">
            Add
          </NavLink>
          <NavLink className={styles.link} to="/companies">
            Companies
          </NavLink>
          <NavLink className={styles.link} to="/company-comparison">
            Company comparison
          </NavLink>
        </nav>

        {isAuthenticated ? (
          <div className={styles.logoutBlock}>
            <p>{userEmail}</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
}
