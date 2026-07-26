import assert from 'node:assert/strict'
import { test } from 'node:test'
import { parseEventContent } from '../lib/event-content.ts'

const validEvent = {
  label: 'Próximo evento',
  title: 'Inextinguible Camp 2026',
  description: 'Una experiencia inolvidable.',
  date: '16 - 18 de octubre de 2026',
  price: 'Entrada: L1,200',
  images: ['/Eventos/inextinguible-camp-2026-01.jpeg'],
  registrationUrl: 'https://forms.gle/BAFKdqAct6ekSZBY8',
}

test('accepts valid event content', () => {
  assert.deepEqual(parseEventContent(validEvent), validEvent)
})

test('rejects an event without images', () => {
  assert.throws(
    () => parseEventContent({ ...validEvent, images: [] }),
    /at least one image/i
  )
})

test('rejects image paths outside the event media folder', () => {
  assert.throws(
    () =>
      parseEventContent({
        ...validEvent,
        images: ['/Galeria/photo.jpg'],
      }),
    /must start with \/Eventos\//i
  )
})

test('rejects an insecure registration URL', () => {
  assert.throws(
    () =>
      parseEventContent({
        ...validEvent,
        registrationUrl: 'http://example.com/register',
      }),
    /must use https/i
  )
})
