import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto pb-24 animate-in fade-in duration-1000">
      {/* Article Navigation Sidebar (Desktop) */}
      <aside className="hidden xl:block fixed left-[calc(50%+420px)] top-32 w-64 space-y-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Contents</h3>
          <nav className="flex flex-col gap-3 text-sm font-bold">
            <a href="#intro" className="text-gray-600 hover:text-amber-500 transition-colors">はじめに</a>
            <a href="#ranking" className="text-gray-600 hover:text-amber-500 transition-colors">最強ランキング</a>
            <a href="#reroll" className="text-gray-600 hover:text-amber-500 transition-colors">効率リセマラ</a>
            <a href="#keep" className="text-gray-600 hover:text-amber-500 transition-colors">データの保存</a>
            <a href="#early" className="text-gray-600 hover:text-amber-500 transition-colors">序盤の進め方</a>
          </nav>
        </div>
      </aside>

      {/* Hero Section */}
      <section className="relative h-[450px] rounded-[3.5rem] overflow-hidden bg-gray-900 shadow-2xl mb-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_cats_illust.png" 
            alt="Guide Banner" 
            fill 
            className="object-cover opacity-40 scale-10 strategy-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-16">
          <span className="px-4 py-1.5 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full w-max mb-6 shadow-lg shadow-amber-500/40">
            Professional Strategy Guide
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            【ぼくとネコ】<br/>最強キャラは誰？<br/>
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">リセマラの効率的なやり方</span><br/>も徹底解説
          </h1>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 px-4 sm:px-0">
        <article className="space-y-20 text-gray-800 dark:text-gray-200 leading-loose">
          
          {/* Section: Intro */}
          <section id="intro" className="prose prose-lg dark:prose-invert max-w-none">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 text-6xl opacity-10 font-black italic">INTRO</div>
               <p className="font-bold text-lg leading-relaxed relative z-10">
                「ぼくとネコ」をこれから始める方や、どのキャラを育てればよいか悩んでいる方に向けて、最新の最強キャラランキングと、ゲーム開始時に重要となるリセマラの効率的なやり方を解説します。
               </p>
               <p className="mt-4 text-gray-500 dark:text-gray-400 relative z-10 font-medium">
                最強キャラの評価ポイントや、リセマラで狙うべき当たりキャラについても詳しくまとめていますので、ぜひ攻略の参考にしてください。
               </p>
            </div>
          </section>

          {/* Section: Ranking */}
          <section id="ranking" className="space-y-10">
            <h2 className="text-4xl font-black flex items-center gap-4">
              <span className="text-amber-500">#</span> 最強キャラランキング（総合）
            </h2>
            <p className="font-medium text-gray-500">
              「ぼくとネコ」の最強キャラランキングを総合評価を紹介します。ランキングはPVP、ボスバトル、高難易度（天界の塔など）の3つの主要コンテンツでの活躍度を基準に評価しています。
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: '毘沙門天', desc: '超絶的な火力と体力を兼ね備えたキャラです。特に司令塔ネコの体力が1以下になると本領を発揮します。ただし、移動速度が遅いため、召喚するタイミングが非常に重要となる上級者向けの側面も持ち合わせています。' },
                { name: '大黒天', desc: '全てのコンテンツで最強と評価されるサポーターです。味方全体に多様なバフ効果を付与できる点が強力です。さらにCP軽減の特性も持つため、コストパフォーマンスが高く、あらゆるパーティで活躍が期待できます。' },
                { name: '獄炎ビシャモン', desc: '高い火力と攻撃の手数を誇り、敵をなぎ倒す高速アタッカーです。司令塔ネコの体力が1以下の状況では体力が3倍になるため、土壇場での粘り強さも持っています。PVPや高難易度クエストで特に強力です。' },
                { name: '恵比寿天', desc: '範囲内の敵に超連続攻撃を行う「ため」タイプのアタッカーです。一発の火力が高い上に、クリティカル率が常時70%と非常に高く、圧倒的な殲滅力を誇ります。PVPや高難易度コンテンツで特に力を発揮します。' },
                { name: '覚醒イザナギ', desc: '高い火力を持つクリティカルアタッカーです。ファーストリキャスト（初回の再召喚時間）が短く、召喚4回目からは必要CPが0になるため、長期戦になるほどその真価を発揮する強力なキャラです。' },
                { name: 'ムシャガル', desc: '召喚3回まで属性攻撃力が700%アップするという、極めて高い火力を出せるボスバトル最強のアタッカーです。初回召喚時や司令塔ネコの体力が1以下の時にはクリティカル率も上昇し、短期決戦で輝きます。' },
                { name: 'ルシファーシロちん', desc: '光と闇の2属性を扱える最強クラスの魔法アタッカーです。攻撃範囲（バーストサイズ）が非常に大きく、敵を7秒間ふっとばすスキルが強力で、敵の攻撃を妨害しながら一方的に攻撃することが可能です。' },
              ].map((char, i) => (
                <div key={i} className="group bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-black">{char.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    {char.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Reroll */}
          <section id="reroll" className="space-y-10">
            <div className="bg-amber-500 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 text-9xl font-black opacity-10">RE!</div>
               <h2 className="text-4xl font-black mb-8 relative z-10">高速リセマラの効率的な手順</h2>
               <p className="text-amber-100 font-medium max-w-2xl mb-12 relative z-10">
                「ぼくとネコ」では、序盤の攻略をスムーズに進めるためにリセマラがおすすめです。
                リセマラ1周にかかる時間や、引けるガチャの回数は以下の通りです。
                最高レアリティである「超激レア」の排出確率は5%です。
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                   <p className="text-xs uppercase font-black tracking-widest opacity-60 mb-2">Required Time</p>
                   <p className="text-3xl font-black">5 〜 10 分</p>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                   <p className="text-xs uppercase font-black tracking-widest opacity-60 mb-2">Rarity SSR</p>
                   <p className="text-3xl font-black">5.0 %</p>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                   <p className="text-xs uppercase font-black tracking-widest opacity-60 mb-2">Uninstall</p>
                   <p className="text-3xl font-black">不要</p>
                 </div>
               </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'アプリをインストール・起動', desc: 'ストアからアプリをダウンロードして開始します。' },
                { title: 'チュートリアルを進める', desc: '基本操作を学びながら進めます。スキップできる部分は飛ばして時短しましょう。' },
                { title: 'プレゼントを受け取る', desc: 'ホーム画面の「メールボックス」からジェムやガチャチケットを全て回収します。' },
                { title: 'ガチャを回す', desc: '「最強キャラランキング」で上位にランクインしている超激レアキャラを狙いましょう。' },
                { title: '結果に満足いかなければリセット', desc: 'ホーム画面右下の「設定」→「データ初期化」から即座にやり直せます。' },
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-black group-hover:bg-amber-500 group-hover:text-white transition-colors border border-gray-200 dark:border-gray-700">
                      {i + 1}
                    </div>
                    {i !== 4 && <div className="w-0.5 flex-1 bg-gray-100 dark:bg-gray-800 my-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-black mb-2">{step.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Data Keep */}
          <section id="keep" className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-sm space-y-8">
            <h2 className="text-3xl font-black">妥協データのキープ方法</h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              リセマラの途中で、狙いとは違っても強力なキャラ（超激レア複数枚など）が排出された場合は、データをキープしておくことをおすすめします。この手順でデータを保存しておけば、リセマラを続行しつつ、万が一の結果に備えて妥協ラインのデータを確保できます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                <span className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">1</span>
                <p className="font-bold">ホーム画面右下の歯車マークから「設定」を開く</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                <span className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">2</span>
                <p className="font-bold">「機種変更」を選択</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                <span className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">3</span>
                <p className="font-bold">「機種変更」をタップしてIDと認証番号を発行</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                <span className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">4</span>
                <p className="font-bold">発行されたIDと認証番号をスクリーンショット等で控える</p>
              </div>
            </div>
          </section>

          {/* Section: Early Game */}
          <section id="early" className="space-y-10">
            <h2 className="text-4xl font-black">序盤にやるべきこと</h2>
            
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-black flex items-center gap-3">
                  <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                  メインステージを進めてキャラを集める
                </h3>
                <p className="font-medium text-gray-500 leading-loose">
                  まずはメインクエスト（ストーリー）を進めましょう。メインクエストの各ステージには「ドロップチャレンジ」が設定されており、達成することで新たなキャラを仲間にできます。ドロップチャレンジで手に入るキャラも育成すれば中盤以降も活躍できるため、積極的に挑戦して戦力を増強しましょう。
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                  ランクを上げてコンテンツを解放する
                </h3>
                <p className="font-medium text-gray-500 leading-loose">
                  メインクエストのボスエリアをクリアすると、「ランクアップ解放クエスト」に挑戦できます。メインストーリーに慣れてきたら、イベントクエストにも挑戦してみましょう。
                </p>
                
                <div className="overflow-hidden rounded-[2.5rem] border-4 border-gray-100 dark:border-gray-800 shadow-2xl">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-900 text-gray-500 font-black text-xs uppercase tracking-widest">
                        <th className="px-8 py-6">プレイヤーランク</th>
                        <th className="px-8 py-6">解放される主なコンテンツ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-lg">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-8 py-6 font-black">ランク 2</td>
                        <td className="px-8 py-6">イベントクエスト</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-gray-50/30">
                        <td className="px-8 py-6 font-black text-amber-500">ランク 3</td>
                        <td className="px-8 py-6 font-bold">オートバトルモード</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-8 py-6 font-black text-blue-500">ランク 4</td>
                        <td className="px-8 py-6 font-bold">シロちん錬金所（合成・変換）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-8 py-6 font-black">ランク 10</td>
                        <td className="px-8 py-6 font-bold">シロちん錬金所の武器本領発揮</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-900/50">
                  <p className="text-blue-800 dark:text-blue-300 font-bold leading-relaxed italic">
                    プレイヤーランクを上げることでスタミナが回復するほか、様々な便利機能や新コンテンツが解放されます。特に「オートバトル」（ランク3）や「シロちん錬金所」（ランク4）が解放されるランク4までは、一気に進めるのがおすすめです。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-20 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-gray-400 font-bold">
              この記事では、「ぼくとネコ」の最強キャラランキングと、効率的なリセマラの方法について解説しました。<br className="hidden sm:block"/>
              協力なキャラを手に入れて、序盤の攻略をスムーズに進めましょう！
            </p>
          </footer>

        </article>
      </div>
    </div>
  );
}
