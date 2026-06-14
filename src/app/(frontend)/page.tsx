import { getPayload } from 'payload'
import { Clock, Flower2, Gift, MapPin, Package, Palette, Quote, Scissors } from 'lucide-react'

import config from '@/payload.config'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'

const iconMap: Record<string, typeof Gift> = {
  gift: Gift,
  palette: Palette,
  scissors: Scissors,
  package: Package,
}

const shapeClasses = ['rounded-3xl', 'rounded-[4rem] rounded-tl-none', 'blob-2']
const accentClasses = ['text-olive', 'text-terracotta', 'text-brown']
const bulletClasses = ['text-terracotta', 'text-olive', 'text-brown']

const offeringImages = [
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
]

const fallbackServices = [
  {
    id: 'fallback-1',
    name: 'Egyedi ajándékok',
    description:
      'Gondosan összeválogatott portékák helyi keramikusoktól, textiltervezőktől és ékszerkészítőktől. Minden tárgy egyedi, lehetetlenség belőlük két teljesen egyformát találni.',
    icon: 'gift',
    highlights: 'Kézi korongozású kerámiák\nOrganikus szójagyertyák\nBotanikai illusztrációk',
  },
  {
    id: 'fallback-2',
    name: 'Kreatív workshopok',
    description:
      'Tanulj új technikákat barátságos, inspiráló környezetben. Kezdőtől a haladó szintig tartunk kiscsoportos foglalkozásokat, ahol lelassulhatsz és alkothatsz.',
    icon: 'palette',
    highlights: 'Makramé falidísz készítés\nAgyagozás és kerámiafestés\nAkvarell virágfestés',
  },
  {
    id: 'fallback-3',
    name: 'Minőségi alapanyagok',
    description:
      'Minden, ami az otthoni alkotáshoz kell. Csak olyan anyagokat árulunk, amelyeket saját magunk is használunk és teszteltünk a workshopjaink során.',
    icon: 'scissors',
    highlights: 'Természetes pamut fonalak\nMinőségi ecsetek és festékek\nKülönleges papírok, vásznak',
  },
]

