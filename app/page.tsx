"use client";

import { Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, MouseEvent } from "react";

const SectionHeading = ({ title, accent }: { title: string; accent?: string }) => (
  <h2 className="mx-auto mb-8 max-w-5xl px-6 text-center text-3xl font-semibold text-zinc-200 md:text-4xl">
    {title} {accent ? <span className="text-sky-500">{accent}</span> : null}
  </h2>
);

const Navbar = () => {
  const navItems: { href: string; label: string }[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-base text-zinc-300">
      <span className="rounded bg-zinc-900/60 px-3 py-1 font-mono text-xs text-sky-400 ring-1 ring-white/10">ShowPort</span>
      <ul className="flex items-center gap-6 rounded-full bg-zinc-900/50 px-4 py-2 ring-1 ring-white/10">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-8 px-8 pt-28"
    >
      <p className="bg-gradient-to-r from-purple-400 to-sky-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        portfolio
      </p>
      <p className="-mt-6 text-6xl font-semibold text-white md:text-7xl lg:text-8xl">
        Jesse van den Berg
      </p>
      <div className="mt-6 flex items-center gap-4">
        <a
          href="#projects"
          className="flex items-center gap-2 rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        >
          View My Work →
        </a>
        <div className="flex items-center gap-2 text-zinc-400">
          <Link
            aria-label="GitHub"
            href="https://github.com/jessevandenberg"
            className="rounded-full border border-white/10 p-2.5 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Github size={18} />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/jesse-vdberg-9219a52a0/"
            className="rounded-full border border-white/10 p-2.5 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            aria-label="Mail"
            href="mailto:vdbergjesse2018@gmail.com"
            className="rounded-full border border-white/10 p-2.5 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-8 py-32">
      <SectionHeading title="About" accent="Me" />
      <p className="mx-auto mb-12 max-w-3xl text-center text-base text-zinc-400">
        I’m a dedicated ICT student with a passion for creating innovative solutions that make a difference in the digital world.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">My Journey</h3>
          <p className="text-sm leading-6 text-zinc-400">
            Ik ben Jesse van den Berg, 19 jaar en een student ICT aan Fontys, met een specialisatie in Media – Front-End Design. Ik ben creatief en heb een passie voor het vertalen van complexe vraagstukken/uitdagingen naar visueel aantrekkelijke websites en interfaces.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">Education</h3>
          <p className="text-sm leading-6 text-zinc-400">
            Bachelor of ICT, Fontys ICT (2025, behaald). Belangrijkste prestaties: een platform en ID-SoCientificaat leren maken.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-center text-3xl font-semibold text-zinc-200">photo’s of  <span className="text-sky-500">Me</span></h2>
      {/* Hover Image Stack Animation (overlapped with neighbor shift) */}
      <ImageOverlapStack />
    </section>
  );
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  code?: string;
  demo?: string;
  image?: string; // path in /public or absolute URL
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleDemoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (project.title.toLowerCase() === "isowise") {
      e.preventDefault();
      setShowAlert(true);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10">
      {/* split gradient background */}
      <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_140deg_at_60%_40%,rgba(168,85,247,0.25),rgba(59,130,246,0.25),rgba(236,72,153,0.2),transparent_70%)] opacity-60" />
      {/* angled sheen */}
      <div className="pointer-events-none absolute -left-1/2 top-0 h-[200%] w-[120%] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* header media */}
      <div className="relative h-44 w-full overflow-hidden">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover brightness-[0.95] contrast-[1.05] transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
          </>
        ) : (
          <div className="h-full w-full bg-zinc-800/60" />
        )}
      </div>

      {/* body */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-sky-400/70" />
          <span className="h-1.5 w-6 rounded-full bg-fuchsia-400/70" />
        </div>
        <p className="text-sm font-semibold text-zinc-100">{project.title}</p>
        <p className="mt-2 line-clamp-3 text-xs text-zinc-400">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-md bg-zinc-800/70 px-2 py-1 text-[10px] text-zinc-300 ring-1 ring-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          {project.code ? (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-white/5">Code</a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDemoClick}
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-3 py-1 text-xs font-medium text-white shadow transition-colors hover:from-fuchsia-500 hover:to-purple-500"
            >
              Live Demo
            </a>
          ) : null}
          <button
            onClick={() => {
              if (project.title.toLowerCase() === "isowise") {
                setShowVideo(true);
              }
            }}
            className="rounded-full px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-white/5"
          >
            meer info
          </button>
        </div>
      </div>

      {/* Sweet alert style modal (only shown when ISOwise demo is clicked) */}
      {showAlert ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal>
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl">
            <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.25),transparent_60%)]" />
            <button
              aria-label="Close"
              onClick={() => setShowAlert(false)}
              className="absolute right-3 top-3 rounded-md p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
            >
              <X size={18} />
            </button>
            <div className="relative mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-fuchsia-600/20 text-fuchsia-400 ring-1 ring-fuchsia-500/30">
              <X />
            </div>
            <p className="relative text-center text-sm text-zinc-300">
              deze actie is niet beschikbaar op dit moment. Druk op <span className="font-semibold text-zinc-100">meer info</span> voor een introductie video van de website.
            </p>
            <div className="relative mt-5 flex justify-center gap-2">
              <button
                onClick={() => setShowAlert(false)}
                className="rounded-md bg-zinc-800 px-4 py-2 text-xs text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Video modal for ISOwise */}
      {showVideo ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal>
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl">
            <button
              aria-label="Close"
              onClick={() => setShowVideo(false)}
              className="absolute right-3 top-3 z-10 rounded-md bg-black/30 p-2 text-zinc-300 ring-1 ring-white/10 hover:bg-black/50 hover:text-white"
            >
              <X size={18} />
            </button>
            <video
              src="/isowise-intro.mov"
              controls
              autoPlay
              className="h-full w-full"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ISOwise",
      description: "een platform die steun geeft bij het behalen van de ISO 9001 certificering",
      tags: ["Next.js", "TypeScript", "tailwindcss","groepsproject"],
      code: "https://github.com/lucasBFontys/isowise",
      demo: "#",
      image: "/isowise.png",
    },
    {
      title: "digitaal dierenpaspoort",
      description: " een prototype van een digitaal dierenpaspoort voor de mensen in nederland",
      tags: ["Next.js", "TypeScript", "tailwindcss","individueel project"],
      code: "https://github.com/jessevandenberg/digitaledierenpaspoort",
      demo: "https://digitaledierenpaspoort.vercel.app/",
      image: "/digitaal-dierenpaspoort.png",
    },
    {
      title: "KNMI promotie website",
      description: "dit is een website die ik heb gemaakt voor de KNMI om de promotie van de website te helpen. het is mogelijk dat de website niet goed werkt in dat geval refresh de pagina.",
      tags: ["typescript", "Next.js", "tailwindcss","groepsproject"],
      code: "https://github.com/jessevandenberg/knmi-app-website",
      demo: "https://knmi-website.vercel.app/",
      image: "/KNMI.png",
    },
    {
      title: "Valorant Verse Admin Hub",
      description: " een admin hub voor de valorant verse website. hier kun je de kleuren van de website aanpassen van de website beheren en deze opslaan door een ingebouwde database.",
      tags: ["Next.js", "TypeScript", "tailwindcss","individueel project"],
      code: "https://github.com/jessevandenberg/valorant-verse-admin-hub",
      demo: "https://valorant-verse-admin-hub.vercel.app/",
      image: "/valorant-admin.png",
    },
  ];
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-32">
      <SectionHeading title="Featured" accent="Projects" />
      <p className="mx-auto mb-12 max-w-3xl text-center text-base text-zinc-400">
        A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-8 py-32">
      <SectionHeading title="Get In" accent="Touch" />
      <p className="mx-auto mb-12 max-w-3xl text-center text-base text-zinc-400">
        Have a project in mind or want to collaborate? Feel free to reach out. I’m always open to discussing new opportunities.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-base text-zinc-300">
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs">Email</span>
            <a href="mailto:vdbregjesse019@gmail.com" className="truncate hover:underline">vdbergjesse2018@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-base text-zinc-300">
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs">Phone</span>
            <a href="tel:+31606454302" className="hover:underline">+31 6 06454302</a>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-base text-zinc-300">
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs">Location</span>
            <span>oss, noord brabant</span>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              Name
              <input aria-label="name" className="rounded-md bg-zinc-800/80 px-4 py-3 outline-none ring-1 ring-white/10 placeholder:text-zinc-500" placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-1 text-xs">
              Email
              <input aria-label="email" type="email" className="rounded-md bg-zinc-800/80 px-4 py-3 outline-none ring-1 ring-white/10 placeholder:text-zinc-500" placeholder="your.email@example.com" />
            </label>
          </div>
          <label className="mt-3 flex flex-col gap-1 text-xs">
            Message
            <textarea aria-label="message" rows={6} className="rounded-md bg-zinc-800/80 px-4 py-3 outline-none ring-1 ring-white/10 placeholder:text-zinc-500" placeholder="Tell me about your project..." />
          </label>
          <div className="mt-4 flex justify-end">
            <button className="w-full rounded-md bg-sky-600 px-5 py-3 text-base font-medium text-white hover:bg-sky-500 md:w-auto">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="mx-auto w-full max-w-7xl px-8 pb-12 text-center text-sm text-zinc-500">
    © 2025 ICT Portfolio. Built with Next.js and Tailwind CSS.
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// Overlapped hover stack: images overlap; on hover, neighbors shift slightly
const ImageOverlapStack = () => {
  const images = [
    "/uitzicht.jpeg",
    "mallorca1.jpeg",
    "/portfoliofoto.png",
    "/mallorca2.jpeg",
    "/skifoto.jpeg",
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const centerIndex = Math.floor(images.length / 2);

  const rotations = [-10, -5, 0, 5, 10];
  const baseScale = [0.93, 0.98, 1.12, 0.98, 0.93]; // piramide: midden grootste

  return (
    <div className="relative mx-auto mt-12 h-[26rem] w-full max-w-6xl select-none px-4 md:h-[28rem]">
      <div className="relative h-full w-full">
        {images.map((src, i) => {
          const distanceFromCenter = Math.abs(i - centerIndex);

          // X-positie
          const baseX = (i - centerIndex) * 120;
          let shift = 0;
          if (hovered !== null && hovered !== i) {
            const dir = i < hovered ? -1 : 1;
            shift = dir * (distanceFromCenter === 1 ? 28 : 18);
          }
          const translateX = baseX + shift;

          // Schaal piramide
          let scale = baseScale[i] - distanceFromCenter * 0.05;
          if (hovered === i) scale += 0.06;

          // Z-index piramide
          const zIndex = hovered === i ? 100 : 50 - distanceFromCenter;

          // Y-positie piramide
          const translateY = distanceFromCenter * 10 - (hovered === i ? 6 : 0);

          // Rotatie
          const rotate = rotations[i];

          // Opacity
          const opacity = hovered === null || hovered === i ? 0.98 : 0.8;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="absolute left-1/2 top-1/2 h-80 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] ring-1 ring-white/10 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] md:h-96 md:w-64"
              style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                transition: "transform 320ms ease, opacity 320ms ease",
                zIndex,
                opacity,
              }}
            >
              <Image
                src={src}
                alt={`photo-${i + 1}`}
                fill
                sizes="(max-width: 768px) 85vw, 45vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
            </div>
          );
        })}
      </div>
    </div>
  );
}