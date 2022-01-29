import BackArrow from "./BackArrow";
import styles from "./MenuPanel.module.css";

export default function MenuPanel(props) {
    const is = props.isActive?"":" is-hidden";

    return(
        <div className={styles.menuPanel + is}>
            <aside className="menu panel radius-0">
                <p className="menu-label">General</p>

                <ul className="menu-list">
                    <li>
                        <ul>
                            <li><a>Members</a></li>
                            <li><a>Plugins</a></li>
                            <li><a>Add a member</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <BackArrow 
                isActive={props.isActive}
                setIsActive={props.setIsActive}
            />
        </div>
    )
}
