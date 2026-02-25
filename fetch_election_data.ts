// 10年前の Callback地獄 や EventListener からの脱却

interface ElectionResult {
  ward: string;
  party: string;
  votes: number;
  timestamp: string;
}

// 仮想のAPIからデータを取得する関数 (Promiseを返す)
async function fetchLatestVotes(wardName: string): Promise<ElectionResult> {
  console.log(`[System] Fetching data for ${wardName}...`);
  
  // 1秒待つ (ネットワーク遅延のシミュレーション)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 模擬データ (追っている3区のイメージ)
  return {
    ward: wardName,
    party: "Team Mirai",
    votes: 45000,
    timestamp: new Date().toISOString()
  };
}

// メイン処理 (async/await で同期的に書ける)
async function runAnalysis() {
  try {
    const tsurumi = await fetchLatestVotes("Tsurumi-ku");
    console.log(`Result: ${tsurumi.ward} - ${tsurumi.party}: ${tsurumi.votes} votes`);
    
    const kawasaki = await fetchLatestVotes("Kawasaki-ku");
    console.log(`Result: ${kawasaki.ward} - ${kawasaki.party}: ${kawasaki.votes} votes`);
    
    console.log("--- Analysis Complete: Shield Activated 🛡️ ---");
  } catch (error) {
    console.error("Connection Error:", error);
  }
}

runAnalysis();
