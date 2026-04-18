import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import damageData from '@/data/damage.json';

export const metadata = {
  title: '【ぼくとネコ】キャラ最大ダメージ表 - 攻略wiki',
  description: 'ぼくとネコの各属性ごとのキャラクター最大ダメージ表です。一撃あたりのダメージと倍率条件を掲載しています。',
};

export default function DamageRanking() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-8 sm:p-14 shadow-2xl group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-gray-900/90 to-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl">
          <div className="inline-flex px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-300 uppercase bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10 w-max">
            ダメージランキング
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
            【ぼくとネコ】<br/>
            最大<span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">ダメージ</span> 表
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium leading-relaxed drop-shadow-md">
            各属性ごとのキャラクターの一撃あたりの最大級ダメージランキングです。<br/>
            限界突破などのステータスに基づく推測値となります。条件や倍率も掲載しています。
          </p>
        </div>
      </section>

      {/* Conditions Reference */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          ダメージについて
        </h2>
        <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 font-medium">
            <li>攻撃タイプ（体当たり、ため、弓、魔法）によってダメージの出方や倍率条件が異なります。</li>
            <li>「バトル開始からの時間」「残り体力」「召喚回数」「被弾回数」などの特殊条件でダメージが増加します。</li>
            <li>記載されている数値は推測値が含まれるため、実際の値と前後する可能性があります。</li>
          </ul>
        </div>
      </section>

      {/* Damage Tables */}
      <section className="space-y-10">
        <h2 className="text-2xl font-black flex items-center gap-3 text-gray-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          属性別ダメージ表
        </h2>

        {damageData.map((elementGroup) => {
          const colorMap = {
            rose: 'from-rose-500 to-red-600 text-rose-600 bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800',
            blue: 'from-blue-500 to-cyan-600 text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
            emerald: 'from-emerald-500 to-green-600 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
            amber: 'from-amber-400 to-yellow-500 text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
            purple: 'from-purple-500 to-fuchsia-600 text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
          };
          
          const headerGradient = colorMap[elementGroup.color as keyof typeof colorMap].split(' text-')[0];
          const textClass = `text-${elementGroup.color}-600 dark:text-${elementGroup.color}-400`;
          const bgClass = colorMap[elementGroup.color as keyof typeof colorMap].split(' bg-')[1].split(' ')[0];
          const borderClass = colorMap[elementGroup.color as keyof typeof colorMap].split(' border-')[1];

          return (
            <div key={elementGroup.element} className={`rounded-3xl shadow-md border bg-white dark:bg-gray-800/60 overflow-hidden backdrop-blur-sm border-gray-200 dark:border-gray-700/50`}>
              <div className={`p-4 sm:p-6 bg-gradient-to-r ${headerGradient} text-white flex items-center justify-between`}>
                <h3 className="text-xl sm:text-2xl font-black drop-shadow-md">{elementGroup.element}</h3>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm">Top 5</div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/80 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-bold border-b dark:border-gray-700/50">
                      <th className="p-4 sm:p-5 font-bold">順位</th>
                      <th className="p-4 sm:p-5 font-bold">キャラ名</th>
                      <th className="p-4 sm:p-5 font-bold">タイプ</th>
                      <th className="p-4 sm:p-5 font-bold">ダメージ</th>
                      <th className="p-4 sm:p-5 font-bold">倍率・条件</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {elementGroup.characters.map((chara, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group">
                        <td className="p-4 sm:p-5 w-16 sm:w-24 text-center">
                          <span className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-black text-sm sm:text-base
                            ${idx === 0 ? 'bg-gradient-to-tr from-yellow-300 to-amber-500 text-white shadow-md shadow-amber-500/20' : 
                              idx === 1 ? 'bg-gradient-to-tr from-gray-300 to-gray-400 text-white shadow-md shadow-gray-400/20' :
                              idx === 2 ? 'bg-gradient-to-tr from-amber-700 to-orange-800 text-white shadow-md shadow-orange-900/20' :
                              'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold'
                            }
                          `}>
                            {idx + 1}
                          </span>
                        </td>
                        <td className="p-4 sm:p-5 min-w-[200px]">
                          <div className="font-black text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">{chara.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{chara.rarity}</div>
                        </td>
                        <td className="p-4 sm:p-5 w-24">
                          <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                            {chara.type}
                          </span>
                        </td>
                        <td className="p-4 sm:p-5 w-32">
                          <span className={`${textClass} font-black text-lg sm:text-xl drop-shadow-sm`}>{chara.damage}</span>
                        </td>
                        <td className="p-4 sm:p-5 min-w-[200px]">
                          <span className="inline-block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg break-words w-full">
                            {chara.condition}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
