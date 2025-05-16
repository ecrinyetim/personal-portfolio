import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

// İkonları react-icons veya başka bir kütüphaneden seçebiliriz.
// Burada örnek olması için basit SVG veya emoji koyuyorum, sen dilersen ikon kütüphanesi ekleyebilirsin.
const icons = {
    java: '☕',
    python: '🐍',
    csharp: '♯',
    plsql: '🗄️',
    html: '📄',
    css: '🎨',
    js: '⚡',
};

const skillsData = [
    { name: 'Java', icon: icons.java },
    { name: 'Python', icon: icons.python },
    { name: 'C#', icon: icons.csharp },
    { name: 'PL/SQL', icon: icons.plsql },
    { name: 'HTML', icon: icons.html },
    { name: 'CSS', icon: icons.css },
    { name: 'JavaScript', icon: icons.js },
];

const Skills = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target); // Tek sefer tetiklemek için
                }
            },
            { threshold: 0.3 } // %30 görünür olunca tetikle
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section id="yetenekler" className="py-5 bg-light" ref={sectionRef}>
            <div className="container">
                <h2 className={`mb-4 ${visible ? 'animate-fade-in' : ''}`}>Neler Yapabilirim?</h2>
                <div className={`skills-grid ${visible ? 'animate-fade-in' : ''}`}>
                    {skillsData.map((skill, index) => (
                        <div key={index} className={`skill-item ${visible ? 'animate-slide-up' : ''}`}>
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
