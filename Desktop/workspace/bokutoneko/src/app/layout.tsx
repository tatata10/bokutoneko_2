import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import { Header } from '@/components/Header';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: '【ぼくとネコ】最強キャラランキング - 攻略wiki',
  description: 'ぼくとネコの最強キャラランキング(tier表)のまとめです。総合評価やタイプ別の最新版ランキングを掲載しています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} dark`} suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans antialiased">
        {/* Native JS Bypass for iPhone */}
        <script dangerouslySetInnerHTML={{ __html: `
          function toggleAppMenu() {
            var menu = document.getElementById('mobile-dropdown-menu');
            if (menu) {
              if (menu.style.display === 'block') {
                menu.style.display = 'none';
              } else {
                menu.style.display = 'block';
              }
            }
          }
          // Close menu on scroll
          window.addEventListener('scroll', function() {
            var menu = document.getElementById('mobile-dropdown-menu');
            if (menu && menu.style.display === 'block') {
              menu.style.display = 'none';
            }
          });
        ` }} />
        {/* Header content */}
        <Header />

        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
          <main className="flex-1 w-full min-w-0">
            {children}
          </main>
          
          <aside className="w-full md:w-80 flex-shrink-0 space-y-6 animate-in fade-in duration-1000">
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50 backdrop-blur-md">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-3">
                <span className="w-2 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></span>
                人気記事ランキング
              </h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="/" className="flex gap-3 items-center group"><span className="text-amber-500 font-bold group-hover:scale-110 transition-transform">1</span><span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors">最強ガチャランキング</span></a></li>
                <li><a href="/damage" className="flex gap-3 items-center group"><span className="text-gray-400 font-bold group-hover:scale-110 transition-transform">2</span><span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors">最大ダメージランキング表</span></a></li>
                <li><a href="#" className="flex gap-3 items-center group"><span className="text-amber-800 dark:text-amber-900 font-bold group-hover:scale-110 transition-transform">3</span><span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors">初心者向け序盤の進め方</span></a></li>
                <li><a href="#" className="flex gap-3 items-center group"><span className="text-gray-500 font-bold group-hover:scale-110 transition-transform">4</span><span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors">メタルの倒し方とおすすめ</span></a></li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="font-black text-xl mb-2 relative z-10">情報提供募集中！</h3>
              <p className="text-indigo-100 text-sm relative z-10">
                最新のキャラクター評価や組み合わせについての情報をお寄せください。
              </p>
            </div>
          </aside>
        </div>

        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p className="mb-4 font-bold text-gray-400">ぼくとネコ非公式攻略Wiki</p>
            <p>&copy; 2026 Strategy Guide. Built with Next.js, Tailwind CSS & Vercel.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
