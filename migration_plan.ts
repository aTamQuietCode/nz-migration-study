// TypeScriptで型を定義する (AS3に近い感覚)
interface MigrationTask {
  title: string;
  status: 'todo' | 'doing' | 'done';
  priority: number;
}

const marchPlan: MigrationTask[] = [
  { title: "TypeScript Mastery", status: 'doing', priority: 1 },
  { title: "React Basics", status: 'todo', priority: 2 },
  { title: "NZ Visa Research", status: 'done', priority: 3 }
];

console.log("--- April Interview Mission ---");
marchPlan.forEach(task => {
  console.log(`[${task.status}] ${task.title} (Priority: ${task.priority})`);
});
