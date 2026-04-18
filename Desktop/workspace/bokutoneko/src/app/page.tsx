import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import charactersData from '@/data/characters.json';

export default function Home() {
  const topChars = charactersData.filter(c => c.rank === 'SS+').slice(0, 4);

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-[3rem] bg-gray-900 shadow-2xl group">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_cats_illust.png" 
            alt="Bokutoneko Hero" 
            fill 
            className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="w-20 h-20 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-3xl shadow-amber-500/20 shadow-2xl flex items-center justify-center text-white text-4xl font-black mb-8 animate-bounce transition-all">
            猫
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 drop-shadow-2xl tracking-tight leading-tight">
            ぼくとネコ <span className="text-amber-400">攻略Wiki</span>
          </h1>
          <p className="max-w-xl text-gray-300 text-lg sm:text-xl font-medium leading-relaxed drop-shadow-md">
            最新の最強キャラランキングや属性別ダメージ表など、攻略に役立つ最新情報を最速でお届けします。
          </p>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/ranking" className="group relative overflow-hidden rounded-[2.5rem] p-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">🏆</div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">最強ランキング</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
            現在の環境で最も強力なキャラクターをTier形式で紹介。<br/>SS+ランクの壊れキャラをチェックして攻略を有利に進めましょう。
          </p>
          <span className="inline-flex items-center text-amber-500 text-lg font-black group-hover:translate-x-3 transition-transform">
            ランキングを見る <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </span>
        </Link>

        <Link href="/damage" className="group relative overflow-hidden rounded-[2.5rem] p-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">⚔️</div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">属性別ダメージ表</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
            火・水・木・光・闇の各属性で最大の火力を叩き出すキャラクターとダメージ数値を掲載。<br/>最大ダメージを追求する方に。
          </p>
          <span className="inline-flex items-center text-red-500 text-lg font-black group-hover:translate-x-3 transition-transform">
            ダメージ表を見る <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </span>
        </Link>
      </section>

      {/* Featured Characters */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
             <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
             注目の最強キャラ
          </h2>
          <Link href="/ranking" className="text-amber-500 font-bold hover:underline">すべて見る →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {topChars.map(chara => (
            <Link 
              href={`/chara/${chara.id}`} 
              key={chara.id} 
              className="group bg-white dark:bg-gray-800 rounded-3xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:scale-105 transition-transform relative">
                {chara.img && (
                  <Image src={chara.img} alt={chara.name} fill className="object-cover" unoptimized/>
                )}
              </div>
              <div className="px-2 py-0.5 mb-2 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase">
                {chara.rank}
              </div>
              <h4 className="font-black text-gray-900 dark:text-white line-clamp-1 text-sm sm:text-base">{chara.name}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-1">{chara.type}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Content / News */}
      <section className="p-8 sm:p-12 rounded-[3.5rem] bg-gray-50 dark:bg-gray-800/40 border-2 border-dashed border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-black text-gray-400 uppercase tracking-widest">Coming Soon</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            今後、イベント攻略情報、ガチャシミュレーター、各ステージの適正キャラ一覧などのコンテンツを順次追加していく予定です。
          </p>
        </div>
      </section>
    </div>
  );
}
