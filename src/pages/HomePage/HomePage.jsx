import css from "./HomePage.module.css";
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../Animation- HomePage.json';


export default function HomePage() {

  return (
    <div className={css.page}>
      <div className={css.rightAnimation}>
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '200px', width: '200px' }}
          />
    </div>
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Contacts Book</h1>
      <p className={css.description}>
        Log in to manage your contacts easily — add, edit, and keep everything organized in one place.
      </p>
      <div className={css.buttonGroup}>
        <Link to="/login" className={clsx(css.button, css.primary)}>Log In</Link>
        <Link to="/register" className={clsx(css.button, css.outline)}>Register</Link>
      </div>
      </div>
      </div>
  );
}
