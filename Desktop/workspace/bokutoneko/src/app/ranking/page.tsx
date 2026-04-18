import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import charactersData from '@/data/characters.json';

export default function SaikyoChara() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-8 sm:p-14 shadow-2xl group">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_cats_illust.png" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
            【ぼくとネコ】<br/>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">最強キャラ</span> ランキング
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium leading-relaxed drop-shadow-md">
            ぼくとネコの最強キャラランキング(tier表)のまとめです。総合評価やタイプ別(体当たり/弓/魔法/ため/サポート)の最新版ランキングを掲載！パーティ編成の参考にしてください。
          </p>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          評価のポイント
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">汎用性の高さ</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">PVP、ボスバトル、天界の塔など、様々なメインコンテンツで活躍できるキャラを高評価としています。</p>
          </div>
          <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">CP軽減能力</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">必要CPを大幅に軽減する能力は序盤の展開に大きく貢献するため、評価点を高く設定しています。</p>
          </div>
          <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">オンリーワン性能</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">他で代用できない強力なバフやデバフ、圧倒的な火力を持つキャラクターを優先しています。</p>
          </div>
        </div>
      </section>
      {/* Tier Board (Icons Layout) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </span>
          最強キャラ Tier表
        </h2>

        <div className="bg-white dark:bg-gray-800/60 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-700/50">
            {['SS+', 'SS', 'S', 'A'].map((tier) => {
              const tierChars = charactersData.filter(c => c.rank === tier);
              if (tierChars.length === 0) return null;
              
              const tierStyles = {
                'SS+': 'bg-[#f6bfbc]/30 dark:bg-[#f6bfbc]/10 text-rose-600 dark:text-rose-400 border-l-4 border-rose-500',
                'SS': 'bg-[#f9ffc6]/50 dark:bg-yellow-500/10 text-amber-700 dark:text-amber-400 border-l-4 border-amber-400',
                'S': 'bg-[#ffeeb6]/50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-l-4 border-orange-400',
                'A': 'bg-[#ffdede]/50 dark:bg-pink-500/10 text-pink-700 dark:text-pink-400 border-l-4 border-pink-400',
              }[tier as 'SS+' | 'SS' | 'S' | 'A'];

              return (
                <div key={tier} className="flex flex-col sm:flex-row min-w-0">
                  <div className={`p-4 sm:w-28 flex items-center justify-center shrink-0 font-black text-xl sm:text-2xl ${tierStyles}`}>
                    {tier}
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-wrap gap-3 sm:gap-4 bg-transparent">
                    {tierChars.map(chara => (
                      <Link 
                        href={`/chara/${chara.id}`} 
                        key={chara.id} 
                        className="group flex flex-col items-center gap-1.5 w-16 sm:w-20"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-sm border-2 border-transparent group-hover:border-amber-400 group-hover:shadow-md transition-all group-hover:-translate-y-1 relative bg-gray-100 dark:bg-gray-800">
                          {chara.img ? (
                            <Image src={chara.img} alt={chara.name} fill className="object-cover" unoptimized/>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center font-bold text-gray-400 text-2xl">?</div>
                          )}
                        </div>
                        <span className="text-[10px] sm:text-xs text-center font-bold text-gray-700 dark:text-gray-300 line-clamp-2 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors px-1">
                          {chara.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive List */}
      {/* Tier List */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          </span>
          総合最強ランキング表
        </h2>

        <div className="bg-white dark:bg-gray-800/60 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm">
          <div className="w-full flex flex-col">
            {/* Header (Desktop Only) */}
            <div className="hidden md:flex bg-gray-50/80 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider border-b dark:border-gray-700/50">
              <div className="p-5 w-24 text-center shrink-0">Tier</div>
              <div className="p-5 w-20 text-center shrink-0">Score</div>
              <div className="p-5 w-32 shrink-0">Type</div>
              <div className="p-5 flex-1">Character</div>
            </div>
            
            {/* Body */}
            <div className="divide-y divide-gray-100 dark:divide-gray-800 w-full">
              {charactersData.map((chara) => (
                <Link 
                  href={`/chara/${chara.id}`} 
                  key={chara.id} 
                  className="block w-full hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group cursor-pointer"
                >
                  {/* Desktop View */}
                  <div className="hidden md:flex items-center w-full">
                    <div className="p-5 w-24 text-center shrink-0">
                      <div className={`mx-auto flex items-center justify-center w-12 h-12 rounded-2xl font-black text-xl shadow-md transform group-hover:scale-110 transition-transform duration-300
                        ${chara.rank === 'SS+' ? 'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 text-white shadow-amber-500/30' : 
                          chara.rank === 'SS' ? 'bg-gradient-to-br from-yellow-100 via-yellow-300 to-amber-400 text-amber-900 shadow-yellow-500/30 text-[16px]' : 
                          chara.rank === 'S' ? 'bg-gradient-to-br from-rose-400 to-red-500 text-white shadow-red-500/30' :
                          chara.rank === 'A' ? 'bg-gradient-to-br from-fuchsia-400 to-purple-600 text-white shadow-purple-500/30' : 
                          'bg-gray-200 text-gray-600'}
                      `}>
                        {chara.rank}
                      </div>
                    </div>
                    <div className="p-5 w-20 text-center shrink-0">
                      <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-900 dark:from-white dark:to-gray-400 group-hover:scale-110 inline-block transition-transform">{chara.score}</span>
                    </div>
                    <div className="p-5 w-32 shrink-0">
                      <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm whitespace-nowrap">
                        {chara.type}
                      </span>
                    </div>
                    <div className="p-5 flex-1 min-w-0">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl flex-shrink-0 relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800">
                          {chara.img ? (
                            <Image src={chara.img} alt={chara.name} fill className="object-cover" unoptimized/>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">?</span>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 pr-4">
                          <div className="font-black text-lg text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors truncate">
                            {chara.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium line-clamp-1 group-hover:line-clamp-none transition-all">
                            {chara.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="flex md:hidden p-4 gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-2xl font-black text-xl shadow-md transform group-hover:scale-110 transition-transform duration-300
                        ${chara.rank === 'SS+' ? 'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 text-white shadow-amber-500/30' : 
                          chara.rank === 'SS' ? 'bg-gradient-to-br from-yellow-100 via-yellow-300 to-amber-400 text-amber-900 shadow-yellow-500/30 text-[16px]' : 
                          chara.rank === 'S' ? 'bg-gradient-to-br from-rose-400 to-red-500 text-white shadow-red-500/30' :
                          chara.rank === 'A' ? 'bg-gradient-to-br from-fuchsia-400 to-purple-600 text-white shadow-purple-500/30' : 
                          'bg-gray-200 text-gray-600'}
                      `}>
                        {chara.rank}
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-0.5 mt-1">Score</div>
                        <div className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-900 dark:from-white dark:to-gray-400 leading-none">{chara.score}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col pt-0.5">
                      <div className="flex gap-3 mb-2 shrink-0">
                        <div className="w-14 h-14 rounded-xl flex-shrink-0 relative overflow-hidden shadow-sm border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800">
                          {chara.img ? (
                            <Image src={chara.img} alt={chara.name} fill className="object-cover" unoptimized/>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-xl font-bold text-gray-300 dark:text-gray-600">?</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <span className="inline-block px-2.5 py-1 mb-1.5 text-[10px] font-bold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm leading-none whitespace-nowrap">
                            {chara.type}
                          </span>
                          <div className="font-black text-base text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors line-clamp-1 leading-tight">
                            {chara.name}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-2 w-full mt-0.5">
                        {chara.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

