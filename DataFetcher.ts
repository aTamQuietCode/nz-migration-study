// 1. レスポンスの型を定義 (DTO)
interface ElectionData {
    ward: string;
    votes: number;
    isAnalyzed: boolean;
}

// 2. データ取得クラス
class DataFetcher {
    // コンストラクタ（からのブラケット {} を使用）
    constructor(public endpoint: string){}

    // 非同期メソッド（Promiseを返す）
    async fetchData(targetWard: string): Promise<ElectionData> {
        console.log(`[System] Accessing ${this.endpoint} for ${targetWard}...`);

        // 1秒待機（シミュレーション）
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            ward: targetWard,
            votes: 5400,
            isAnalyzed: true
        };
    }
}

// 3. 実行
const fetcher = new DataFetcher("https:/api.kanagawa.eection.jp");
fetcher.fetchData("Tsurumi-ku").then(data => {
    console.log(`Success: ${data.ward} data receive. 🛡️`);
});