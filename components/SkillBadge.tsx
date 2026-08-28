export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.06] bg-white/[0.03] text-neutral-300 backdrop-blur-sm hover:border-red-500/20 hover:text-red-400 transition-colors duration-300">
      {skill}
    </span>
  )
}
