import css from './Header.module.css';
import React, { useState } from 'react';

export default function Header() {

    const [scale, setScale] = useState(100);

    const handleZoomIn = () => {
        setScale(scale + 10);
    };

    const handleZoomOut = () => {
        setScale(scale - 10);
};

        return (
          <div className={css.container}>
            <div>
              <h1 className={css.title}>Services</h1>
            </div>
            <div className={css.navigation}>
              <button className={css.button}>LIST VIEW</button>
              <button className={css.btnCenter}></button>
              <button className={css.btnZoomOut}onClick={handleZoomOut} >
                -
              </button>
              <p className={css.scaleDisplay}>{scale}%</p>
              <button className={css.btnZoomIn} onClick={handleZoomIn}>
                +
              </button>
            </div>
          </div>
        );
    }
