import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Users, Eye, Scale, Palette, Smile, HeartHandshake, Twitter, Send, Rocket, Flame, Globe, Crown, Infinity, TrendingUp, Sparkles } from 'lucide-react';

const TELEGRAM_URL = 'https://t.me/+DAbq8a8VW345ZGQ1';
const TWITTER_URL = 'https://x.com/TKCP_Meme';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'Roadmap', href: 'roadmap' },
    { label: 'Community', href: 'community' },
    { label: 'Legal', href: 'legal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
        scrolled ? 'bg-background/95 backdrop-blur border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/images/tkcp-logo-new.jpeg" alt="TKCP Logo" className="w-8 h-8 object-cover" />
          <span className="tkcp-heading text-xl text-foreground">$TKCP</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex tkcp-btn-primary text-sm"
        >
          Join Now
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t-2 border-border">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => {
                    scrollToSection(link.href);
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tkcp-btn-primary text-sm w-full"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl animate-float">
      {/* Glow effect behind video */}
      <div className="absolute inset-0 -m-4 bg-primary/20 blur-3xl rounded-full" />
      <div className="relative overflow-hidden border-2 border-primary shadow-[0_0_40px_rgba(245,197,24,0.15)]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/tkcp-cat.jpeg"
          className="w-full h-auto object-cover"
        >
          <source src="/images/tkcp-hero.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Floating badge */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-background border-2 border-primary px-4 py-2 shadow-lg">
        <Sparkles size={14} className="text-primary" />
        <span className="tkcp-mono text-[11px] text-primary uppercase tracking-wider font-bold">To The Moon</span>
        <Sparkles size={14} className="text-primary" />
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 tkcp-mono text-xs text-primary border border-primary/30 px-3 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live — Community Driven
          </div>
          <h1 className="tkcp-heading text-5xl md:text-7xl lg:text-8xl text-foreground leading-none text-balance">
            The Kitty <span className="tkcp-gold">Community Pump</span>
          </h1>
          <p className="tkcp-mono text-sm text-muted-foreground tracking-wider">
            Meme. Culture. Community.
          </p>
          <p className="text-base md:text-lg text-foreground/80 max-w-lg leading-relaxed text-pretty">
            <strong>$TKCP</strong> is a community-driven meme coin built around internet culture, creativity, and participation. Not financial advice — just vibes, memes, and the strongest community online.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button onClick={() => scrollToSection('roadmap')} className="tkcp-btn-primary">
              View Roadmap
            </button>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="tkcp-btn-outline">
              Join Community
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
};

