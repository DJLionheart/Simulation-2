import React from 'react';
import FontAwesome from 'react-fontawesome';

import './header.css'


export default function Header() {
    return(
        <div className="header">
            <div className="header-content">
                <FontAwesome id="white" name="fas fa-home fa-2x"/>
                <h2>Houser</h2>

            </div>
        </div>
    )
}