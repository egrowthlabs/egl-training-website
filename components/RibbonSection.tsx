const WORDS = [
  'CARDIO CONSCIENTE',
  '·',
  'FUERZA FUNCIONAL',
  '·',
  'MOVILIDAD',
  '·',
  'RESISTENCIA',
  '·',
  'TONIFICACIÓN',
  '·',
]

export default function RibbonSection() {
  // Duplicate for seamless loop
  const track = [...WORDS, ...WORDS, ...WORDS]

  return (
    <div
      className="w-full overflow-hidden py-5 select-none"
      style={{ backgroundColor: 'var(--dark-teal)' }}
    >
      <div
        className="flex items-center gap-10 whitespace-nowrap animate-ribbon"
        style={{ width: 'max-content' }}
      >
        {track.map((word, i) => (
          <span
            key={i}
            className={`text-sm md:text-base font-black tracking-[0.2em] ${
              word === '·'
                ? 'opacity-40'
                : 'text-white'
            }`}
            style={word !== '·' ? { color: 'var(--primary)' } : { color: 'var(--primary)' }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
