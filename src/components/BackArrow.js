import { FaArrowLeft } from "react-icons/fa";
import styles from "./BackArrow.module.css";

export default function BackArrow(props) {
    return(
        <button 
            className={styles.backArrow}
            onClick={()=>props.setIsActive(!props.isActive)}
        >
            <FaArrowLeft size={30} />
        </button>
    )
}
