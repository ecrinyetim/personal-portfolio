import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const matrixTextLines = [
    '# 🚀 Ecrin Yetim: Kodlama Yolculuğu 🌌',
    '',
    'class BilgisayarMuhendisi:',
    '    def __init__(self, ad, unvan, yetenekler):',
    '        self.ad = ad',
    '        self.unvan = unvan',
    '        self.yetenekler = yetenekler',
    '',
    '    def tanit(self):',
    '        print(f"Ben {self.ad}, bir {self.unvan} 👩‍💻")',
    '',
    '    def yeteneklerim(self):',
    '        for y in self.yetenekler:',
    '            print(f"🔹 {y}")',
    '',
    '# Ecrin oluşturuluyor...',
    'ecrin = BilgisayarMuhendisi(',
    '    "Ecrin Yetim",',
    '    "Bilgisayar Mühendisi",',
    '    ["Python", "Java", "Yapay Zeka"]',
    ')',
    '',
    '# Göster...',
    'ecrin.tanit()',
    'ecrin.yeteneklerim()',
    '',
    'print("# Her gün yeni bir keşif! ✨")'
];

const Hero = () => {
    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const content = contentRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Tek sefer tetikle
                }
            },
            { threshold: 0.3 }
        );

        if (content) {
            observer.observe(content);
        }

        return () => {
            if (content) observer.unobserve(content);
        };
    }, []);

    useEffect(() => {
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const fontSize = 18;
        const lineHeight = 24;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = '#1f0768';

        let currentLine = 0;
        let currentChar = 0;

        const draw = () => {
            if (currentLine >= matrixTextLines.length) return;

            const line = matrixTextLines[currentLine];
            const x = 50; // soldan boşluk
            const y = 50 + currentLine * lineHeight;

            const charToDraw = line.slice(0, currentChar + 1);
            ctx.clearRect(x, y - fontSize, canvas.width, lineHeight); // sadece o satırı temizle
            ctx.fillText(charToDraw, x, y);

            currentChar++;
            if (currentChar >= line.length) {
                currentLine++;
                currentChar = 0;
            }
        };

        const interval = setInterval(draw, 50);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="anasayfa" className="hero-section">
        <div id="hero" className="hero">
            <canvas id="matrixCanvas" className="matrix-canvas"></canvas>
            <div className="code-background" />
            <div
                className={`hero-content ${isVisible ? 'animate-in' : ''}`}
                ref={contentRef}
            >
                <h1 className="animate-title">Merhaba, Ben Ecrin Yetim!</h1>
                <p className="animate-text">
                    Teknolojiye tutkuyla bağlı, öğrenmeye ve üretmeye her zaman
                    açık bir yazılımcıyım. Gelin, beni ve projelerimi daha yakından tanıyın.
                </p>
            </div>
        </div>
      </section>
    );
};

export default Hero;
