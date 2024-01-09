import React,{Fragment} from 'react'
import mealsImage from'../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header=props=>{
    //Header and img
return <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton></HeaderCartButton>
    </header>

    <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food'/>
    </div>
</Fragment>
}

export default Header;