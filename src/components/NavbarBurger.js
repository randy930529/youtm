import styles from "./NavbarBurger.module.css";

export default function NavbarBurger(props) {

    return(
        <div className={styles.navbarBurger}>
            <button 
                className={props.isActive?'navbar-burger has-text-white is-active':'navbar-burger has-text-white'} 
                ariaLabel="menu" 
                ariaExpanded="false"
                onClick={()=>props.setIsActive(!props.isActive)}
            >
                <span ariaHidden="true"></span>
                <span ariaHidden="true"></span>
                <span ariaHidden="true"></span>
            </button>
        </div>
    )   
}