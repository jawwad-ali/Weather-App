import React from 'react'
import styles from "./Footer.module.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.icon_div}>
                <a href="https://github.com/jawwad-ali">
                    <GitHubIcon className={styles.icon} />
                </a>
                <a href="https://www.facebook.com/ali.jawwad.56/">
                    <FacebookIcon className={styles.icon} />
                </a>
            </div>
        </div>
    )
}

export default Footer
