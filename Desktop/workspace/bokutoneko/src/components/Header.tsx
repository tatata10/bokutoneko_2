"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-[2000] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black">
              猫
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              ぼくネコ攻略
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-amber-500">ホーム</Link>
            <Link href="/ranking" className="hover:text-amber-500">最強キャラ</Link>
            <Link href="/damage" className="hover:text-amber-500">ダメージ表</Link>
          </nav>

          {/* Mobile Hamburger - NATIVE ONCLICK FOR IPHONE RELIABILITY */}
          <div 
            onClick={() => {
              // React fallback
              if (typeof window !== 'undefined' && 'toggleAppMenu' in window) {
                (window as any).toggleAppMenu();
              }
            }}
            // Real native fallback for extreme cases
            dangerouslySetInnerHTML={{ __html: `
              <div onclick="if(window.toggleAppMenu) window.toggleAppMenu()" style="cursor:pointer; padding:12px; margin-right:-12px;">
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="pointer-events:none;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            ` }}
            className="md:hidden"
          />
        </div>
      </header>
      <div className="h-16" />

      {/* Mobile Menu Dropdown - CONTROLLED BY NATIVE ID */}
      <div 
        id="mobile-dropdown-menu"
        style={{ display: 'none' }}
        className="md:hidden fixed inset-x-0 top-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-2xl z-[3000]"
      >
        <nav className="flex flex-col py-2">
          <Link href="/" className="px-6 py-5 text-sm font-black text-gray-700 dark:text-gray-200 border-b border-gray-50 active:bg-gray-50" onClick={() => {(window as any).toggleAppMenu()}}>
            HOME（トップページ）
          </Link>
          <Link href="/ranking" className="px-6 py-5 text-sm font-black text-gray-700 dark:text-gray-200 border-b border-gray-50 active:bg-gray-50" onClick={() => {(window as any).toggleAppMenu()}}>
            最強キャラランキング
          </Link>
          <Link href="/damage" className="px-6 py-5 text-sm font-black text-gray-700 dark:text-gray-200 active:bg-gray-50" onClick={() => {(window as any).toggleAppMenu()}}>
            属性別ダメージ表
          </Link>
        </nav>
      </div>
    </>
  );
}
