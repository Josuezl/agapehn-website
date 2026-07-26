export interface EventContent {
  label: string
  title: string
  description: string
  date: string
  price: string
  images: string[]
  registrationUrl: string
}

const MAX_IMAGES = 10

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function requireText(
  value: unknown,
  field: keyof Omit<EventContent, 'images'>
): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Event field "${field}" must be a non-empty string`)
  }

  return value.trim()
}

function requireImages(value: unknown): string[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error('Event content must include at least one image')
  }

  if (value.length > MAX_IMAGES) {
    throw new Error(`Event content cannot include more than ${MAX_IMAGES} images`)
  }

  return value.map((image, index) => {
    if (typeof image !== 'string' || !image.startsWith('/Eventos/')) {
      throw new Error(`Event image ${index + 1} must start with /Eventos/`)
    }

    if (image.includes('..') || image.includes('\\')) {
      throw new Error(`Event image ${index + 1} contains an invalid path`)
    }

    return image
  })
}

function requireHttpsUrl(value: unknown): string {
  const registrationUrl = requireText(value, 'registrationUrl')
  let parsedUrl: URL

  try {
    parsedUrl = new URL(registrationUrl)
  } catch {
    throw new Error('Event registration URL must be a valid URL')
  }

  if (parsedUrl.protocol !== 'https:') {
    throw new Error('Event registration URL must use HTTPS')
  }

  if (parsedUrl.username || parsedUrl.password) {
    throw new Error('Event registration URL cannot include credentials')
  }

  return parsedUrl.toString()
}

export function parseEventContent(value: unknown): EventContent {
  if (!isRecord(value)) {
    throw new Error('Event content must be an object')
  }

  return {
    label: requireText(value.label, 'label'),
    title: requireText(value.title, 'title'),
    description: requireText(value.description, 'description'),
    date: requireText(value.date, 'date'),
    price: requireText(value.price, 'price'),
    images: requireImages(value.images),
    registrationUrl: requireHttpsUrl(value.registrationUrl),
  }
}