const fallbackGallery = [
  { src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80', alt: 'Rendezett kézműves polcok agyag vázákkal' },
  { src: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=400&q=80', alt: 'Agyagozó kezek munka közben' },
  { src: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=400&q=80', alt: 'Festészet és paletták egy asztalon' },
  { src: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80', alt: 'Gyönyörűen csomagolt ajándékdobozok' },
  { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80', alt: 'Koszorúkészítés ágakkal' },
  { src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80', alt: 'Nyitott boltajtó virágokkal és napfénnyel' },
  { src: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=400&q=80', alt: 'Részlet szövésből' },
  { src: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=400&q=80', alt: 'Kézműves szappanok' },
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

const gallerySpans = [
  'col-span-2 row-span-2 h-[320px] md:h-[600px] rounded-2xl',
  'h-[150px] md:h-[288px] rounded-2xl',
  'h-[150px] md:h-[288px] rounded-bl-[3rem] rounded-tr-[3rem]',
  'col-span-2 h-[150px] md:h-[288px] rounded-2xl',
  'h-[150px] md:h-[288px] rounded-2xl hidden md:block',
  'col-span-2 md:col-span-3 h-[160px] md:h-[288px] rounded-2xl',
  'h-[150px] md:h-[288px] rounded-2xl',
  'col-span-2 h-[150px] md:h-[288px] rounded-2xl',
]

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [settings, servicesResult, galleryResult] = await Promise.all([
    payload.findGlobal({ slug: 'settings' }),
    payload.find({ collection: 'services', sort: 'order', limit: 10 }),
    payload.find({ collection: 'gallery', sort: 'order', limit: 8, depth: 1 }),
  ])

  const services = servicesResult.docs.length > 0 ? servicesResult.docs : fallbackServices
  const gallery = galleryResult.docs.length > 0 ? galleryResult.docs : null

  const address = settings?.address || 'Virág Benedek u. 3, 8200 Veszprém'
  const phone = settings?.phone
  const email = settings?.email
  const facebook = settings?.facebook || 'https://www.facebook.com/akezmuves.bolt'
  const openingHours =
    settings?.openingHours && settings.openingHours.length > 0
      ? settings.openingHours
      : [
          { day: 'Hétfő – Péntek', hours: '10:00 – 18:00' },
          { day: 'Szombat', hours: '09:00 – 13:00' },
          { day: 'Vasárnap', hours: 'Zárva' },
        ]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20">
        <div className="blob-1 animate-float absolute right-10 top-20 z-0 h-64 w-64 bg-terracotta/10 blur-2xl" />
        <div className="blob-2 animate-float-delayed absolute bottom-20 left-10 z-0 h-96 w-96 bg-olive/5 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-12 lg:gap-20">
          <div className="flex flex-col justify-center space-y-8 md:col-span-6">
            <div className="relative inline-flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-olive before:block before:h-px before:w-8 before:bg-olive before:content-['']">
              Veszprém, Virág Benedek u. 3.
            </div>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-tighter text-terracotta sm:text-6xl lg:text-7xl xl:text-8xl">
              Kézzel
              <br />
              készült,
              <br />
              <span className="text-brown">szívvel adott.</span>
            </h1>

            <p className="max-w-md text-lg font-light leading-relaxed text-brown/80 md:text-xl">
              Fedezd fel a veszprémi alkotók otthonát. Egyedi kézműves termékek, inspiráló workshopok és kreatív
              alapanyagok egy helyen.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#kinalatunk"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 font-medium text-cream shadow-xl shadow-terracotta/20 transition-all hover:-translate-y-1 hover:bg-brown"
              >
                Mit kínálunk?
              </a>
              <a
                href="#kapcsolat"
                className="rounded-full border border-brown/20 px-8 py-4 font-medium text-brown transition-colors hover:border-brown"
              >
                Kapcsolat
              </a>
            </div>
          </div>

          <div className="relative h-[60vh] w-full md:col-span-6 md:h-[80vh]">
            <div className="absolute inset-0 isolate overflow-hidden rounded-[2.5rem] rounded-tr-none shadow-2xl shadow-brown/10">
              <img
                src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80"
                alt="Kézműves kerámia formázása agyagból"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent" />
            </div>

            <div className="glass-panel animate-float-delayed absolute -bottom-6 -left-6 max-w-[200px] rounded-3xl p-6 md:-right-10 md:left-auto">
              <Flower2 className="mb-3 h-9 w-9 text-terracotta" />
              <p className="font-serif text-xl leading-tight">Helyi alkotók közössége</p>
            </div>
          </div>
        </div>
      </header>

      {/* Kínálatunk */}
      <section id="kinalatunk" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-2xl md:mb-32">
            <h2 className="mb-6 font-serif text-4xl tracking-tight text-terracotta md:text-6xl">
              Mit találhatsz nálunk?
            </h2>
            <p className="text-lg font-light text-brown/70">
              Minden sarok egy új történetet rejt. Legyen szó saját alkotásról vagy a tökéletes ajándékról,
              kínálatunkat a szenvedély válogatta.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const Icon = iconMap[(service.icon || '').toLowerCase()] ?? Gift
              const shape = shapeClasses[index % shapeClasses.length]
              const accent = accentClasses[index % accentClasses.length]
              const bullet = bulletClasses[index % bulletClasses.length]
              const image = offeringImages[index % offeringImages.length]
              const highlights = (service.highlights || '').split('\n').filter(Boolean)
              const reversed = index % 2 === 1

              return (
                <div key={service.id} className="mx-auto grid items-center gap-12 md:grid-cols-2">
                  <div
                    className={`relative h-[400px] overflow-hidden md:h-[500px] ${shape} ${
                      reversed ? 'order-1 md:order-2' : 'order-2 md:order-1'
                    }`}
                  >
                    <img src={image} alt={service.name} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className={`${reversed ? 'order-2 md:order-1 md:pr-12 lg:pr-24' : 'order-1 md:order-2 md:pl-12 lg:pl-24'}`}>
                    <Icon className={`mb-6 h-12 w-12 ${accent}`} />
                    <h3 className="mb-4 font-serif text-3xl text-brown md:text-4xl">{service.name}</h3>
                    {service.description && (
                      <p className="mb-8 text-lg font-light leading-relaxed text-brown/70">{service.description}</p>
                    )}
                    {highlights.length > 0 && (
                      <>
                        <div className="mb-8 h-px w-full bg-brown/10" />
                        <ul className="space-y-3 font-serif font-medium text-brown/80">
                          {highlights.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                              <span className={`h-2 w-2 rounded-full bg-current ${bullet}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rólunk */}
      <section id="rolunk" className="relative overflow-hidden border-t-8 border-terracotta bg-olive py-32">
        <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden opacity-10">
          <h2 className="whitespace-nowrap font-serif text-[15vw] leading-none text-cream">KÉZMŰVES BOLT</h2>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Quote className="mx-auto mb-8 h-10 w-10 text-terracotta" />
          <h2 className="mb-8 font-serif text-3xl leading-tight text-cream md:text-5xl">
            A Virág Benedek utcában található kis boltunk nem csupán egy üzlet – egy közösségi tér.
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-cream/80 md:text-xl">
            Hiszünk a kétkezi munka értékében és abban, hogy minden egyes tárgynak története van. Célunk, hogy teret
            adjunk a kreativitásnak, és hidat építsünk a helyi alkotók és a kézművességet értékelő közönség közé.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
              alt="A bolt vezetőjének portréja"
              className="h-16 w-16 rounded-full border-2 border-terracotta object-cover"
            />
            <div className="text-left">
              <p className="font-serif text-lg text-cream">Kovács Anna</p>
              <p className="text-sm text-cream/60">Alapító &amp; Művészeti vezető</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galéria */}
      <section id="galeria" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-4xl tracking-tight text-terracotta md:text-5xl">Galéria</h2>
              <p className="mt-2 text-brown/60">Pillantás a mindennapjainkba</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {gallery
              ? gallery.map((item, index) => {
                  const image = typeof item.image === 'object' ? item.image : null
                  const src = image?.url || 'https://placehold.co/600x600/B5673E/F4EFE5?text=Kép'
                  return (
                    <div
                      key={item.id}
                      className={`group relative overflow-hidden ${gallerySpans[index % gallerySpans.length]}`}
                    >
                      <img
                        src={src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brown/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  )
                })
              : fallbackGallery.map((item, index) => (
                  <div
                    key={item.alt}
                    className={`group relative overflow-hidden ${gallerySpans[index % gallerySpans.length]}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brown/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Kapcsolat + Elérhetőség */}
      <section id="kapcsolat" className="bg-white/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass-panel grid items-start gap-12 rounded-[2rem] p-6 md:rounded-[3rem] md:p-12 lg:grid-cols-12 lg:gap-24 lg:p-16">
            {/* Form */}
            <div className="lg:col-span-5">
              <h2 className="mb-4 font-serif text-4xl text-terracotta md:text-5xl">Lépj velünk kapcsolatba</h2>
              <p className="mb-10 font-light text-brown/70">
                Kérdésed van egy termékkel kapcsolatban, vagy asztalt foglalnál a következő workshopra? Írj nekünk!
              </p>
              <ContactForm services={services.map((s) => s.name)} />
            </div>

            {/* Info + map */}
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brown/10 bg-cream p-6 md:p-8 lg:col-span-7">
              <div className="relative z-10 mb-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center gap-3 text-terracotta">
                    <MapPin className="h-5 w-5" />
                    <h4 className="font-serif text-xl font-medium">Címünk</h4>
                  </div>
                  <p className="text-brown/80">{address}</p>
                  {phone && (
                    <p className="mt-2">
                      <a href={`tel:${phone}`} className="text-terracotta hover:underline">
                        {phone}
                      </a>
                    </p>
                  )}
                  {email && (
                    <p className="mt-1">
                      <a href={`mailto:${email}`} className="text-terracotta hover:underline">
                        {email}
                      </a>
                    </p>
                  )}
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-3 text-olive">
                    <Clock className="h-5 w-5" />
                    <h4 className="font-serif text-xl font-medium">Nyitvatartás</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-brown/80">
                    {openingHours.map((row, i) => (
                      <li key={i} className="flex justify-between gap-4 border-b border-brown/5 pb-1">
                        <span>{row?.day}</span>
                        <span>{row?.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="min-h-[250px] grow overflow-hidden rounded-2xl border border-brown/10 bg-white">
                <iframe
                  title="A Kézműves Bolt térkép — Veszprém, Virág Benedek u. 3."
                  src="https://www.google.com/maps?q=Veszpr%C3%A9m,+Vir%C3%A1g+Benedek+u.+3&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 250 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lábléc */}
      <footer className="relative overflow-hidden border-t border-terracotta/30 bg-brown py-16 text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(#F4EFE5 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="mb-6 block font-serif text-3xl font-medium tracking-tight text-terracotta">
              A Kézműves Bolt
            </a>
            <p className="mb-6 max-w-sm leading-relaxed text-cream/60">
              Kézzel készült, szívvel adott. A veszprémi alkotók közösségi központja.
            </p>
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 transition-colors hover:bg-cream/10"
            >
              <FacebookIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Kövess minket a Facebookon</span>
            </a>
          </div>

          <div>
            <h5 className="mb-4 font-serif text-xl text-olive">Oldaltérkép</h5>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="#kinalatunk" className="transition-colors hover:text-terracotta">
                  Kínálatunk
                </a>
              </li>
              <li>
                <a href="#rolunk" className="transition-colors hover:text-terracotta">
                  Rólunk
                </a>
              </li>
              <li>
                <a href="#galeria" className="transition-colors hover:text-terracotta">
                  Galéria
                </a>
              </li>
              <li>
                <a href="#kapcsolat" className="transition-colors hover:text-terracotta">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-serif text-xl text-olive">Elérhetőség</h5>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>{address}</li>
              {phone && (
                <li>
                  <a href={`tel:${phone}`} className="transition-colors hover:text-cream">
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="transition-colors hover:text-cream">
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-cream/10 px-6 pt-8 text-center text-xs text-cream/40 md:flex-row md:text-left">
          <p>&copy; 2026 A Kézműves Bolt. Minden jog fenntartva.</p>
          <p>Készült szeretettel Veszprémben.</p>
        </div>
      </footer>
    </>
  )
}
