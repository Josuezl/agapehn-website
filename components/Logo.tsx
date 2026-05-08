import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-10' }: LogoProps) {
  return (
    <Image
      src="/Logos/logo-principal.png"
      alt="Ministerio Internacional Ágape"
      width={160}
      height={48}
      className={className}
      style={{ width: 'auto' }}
    />
  )
}
