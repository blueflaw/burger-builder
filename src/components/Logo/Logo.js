import React from 'react';

import classes from './Logo.module.css';

import Alogo from '../../assets/images/AllardLogo-w.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Alogo} alt="Logo"/>
    </div>
);

export default logo;
