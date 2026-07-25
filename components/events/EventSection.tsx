import Image from 'next/image'
import type { Event } from '@/data/current-event'

interface EventSectionProps {
  event: Event
}

export default function EventSection({ event }: EventSectionProps) {
  return (
    <section id="evento" className="bg-white py-20">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-teal">
            {event.label}
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-navy md:text-4xl">
            Regístrate a nuestro próximo evento
          </h2>
        </div>

        <div
          className={`grid gap-5 ${
            event.images.length > 1 ? 'lg:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {event.images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-video overflow-hidden rounded-lg bg-navy-deeper"
            >
              <Image
                src={image}
                alt={`${event.title}, imagen ${index + 1}`}
                fill
                sizes={event.images.length > 1 ? '(min-width: 1024px) 50vw, 100vw' : '100vw'}
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-end gap-8 border-t border-gray-200 pt-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <h3 className="mb-3 font-heading text-3xl font-extrabold text-navy md:text-4xl">
              {event.title}
            </h3>
            <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-teal">
              <span>{event.date}</span>
              <span>{event.price}</span>
            </div>
            <p className="text-base leading-relaxed text-gray-600">
              {event.description}
            </p>
          </div>

          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-navy-dark"
          >
            Inscríbete ahora
          </a>
        </div>
      </div>
    </section>
  )
}
