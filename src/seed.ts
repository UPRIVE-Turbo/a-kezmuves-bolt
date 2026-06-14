import { getPayload } from 'payload'

import config from './payload.config'

const services = [
  {
    name: 'Egyedi ajándékok',
    description:
      'Gondosan összeválogatott portékák helyi keramikusoktól, textiltervezőktől és ékszerkészítőktől. Minden tárgy egyedi, lehetetlenség belőlük két teljesen egyformát találni.',
    icon: 'gift',
    highlights: 'Kézi korongozású kerámiák\nOrganikus szójagyertyák\nBotanikai illusztrációk',
    order: 1,
  },
  {
    name: 'Kreatív workshopok',
    description:
      'Tanulj új technikákat barátságos, inspiráló környezetben. Kezdőtől a haladó szintig tartunk kiscsoportos foglalkozásokat, ahol lelassulhatsz és alkothatsz.',
    icon: 'palette',
    highlights: 'Makramé falidísz készítés\nAgyagozás és kerámiafestés\nAkvarell virágfestés',
    order: 2,
  },
  {
    name: 'Minőségi alapanyagok',
    description:
      'Minden, ami az otthoni alkotáshoz kell. Csak olyan anyagokat árulunk, amelyeket saját magunk is használunk és teszteltünk a workshopjaink során.',
    icon: 'scissors',
    highlights: 'Természetes pamut fonalak\nMinőségi ecsetek és festékek\nKülönleges papírok, vásznak',
    order: 3,
  },
]

const run = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const existingServices = await payload.find({ collection: 'services', limit: 1 })
  if (existingServices.totalDocs === 0) {
    for (const service of services) {
      await payload.create({ collection: 'services', data: service })
    }
    payload.logger.info('Szolgáltatások feltöltve.')
  } else {
    payload.logger.info('Szolgáltatások már léteznek, kihagyva.')
  }

  await payload.updateGlobal({
    slug: 'settings',
    data: {
      companyName: 'A Kézműves Bolt',
      address: 'Virág Benedek u. 3, 8200 Veszprém',
      facebook: 'https://www.facebook.com/akezmuves.bolt',
      openingHours: [
        { day: 'Hétfő – Péntek', hours: '10:00 – 18:00' },
        { day: 'Szombat', hours: '09:00 – 13:00' },
        { day: 'Vasárnap', hours: 'Zárva' },
      ],
    },
  })
  payload.logger.info('Beállítások mentve.')

  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
