export function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  // Purely a marker: the animation is driven centrally by <Motion> via
  // ScrollTrigger.batch, so revealing needs no per-element client JS.
  return <div className={`${className} reveal`}>{children}</div>
}
