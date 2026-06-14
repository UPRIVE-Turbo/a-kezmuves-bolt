'use server'

import { getPayload } from 'payload'

import config from '@/payload.config'

export type SubmitContactFormResult = {
  success: boolean
  message: string
}

export async function submitContactForm(
  _prevState: SubmitContactFormResult | null,
  formData: FormData,
): Promise<SubmitContactFormResult> {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const service = String(formData.get('service') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Kérjük, töltsd ki a kötelező mezőket (név, e-mail, üzenet).',
    }
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    await payload.create({
      collection: 'submissions',
      data: {
        name,
        email,
        phone,
        service,
        message,
      },
    })

    return {
      success: true,
      message: 'Köszönjük az üzeneted! Hamarosan válaszolunk.',
    }
  } catch {
    return {
      success: false,
      message: 'Hiba történt az üzenet küldése közben. Kérjük, próbáld újra később.',
    }
  }
}
