import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import charactersData from '@/data/characters.json';

export function generateStaticParams() {
  return charactersData.map((chara) => ({
    id: chara.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chara = charactersData.find((c) => c.id === id);
  if (!chara) return { title: 'キャラクターが見つかりません' };
  
  return {
    title: `${chara.name}の評価とおすすめ武器｜ぼくとネコ攻略`,
    description: chara.desc,
  };
}

export default async function CharaDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chara = charactersData.find((c) => c.id === id);
  
  if (!chara) {
    notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 pb-16">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
        <Link href="/" className="hover:text-amber-500 transition-colors">トップ</Link>
        <span className="mx-2">›</span>
        <Link href="/" className="hover:text-amber-500 transition-colors">最強キャラランキング</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 dark:text-gray-200">{chara.name}</span>
      </nav>

      {/* Header Profile */}
      <header className="bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start mb-8 backdrop-blur-sm">
        <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 relative rounded-2xl overflow-hidden shadow-lg border-4 border-gray-50 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {chara.img ? (
            <Image src={chara.img} alt={chara.name} fill className="object-cover" unoptimized/>
          ) : (
            <span className="text-4xl font-bold text-gray-300 dark:text-gray-600">?</span>
          )}
          <div className="absolute top-2 right-2 px-2 py-1 bg-amber-400 text-white rounded-md text-xs font-black shadow-sm z-10">
            {chara.type}
          </div>
        </div>
        
        <div className="flex-1 w-full space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              {chara.name}の評価・ステータス
            </h1>
            <div className={`px-4 py-2 rounded-xl flex flex-col items-center justify-center border
              ${chara.rank.includes('SS') ? 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/30 dark:border-amber-700/50 dark:text-amber-300' :
                chara.rank.includes('S') ? 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-900/30 dark:border-rose-700/50 dark:text-rose-300' :
                'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'}
            `}>
              <span className="text-xs font-bold opacity-80">最強Tier</span>
              <span className="text-2xl font-black leading-none">{chara.rank}</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-base sm:text-lg">
            {chara.desc}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-700/50 mt-4">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-3 px-5 text-center shadow-inner">
              <div className="text-xs text-gray-500 font-bold mb-1">攻略班スコア</div>
              <div className="text-xl font-black text-gray-800 dark:text-gray-200">{chara.score}<span className="text-sm font-medium text-gray-500 ml-1">/100</span></div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-3 px-5 text-center shadow-inner">
              <div className="text-xs text-gray-500 font-bold mb-1">攻撃タイプ</div>
              <div className="text-lg font-black text-gray-800 dark:text-gray-200">{chara.type}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Attributes Placeholder (Mocked Data for UI) */}
      <section className="bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-6 sm:p-8 mb-8 backdrop-blur-sm">
        <h2 className="text-xl font-black mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700/50 pb-4">
          <span className="text-amber-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          キャラの詳細評価
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-red-400 rounded-full inline-block"></span>
                圧倒的な強さ
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                このキャラクターは最新環境において非常に優れた性能を発揮します。
                特にその特有のスキルは、難易度の高いクエストやPVPにおいて大活躍します。火力面だけでなく、特定の条件で発動するスキルによって盤面を支配することが可能です。
              </p>
           </div>
           <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-400 rounded-full inline-block"></span>
                おすすめの武器・アクセサリ
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                 火力を底上げする物理特化の武器や、HPを高める耐久型の装備がおすすめです。
                 必要CPを下げるアーティファクトと組み合わせることで真価を発揮し、開幕から有利な展開を作り出せます。
              </p>
           </div>
        </div>
      </section>
      
      {/* Back Button */}
      <div className="flex justify-center mt-12">
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          ランキングに戻る
        </Link>
      </div>

    </div>
  );
}
