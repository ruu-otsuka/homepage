import styles from './styles/font.module.css';
import React from 'react';

interface CustomFont {
    children: React.ReactNode;
    className?: string;
}

const CustomFont: React.FC<CustomFont> = ({ children }) => {
  return (
    <div className={`${styles.customFont}`}>
      {children}
    </div>
  );
};

export default CustomFont;