const MarqueeStrip: React.FC = () => {
  const text = '$TKCP \u00B7 THE KITTY COMMUNITY PUMP \u00B7 COMMUNITY FIRST \u00B7 MEME FOREVER \u00B7 ';
  const repeatedText = Array(8).fill(text).join('');

  return (
    <div className="overflow-hidden bg-primary py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="tkcp-heading text-sm md:text-base text-primary-foreground tracking-widest uppercase">
          {repeatedText}
        </span>
        <span className="tkcp-heading text-sm md:text-base text-primary-foreground tracking-widest uppercase">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="tkcp-card flex flex-col gap-3 group">
    <div className="w-10 h-10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="tkcp-heading text-lg text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{desc}</p>
  </div>
);

const AboutSection: React.FC = () => {
  const values = [
    { icon: <Users size={24} />, title: 'Community First', desc: 'Every decision is made for and by the community.' },
    { icon: <Eye size={24} />, title: 'Transparency', desc: 'Open, honest communication at every phase.' },
    { icon: <Scale size={24} />, title: 'Fair Participation', desc: 'Equal opportunity for every holder and member.' },
    { icon: <Palette size={24} />, title: 'Creativity', desc: 'Memes, art, and original content drive everything.' },
    { icon: <Smile size={24} />, title: 'Humor', desc: 'We take the culture seriously, not ourselves.' },
    { icon: <HeartHandshake size={24} />, title: 'Respect', desc: 'A positive, inclusive space for all members.' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="tkcp-section-label mb-4">About the Project</div>
          <h2 className="tkcp-heading text-4xl md:text-6xl text-foreground mb-6 text-balance">
            What Is <span className="tkcp-gold">$TKCP?</span>
          </h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-6 text-foreground/80 leading-relaxed text-pretty p-6 md:p-8 border border-border bg-card/50">
            <p>
              <strong className="text-foreground">The Kitty Community Pump ($TKCP)</strong> is a meme coin born from internet culture — a community-driven experiment in creativity, humor, and collective participation.
            </p>
            <p>
              This project exists for entertainment purposes only. It does not promise profits, returns, or financial benefits. There are no ownership rights, equity stakes, or revenue-sharing agreements of any kind.
            </p>
            <p>
              What it <strong className="text-foreground">does</strong> offer is a community built around memes, creativity, transparency, and mutual respect. The goal: build one of the strongest meme communities on the internet.
            </p>
            <p>
              Cryptocurrency involves significant risk. Always do your own research before participating in any digital asset.
            </p>
          </div>

          <div id="community">
            <div className="tkcp-section-label mb-6 text-center lg:text-left">Community Values</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <ValueCard key={v.title} icon={v.icon} title={v.title} desc={v.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhaseCard: React.FC<{ number: string; icon: React.ReactNode; title: string; items: string[] }> = ({ number, icon, title, items }) => (
  <div className="tkcp-card flex flex-col gap-4 group h-full">
    <div className="flex items-center justify-between">
      <span className="tkcp-mono text-xs text-muted-foreground">PHASE {number}</span>
      <div className="text-primary transition-transform group-hover:scale-110">{icon}</div>
    </div>
    <h3 className="tkcp-heading text-2xl text-foreground">{title}</h3>
    <ul className="flex flex-col gap-2 flex-1">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="text-primary mt-1 shrink-0">&bull;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RoadmapSection: React.FC = () => {
  const phases = [
    { number: '01', icon: <Rocket size={20} />, title: 'Meme Is Born', items: ['Token launch', 'Website goes live', 'Social media channels open', 'Community formation begins', 'First meme campaigns start'] },
    { number: '02', icon: <Flame size={20} />, title: 'Community Takeover', items: ['Grow holder community', 'Community contests & giveaways', 'Meme competitions', 'Community-generated content', 'Expand across platforms'] },
    { number: '03', icon: <Globe size={20} />, title: 'Viral Era', items: ['Community-led marketing', 'Influencer outreach', 'Trending meme campaigns', 'Partnerships with creators', 'Global community expansion'] },
    { number: '04', icon: <Crown size={20} />, title: 'Holder Culture', items: ['Community voting events', 'Ambassador programs', 'Community spaces & events', 'Merchandise exploration', 'Recognize top contributors'] },
    { number: '05', icon: <Infinity size={20} />, title: 'Meme Legacy', items: ['Long-term community support', 'Ongoing engagement campaigns', 'Preservation of meme culture', 'Community-driven future', 'Strongest meme community online'] },
  ];

  return (
    <section id="roadmap" className="py-20 md:py-32 px-4 md:px-8 bg-secondary/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="tkcp-section-label mb-4">The Plan</div>
          <h2 className="tkcp-heading text-4xl md:text-6xl text-foreground mb-4 text-balance">
            Road<span className="tkcp-gold">map</span>
          </h2>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="tkcp-mono text-xs text-muted-foreground max-w-xl leading-relaxed">
            This roadmap is aspirational and subject to change. It represents community goals, not guarantees of any financial outcome, listing, or partnership.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {phases.map((p, idx) => (
            <div key={p.number} className="relative">
              {idx < phases.length - 1 && (
                <div className="hidden xl:block absolute top-8 -right-2 w-4 h-px bg-border z-10" />
              )}
              <PhaseCard number={p.number} icon={p.icon} title={p.title} items={p.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LegalSection: React.FC = () => {
  const disclaimers = [
    'No financial advice',
    'No investment contract',
    'No profit guarantees',
    'No ownership or equity',
    'No revenue sharing',
    'Significant risk involved',
  ];

  return (
    <section id="legal" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="tkcp-section-label mb-4">Disclaimer</div>
          <h2 className="tkcp-heading text-4xl md:text-6xl text-foreground mb-6 text-balance">
            Legal <span className="tkcp-pink">Notice</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500" />
        </div>
        <div className="tkcp-card max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 text-foreground/80 leading-relaxed text-pretty mb-8">
            <p>
              $TKCP is a meme coin created for entertainment and community purposes only. This is NOT financial advice, NOT an investment contract, and NOT a securities offering of any kind.
            </p>
            <p>
              Participation in meme coins carries extreme risk including total loss of funds. Past community activity does not guarantee future performance, exchange listings, utility, or price appreciation.
            </p>
            <p>
              By participating, you acknowledge that you have read and understood these risks and are making your own informed decision. Always conduct your own research (DYOR) before interacting with any digital asset.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {disclaimers.map((d) => (
              <div key={d} className="border border-border px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider hover:border-primary transition-colors">
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-border py-12 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-border to-transparent" />
      <div className="max-w-7xl mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/tkcp-logo-new.jpeg" alt="TKCP" className="w-10 h-10 object-cover border border-primary" />
              <span className="tkcp-heading text-2xl text-foreground">$TKCP</span>
            </div>
            <p className="tkcp-mono text-sm text-muted-foreground">
              The Kitty Community Pump &middot; Community-Driven Meme Coin
            </p>
            <p className="text-xs text-muted-foreground max-w-md leading-relaxed text-pretty">
              This project is for entertainment purposes only. Not financial advice. Not an investment. Cryptocurrency involves significant risk. Always do your own research.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="tkcp-heading text-sm text-foreground uppercase tracking-wider">Quick Links</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('about')} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('roadmap')} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors">Roadmap</button>
              <button onClick={() => scrollToSection('community')} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors">Community</button>
              <button onClick={() => scrollToSection('legal')} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors">Legal</button>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="tkcp-heading text-sm text-foreground uppercase tracking-wider">Community</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Twitter size={16} />
                Twitter / X
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Send size={16} />
                Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="tkcp-mono text-xs text-muted-foreground">
            &copy; 2026 $TKCP — The Kitty Community Pump. All rights reserved.
          </p>
          <p className="tkcp-mono text-xs text-primary uppercase tracking-wider font-bold">
            Meme Coin — Not Financial Advice — DYOR
          </p>
        </div>
      </div>
    </footer>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <RoadmapSection />
      <LegalSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
