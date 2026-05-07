interface LogoProps {
  className?: string
  textColor?: string
  iconColor?: string
}

export default function Logo({
  className = 'h-10 w-auto text-white',
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ágape Ministerio Internacional"
    >
      {/* Circle with person/alpha icon */}
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5" />
      {/* Head */}
      <circle cx="24" cy="15" r="5" stroke="currentColor" strokeWidth="2.2" />
      {/* Body: arms raised / alpha shape */}
      <path
        d="M14 38 C14 30 18 26 24 26 C30 26 34 30 34 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Cross/alpha accent lines */}
      <line x1="17" y1="33" x2="31" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* "Ágape" text */}
      <text
        x="54"
        y="30"
        fontFamily="var(--font-plus-jakarta), system-ui, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        Ágape
      </text>
    </svg>
  )
}
