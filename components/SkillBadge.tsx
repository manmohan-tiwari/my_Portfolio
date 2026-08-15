export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-red-600 hover:text-red-700 dark:hover:text-red-500 transition-colors shadow-sm cursor-default">
      {skill}
    </span>
  )
}
