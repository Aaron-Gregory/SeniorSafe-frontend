// Section components for the Senior Safe community-program page

const NAV_ITEMS = [
  { label: 'Home',          id: 'home' },
  { label: 'The need',      id: 'problem' },
  { label: 'Program',       id: 'program' },
  { label: 'Safe Shield',   id: 'shield' },
  { label: 'How it starts', id: 'how' },
  { label: 'Contact',       id: 'contact' },
];

const CONTACT_EMAIL = 'stacy.getinvolved@gmail.com';

const TOPICS = [
  { value: 'partnership', label: 'A partnership conversation' },
  { value: 'program',     label: 'Questions about the program' },
  { value: 'draft',       label: 'Feedback on this draft' },
];

function Nav({ activeId, mobileOpen, setMobileOpen, scrolled }) {
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav-row">
        <a href="#home" className="brand" aria-label="Senior Safe home">
          <BrandLogo size={36} />
          <span>Senior Safe</span>
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
          <a href="#contact" className="btn btn-primary">Talk with us</a>
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
          <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Talk with us</a>
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
          <span className="eyebrow"><span className="eyebrow-dot"></span> For senior living communities</span>
          <h1>
            Help residents face scams<br/>
            <span className="accent">with a shared plan.</span>
          </h1>
          <p className="hero-sub">
            Senior Safe helps communities reduce how often residents are exposed
            to scams — through education, on-site support, and shared protocols.
            It is awareness and prevention, not a promise that fraud will not happen.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Talk with us
              <IconArrowRight size={18} stroke={2.2} />
            </a>
            <a href="#how" className="btn btn-secondary btn-lg">How a partnership starts</a>
          </div>
        </div>

        <div className="hero-panel" aria-label="What the program starts with">
          <h2>What comes first</h2>
          <div className="hero-device-card">
            <div className="hero-device-row">
              <div className="icon"><IconUsers size={22} /></div>
              <div className="meta">
                <b>People, before any app</b>
                <span>Introductions, named roles, and on-site support</span>
              </div>
            </div>
          </div>
          <div className="hero-device-card">
            <div className="hero-device-row">
              <div className="icon"><IconAlert size={22} /></div>
              <div className="meta">
                <b>A shared way to respond</b>
                <span>What staff and residents do when something looks wrong</span>
              </div>
            </div>
          </div>
          <div className="hero-device-card">
            <div className="hero-device-row">
              <div className="icon"><IconPhone size={22} /></div>
              <div className="meta">
                <b>Phone tools only later</b>
                <span>A limited help for calls and texts — not a guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = [
  {
    icon: <IconPhone size={28} />,
    title: 'Calls and texts',
    body: 'Many scams still arrive as a phone call or a message from someone the resident does not know.',
  },
  {
    icon: <IconMail size={28} />,
    title: 'Email and social',
    body: 'The same pressure shows up in inboxes and social feeds. Tactics change faster than a one-time talk can cover.',
  },
  {
    icon: <IconHome size={28} />,
    title: 'No shared response',
    body: 'Communities are often set up for physical safety, and still lack a common way to notice fraud and act while it is happening.',
  },
];

function Problem() {
  return (
    <section id="problem" className="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The need</span>
          <h2>The risk is already on the phone.</h2>
          <p>
            Seniors are targeted through calls, texts, email, and social media.
            Family is not always there to catch it. Senior Safe exists so a
            community has a structured way to talk about fraud and respond together.
          </p>
        </div>
        <div className="feature-grid">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="feature-card reveal">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROGRAM = [
  {
    icon: <IconUsers size={28} />,
    title: 'Introductions',
    body: 'Staff, residents, and families learn what Senior Safe is, and how they will come to recognize it in the community.',
  },
  {
    icon: <IconCheck size={28} />,
    title: 'Named roles',
    body: 'A community manager is the main contact. Resident liaisons help on the ground, so the program is not a poster on a wall.',
  },
  {
    icon: <IconAlert size={28} />,
    title: 'A way to respond',
    body: 'Review help lines and what to do when fraud is suspected, including how to stop an event that is already in progress.',
  },
  {
    icon: <IconChat size={28} />,
    title: 'A place to talk',
    body: 'Regular sharing so fear, isolation, and shame are easier to bring into the open. Connection is part of the protection.',
  },
  {
    icon: <IconLock size={28} />,
    title: 'Baseline protocols',
    body: 'Practical habits for financial accounts and trusted companions — written down, practiced, and available to staff and residents.',
  },
  {
    icon: <IconCalendar size={28} />,
    title: 'Ongoing, not one visit',
    body: 'The first months build awareness and comfort. The point is a habit the community can keep, not a single presentation.',
  },
];

function Program() {
  return (
    <section id="program" className="features" style={{ background: 'var(--bg-mint)' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The program</span>
          <h2>What a community gets.</h2>
          <p>
            The opening months are people and process. No app is required to begin,
            and none is handed out on day one.
          </p>
        </div>
        <div className="feature-grid">
          {PROGRAM.map((item, i) => (
            <div key={i} className="feature-card reveal">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shield() {
  return (
    <section id="shield" className="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Later, and limited</span>
          <h2>Safe Shield is still being built.</h2>
          <p>
            Safe Shield is a phone layer for residents. It is not available yet.
            The first version is meant to start with unwanted calls and texts from
            numbers outside a resident’s contacts. Email, social, and search come
            later only if they prove workable.
          </p>
        </div>

        <div className="feature-grid two">
          <div className="feature-card reveal">
            <div className="feature-icon"><IconPhone size={28} /></div>
            <h3>Calls</h3>
            <p>
              Numbers that are not in the resident’s contacts can be sent to
              voicemail instead of ringing. We would not listen to the call.
            </p>
          </div>
          <div className="feature-card reveal">
            <div className="feature-icon"><IconChat size={28} /></div>
            <h3>Texts</h3>
            <p>
              Messages from numbers outside contacts can be moved out of the main
              inbox. We would not store what those texts said.
            </p>
          </div>
        </div>

        <div className="callout">
          These tools can lower exposure. They do not watch every message, and
          they do not guarantee a resident will not be scammed. Someone can still
          be defrauded after joining. We would rather say that now than discover
          it later as a broken promise. The work is to keep getting better.
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: 1,
    title: 'Agree to explore it',
    body: 'Ownership groups and community leaders talk with us directly. Pricing and contract length are not listed on this page.',
  },
  {
    n: 2,
    title: 'First month, no app',
    body: 'Introductions, roles, and how staff, residents, and families will recognize the program. Technology stays off the table.',
  },
  {
    n: 3,
    title: 'Protocols and habits',
    body: 'How to respond when something looks wrong, why staying connected matters, and a regular place for residents to talk.',
  },
  {
    n: 4,
    title: 'A preview, then a choice',
    body: 'Safe Shield is shown before anyone is asked to use it. Phone tools come only after that, and only for residents who want them.',
  },
];

function How() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Partnership</span>
          <h2>How a partnership starts.</h2>
          <p>
            Awareness comes first. Phone tools are optional, and they come last.
          </p>
        </div>
        <div className="steps steps-4">
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

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', topic: 'partnership', message: '' });
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
    if (!form.email.trim()) err.email = 'We need an email so Stacy can reply.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'That email looks off — mind double-checking?';
    if (!form.message.trim() || form.message.trim().length < 10) err.message = 'A few more words would help.';

    if (Object.keys(err).length) { setErrors(err); return; }

    const topicLabel = (TOPICS.find(t => t.value === form.topic) || TOPICS[0]).label;
    const subject = encodeURIComponent('Senior Safe — ' + topicLabel);
    const body = encodeURIComponent(
      'Name: ' + form.name.trim() + '\n' +
      'Email: ' + form.email.trim() + '\n' +
      'Phone: ' + (form.phone.trim() || '(not given)') + '\n' +
      'Topic: ' + topicLabel + '\n\n' +
      form.message.trim()
    );
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
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
          }}>Contact</span>
          <h2 style={{ marginTop: 16 }}>Talk with us about a community.</h2>
          <p className="contact-lead">
            This page is a draft for review. The form opens an email to Stacy.
            It does not go to a call center, and it does not send on its own —
            you still press send in your mail app.
          </p>

          <div className="contact-info">
            <div className="contact-info-row">
              <div className="ic"><IconMail size={18} /></div>
              <div>
                <b><a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a></b>
                <span>Partnership and program questions</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          {sent ? (
            <div className="form-success">
              <div className="check"><IconCheck size={28} stroke={3} /></div>
              <h3>Thanks, {form.name.split(' ')[0]}.</h3>
              <p>
                Your email app should have opened a draft to Stacy. Send it from
                there. If nothing opened, write directly to {CONTACT_EMAIL}.
              </p>
            </div>
          ) : (
            <React.Fragment>
              <div className="row">
                <div className={'field' + (errors.name ? ' err' : '')}>
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text"
                         value={form.name}
                         onChange={e => update('name', e.target.value)}
                         placeholder="Jordan Lee" />
                  <div className="err-msg">{errors.name}</div>
                </div>
                <div className={'field' + (errors.email ? ' err' : '')}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email"
                         value={form.email}
                         onChange={e => update('email', e.target.value)}
                         placeholder="you@community.org" />
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
                    {TOPICS.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  <div className="err-msg"></div>
                </div>
              </div>
              <div className={'field' + (errors.message ? ' err' : '')}>
                <label htmlFor="msg">What’s on your mind?</label>
                <textarea id="msg"
                          value={form.message}
                          onChange={e => update('message', e.target.value)}
                          placeholder="Which community, and what would be useful to cover?" />
                <div className="err-msg">{errors.message}</div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Open email to Stacy
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
          Senior Safe
        </a>
        <div className="foot-links">
          <a href="#program">Program</a>
          <a href="#shield">Safe Shield</a>
          <a href="#how">How it starts</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <div>© 2026 Senior Safe</div>
          <div className="draft-note">Draft for review. Pricing is not published here.</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, Problem, Program, Shield, How, Contact, Footer,
  NAV_ITEMS,
});
