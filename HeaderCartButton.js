import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton=props=>{
return <button className={classes.button}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span  className={classes.batch}>Your Cart</span>
    <span>
        3
    </span>
</button>
}

export default HeaderCartButton;