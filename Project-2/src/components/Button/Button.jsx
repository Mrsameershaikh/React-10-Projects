import React from 'react';
import styles from './Button.module.css';

const Button = ({icon="",text="text here", isOutline=false}) => {
  return (
    <button className={isOutline ? styles.outlineBtn : styles.primaryBtn}>
        {icon}
        {text}
    </button>
  )
}

export default Button