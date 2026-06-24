// Section components for SeniorSafe site

const NAV_ITEMS = [
  { label: 'Home',     id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'How it works', id: 'how' },
  { label: 'Pricing',  id: 'pricing' },
  { label: 'About',    id: 'about' },
  { label: 'Contact',  id: 'contact' },
];

function Nav({ activeId, mobileOpen, setMobileOpen, scrolled }) {
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav-row">
        <a href="#home" className="brand" aria-label="SeniorSafe home">
          <BrandLogo size={36} />
          <span>SeniorSafe</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <a key={item.id}
               href={'#' + item.id}
               className={activeId === item.id ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-secondary">Sign in</a>
          <a href="#pricing" className="btn btn-primary">Get started</a>
          <button
            className={'nav-burger' + (mobileOpen ? ' open' : '')}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
          </button>
        </div>
      </div>

      <div className={'mobile-menu' + (mobileOpen ? ' open' : '')}>
        {NAV_ITEMS.map(item => (
          <a key={item.id}
             href={'#' + item.id}
             onClick={() => setMobileOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="mobile-cta">
          <a href="#contact" className="btn btn-secondary" onClick={() => setMobileOpen(false)}>Sign in</a>
          <a href="#pricing" className="btn btn-primary"   onClick={() => setMobileOpen(false)}>Get started</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="eyebrow-dot"></span> 24/7 monitoring · trusted by 12,000+ families</span>
          <h1>
            Empowering Seniors with<br/>
            Safety & <span className="accent">Peace of Mind</span>
          </h1>
          <p className="hero-sub">
            A gentle, always-on companion that watches over the people you love.
            One-tap help, daily check-ins, and instant alerts to family — all
            from a single, easy-to-use device.
          </p>
          <div className="hero-cta">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start free 30-day trial
              <IconArrowRight size={18} stroke={2.2} />
            </a>
            <a href="#how" className="btn btn-secondary btn-lg">See how it works</a>
          </div>
          <div className="hero-trust">
            <div className="avatars" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
            <p>
              <strong>4.9 / 5</strong> · from 2,400+ reviews across families and caregivers
            </p>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="hero-device" role="img" aria-label="Preview of the SeniorSafe app">
            <div className="hero-device-screen">
              <div className="hero-device-headline">
                Good morning, Eleanor
                <span className="pill">All good</span>
              </div>

              <div className="hero-device-card">
                <div className="hero-device-row ok">
                  <div className="icon"><IconHeart size={22} /></div>
                  <div className="meta">
                    <b>Daily check-in complete</b>
                    <span>Today at 7:45 AM</span>
                  </div>
                </div>
              </div>

              <div className="hero-device-card">
                <div className="hero-device-row">
                  <div className="icon"><IconPill size={22} /></div>
                  <div className="meta">
                    <b>Lisinopril · 10 mg</b>
                    <span>Next reminder · 12:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="hero-device-card">
                <div className="hero-device-row">
                  <div className="icon"><IconUsers size={22} /></div>
                  <div className="meta">
                    <b>Sarah is on her way</b>
                    <span>ETA · 18 minutes</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary" style={{
                marginTop: 'auto', height: 56, fontSize: 18, borderRadius: 18
              }}>
                <IconPhone size={20} stroke={2.2} />
                Call for help
              </button>
            </div>
          </div>

          <div className="hero-floater hero-floater-1">
            <div className="icon-circle"><IconBell size={16} stroke={2.4} /></div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ink-500)', fontWeight: 500 }}>Alert sent</div>
              <div>Family notified</div>
            </div>
          </div>

          <div className="hero-floater hero-floater-2">
            <div className="icon-circle"><IconCheck size={16} stroke={3} /></div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ink-500)', fontWeight: 500 }}>Heart rate</div>
              <div>72 bpm · normal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoBar() {
  return (
    <div className="logo-bar">
      <div className="container logo-bar-inner">
        <p>As featured in</p>
        <div className="logo-row">
          <span>AARP</span>
          <span>Forbes Health</span>
          <span>NPR</span>
          <span>USA Today</span>
          <span>Wired</span>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: <IconAlert size={28} />,
    title: 'Emergency Alerts',
    body: 'A single press connects to a live responder in under 15 seconds, day or night — no phone needed.',
  },
  {
    icon: <IconPill size={28} />,
    title: 'Medication Reminders',
    body: 'Gentle voice and on-screen prompts for every dose, with caregiver confirmations when missed.',
  },
  {
    icon: <IconMap size={28} />,
    title: 'Location Tracking',
    body: 'Opt-in safe-zones let family know they’re home, on a walk, or need a check-in — without surveillance.',
  },
  {
    icon: <IconFall size={28} />,
    title: 'Fall Detection',
    body: 'AI-assisted motion sensors call for help if a fall is detected, even when help can’t be called for.',
  },
  {
    icon: <IconChat size={28} />,
    title: 'Family Updates',
    body: 'A daily digest for loved ones — activity, mood check-ins, missed reminders — sent however they prefer.',
  },
  {
    icon: <IconLock size={28} />,
    title: 'Private by Design',
    body: 'No cameras, no microphones in private spaces. You decide what’s shared and with whom.',
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything your family needs, nothing they don’t.</h2>
          <p>Designed with geriatric care specialists and tested with 200+ households. Each feature can be turned on or off by the senior themselves.</p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card reveal">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <a href="#contact" className="feature-link">
                Learn more <IconArrowRight size={16} stroke={2.2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: 1,
    title: 'Set up in 10 minutes',
    body: 'We ship a pre-configured device. Plug it in, set the volume — that’s it. No app required for the senior.',
  },
  {
    n: 2,
    title: 'Invite family & caregivers',
    body: 'Loved ones get a simple app to check in, view alerts, and chime in by voice anytime.',
  },
  {
    n: 3,
    title: 'Peace of mind, every day',
    body: 'Routines, reminders, and emergency response keep working quietly in the background, 24/7.',
  },
];

function How() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Get protected this week.</h2>
          <p>No installer, no contracts, no learning curve. Most families are up and running the day the device arrives.</p>
        </div>
        <div className="steps">
          {STEPS.map(s => (
            <div key={s.n} className="step reveal">
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: 'Essentials',
    monthly: 29,
    yearly:  24,
    desc:    'For independent seniors who want a safety net.',
    features: [
      '24/7 emergency response',
      'Medication reminders',
      'Daily check-in calls',
      '1 family caregiver account',
      'Device included',
    ],
    cta: 'Choose Essentials',
    featured: false,
  },
  {
    name: 'Family',
    monthly: 49,
    yearly:  39,
    desc:    'Our most popular plan — covers everything most families need.',
    features: [
      'Everything in Essentials',
      'Fall detection',
      'Location & safe-zones',
      'Up to 5 caregiver accounts',
      'Weekly wellness summary',
      'Priority response',
    ],
    cta: 'Choose Family',
    featured: true,
  },
  {
    name: 'Care+',
    monthly: 79,
    yearly:  64,
    desc:    'For seniors with ongoing health needs and active caregivers.',
    features: [
      'Everything in Family',
      'Nurse-led monthly review',
      'Care plan coordination',
      'Unlimited caregivers',
      'Integrates with EHR / pharmacy',
      'Dedicated account manager',
    ],
    cta: 'Choose Care+',
    featured: false,
  },
];

function Pricing({ billing, setBilling }) {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans. No long-term contracts.</h2>
          <p>30-day money-back guarantee. Cancel anytime — we’ll even send the return label.</p>
          <div className="pricing-toggle" role="tablist">
            <button
              className={billing === 'monthly' ? 'active' : ''}
              onClick={() => setBilling('monthly')}
              role="tab" aria-selected={billing === 'monthly'}>
              Monthly
            </button>
            <button
              className={billing === 'yearly' ? 'active' : ''}
              onClick={() => setBilling('yearly')}
              role="tab" aria-selected={billing === 'yearly'}>
              Yearly <span className="save">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="price-grid">
          {PLANS.map(p => {
            const price = billing === 'yearly' ? p.yearly : p.monthly;
            return (
              <div key={p.name} className={'price-card' + (p.featured ? ' featured' : '')}>
                <div className="price-name">{p.name}</div>
                <div className="price-tag">
                  <span className="num">${price}</span>
                  <span className="unit">/ month{billing === 'yearly' ? ', billed yearly' : ''}</span>
                </div>
                <p className="price-desc">{p.desc}</p>
                <ul>
                  {p.features.map(f => (
                    <li key={f}>
                      <IconCheck size={18} stroke={2.4} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                   className={'btn ' + (p.featured ? 'btn-primary' : 'btn-secondary')}>
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote: 'I sleep through the night again. If Mom needs anything, SeniorSafe lets me know — before she even asks.',
    name: 'Rachel M.',
    role: 'Daughter & caregiver',
    initials: 'RM',
  },
  {
    quote: 'I’m 78 and I don’t feel like I’m being watched. I feel like someone’s on my team. Big difference.',
    name: 'Walter B.',
    role: 'SeniorSafe member',
    initials: 'WB',
  },
  {
    quote: 'The fall detection saved Dad’s life in March. The response team had paramedics there in 9 minutes.',
    name: 'David K.',
    role: 'Family caregiver',
    initials: 'DK',
  },
];

function Testimonials() {
  return (
    <section id="stories" className="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Family stories</span>
          <h2>The most important reviews come from family.</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="testimonial reveal">
              <div className="stars" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map(n => <IconStar key={n} size={18} />)}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption className="testimonial-meta">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">About us</span>
          <h2 style={{ marginTop: 16 }}>Built by people who’ve been the caregiver too.</h2>
          <p>
            SeniorSafe started in 2019 when our founder’s grandmother fell at home
            and couldn’t reach her phone. We set out to build the kind of help she
            actually wanted: simple, dignified, and always there.
          </p>
          <p>
            Today, we’re a team of 40 — engineers, nurses, designers, and
            family caregivers — based in Portland, Oregon.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="num">12K+</div>
              <div className="lbl">Households protected</div>
            </div>
            <div className="about-stat">
              <div className="num">9 min</div>
              <div className="lbl">Avg. emergency response</div>
            </div>
            <div className="about-stat">
              <div className="num">4.9★</div>
              <div className="lbl">Customer rating</div>
            </div>
          </div>
        </div>

        <div className="photo-placeholder">
          [ photo placeholder ]<br/>
          founder + grandmother, kitchen, warm light, 4:5
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: 'Does my parent need to use a smartphone?',
    a: 'No. The SeniorSafe device works on its own — no phone, app, or Wi-Fi setup required by the senior. Family members use a smartphone app to check in.',
  },
  {
    q: 'What happens during an emergency?',
    a: 'Pressing the help button — or an auto-detected fall — connects to a US-based response specialist in under 15 seconds. They stay on the line until help arrives and notify your designated family contacts.',
  },
  {
    q: 'Is there a camera in the device?',
    a: 'No. The device has no cameras and never records audio in private spaces. We believe safety and dignity are non-negotiable.',
  },
  {
    q: 'What if I want to cancel?',
    a: 'Cancel anytime in the app or with a phone call. Within the first 30 days you’ll get a full refund, including the device.',
  },
  {
    q: 'Is the device covered by Medicare or insurance?',
    a: 'Many long-term care plans, Medicare Advantage plans, and HSAs reimburse SeniorSafe. Our care team can help you check eligibility for free.',
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2>Things families ask us.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}
                      aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-q-icon"><IconPlus size={16} stroke={2.4} /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', topic: 'general', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k, v) => {
    setForm({ ...form, [k]: v });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim())  err.name  = 'Please tell us your name.';
    if (!form.email.trim()) err.email = 'We need an email to reach you.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'That email looks off — mind double-checking?';
    if (!form.message.trim() || form.message.trim().length < 10) err.message = 'A few more words would help us help you.';

    if (Object.keys(err).length) { setErrors(err); return; }
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow" style={{
            background: 'rgba(255,255,255,.08)',
            color: 'var(--teal-200)',
            borderColor: 'rgba(255,255,255,.12)'
          }}>Contact us</span>
          <h2 style={{ marginTop: 16 }}>Talk to a real person, today.</h2>
          <p className="contact-lead">
            Have questions about a parent or yourself? Our care team takes the
            time to listen. No scripts, no pressure.
          </p>

          <div className="contact-info">
            <div className="contact-info-row">
              <div className="ic"><IconPhone size={18} /></div>
              <div><b>1-800-SAFE-MOM</b><span>Mon–Sat · 6am–9pm PT</span></div>
            </div>
            <div className="contact-info-row">
              <div className="ic"><IconMail size={18} /></div>
              <div><b>hello@seniorsafe.example</b><span>We answer within an hour, every hour.</span></div>
            </div>
            <div className="contact-info-row">
              <div className="ic"><IconPin size={18} /></div>
              <div><b>Portland, Oregon</b><span>320 NW Davis St · visit by appointment</span></div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          {sent ? (
            <div className="form-success">
              <div className="check"><IconCheck size={28} stroke={3} /></div>
              <h3>Thanks, {form.name.split(' ')[0]}.</h3>
              <p>A care specialist will reach out within the hour. Check your email — we just sent a confirmation.</p>
            </div>
          ) : (
            <React.Fragment>
              <div className="row">
                <div className={'field' + (errors.name ? ' err' : '')}>
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text"
                         value={form.name}
                         onChange={e => update('name', e.target.value)}
                         placeholder="Jane Doe" />
                  <div className="err-msg">{errors.name}</div>
                </div>
                <div className={'field' + (errors.email ? ' err' : '')}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email"
                         value={form.email}
                         onChange={e => update('email', e.target.value)}
                         placeholder="jane@email.com" />
                  <div className="err-msg">{errors.email}</div>
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="phone">Phone <span style={{opacity:.5}}>(optional)</span></label>
                  <input id="phone" type="tel"
                         value={form.phone}
                         onChange={e => update('phone', e.target.value)}
                         placeholder="(555) 555-0123" />
                  <div className="err-msg"></div>
                </div>
                <div className="field">
                  <label htmlFor="topic">I’d like to talk about</label>
                  <select id="topic"
                          value={form.topic}
                          onChange={e => update('topic', e.target.value)}>
                    <option value="general">General questions</option>
                    <option value="parent">A parent or family member</option>
                    <option value="myself">Myself</option>
                    <option value="medicare">Medicare / insurance coverage</option>
                  </select>
                  <div className="err-msg"></div>
                </div>
              </div>
              <div className={'field' + (errors.message ? ' err' : '')}>
                <label htmlFor="msg">What’s on your mind?</label>
                <textarea id="msg"
                          value={form.message}
                          onChange={e => update('message', e.target.value)}
                          placeholder="Tell us a little about your situation — we’ll take it from there." />
                <div className="err-msg">{errors.message}</div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Send message
                <IconArrowRight size={18} stroke={2.2} />
              </button>
            </React.Fragment>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container foot-row">
        <a href="#home" className="brand" style={{ color: '#fff', fontSize: 18 }}>
          <BrandLogo size={28} />
          SeniorSafe
        </a>
        <div className="foot-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <div>© 2026 SeniorSafe, Inc.</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, LogoBar, Features, How, Pricing, Testimonials, About, FAQ, Contact, Footer,
  NAV_ITEMS,
});
