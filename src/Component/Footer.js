import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.icon_div}>
                <a href="https://github.com/jawwad-ali">
                    <i style={{ color: "white", paddingRight: "15px" }} className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/ali.jawwad.56/">
                    <i style={{ color: "white" }} className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
