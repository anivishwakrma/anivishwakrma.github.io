import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/aniket.png';

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 95 },
  { name: "React", value: 85 },
  { name: "MongoDB", value: 80 },
  { name: "Express", value: 75 },
  { name: "Node.JS", value: 50 },
  { name: "JavaScript", value: 75 },
  { name: "Python", value: 70 },
  { name: "React-Native", value: 35 },
];

const TypingText = () => {
  const techs = ["HTML", "CSS", "React", "MongoDB", "Express", "Node.JS", "JavaScript", "Python", "React-Native"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = techs[index % techs.length];
    let typingSpeed = deleting ? 100 : 200;

    const timeout = setTimeout(() => {
      setText(prev =>
        deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex(prev => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return <h1 className="typing-text">I know {text}<span className="cursor">|</span></h1>;
};
const TypingWork = () => {
  const teches = [" From November 2024 to February 2025, I worked as a Full-Stack Developer at Admark Multiventures Pvt. Ltd., where I had the opportunity to dive deep into real-world development challenges.During this time, I primarily worked on React.js applications, handling both development and maintenance. One of the key features I implemented was Google OAuth authentication, along with JWT token validation, which ensured secure and smooth user logins.I also built a user management system from scratch that included API key management, giving admins full control over user access and activities. Another major highlight of my time there was creating a notification service website, which allowed users to send real-time alerts efficiently. Towards the end of my role, I was involved in an exciting AI-based project, which was somewhat like a Verified WhatsApp solution for internal company use — integrating messaging with smart features.Overall, this experience strengthened my skills across both frontend and backend, and gave me confidence to handle complex projects from start to finish."];
  const [indexs, setIndexs] = useState(0);
  const [texts, setTexts] = useState("");

  useEffect(() => {
    const current = teches[indexs % teches.length];
    const typingSpeed = 10;
  
    if (texts === current) return; // stop typing when done
  
    const timeout = setTimeout(() => {
      setTexts(prev => current.substring(0, prev.length + 1));
    }, typingSpeed);
  
    return () => clearTimeout(timeout);
  }, [texts, indexs]);
  return<p>{texts}<span >|</span></p>;
};
const TypingWorkone = () => {
  const teches = [" From September to November 2024, I worked in a Back Office role for a political party at Admark Multiventures Pvt. Ltd. During this time, I was responsible for managing a voting software that played a crucial role in providing accurate data to the party team. I also worked on a voter service portal that helped users easily find their voter details and booth locations. One of my key responsibilities was sharing the app and software with thousands of people through WhatsApp groups to ensure wide reach and adoption. I regularly provided live demos to users, explained how to use the tools effectively, and even helped in printing voter slips. This role helped me improve my communication, coordination, and technical support skills, especially under time-sensitive conditions. "];
  const [indexs, setIndexs] = useState(0);
  const [texts, setTexts] = useState("");

  useEffect(() => {
    const current = teches[indexs % teches.length];
    const typingSpeed = 10;
  
    if (texts === current) return; // stop typing when done
  
    const timeout = setTimeout(() => {
      setTexts(prev => current.substring(0, prev.length + 1));
    }, typingSpeed);
  
    return () => clearTimeout(timeout);
  }, [texts, indexs]);
  return<p>{texts}<span >|</span></p>;
};

const SkillGraph = () => (
  <div className="skill-graph">
    <h2>Skills</h2>
    <div className="graph-container">
      {skills.map(({ name, value }) => (
        <div key={name} className="bar-y">
          <div className="bar-y-outer">
            <div
              className="bar-y-inner"
              style={{
                height: `${value}%`,
                backgroundImage: "linear-gradient(to top, #0044ff, #3399ff, #99ccff, #ffffff)"
              }}
            >
              <span className="bar-value">{value}%</span>
            </div>
          </div>
          <div className="bar-label">{name}</div>
        </div>
      ))}
    </div>
  </div>
);

const Project = ({ title, details }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="project fade-in">
      <h3 onClick={() => setOpen(!open)} className="project-title">
        {title} {open ? '⬆' : '⬇'}
      </h3>
      {open && (
        <div className="project-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    sections.forEach(section => observer.observe(section));
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aniket-Resume-2025.pdf";
    link.setAttribute("download", "Aniket-Resume-2025.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    
    <div className="App dark">


      <header className="navbar">
        <div className="name-left">Aniket Vishwakarma</div>
        <nav>
          <ul>
            <li onClick={() => scrollTo('home')}>Home</li>
            <li onClick={() => scrollTo('about')}>About</li>
            <li onClick={() => scrollTo('summary')}>Summary</li>
            <li onClick={() => scrollTo('workexperience')}>Work-Experience</li>
            <li onClick={() => scrollTo('projects')}>Projects</li>
            <li onClick={() => scrollTo('skills')}>Skills</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero full-screen">
        <div className="home-left">
          <TypingText />
        </div>
        
        <div className="home-right">
          <img src={profileImage} alt="Aniket" className="profile-pic" />
        </div>
        
      </section>

      <button className="download-btn" onClick={handleDownload}>
  Download Resume
</button>
      <section id="about" className="fade-in about">
        <h2>About Me</h2>
        <p>I'm Aniket, a frontend developer from Mumbai with a BCA from Sahyog College. I'm passionate about creating responsive and user-centric web applications using modern full-stack technologies.</p>
      </section>

      <section id="summary" className="fade-in summary">
        <h2>Summary</h2>
        <p>Passionate Full-Stack Developer with experience in React.js, Node.js, Express, and MongoDB. Skilled in building web applications, integrating APIs, managing databases, and handling authentication systems. Seeking opportunities to develop innovative solutions and enhance user experiences.</p>
      </section>

      <section id="workexperience" className="fade-in summary">
      <section className="work-section">
  <h2 className="work-heading">Work Experience</h2>
  <h3>
    Full-Stack Developer <span>@ Admark Multiventures Pvt. Ltd</span>
  </h3>
  <div className="work-scroll-container">
    <TypingWork />
  </div>
  <div className="scroll-indicator">
    <span className="arrow">⬇</span>
  </div>
</section>
<br/><br/>
<section className="work-section">
  <h2 className="work-heading">Work Experience</h2>
  <h3>Back Office - Political Party <span>@ Admark Multiventures Pvt. Ltd</span></h3>
  <div className="work-scroll-container">
    <TypingWorkone />
  </div>
  <div className="scroll-indicator">
    <span className="arrow">⬇</span>
  </div>
</section>  
      </section>

      <section id="projects" className="fade-in projects">
        <h2>Projects</h2>
        <Project title="Shopping Website" details="A responsive ecommerce platform with product listings, cart management, and secure checkout, built using HTML, CSS, JS, and PHP." />
        <Project title="Agriculture E-Farming Project" details="Helped farmers connect with experts and get real-time data for better yield using React and backend APIs." />
        <Project title="Food Ordering System (C++)" details="A C++ console-based app to simulate a food ordering system with billing and summary." />
        <Project title="SMS Portal Project" details="A React-based portal allowing users to send bulk messages using their number or a temp number to 10-1000 users." />
      </section>

      <section id="skills">
        <SkillGraph />
      </section>
      <footer id="contact" className="footer">
        <h3>Contact Me</h3>
        <p>Email: aniketvishwakarma1815@gmail.com</p>
        <p>Phone: +91 7304458276</p>
        <p>Location: Mumbai, India</p>
      </footer>

      <a className="whatsapp-button" href="https://wa.me/917304458276" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluency/48/000000/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;
