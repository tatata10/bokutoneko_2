import fs from 'fs/promises';

async function main() {
  const html = await fs.readFile('raw.html', 'utf-8');

  // find all <tr>
  const trMatches = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)];
  
  const characters = [];
  const typeMap = {
    1: '体当たり',
    2: '弓',
    3: '魔法',
    4: 'ため',
    5: 'サポート'
  };

  const getScore = (rank) => {
    if (rank === 'SS+') return '100';
    if (rank === 'SS') return '98';
    if (rank === 'S') return '95';
    if (rank === 'A') return '90';
    if (rank === 'B') return '80';
    return '70';
  };

  for (const trMatch of trMatches) {
    const tr = trMatch[1];
    
    // find th
    const thMatch = tr.match(/<th[^>]*>([\s\S]*?)<\/th>/);
    if (!thMatch) continue;
    
    // extract rank text
    const rankMatch = thMatch[1].match(/<span[^>]*>([^<]+)<\/span>/);
    const rank = rankMatch ? rankMatch[1].trim() : thMatch[1].replace(/<[^>]+>/g, '').trim();

    // find all data-obj
    const aMatches = [...tr.matchAll(/data-obj="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)"/g)];
    
    for (const aMatch of aMatches) {
      try {
        const decoded = aMatch[1].replace(/&quot;/g, '"');
        const dataObj = JSON.parse(decoded);
        const imgSrc = aMatch[2];
        const idMatch = imgSrc.match(/\/(\d+)\.jpg/);
        const id = idMatch ? idMatch[1] : Date.now().toString();

        characters.push({
          id,
          rank,
          name: dataObj.name,
          type: typeMap[dataObj.type] || '不明',
          img: imgSrc,
          score: getScore(rank),
          desc: `${dataObj.name}は、「ぼくとネコ」における${rank}ランク（評価点：${getScore(rank)}/100点）の${typeMap[dataObj.type] || '不明'}タイプのキャラクターです。最新のTier表において強力な性能を誇り、パーティの主力として幅広く活躍します。`,
        });
      } catch(e) {
      }
    }
  }
  
  await fs.mkdir('src/data', { recursive: true });
  await fs.writeFile('src/data/characters.json', JSON.stringify(characters, null, 2));
  console.log(`Saved ${characters.length} characters.`);
}

main();
