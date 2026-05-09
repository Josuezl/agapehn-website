import Image from 'next/image'

interface LogoProps {
  className?: string
  color?: string
}

export default function Logo({ className = '', color = 'white' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/Logos/logo-principal.png"
        alt="Ágape"
        width={36}
        height={36}
        className="flex-shrink-0"
        style={{ width: 36, height: 36 }}
      />
      <span
        className="font-heading font-bold text-2xl leading-none tracking-tight"
        style={{ color }}
      >
        Ágape
      </span>
    </div>
  )
}
