/**
 * 移住準備：進捗状況チェッカー (2026/02/25)
 */

const progress = {
  duolingoScore: 27, // 現在のスコア
  githubStreak: 5,   // 5日目！
  nzdStatus: "Shield Activated 🛡️", // 資産防衛完了
  selectionEx: "Waiting for reply ✉️" // 選管待ち
};

const tasks = [
  { name: "English", target: 50, current: progress.duolingoScore },
  { name: "Coding", target: 100, current: progress.githubStreak }
];

console.log("--- NZ Migration Mission Progress ---");
console.log(`NZD Balance: ${progress.nzdStatus}`);

tasks.forEach(task => {
  const remaining = task.target - task.current;
  console.log(`${task.name}: ${task.current}/${task.target} (Remaining: ${remaining})`);
  
  if (remaining <= 0) {
    console.log(`✅ ${task.name} Milestone Reached!`);
  }
});

console.log(`\nNext Action: ${progress.selectionEx}`);
