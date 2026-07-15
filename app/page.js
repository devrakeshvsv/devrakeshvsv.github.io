import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import MotionEffects from "./MotionEffects";

const experience = [
  {
    role: "Software Engineer",
    company: "YsecIT Softwares India Pvt Ltd",
    period: "October 2024 — Present",
    location: "Bengaluru, IN",
    points: [
      "Built a high-volume backend system handling nearly 1M concurrent closed-loop wallet transactions.",
      "Designed and developed backend microservices using NestJS, TypeScript, and PostgreSQL.",
      "Delivered secure REST APIs for wallets, payments, KYC/KYB, and transactions.",
      "Implemented Kafka, Redis, and TypeORM for scalable, reliable backend services.",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "NodeJS",
      "PostgreSQL",
      "TypeORM",
      "Kafka",
      "Redis",
      "Jest",
      "Swagger/OpenAPI",
      "Microservices",
    ],
  },
  {
    role: "Senior Backend Engineer",
    company: "AGZ Technologies Pvt Ltd",
    period: "January 2022 — September 2024",
    location: "Remote · Bengaluru, IN",
    points: [
      "Built and scaled NodeJS backend services supporting 200K+ users with MongoDB.",
      "Developed GraphQL APIs and Apollo integrations, improving data-fetching performance by 35%.",
      "Integrated payment services including Shopify, Zendesk, and Razorpay to streamline workflows.",
      "Led backend performance optimization, reducing server load by 20% through scalable architecture.",
    ],
    stack: [
      "NodeJS",
      "JavaScript",
      "MongoDB",
      "GraphQL",
      "SocketIO",
      "PassportJS",
      "OAuth",
      "Third-party integrations",
    ],
  },
  {
    role: "Software Developer",
    company: "Mobillor Technologies Pvt Ltd",
    period: "February 2021 — December 2021",
    location: "Remote · Bengaluru, IN",
    points: [
      "Created vendor onboarding modules, reducing onboarding time by 60%.",
      "Integrated ERP systems and improved client workflow efficiency by 25%.",
      "Revamped the mobile UI, reducing login errors and access-related support tickets by 30%.",
    ],
    stack: ["NodeJS", "JavaScript", "MongoDB", "Third-party integrations"],
  },
  {
    role: "Software Developer Intern",
    company: "Incture Technologies",
    period: "November 2019 — January 2020",
    location: "Bengaluru, IN",
    points: [
      "Developed applications using HTML, CSS, and JavaScript.",
      "Worked with SAPUI5 on an employee onboarding system.",
    ],
    stack: ["SAP UI5", "JavaScript", "HTML5", "CSS3"],
  },
];

const projects = [
  {
    title: "Macha AI",
    description:
      "An AI-powered customer engagement platform enabling real-time conversations and intelligent automated responses.",
    highlights: ["OpenAI APIs", "40% less manual intervention", "~35% faster queries"],
    stack: ["NodeJS", "ExpressJS", "MongoDB", "SocketIO", "REST APIs", "PassportJS", "OAuth"],
  },
  {
    title: "SkipperFit",
    description:
      "A fitness management platform for appointment scheduling, virtual consultations, and payment processing.",
    highlights: ["25% more bookings", "Razorpay & Stripe", "~18% faster API response"],
    stack: ["NodeJS", "ExpressJS", "MongoDB", "GraphQL", "REST APIs", "PassportJS"],
  },
];

const skills = [
  { label: "Back-end", items: ["NestJS", "NodeJS", "ExpressJS"] },
  { label: "Languages", items: ["JavaScript", "TypeScript"] },
  { label: "Databases", items: ["MongoDB (Mongoose)", "PostgreSQL (TypeORM)"] },
  { label: "Tools & Technologies", items: ["AWS S3", "Redis", "Kafka", "PassportJS", "OAuth", "Puppeteer"] },
  { label: "Developer Tools", items: ["Git", "GitHub", "GitLab", "Postman", "VS Code"] },
  { label: "Testing", items: ["Jest (Unit Testing)"] },
  { label: "Others", items: ["Microservices", "RESTful Web Services"] },
  { label: "Soft Skills", items: ["Excellent communication skill", "Team Work Spirit", "Leadership skill"] },
];

const education = [
  {
    period: "2020 — 2022",
    degree: "Master of Computer Applications",
    institution: "RGPV University, Bhopal",
    description:
      "A graduate with an aggregate of 8.35 CGPA having good understanding of Software Development Life Cycle.",
  },
  {
    period: "2017 — 2020",
    degree: "Bachelor of Science in Computer Science",
    institution: "Vikram University, Ujjain",
    description:
      "Graduated with 63.15% and gained foundational knowledge of programming, databases, and computer science concepts.",
  },
];

