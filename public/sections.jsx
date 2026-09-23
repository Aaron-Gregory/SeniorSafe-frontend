// Section components for the Senior Safe need page

const NAV_ITEMS = [
  { label: 'Home',     id: 'home' },
  { label: 'The need', id: 'problem' },
  { label: 'Contact',  id: 'contact' },
];

const CONTACT_EMAIL = 'hello@seniorsafeusa.org';

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
          <span className="eyebrow"><span className="eyebrow-dot"></span> Senior fraud protection</span>
          <h1>
            The need to keep seniors<br/>
            <span className="accent">safe from fraud is growing.</span>
          </h1>
          <p className="hero-sub">
            Fraud is reaching a larger share of the money seniors hold.
            This page describes that need. It does not promise that fraud
            will be stopped.
          </p>
          <div className="hero-cta">
            <a href="#problem" className="btn btn-secondary btn-lg">The need</a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Share of seniors' deposits budgeted as impacted">
          <h2>A larger share of deposits</h2>
          <p className="stat-lead">
            The U.S. banking system budgeted for 2.5% of seniors&rsquo; deposits
            to be impacted in 2020. That figure has grown to 15% this year.
          </p>
          <div className="hero-device-card stat-card">
            <div className="stat-figure">2.5%</div>
            <div className="stat-label">2020</div>
            <p>Share of seniors&rsquo; deposits the U.S. banking system budgeted as impacted.</p>
          </div>
          <div className="hero-device-card stat-card">
            <div className="stat-figure">15%</div>
            <div className="stat-label">This year</div>
            <p>That budgeted share has grown to 15%.</p>
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
    body: 'The same pressure shows up in inboxes and social feeds. The stories and the tactics keep changing.',
  },
  {
    icon: <IconHome size={28} />,
    title: 'Often alone with it',
    body: 'Communities are built for physical safety. A fraudulent call or message can still reach a resident when no one else is there to question it.',
  },
];

function Problem() {
  return (
    <section id="problem" className="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The need</span>
          <h2>The risk is already reaching seniors.</h2>
          <p>
            Seniors are targeted through calls, texts, email, and social media.
            The tactics keep changing, and family is not always there when a
            message arrives. The need for protection that helps keep seniors
            safe is rising with that exposure.
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

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', message: '' });
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
    if (!form.email.trim()) err.email = 'We need an email so we can reply.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'That email looks off — mind double-checking?';
    if (!form.message.trim() || form.message.trim().length < 10) err.message = 'A few more words would help.';

    if (Object.keys(err).length) { setErrors(err); return; }

    const subject = encodeURIComponent('Senior Safe — a note');
    const body = encodeURIComponent(
      'Name: ' + form.name.trim() + '\n' +
      'Email: ' + form.email.trim() + '\n' +
      'Phone: ' + (form.phone.trim() || '(not given)') + '\n\n' +
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
          <h2 style={{ marginTop: 16 }}>Send a note.</h2>
          <p className="contact-lead">
            This page is a draft. The form opens an email.
            Nothing is sent until you press send in your mail app.
          </p>

          <div className="contact-info">
            <div className="contact-info-row">
              <div className="ic"><IconMail size={18} /></div>
              <div>
                <b><a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a></b>
                <span>For a question or a note</span>
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
                Your email app should have opened a draft. Send it from
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
                         placeholder="you@email.com" />
                  <div className="err-msg">{errors.email}</div>
                </div>
              </div>
              <div className="field">
                <label htmlFor="phone">Phone <span style={{opacity:.5}}>(optional)</span></label>
                <input id="phone" type="tel"
                       value={form.phone}
                       onChange={e => update('phone', e.target.value)}
                       placeholder="(555) 555-0123" />
                <div className="err-msg"></div>
              </div>
              <div className={'field' + (errors.message ? ' err' : '')}>
                <label htmlFor="msg">Note</label>
                <textarea id="msg"
                          value={form.message}
                          onChange={e => update('message', e.target.value)}
                          placeholder="A short note is enough." />
                <div className="err-msg">{errors.message}</div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Open email
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
          <a href="#problem">The need</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <div>© 2026 Senior Safe</div>
          <div className="draft-note">Draft for review.</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, Problem, Contact, Footer,
  NAV_ITEMS,
});
