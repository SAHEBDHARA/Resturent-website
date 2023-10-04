import { Fragment } from 'react';
import { Link } from 'react-router-dom';


import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
 
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <h1>ReactMeals</h1>
        </Link>
        
      <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
       <div>About</div>
      </Link>
        <HeaderCartButton onClick ={props.noShowHanderler}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;