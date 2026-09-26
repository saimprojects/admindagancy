import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Play,
  Asterisk,
  Plus,
  Minus,
  Check,
  Film,
  Camera,
  Layers,
  ScanLine,
  Mail,
  Phone,
  MessageCircle,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";

import WorkVideoCard from "./components/WorkVideoCard.jsx";
import WorkVideoPlayer from "./components/WorkVideoPlayer.jsx";
import workVideo1 from "./videos/1.mp4";
import workVideo2 from "./videos/2.mp4";
import workVideo3 from "./videos/3.mp4";

export function Logo({ light = false }) {
  if (!light)
    return (
      <a
        href="#home"
        className="brand brand-original"
        aria-label="AdMind Agency home"
      >
        <svg viewBox="87 474 1089 273" role="img" aria-label="AdMind Agency">
          <image href="/images/admind-logo.webp" width="1254" height="1254" />
        </svg>
      </a>
    );
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="AdMind Agency home"
    >
      <svg viewBox="0 0 76 58" aria-hidden="true">
        <defs>
          <linearGradient
            id={light ? "mark-light" : "mark"}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#0878ff" />
            <stop offset="1" stopColor="#0a2675" />
          </linearGradient>
        </defs>
        <path
          d="M2 52 25 7q3-6 7 0L51 37 72 9v43H60V32L50 44q-3 4-6-1L29 19 13 52Z"
          fill={light ? "white" : "#0a152e"}
        />
        <path
          d="M25 7q3-6 7 0L48 32 69 7q4-4 4 2v43H60V31L50 44q-3 4-6-1Z"
          fill={`url(#${light ? "mark-light" : "mark"})`}
        />
        <path
          d="m15 51 14-17"
          stroke={light ? "#70a6ff" : "#1259d9"}
          strokeWidth="4"
        />
        <circle cx="30" cy="32" r="5" fill={light ? "#70a6ff" : "#1259d9"} />
      </svg>
      <span>
        <b>
          Ad<span>Mind</span>
          <i>®</i>
        </b>
        <small>AGENCY</small>
      </span>
    </a>
  );
}

