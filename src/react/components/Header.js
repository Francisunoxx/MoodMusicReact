import React, { Component } from 'react';
import style from '../css/components/Header.css';
import rock from '../assets/maloik.svg';
import arrowDown from '../assets/sort-down.svg';
import AccountModal from './AccountModal';

const Header = () => {
    return (
        <div className={style.divHeaderContainer}>
            <div className={style.divHeaderImg}>
                <img src={rock} />
            </div>
            <div className={style.divHeaderMenu}>
                <h4>GENRES</h4>
                <img src={arrowDown} />
            </div>
            <div className={style.divHeaderSearch}>
                <input placeholder="SEARCH..." />
            </div>
            <div className={style.divHeaderAccount}>
                <AccountModal visible={false} />
            </div>
        </div>
    )
}

export default (Header)