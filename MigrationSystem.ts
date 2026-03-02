// 1. 型の定義（インターフェース）
interface Citizen {
    name: string;
    status: 'Ready' | 'Searching' | 'Migrated';
    assets: number; // NZD
}

// 2. 基本クラス
class Migrator implements Citizen {
    constructor(
        public name: string,
        public status: 'Ready' | 'Searching' | 'Migrated',
        public assets: number
    ) {}

    // 資産状況を表示するメソッド
    displayStatus(): void {
        console.log(`--- ${this.name}'s Status ---`);
        console.log(`Target: New Zealand 🇳🇿`);
        console.log(`Current Assets: ${this.assets.toLocaleString()} NZD 🛡️`);

        if(this.assets >= 5000) {
            console.log("Defense: shield Level MAX");
        }        
    }
}

// 3. インスタンス化と実行
const me =  new Migrator(`aTamQuiet_Code`, `Ready`, 5400);
me.displayStatus();