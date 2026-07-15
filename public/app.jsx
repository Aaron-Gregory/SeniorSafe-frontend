// SeniorSafe — App shell, scroll tracking, tweaks panel, render

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#26B0AE",
  "heroVariant": "device",
  "rounded": "soft",
  "showFloaters": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  '#26B0AE': { name: 'Teal',     primary: 'oklch(0.68 0.095 195)', hover: 'oklch(0.60 0.095 200)', tint50: 'oklch(0.97 0.015 195)', tint100: 'oklch(0.93 0.03 195)', tint200: 'oklch(0.87 0.05 195)', tint700: 'oklch(0.50 0.085 200)' },
  '#3D7BE5': { name: 'Trust blue',primary: 'oklch(0.62 0.14 250)', hover: 'oklch(0.54 0.14 250)',  tint50: 'oklch(0.97 0.02 250)',  tint100: 'oklch(0.93 0.04 250)', tint200: 'oklch(0.87 0.07 250)', tint700: 'oklch(0.45 0.13 250)' },
  '#4F9D6E': { name: 'Calm green',primary: 'oklch(0.62 0.10 150)', hover: 'oklch(0.54 0.10 150)',  tint50: 'oklch(0.97 0.02 150)',  tint100: 'oklch(0.93 0.04 150)', tint200: 'oklch(0.87 0.06 150)', tint700: 'oklch(0.45 0.10 150)' },
  '#D97757': { name: 'Warm coral',primary: 'oklch(0.70 0.12 35)',  hover: 'oklch(0.60 0.12 35)',   tint50: 'oklch(0.97 0.02 35)',   tint100: 'oklch(0.93 0.04 35)',  tint200: 'oklch(0.87 0.08 35)',  tint700: 'oklch(0.50 0.13 35)' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [activeId, setActiveId] = React.useState('home');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [billing, setBilling] = React.useState('yearly');

  // Apply accent tweak to CSS vars
  React.useEffect(() => {
    const p = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS['#26B0AE'];
    const root = document.documentElement.style;
    root.setProperty('--c-primary', p.primary);
    root.setProperty('--c-primary-hover', p.hover);
    root.setProperty('--teal-50',  p.tint50);
    root.setProperty('--teal-100', p.tint100);
    root.setProperty('--teal-200', p.tint200);
    root.setProperty('--teal-500', p.primary);
    root.setProperty('--teal-600', p.hover);
    root.setProperty('--teal-700', p.tint700);
    root.setProperty('--bg-mint',  p.tint50);
  }, [t.accent]);

  // Apply roundness tweak
  React.useEffect(() => {
    const m = { sharp: { lg: '6px', xl: '8px', md: '4px' },
                soft:  { lg: '22px', xl: '28px', md: '14px' },
                pill:  { lg: '36px', xl: '44px', md: '24px' }};
    const v = m[t.rounded] || m.soft;
    document.documentElement.style.setProperty('--rad-lg', v.lg);
    document.documentElement.style.setProperty('--rad-xl', v.xl);
    document.documentElement.style.setProperty('--rad-md', v.md);
  }, [t.rounded]);

  // Floater visibility
  React.useEffect(() => {
    document.querySelectorAll('.hero-floater').forEach(el => {
      el.style.display = t.showFloaters ? '' : 'none';
    });
  }, [t.showFloaters, mobileOpen]); // re-run after re-renders

  // Scroll spy + nav shadow
  React.useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.getElementById(i.id)).filter(Boolean);
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const y = window.scrollY + 140;
      let cur = sections[0]?.id;
      for (const s of sections) {
        if (s.offsetTop <= y) cur = s.id;
      }
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal-on-scroll
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Nav activeId={activeId} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <How />
        <Pricing billing={billing} setBilling={setBilling} />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand" />
        <TweakColor
          label="Accent color"
          value={t.accent}
          options={Object.keys(ACCENT_PRESETS)}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakSection label="Style" />
        <TweakRadio
          label="Roundness"
          value={t.rounded}
          options={['sharp', 'soft', 'pill']}
          onChange={(v) => setTweak('rounded', v)}
        />
        <TweakSection label="Hero" />
        <TweakToggle
          label="Show floating cards"
          value={t.showFloaters}
          onChange={(v) => setTweak('showFloaters', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
