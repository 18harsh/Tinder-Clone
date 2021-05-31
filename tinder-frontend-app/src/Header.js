import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" clasName="header__icon"/>
            </IconButton>
            <img
                src="https://logodownload.org/wp-content/uploads/2020/09/tinder-logo.png"
                className="header__logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
        </div>
    )
}

export default Header
