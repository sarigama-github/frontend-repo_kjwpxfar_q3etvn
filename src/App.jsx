import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Camera, Sparkles, ArrowRight, Star, Shield, Rocket, Check, Mail, Instagram, MessageSquare } from 'lucide-react'

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl border border-black/5 bg-white/70 backdrop-blur">
      <div className="w-10 h-10 rounded-lg bg-black text-white grid place-items-center">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function PriceCard({ tier, price, items, highlight }) {
  return (
    <div className={`rounded-2xl border ${highlight ? 'border-black shadow-xl shadow-black/5' : 'border-black/10'} bg-white/80 backdrop-blur p-6 flex flex-col`}>
      <h3 className="text-lg font-semibold text-gray-900">{tier}</h3>
      <p className="mt-2 text-4xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2"><Check size={16} className="mt-0.5 text-emerald-600"/> {it}</li>
        ))}
      </ul>
      <a href="#contact" className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 font-medium ${highlight ? 'bg-black text-white hover:bg-gray-900' : 'bg-gray-900 text-white hover:bg-black'} transition-colors`}>
        Get Started <ArrowRight className="ml-2" size={18} />
      </a>
    </div>
  )}

function Testimonial({ quote, author, role }) {
  return (
    <div className="p-6 rounded-2xl bg-white/80 border border-black/5">
      <div className="flex items-center gap-1 text-yellow-500 mb-3">
        {[0,1,2,3,4].map(i => <Star key={i} size={16} fill="#f59e0b" className="text-yellow-500" />)}
      </div>
      <p className="text-gray-800">“{quote}”</p>
      <p className="mt-4 text-sm text-gray-600">— {author}, {role}</p>
    </div>
  )
}

export default function App() {
  const [year] = useState(new Date().getFullYear())

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-black text-white"><Camera size={18}/></span>
            <span>ThumbForge Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#testimonials" className="hover:text-black">Testimonials</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-black text-white px-3 py-2 hover:bg-gray-900">Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section id="hero" className="relative h-[92vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* subtle gradient for readability - don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-black/5 px-3 py-1 text-sm text-gray-700">
              <Sparkles size={16} className="text-amber-600"/> High-converting YouTube & short-form thumbnails
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">Scroll‑stopping thumbnails that boost CTR</h1>
            <p className="mt-4 text-gray-700 text-lg md:text-xl">I design clean, modern, and clickable visuals crafted for creators and brands. Fast turnaround, consistent style, and data‑driven decisions.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-3 hover:bg-gray-900">
                Start a project <ArrowRight size={18} className="ml-2"/>
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white/80 border border-black/10 px-5 py-3 hover:bg-white">See recent work</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              <Stat label="Avg. CTR Lift" value="+32%"/>
              <Stat label="Projects Delivered" value="350+"/>
              <Stat label="Turnaround" value="24–48h"/>
            </div>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Featured work</h2>
            <p className="mt-2 text-gray-600">A mix of bold typography, clear focal points, and strong contrast designed to perform.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-black/5">
                <div className="aspect-[16/9] grid place-items-center text-gray-400">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-wide">Thumbnail Mock {i}</p>
                    <p className="text-xs text-gray-500">Replace with your real work</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Process */}
      <section id="process" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">A smooth, creator‑friendly process</h2>
            <p className="mt-2 text-gray-600">Clear steps, quick iterations, and assets delivered in organized folders.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature icon={Rocket} title="Brief & moodboard" desc="We align on goals, references, and the hook to highlight."/>
            <Feature icon={Shield} title="Design & iterate" desc="Initial concepts in 24–48h, with feedback rounds included."/>
            <Feature icon={Camera} title="Deliver & split test" desc="Exported in multiple sizes, layered files on request."/>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
            <p className="mt-2 text-gray-600">Pay per design or choose a flexible pack for ongoing content.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard tier="Single Thumbnail" price="$35" highlight items={["1 concept + 1 revision","Delivery in 24–48h","Exported for YouTube & Shorts"]}/>
            <PriceCard tier="Creator Pack" price="$149 / 5" items={["5 thumbnails / month","2 concepts each","Priority turnaround"]}/>
            <PriceCard tier="Channel Partner" price="Custom" items={["On-call design support","Brand kit & templates","Weekly CTR reviews"]}/>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">What clients say</h2>
            <p className="mt-2 text-gray-600">Real results from real creators.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial quote="Our CTR jumped from 3.8% to 6.1% in two weeks." author="Maya" role="Tech Creator"/>
            <Testimonial quote="Fast, consistent, and great eye for hierarchy." author="Jon" role="Gaming Channel"/>
            <Testimonial quote="Finally thumbnails that match our brand aesthetic." author="Aisha" role="D2C Brand"/>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Start your project</h2>
            <p className="mt-2 text-gray-600">Tell me about your channel and what you want to achieve.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-2xl bg-white/80 border border-black/5">
              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="px-4 py-3 rounded-md border border-black/10 bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/10"/>
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-md border border-black/10 bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/10"/>
                <input placeholder="Channel link" className="sm:col-span-2 px-4 py-3 rounded-md border border-black/10 bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/10"/>
                <textarea rows={5} placeholder="Project details" className="sm:col-span-2 px-4 py-3 rounded-md border border-black/10 bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/10"/>
                <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-3 hover:bg-gray-900">Send inquiry <ArrowRight size={18} className="ml-2"/></button>
              </form>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 border border-black/5 space-y-4">
              <div className="flex items-center gap-3"><Mail size={18}/> <a href="mailto:hello@thumbforge.studio" className="hover:underline">hello@thumbforge.studio</a></div>
              <div className="flex items-center gap-3"><Instagram size={18}/> <a href="#" className="hover:underline">@thumbforge.studio</a></div>
              <div className="flex items-center gap-3"><MessageSquare size={18}/> <span>24–48h turnaround</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-gray-600">
          <p>© {year} ThumbForge Studio. All rights reserved.</p>
          <a className="hover:text-black" href="/test">System test</a>
        </div>
      </footer>
    </div>
  )
}
