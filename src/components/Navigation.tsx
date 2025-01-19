'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-500">メンタル2.0</Link>
          
          {/* ハンバーガーメニューボタン (md以下で表示) */}
          <button 
            className="md:hidden text-white hover:text-green-500 transition-colors"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* デスクトップメニュー (md以上で表示) */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="#about" className="text-white hover:text-green-500 transition-colors">理念</Link></li>
            <li><Link href="#services" className="text-white hover:text-green-500 transition-colors">サービス</Link></li>
            <li><Link href="#members" className="text-white hover:text-green-500 transition-colors">メンバー</Link></li>
            <li><Link href="#work" className="text-white hover:text-green-500 transition-colors">お仕事依頼</Link></li>
            <li><Link href="#recruit" className="text-white hover:text-green-500 transition-colors">仲間募集</Link></li>
            <li><Link href="#contact" className="text-white hover:text-green-500 transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>

        {/* モバイルメニュー (md以下で表示) */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 space-y-4">
            <li><Link href="#about" className="block text-white hover:text-green-500 transition-colors">理念</Link></li>
            <li><Link href="#services" className="block text-white hover:text-green-500 transition-colors">サービス</Link></li>
            <li><Link href="#members" className="block text-white hover:text-green-500 transition-colors">メンバー</Link></li>
            <li><Link href="#work" className="block text-white hover:text-green-500 transition-colors">お仕事依頼</Link></li>
            <li><Link href="#recruit" className="block text-white hover:text-green-500 transition-colors">仲間募集</Link></li>
            <li><Link href="#contact" className="block text-white hover:text-green-500 transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;