const certifications = [
  {
    title: "Back End Development and APIs",
    details: "JavaScript · NodeJS · ExpressJS",
    completionDate: "Issued: August 2022",
    url: "https://www.freecodecamp.org/certification/devrakeshvsv/back-end-development-and-apis",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    details: "JavaScript",
    completionDate: "Issued: October 2021",
    url: "https://www.freecodecamp.org/certification/devrakeshvsv/javascript-algorithms-and-data-structures",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path) => `${basePath}${path}`;

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="Main navigation">
        <a className="logo" href="#home" aria-label="Rakesh Vishwakarma home">
          RV<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="nav-resume"
            href={withBasePath("/resume/Rakesh_Vishwakarma.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a className="nav-cta" href="mailto:rakesh830566@gmail.com">
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="available">
            <i /> Available for new opportunities
          </div>
          <p className="kicker">Hello, I&apos;m Rakesh Vishwakarma</p>
          <h1>
            I build reliable
            <span>backend systems.</span>
          </h1>
          <p className="hero-intro">
            Software Engineer with 5+ years of experience designing scalable, high-performance applications and
            microservices.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a
              className="button tertiary"
              href={withBasePath("/resume/Rakesh_Vishwakarma.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
            <a className="button secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>5+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>1M</strong>
              <span>Concurrent transactions</span>
            </div>
            <div>
              <strong>200K+</strong>
              <span>Users supported</span>
            </div>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portrait of Rakesh Vishwakarma">
          <div className="orbit orbit-one">
            <span>NodeJS</span>
          </div>
          <div className="orbit orbit-two">
            <span>APIs</span>
          </div>
          <div className="portrait-frame">
            <div className="portrait-glow" />
            <Image src="/rakesh-profile.png" alt="Rakesh Vishwakarma" width={500} height={500} priority />
          </div>
          <div className="code-card">
            <span>01</span>
            <code>const engineer = &quot;problem solver&quot;;</code>
          </div>
        </div>
      </section>

      <section className="about section shell" id="about">
        <SectionHeading eyebrow="About me">Engineering ideas into dependable products.</SectionHeading>
        <div className="about-grid reveal">
          <p className="about-lead">
            I care about the details behind fast, secure, and maintainable software—especially the parts users never
            see.
          </p>
          <div className="about-copy">
            <p>
              My work spans NodeJS, TypeScript, NestJS, MongoDB, PostgreSQL, GraphQL, and distributed systems. I enjoy
              turning complex requirements into clean backend architecture and practical APIs.
            </p>
            <p>
              From payment platforms to AI customer engagement and fitness products, I collaborate across teams to ship
              solutions that perform in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section shell" id="experience">
        <SectionHeading eyebrow="Experience">Where I&apos;ve made an impact.</SectionHeading>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className="timeline-item reveal" key={job.company}>
              <div className="timeline-marker">
                {/* <span>{String(index + 1).padStart(2, "0")}</span> */}
                <span>{`${index + 1}`.padStart(2, "0")}</span>
              </div>
              <div className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>
                <div className="job-meta">
                  <strong>{job.period}</strong>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {job.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section shell" id="work">
        <SectionHeading eyebrow="Selected work">Projects built to solve real problems.</SectionHeading>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-top">
                <span>{`${index + 1}`.padStart(2, "0")}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-results">
                {project.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section shell" id="skills">
        <SectionHeading eyebrow="Skills">Technologies I work with.</SectionHeading>
        <div className="skill-grid">
          {skills.map((group, index) => (
            <article className="skill-card reveal" key={group.label}>
              <div className="skill-number">{`${index + 1}`.padStart(2, "0")}</div>
              <h3>{group.label}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education section shell">
        <SectionHeading eyebrow="Education">Always learning, always building.</SectionHeading>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card reveal" key={`${item.degree}-${item.period}`}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications section shell">
        <SectionHeading eyebrow="Certifications">Credentials and focused training.</SectionHeading>
        <div className="education-grid">
          {certifications.map((item) => (
            <article className="education-card reveal" key={item.title}>
              <div className="cert-card-head">
                <span>Certification</span>
                {item.url ? (
                  <a
                    className="cert-link"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${item.title}`}
                  >
                    <ArrowIcon />
                  </a>
                ) : null}
              </div>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
              <p>{item.completionDate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section shell" id="contact">
        <div className="contact-card reveal">
          <p className="kicker">Have a project in mind?</p>
          <h2>
            Let&apos;s build something <span>great together.</span>
          </h2>
          <p>I&apos;m open to backend engineering opportunities and meaningful collaborations.</p>
          <a className="button primary" href="mailto:rakesh830566@gmail.com">
            Start a conversation <ArrowIcon />
          </a>
          <div className="contact-links">
            <a href="mailto:rakesh830566@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/devalakshvsv" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/devalakshvsv" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="logo" href="#home">
          RV<span>.</span>
        </a>
        <p>Designed &amp; built with care · © 2026 Rakesh Vishwakarma</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
