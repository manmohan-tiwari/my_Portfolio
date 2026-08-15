import AnimatedCard from './AnimatedCard'

export default function ExperienceItem({
  role,
  company,
  duration,
  responsibilities,
  index = 0,
}: {
  role: string
  company: string
  duration: string
  responsibilities: string[]
  index?: number
}) {
  return (
    <AnimatedCard label={duration} title={role} index={index}>
      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">{company}</h4>
      <ul className="flex flex-col gap-3">
        {responsibilities.map((resp, i) => (
          <li key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm relative pl-4">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            {resp}
          </li>
        ))}
      </ul>
    </AnimatedCard>
  )
}
