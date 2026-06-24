
import { CircleUser } from "lucide-react";
import styles from "./Header.module.scss";

const Header = () => {
    return <header className={styles.header}>
        <CircleUser color="#64748b" />
    </header>
}

export default Header;