import eventData from '@/content/current-event.json'
import { parseEventContent } from '@/lib/event-content'

export const currentEvent = parseEventContent(eventData)
