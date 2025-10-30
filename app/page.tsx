"use client";

import Link from "next/link";

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
      <span className="rounded bg-zinc-900/60 px-3 py-1 font-mono text-xs text-sky-400 ring-1 ring-white/10">&lt;ICT/&gt;</span>
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
    <section id="home" className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center justify-center gap-8 px-8 pt-28">
      <p className="text-6xl font-semibold text-white md:text-7xl lg:text-8xl">
        Jesse van den Berg
      </p>
      <p className="-mt-6 text-3xl font-bold text-sky-400/60">portfolio</p>
      <div className="mt-6 flex items-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-sky-600/80 px-5 py-3 text-base font-medium text-white shadow hover:bg-sky-500/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        >
          View My Work
        </a>
        <div className="flex items-center gap-3 text-zinc-400">
          <Link aria-label="GitHub" href="#" className="rounded p-3 ring-1 ring-white/10 hover:text-white">GH</Link>
          <Link aria-label="LinkedIn" href="#" className="rounded p-3 ring-1 ring-white/10 hover:text-white">IN</Link>
          <Link aria-label="Mail" href="#contact" className="rounded p-3 ring-1 ring-white/10 hover:text-white">@</Link>
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

      <h3 className="mt-12 text-center text-xl font-semibold text-zinc-200">photo’s of <span className="text-sky-500">Me</span></h3>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="aspect-video rounded-2xl border border-white/10 bg-zinc-900/50" />
        ))}
      </div>
    </section>
  );
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  code?: string;
  demo?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
      <div className="h-40 w-full bg-zinc-800/60" />
      <div className="p-5">
        <p className="text-sm font-semibold text-zinc-200">{project.title}</p>
        <p className="mt-2 line-clamp-3 text-xs text-zinc-400">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-zinc-800 px-2 py-1 text-[10px] text-zinc-300 ring-1 ring-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          {project.code ? (
            <a href={project.code} className="rounded-full px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10 hover:bg-white/5">Code</a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} className="rounded-full bg-sky-600/80 px-3 py-1 text-xs text-white hover:bg-sky-500/80">Live Demo</a>
          ) : null}
          <button className="rounded-full px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10 hover:bg-white/5">meer info</button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ISOwise",
      description: "isopal platform",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      code: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tags: ["Next.js", "TypeScript", "Supabase", "Turborepo"],
      code: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts and interactive weather maps.",
      tags: ["OpenWeather", "Map", "PWA"],
      code: "#",
      demo: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolio websites with drag-and-drop builder and SEO optimization.",
      tags: ["Next.js", "Prisma", "Auth"],
      code: "#",
      demo: "#",
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
            <a href="mailto:vdbregjesse019@gmail.com" className="truncate hover:underline">vdbregjesse019@gmail.com</a>
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
