"use client";

import React, { useEffect, useState } from 'react';

const RepeatedBackground = ({ className = '', imageUrl = '/images/background3.png' }) => {
  const [repetitions, setRepetitions] = useState(1);
  
  useEffect(() => {
    const calculateRepetitions = () => {
      // コンテンツエリアの合計高さを取得
      const contentElement = document.querySelector('div[class*="relative"]');
      if (!contentElement) return;
      
      const contentHeight = contentElement.scrollHeight;
      
      // オリジナルの画像のアスペクト比を維持したまま、
      // 画面幅いっぱいに表示した時の画像1枚あたりの高さを計算
      const image = new Image();
      image.src = imageUrl;
      
      image.onload = () => {
        const screenWidth = window.innerWidth;
        const imageAspectRatio = image.height / image.width;
        const singleImageHeight = screenWidth * imageAspectRatio;
        
        // 必要な繰り返し回数を計算（切り上げ）
        const reps = Math.ceil(contentHeight / singleImageHeight);
        setRepetitions(reps);
      };
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    
    return () => {
      window.removeEventListener('resize', calculateRepetitions);
    };
  }, [imageUrl]);

  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-black opacity-80 absolute inset-0" />
      <div className="absolute inset-0">
        {Array.from({ length: repetitions }).map((_, index) => (
          <div
            key={index}
            className="w-full opacity-30"
            style={{
              position: 'absolute',
              top: `${(index * 100) / repetitions}%`,
              height: `${100 / repetitions}%`,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              transform: index % 2 === 1 ? 'scaleX(-1)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RepeatedBackground;