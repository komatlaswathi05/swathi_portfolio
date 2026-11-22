import React, { useState } from "react";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Menu, X,
  Code2, Database, Layers3, BriefcaseBusiness, GraduationCap, Award,
  ExternalLink, CheckCircle2, Terminal, Server, GitBranch
} from "lucide-react";

// Update the contact links below with your real public profiles before publishing.
const PROFILE = {
  name: "Swathi Komatla",
  role: "Software Engineer",
  location: "India",
  email: "komatlaswathi05@gmail.com",
  linkedin: "https://www.linkedin.com/in/komatlaswathi",
  github: "https://github.com/komatlaswathi05",
};

const skills = [
  { title: "Programming", items: ["Core Java", "OOPs", "Java 8", "Java 17", "JavaScript", "Nodejs", "Python"] },
  { title: "Backend", items: ["Spring Boot", "Microservices", "REST APIs", "Node.js", "NestJS", "Django", "Flask"] },
  { title: "Persistence", items: ["Spring Data JPA", "Hibernate", "SQL", "MySQL", "PostgreSQL"] },
  { title: "Tools & Testing", items: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Unit Testing"] },
  { title: "Frontend Basics", items: ["HTML", "CSS", "JavaScript"] },
];

const projects = [
  {
    number: "01",
    name: "Hotel Management System",
    type: "Backend · Java / Spring Boot",
    description: "A hotel operations application designed around independent modules for customers, hotels and rooms, bookings, and payments.",
    points: [
      "Developed the application using Java, Spring Boot and a microservices-based approach.",
      "Designed separate customer, hotel/room, booking and payment modules.",
      "Implemented REST APIs for communication between services.",
      "Integrated Spring Data JPA and Hibernate for database operations.",
      "Built CRUD functionality for hotel, room, customer and booking information."
    ],
    stack: ["Java", "Spring Boot", "Microservices", "REST API", "Spring Data JPA", "Hibernate"]
  },
  {
    number: "02",
    name: "HDFC ERGO General Insurance",
    type: "Backend · Node.js / NestJS",
    description: "Backend API development and testing work for a general insurance application.",
    points: [
      "Worked on backend APIs using Node.js and NestJS.",
      "Built and tested APIs, handled validations and integrations.",
      "Used Postman and Git as part of the development workflow.",
      "Worked on test cases and unit testing to improve test coverage."
    ],
    stack: ["Node.js", "NestJS", "REST API", "Postman", "Git", "Unit Testing"]
  }
];

const experience = [
  {
    company: "Capgemini Technology Services",
    title: "Software Engineer",
    period: "December 2024 — Present",
    location: "Gurgaon, India",
    description: "Software development experience across backend API development, application modules, validation, integration and testing."
  }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
    ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]
  ];

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Swathi Komatla home">
          <span className="brand-mark">S</span><span>swathi<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="/SwathiReddyResume.pdf" download onClick={closeMenu}>Resume <Download size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot"/> SOFTWARE ENGINEER · BACKEND DEVELOPMENT</div>
            <h1>Hi, I'm <span>Swathi Komatla.</span><br/>I build reliable<br className="desktop-break"/> backend applications.</h1>
            <p className="hero-lead">Software Engineer with 2+ years of experience supporting backend development, REST APIs, validation and testing using Java, Spring Boot, Node.js and NestJS.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-light" href="/SwathiReddyResume.pdf" download><Download size={17}/> Download resume</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15}/> {PROFILE.location}</span>
              <span><Code2 size={15}/> Java · Spring Boot · APIs</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract code illustration">
            <div className="art-top"><span/><span/><span/><small>backend.java</small></div>
            <div className="code-lines">
              <div><i>01</i><b className="syntax-purple">public class</b> <strong>Developer</strong> {"{"}</div>
              <div><i>02</i><span className="indent"/> <b className="syntax-blue">String</b> focus = <em>"Backend"</em>;</div>
              <div><i>03</i><span className="indent"/> <b className="syntax-blue">String[]</b> skills = {"{"}</div>
              <div><i>04</i><span className="indent2"/> <em>"Java"</em>, <em>"Spring Boot"</em>,</div>
              <div><i>05</i><span className="indent2"/> <em>"REST APIs"</em></div>
              <div><i>06</i><span className="indent"/> {"}"};</div>
              <div><i>07</i>{"}"}</div>
            </div>
            <div className="art-caption"><span className="caption-icon"><Terminal size={16}/></span><div><b>Clean code. Thoughtful solutions.</b><small>Learning · Building · Improving</small></div></div>
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          </div>
          <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>FOCUSED ON</span><b>Backend Engineering</b><i/> <b>API Development</b><i/> <b>Scalable Services</b><i/> <b>Continuous Learning</b>
          </div>
        </section>

        <section className="section-wrap section" id="about">
          <SectionHeading eyebrow="01 / ABOUT" title="A little about me" subtitle="Building practical software with a focus on clarity, reliability and continuous improvement."/>
          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">I'm a Software Engineer who enjoys turning requirements into dependable backend solutions.</p>
              <p>My experience includes developing and supporting REST APIs, working with service modules, integrating databases, handling validations and testing backend functionality. I work primarily with Java and Spring Boot, and also have experience with Node.js and NestJS.</p>
              <p>I value readable code, understanding how systems work end to end, and learning technologies that help me build better applications.</p>
            </div>
            <div className="about-facts">
              <div className="fact"><span className="fact-icon"><BriefcaseBusiness size={19}/></span><div><b>2+ years</b><small>Software development experience</small></div></div>
              <div className="fact"><span className="fact-icon"><Server size={19}/></span><div><b>Backend focused</b><small>APIs, services and integrations</small></div></div>
              <div className="fact"><span className="fact-icon"><GitBranch size={19}/></span><div><b>Collaborative workflow</b><small>Git, Postman and unit testing</small></div></div>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / TOOLKIT" title="Skills & technologies" subtitle="Tools and technologies I have worked with or studied."/>
            <div className="skills-grid">
              {skills.map((group, index) => <div className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><Code2 size={18}/></div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="experience">
          <SectionHeading eyebrow="03 / EXPERIENCE" title="Where I've worked" subtitle="Professional experience and backend development responsibilities."/>
          <div className="timeline">
            {experience.map((job) => <div className="timeline-item" key={job.company}>
              <div className="timeline-marker"><span/></div>
              <div className="timeline-content">
                <div className="timeline-head"><div><h3>{job.title}</h3><h4>{job.company}</h4></div><span className="period">{job.period}</span></div>
                <p className="job-location"><MapPin size={14}/>{job.location}</p>
                <p>{job.description}</p>
                <ul className="check-list">
                  <li><CheckCircle2 size={16}/> Backend API development and integration</li>
                  <li><CheckCircle2 size={16}/> Validation, testing and database operations</li>
                  <li><CheckCircle2 size={16}/> Development workflow using Git and Postman</li>
                </ul>
              </div>
            </div>)}
          </div>
        </section>

        <section className="section section-tint" id="projects">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 / SELECTED WORK" title="Projects I've worked on" subtitle="A snapshot of project work and the responsibilities described in my experience."/>
            <div className="projects-grid">
              {projects.map(project => <article className="project-card" key={project.number}>
                <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-icon"><Layers3 size={20}/></span></div>
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-points">{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>)}
            </div>
            <p className="project-note">Project descriptions are based on the experience details in my resume. Add public repository links or screenshots here only when they are approved for sharing.</p>
          </div>
        </section>

        <section className="section section-wrap" id="education">
          <SectionHeading eyebrow="05 / EDUCATION & LEARNING" title="Education and certifications" subtitle="My academic foundation and continued learning."/>
          <div className="education-grid">
            <div className="education-card">
              <span className="education-icon"><GraduationCap size={22}/></span>
              <span className="card-kicker">EDUCATION</span>
              <h3>Bachelor of Technology</h3>
              <p>Computer Science & Engineering</p>
              <b>V.N.R. College of Engineering</b>
              <small>Ponnur, Andhra Pradesh</small>
            </div>
            <div className="cert-card">
              <span className="education-icon"><Award size={22}/></span>
              <span className="card-kicker">CERTIFICATIONS & COURSES</span>
              <div className="cert-row"><div><b>Scripting – Java (Beginner)</b><small>Capgemini OCEAN Program · November 2024</small></div><CheckCircle2 size={17}/></div>
              <div className="cert-row"><div><b>Scripting – Java Cloud Native (Beginner)</b><small>Capgemini OCEAN Program · July 2025</small></div><CheckCircle2 size={17}/></div>
              <div className="cert-row"><div><b>Generative AI for Beginners</b><small>Udemy · August 2025</small></div><CheckCircle2 size={17}/></div>
            </div>
          </div>
          <div className="languages-row"><b>LANGUAGES</b><span>English — Read & Write</span><span>Hindi — Read</span><span>Telugu — Read & Write</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><span className="eyebrow">06 / GET IN TOUCH</span><h2>Let's build something<br/>meaningful together.</h2><p>I'm interested in connecting about software development opportunities, backend engineering and learning from other developers.</p></div>
            <div className="contact-panel">
              <h3>Contact details</h3>
              {PROFILE.email ? <a href={`mailto:${PROFILE.email}`}><Mail size={17}/>{PROFILE.email}<ArrowUpRight size={15}/></a> : <div className="contact-missing"><Mail size={17}/><span>Add your professional email in <code>src/App.jsx</code></span></div>}
              {PROFILE.linkedin ? <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn<ArrowUpRight size={15}/></a> : <div className="contact-missing"><Linkedin size={17}/><span>Add your LinkedIn URL in <code>src/App.jsx</code></span></div>}
              {PROFILE.github ? <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={15}/></a> : <div className="contact-missing"><Github size={17}/><span>Add your GitHub URL in <code>src/App.jsx</code></span></div>}
              <a href="/SwathiReddyResume.pdf" download><Download size={17}/>Download my resume<ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">S</span><span>swathi<span className="brand-dot">.</span></span></a>
        <span>Designed & built with care by {PROFILE.name}.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;