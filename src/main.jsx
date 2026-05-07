import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, GitBranch, Sparkles, Zap } from 'lucide-react';
import './styles.css';

function App() {
  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home">
          <span className="brand-mark">S</span>
          <span>Skillwyn Labs</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">React starter</p>
          <h1>Build small ideas into polished web projects.</h1>
          <p className="hero-copy">
            A clean, responsive app template with Vite, React, and a GitHub
            Pages workflow already wired in.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">
              See Features <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button secondary"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-heading">
          <p className="eyebrow">What is inside</p>
          <h2>Simple pieces you can customize fast.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <Sparkles size={24} aria-hidden="true" />
            <h3>Responsive layout</h3>
            <p>Looks sharp on phones, tablets, and desktop screens.</p>
          </article>
          <article className="feature-card">
            <Zap size={24} aria-hidden="true" />
            <h3>Fast Vite build</h3>
            <p>Start locally in seconds and deploy the static build anywhere.</p>
          </article>
          <article className="feature-card">
            <GitBranch size={24} aria-hidden="true" />
            <h3>Pages workflow</h3>
            <p>Push to `main` and GitHub Actions can publish your site.</p>
          </article>
        </div>
      </section>

      <section id="about" className="section split-section">
        <div>
          <p className="eyebrow">About</p>
          <h2>Ready for your own content.</h2>
        </div>
        <p>
          Replace the text, colors, and links with your project details. The app
          uses plain React components and one CSS file so it stays easy to edit.
        </p>
      </section>

      <footer id="contact" className="footer">
        <span>Skillwyn Labs</span>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
