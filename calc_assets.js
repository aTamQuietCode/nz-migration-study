/**
 * 資産防衛計算ツール (2026/02/24)
 * 目的: 日本円からNZドルへの脱出を記録する
 */

const INITIAL_JPY = 500000;
const FEE_JPY = 2000; // Revolut 案Aの手数料
const NZD_RATE = 92.5; // 仮のレート

// 手数料を引いた実質送金額
const netJpy = INITIAL_JPY - FEE_JPY;

// NZドル換算
const nzdAmount = (netJpy / NZD_RATE).toFixed(2);

console.log("--- Migration Fund Status ---");
console.log(`Initial JPY: ¥${INITIAL_JPY.toLocaleString()}`);
console.log(`Defense Fee: ¥${FEE_JPY.toLocaleString()}`);
console.log(`Converted NZD: $${nzdAmount} NZD`);
console.log("Status: Shield Activated 🛡️");