export function Button({
  children,
  href = "#contact",
  className = "",
  ...props
}) {
  return (
    <a href={href} className={`button ${className}`} {...props}>
      {children}
      <ArrowUpRight size={19} />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav
          id="main-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {[
            ["Work", "work"],
            ["What we do", "services"],
            ["Our process", "process"],
            ["About us", "about"],
          ].map(([name, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <Button className="mobile-contact" onClick={() => setOpen(false)}>
            Let’s talk
          </Button>
        </nav>
        <Button className="nav-cta">Let’s talk</Button>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="small-line" /> HUMAN IDEAS. AI POSSIBILITIES.
        </div>
        <h1>
          Made to stop.
          <br />
          Built to{" "}
          <span className="sell">
            sell.
            <svg viewBox="0 0 230 20" preserveAspectRatio="none">
              <path d="M3 14Q100 0 224 8M24 19Q126 6 211 15" />
            </svg>
          </span>
        </h1>
        <p>
          Big-brand creative. Without the big-agency friction.
          <br className="desktop-break" /> We turn your business into ads people
          actually
          <br className="desktop-break" /> stop for—and remember.
        </p>
        <div className="hero-actions">
          <Button>Build my next ad</Button>
          <a href="#work" className="text-button">
            <span className="play-small">
              <Play size={13} fill="currentColor" />
            </span>{" "}
            Explore the work <ArrowRight size={17} />
          </a>
        </div>
        <div className="hero-note">
          <span className="crosshair">✳</span>
          <span>
            Strategy-led. AI-powered. <strong>Unmistakably you.</strong>
          </span>
        </div>
      </div>
      <div className="hero-art" aria-label="AdMind creative campaign concepts">
        <div className="art-grid" />
        <div className="creative-label">
          <span className="label-lines" /> THE NEXT THING THEY NOTICE.
        </div>
        <div className="hero-campaign hero-campaign-main">
          <div className="campaign-image-placeholder">
            PULSE
            <br />
            <em>Feel everything.</em>
          </div>
          <img
            src="/images/headphones.webp"
            alt="Silver headphones in a cinematic product concept"
            onError={(e) => (e.currentTarget.style.opacity = 0)}
          />
          <div className="campaign-top">
            <span>PULSE / AUDIO</span>
            <ArrowUpRight size={20} />
          </div>
          <div className="campaign-bottom">
            <small>TURN IT UP.</small>
            <strong>
              Feel
              <br />
              everything.
            </strong>
          </div>
        </div>
        <div className="hero-campaign hero-campaign-orange">
          <div className="orange-placeholder" />
          <img
            src="/images/daybreak.webp"
            alt="Orange beverage campaign concept"
            onError={(e) => (e.currentTarget.style.opacity = 0)}
          />
          <span>
            GOOD ENERGY.
            <br />
            GREAT TASTE.
          </span>
        </div>
        <div className="hero-campaign hero-campaign-beauty">
          <div className="beauty-placeholder" />
          <img
            src="/images/perfume.webp"
            alt="Luxury fragrance product concept"
            onError={(e) => (e.currentTarget.style.opacity = 0)}
          />
          <span>
            FORME<span>LESS. BUT EVERYTHING.</span>
          </span>
        </div>
        <div className="art-sticker">
          <Asterisk size={34} />
          <span>
            Human
            <br />
            at heart.
          </span>
        </div>
        <div className="art-caption">
          <span>01—03 / CREATIVE EXPLORATIONS</span>
          <span>SCROLL-STOPPING BY DESIGN ↗</span>
        </div>
      </div>
      <a href="#work" className="scroll-cue">
        <span>SCROLL TO DISCOVER</span>
        <span>↓</span>
      </a>
    </section>
  );
}

const projects = [
  {
    name: "FRAGRANCE",
    title: "A fresher kind of fragrance.",
    service: "Fragrance product film",
    video: workVideo1,
    poster: "/images/work-01.webp",
  },
  {
    name: "BEVERAGE",
    title: "Refreshment, in motion.",
    service: "Beverage product film",
    video: workVideo2,
    poster: "/images/work-02.webp",
  },
  {
    name: "AUDIO",
    title: "Sound. With presence.",
    service: "Headphones product film",
    video: workVideo3,
    poster: "/images/work-03.webp",
  },
];

function Modal({ title, onClose, children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = oldOverflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-inner">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>
        <h2 id="modal-title" className="sr-only">
          {title}
        </h2>
        {children}
      </div>
    </dialog>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label ${light ? "is-light" : ""}`}>
      <span>{number} /</span>
      {children}
    </div>
  );
}

function Work({ onSelect, playerOpen }) {
  return (
    <section id="work" className="work section-padding container">
      <div className="section-heading reveal">
        <div>
          <SectionLabel number="01">CREATIVE IN THE WILD</SectionLabel>
          <h2>
            Looks that stop.
            <br />
            <span className="text-muted">Ideas that stick.</span>
          </h2>
        </div>
        <p>
          A glimpse of what’s possible when sharp
          <br className="desktop-break" /> creative direction meets a new way to
          make.
          <br />
          <span className="concept-note">
            Hover to preview. Click or tap to watch with sound.
          </span>
        </p>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <WorkVideoCard
            key={project.video}
            project={project}
            index={index}
            playerOpen={playerOpen}
            onSelect={onSelect}
          />
        ))}
      </div>
      <div className="work-footnote reveal">
        <span>Fragrance, beverage and audio. Creative made to move.</span>
        <a href="#contact">
          Imagine this for your brand <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

function ProjectDetail({ project, onClose }) {
  return (
    <Modal title={project.title} onClose={onClose} className="work-video-modal">
      <WorkVideoPlayer project={project} />
    </Modal>
  );
}

const services = [
  {
    icon: Film,
    name: "AI video ads",
    tag: "BIG IDEAS. CINEMATIC EXECUTION.",
    description:
      "From an opening hook to the last frame, we build product and brand stories with AI-assisted visuals, thoughtful editing, sound and clear calls to action.",
    includes: [
      "Concept & script",
      "AI-assisted production",
      "Editing & sound design",
      "Platform-ready exports",
    ],
  },
  {
    icon: Camera,
    name: "UGC-style creatives",
    tag: "NATIVE TO THE FEED. TRUE TO YOUR BRAND.",
    description:
      "Conversational, creator-style ad concepts that explain your offer in a relatable way. We plan scripts and visuals around your audience and clearly agree how AI presenters or real creators will be used.",
    includes: [
      "Audience-focused hooks",
      "Natural scripts",
      "Captions & editing",
      "Presenter approach agreed upfront",
    ],
  },
  {
    icon: ScanLine,
    name: "Product & brand ads",
    tag: "MAKE THE PRODUCT THE MAIN CHARACTER.",
    description:
      "Give your product a distinctive visual world. We combine art direction, AI-assisted imagery and careful compositing to show what makes your offer worth a second look.",
    includes: [
      "Creative art direction",
      "Product-led visuals",
      "Ad copy & layouts",
      "Feed, Story & vertical formats",
    ],
  },
  {
    icon: Layers,
    name: "Creative for testing",
    tag: "MORE GOOD IDEAS TO PUT TO WORK.",
    description:
      "Give your paid media team meaningful creative options. We develop alternative hooks, angles and formats, then use the performance feedback you share to inform the next creative round.",
    includes: [
      "Hook & message variations",
      "Format adaptations",
      "Creative iteration",
      "Organized delivery files",
    ],
  },
];

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <SectionLabel number="02" light>
              WHAT WE BRING TO THE TABLE
            </SectionLabel>
            <h2>
              Your unfair
              <br />
              <span className="text-blue-light">creative advantage.</span>
            </h2>
          </div>
          <p>
            One creative partner. From the first
            <br className="desktop-break" /> “what if” to the ad you’re ready to
            run.
            <br />
            Built around your brand, never a template.
          </p>
        </div>
        <div className="service-list reveal">
          {services.map((s, i) => (
            <div
              className={`service-item ${active === i ? "active" : ""}`}
              key={s.name}
            >
              <button
                className="service-toggle"
                aria-expanded={active === i}
                aria-controls={`service-${i}`}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <span className="service-num">0{i + 1}</span>
                <s.icon className="service-icon" size={23} />
                <h3>{s.name}</h3>
                <span className="service-toggle-sign">
                  {active === i ? <Minus /> : <Plus />}
                </span>
              </button>
              <div
                className="service-content"
                id={`service-${i}`}
                hidden={active !== i}
              >
                <span className="service-tag">{s.tag}</span>
                <div>
                  <p>{s.description}</p>
                  <div className="service-includes">
                    {s.includes.map((item) => (
                      <span key={item}>
                        <Check size={13} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="services-bottom reveal">
          <span>You bring the ambition. We bring the creative.</span>
          <a href="#contact">
            Find your creative fit <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    [
      "First, we get you.",
      "Your brand. Your audience. Your offer. We start with a focused brief and find the story that makes your business worth choosing.",
      "DISCOVERY & DIRECTION",
    ],
    [
      "Then, we make it.",
      "We shape the concepts, write the hooks and bring the creative to life. You review the direction before we refine the details.",
      "CONCEPT & CREATION",
    ],
    [
      "Ready. Set. Run.",
      "Get polished assets in the formats you need, ready for your media team to launch. Share your learnings and we build on what connects.",
      "REFINE & DELIVER",
    ],
  ];
  return (
    <section id="process" className="process section-padding container">
      <div className="section-heading reveal">
        <div>
          <SectionLabel number="03">
            GOOD WORK. LESS BACK-AND-FORTH.
          </SectionLabel>
          <h2>
            From “we need ads”
            <br />
            to <span className="text-blue">“that’s the one.”</span>
          </h2>
        </div>
        <p>
          A clear process. A real conversation.
          <br />A creative partner who keeps things moving.
        </p>
      </div>
      <div className="process-grid">
        {steps.map(([title, copy, label], i) => (
          <article
            className="process-step reveal"
            key={title}
            style={{ "--delay": `${i * 100}ms` }}
          >
            <div className="step-top">
              <span>0{i + 1}</span>
              <ArrowRight size={24} />
            </div>
            <span className="step-label">{label}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="delivery-strip reveal">
        <span>THE HANDOFF, HANDLED.</span>
        <p>
          <Check size={15} /> Agreed deliverables
        </p>
        <p>
          <Check size={15} /> Platform-ready formats
        </p>
        <p>
          <Check size={15} /> Clear revision rounds
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-art reveal">
          <div className="about-art-top">
            <Logo light />
            <span>
              INDEPENDENT
              <br />
              BY DESIGN.
            </span>
          </div>
          <div className="about-words">
            <span>Ideas.</span>
            <span>Intent.</span>
            <span>
              Impact<span className="about-period">.</span>
            </span>
          </div>
          <div className="about-art-bottom">
            <span>
              HUMAN DIRECTION.
              <br />
              EXPANDED POSSIBILITIES.
            </span>
            <Asterisk size={50} />
          </div>
        </div>
        <div className="about-copy reveal">
          <SectionLabel number="04">THE MIND BEHIND THE AD</SectionLabel>
          <h2>
            Powered by AI.
            <br />
            Driven by
            <br />
            <span className="text-blue">good taste.</span>
          </h2>
          <p className="about-lead">
            The tools are new.
            <br />
            The obsession with great creative isn’t.
          </p>
          <p>
            AdMind is a creative agency for ambitious businesses serving the US
            market. We use AI to open up what’s possible—and human judgment to
            decide what’s actually worth making.
          </p>
          <p>
            No one-size-fits-all visuals. No noise for the sake of it. Just
            distinctive, considered ads built around your product, your audience
            and your next move.
          </p>
          <a href="#contact" className="inline-link">
            Let’s make something worth watching <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "What kinds of businesses do you work with?",
    "We create ad concepts for ecommerce, consumer products, beauty, food and beverage, and service businesses targeting US audiences. Tell us what you sell, who you want to reach and where your ads will run—we’ll recommend a creative approach.",
  ],
  [
    "What do you need from us to get started?",
    "A link to your website, a short brief, your product photos or footage, brand guidelines if you have them, and the main goal for your ads. Don’t have a complete brief? We can help you shape it during the first conversation.",
  ],
  [
    "How much does a project cost?",
    "Every scope is different. Pricing depends on the concepts, video lengths, number of variations and formats you need. After reviewing your brief, we’ll share a clear scope and quote before production begins. You can start with one project or discuss ongoing creative support.",
  ],
  [
    "How long does production take?",
    "We agree on a production schedule after reviewing the brief and assets. Timing depends on the complexity, number of deliverables and review rounds. Have a launch date? Include it in your enquiry so we can confirm what’s achievable.",
  ],
  [
    "Will our ads look obviously AI-generated?",
    "Our process starts with art direction, not the tool. We select and refine AI-assisted material, check product consistency and shape the edit around your brand. We’ll agree on the visual style and any use of synthetic presenters before production.",
  ],
  [
    "Can you run the ads for us?",
    "Our core service is ad creative production. We deliver agreed formats for your platforms and can work alongside your media buyer or internal team. Campaign setup, media buying and ad spend are not included unless separately agreed.",
  ],
  [
    "What about revisions, usage rights and results?",
    "Revision rounds, deliverables and usage rights are defined in your project scope before work starts. You’ll need permission to use any assets you supply. We design creative to support your marketing goals, but results also depend on your offer, audience, spend and campaign setup—performance is never guaranteed.",
  ],
];

function Faq() {
  const [active, setActive] = useState(0);
  return (
    <section className="faq section-padding container">
      <div className="faq-heading reveal">
        <SectionLabel number="05">A FEW GOOD QUESTIONS</SectionLabel>
        <h2>
          Let’s clear
          <br />
          things up.
        </h2>
        <p>Still curious about something?</p>
        <a href="mailto:Owner@mostmailer.com" className="inline-link">
          Just ask us <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="faq-list reveal">
        {faqs.map(([q, a], i) => (
          <div className={`faq-item ${active === i ? "active" : ""}`} key={q}>
            <h3>
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
                aria-controls={`faq-${i}`}
              >
                {q}
                <span>
                  {active === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={active !== i}>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ onPrivacy }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const controllerRef = useRef(null);
  useEffect(() => () => controllerRef.current?.abort(), []);
  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) {
      setStatus("success");
      return;
    }
    if (
      !String(data.get("name")).trim() ||
      !String(data.get("message")).trim()
    ) {
      setError("Please add your name and a few details about your project.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    const controller = new AbortController();
    controllerRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/Owner@mostmailer.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            ...Object.fromEntries(data),
            _subject: `AdMind project enquiry — ${String(data.get("name")).trim()}`,
            _template: "table",
            _url: window.location.href,
          }),
        },
      );
      const result = await response.json();
      if (
        !response.ok ||
        !(result.success === true || result.success === "true")
      )
        throw new Error("not-accepted");
      setStatus("success");
      form.reset();
    } catch (e) {
      setStatus("error");
      setError(
        e.name === "AbortError"
          ? "The request took too long. Please try again, or reach us directly by email or WhatsApp."
          : "Your enquiry could not be submitted. Your details are still here—please try again, or email us directly.",
      );
    } finally {
      clearTimeout(timeout);
    }
  }
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <SectionLabel number="06" light>
            YOUR NEXT BIG IDEA STARTS HERE
          </SectionLabel>
          <h2>
            Let’s make
            <br />
            some<span className="contact-outline">thing</span>
            <br />
            worth stopping for<span className="contact-dot">.</span>
          </h2>
          <p>
            Tell us what you’re building.
            <br />
            We’ll help you make people care.
          </p>
          <div className="contact-details">
            <a href="mailto:Owner@mostmailer.com">
              <Mail size={19} />
              <span>
                <small>DROP US A LINE</small>Owner@mostmailer.com
              </span>
              <ArrowUpRight size={20} />
            </a>
            <a href="tel:+19175085593">
              <Phone size={19} />
              <span>
                <small>LET’S TALK</small>+1 (917) 508-5593
              </span>
              <ArrowUpRight size={20} />
            </a>
            <a
              href="https://wa.me/19175085593?text=Hi%20AdMind%2C%20I%27d%20like%20to%20discuss%20a%20creative%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              <span>
                <small>MORE OF A TEXTER?</small>Chat on WhatsApp
              </span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
        <div className="contact-form-wrap reveal">
          {status === "success" ? (
            <div className="form-success" role="status" aria-live="polite">
              <span>
                <CheckCircle2 size={36} />
              </span>
              <p className="eyebrow">FIRST STEP, TAKEN.</p>
              <h3>
                Good things
                <br />
                start with a hello.
              </h3>
              <p>
                Your enquiry has been submitted. We’re looking forward to
                learning more about your project.
              </p>
              <button className="button" onClick={() => setStatus("idle")}>
                Send another enquiry <ArrowUpRight size={19} />
              </button>
              <a
                href="https://wa.me/19175085593"
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue on WhatsApp <ArrowUpRight size={15} />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-heading">
                <h3>Tell us about your project.</h3>
                <p>A little context. A lot of possibilities.</p>
              </div>
              <div className="form-row">
                <label>
                  Your name <span>*</span>
                  <input
                    name="name"
                    placeholder="Alex Morgan"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Work email <span>*</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="alex@yourbrand.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                  />
                </label>
              </div>
              <label>
                Company / website
                <input
                  name="company"
                  placeholder="Your brand or website"
                  autoComplete="organization"
                  maxLength={200}
                />
              </label>
              <div className="form-row">
                <label>
                  What do you have in mind? <span>*</span>
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>AI video ads</option>
                    <option>UGC-style creatives</option>
                    <option>Product & brand ads</option>
                    <option>Creative for testing</option>
                    <option>A bit of everything</option>
                    <option>Help me decide</option>
                  </select>
                </label>
                <label>
                  Project budget
                  <select name="budget" defaultValue="">
                    <option value="">Select a range (optional)</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $3,000</option>
                    <option>$3,000 – $5,000</option>
                    <option>$5,000+</option>
                    <option>Let’s discuss</option>
                  </select>
                </label>
              </div>
              <label>
                The brief <span>*</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="A little about your brand, your goals, and what you’d love to create…"
                  required
                  maxLength={5000}
                />
              </label>
              <div className="honeypot" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              <div aria-live="polite">
                {status === "error" && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="button submit-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    Sending your brief{" "}
                    <LoaderCircle size={19} className="spin" />
                  </>
                ) : (
                  <>
                    Let’s create something great <ArrowUpRight size={20} />
                  </>
                )}
              </button>
              <p className="form-privacy">
                By submitting, you agree we may contact you about your project.
                <br />
                <button type="button" onClick={onPrivacy}>
                  Privacy notice
                </button>{" "}
                · Fields marked * are required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Privacy({ onClose }) {
  return (
    <Modal title="Privacy notice" onClose={onClose} className="privacy-modal">
      <div className="privacy-copy">
        <SectionLabel number="ADMIND">PRIVACY NOTICE</SectionLabel>
        <h3>
          Your brief stays
          <br />
          about your project.
        </h3>
        <p>
          When you send an enquiry, AdMind receives the name, email, company,
          selected service, budget and project details you provide. We use them
          to respond to your enquiry and discuss the work you’re interested in.
        </p>
        <p>
          The form is processed by FormSubmit, a third-party email delivery
          service. Your submission is sent through its service to
          Owner@mostmailer.com. Please don’t include passwords, payment
          information or other sensitive details.
        </p>
        <p>
          This site doesn’t use advertising or analytics cookies. External
          links, including WhatsApp, may follow their own privacy policies.
        </p>
        <p>
          For questions or to request deletion of your enquiry, email{" "}
          <a href="mailto:Owner@mostmailer.com">Owner@mostmailer.com</a>.
        </p>
        <a
          className="inline-link"
          href="https://formsubmit.co/privacy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          FormSubmit privacy policy <ArrowUpRight size={16} />
        </a>
      </div>
    </Modal>
  );
}

function Footer({ onPrivacy }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo light />
          <p>
            Human ideas. AI possibilities.
            <br />
            Ads with a mind of their own.
          </p>
          <a className="back-top" href="#home">
            BACK TO TOP <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="footer-large" aria-hidden="true">
          Good ads.<span> Great minds.</span>
          <Asterisk />
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AdMind Agency. All rights reserved.
          </span>
          <span>CREATIVE FOR AMBITIOUS US BUSINESSES</span>
          <button onClick={onPrivacy}>Privacy notice</button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [project, setProject] = useState(null);
  const [privacy, setPrivacy] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${height > 0 ? (window.scrollY / height) * 100 : 0}%`,
      );
      setShowWhatsApp(
        window.scrollY > 450 &&
          window.scrollY < document.getElementById("contact").offsetTop - 300,
      );
    };
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="reading-progress" />
      <Header />
      <main id="main">
        <Hero />
        <div className="platform-strip">
          <div className="container platform-inner">
            <span>
              BUILT FOR THE FEED.
              <br />
              <strong>READY FOR YOUR AUDIENCE.</strong>
            </span>
            <span className="platform-word meta">
              ∞ <b>Meta</b>
            </span>
            <span className="platform-word">TikTok</span>
            <span className="platform-word youtube">
              <Play size={24} fill="currentColor" /> YouTube
            </span>
            <span className="platform-word">Instagram</span>
            <span className="platform-word shopify">▱ shopify</span>
          </div>
        </div>
        <Work onSelect={setProject} playerOpen={Boolean(project)} />
        <Services />
        <Process />
        <About />
        <div
          className="manifesto-strip"
          aria-label="Good creative is good business"
        >
          <div aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                GOOD CREATIVE. GOOD BUSINESS.
                <Asterisk />
              </span>
            ))}
          </div>
        </div>
        <Faq />
        <Contact onPrivacy={() => setPrivacy(true)} />
      </main>
      <Footer onPrivacy={() => setPrivacy(true)} />
      <a
        className={`whatsapp-float ${showWhatsApp ? "visible" : ""}`}
        href="https://wa.me/19175085593"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AdMind on WhatsApp"
        tabIndex={showWhatsApp ? 0 : -1}
      >
        <MessageCircle size={21} />
        <span>Let’s talk</span>
      </a>
      {project && (
        <ProjectDetail project={project} onClose={() => setProject(null)} />
      )}
      {privacy && <Privacy onClose={() => setPrivacy(false)} />}
    </>
  );
}
