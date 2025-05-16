import React, { useEffect, useRef, useState } from 'react';
import benImage from '../assets/ben.jpg';
import laptopImage from '../assets/laptop.png';
import './About.css';



const laptops = [
    { size: 70, top: '10%', left: '5%', duration: 20, opacity: 0.15 },
    { size: 50, top: '25%', left: '40%', duration: 25, opacity: 0.20 },
    { size: 60, top: '60%', left: '30%', duration: 18, opacity: 0.18 },
    { size: 80, top: '40%', left: '70%', duration: 22, opacity: 0.14 },
    { size: 55, top: '75%', left: '15%', duration: 17, opacity: 0.19 },
    { size: 65, top: '80%', left: '60%', duration: 30, opacity: 0.17 },
    { size: 45, top: '15%', left: '80%', duration: 23, opacity: 0.16 },
    { size: 75, top: '55%', left: '85%', duration: 20, opacity: 0.21 },
    { size: 70, top: '30%', left: '20%', duration: 27, opacity: 0.16 },
    { size: 60, top: '85%', left: '40%', duration: 19, opacity: 0.20 },
];

const About = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            setScrollY(-sectionTop);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section

            id="hakkımda"
            ref={sectionRef}
            className="position-relative py-5 overflow-hidden bg-light"
            style={{ minHeight: '600px' }}
        >
            {laptops.map((laptop, i) => {
                // ScrollY'ye göre opacity ve slight y ekseni kaydırma efekti
                const dynamicOpacity = Math.min(
                    Math.max(laptop.opacity + scrollY * 0.002, 0),
                    1
                );
                const translateY = Math.min(scrollY * 0.1, 20); // maksimum 20px aşağı kaydır

                return (
                    <img
                        key={i}
                        src={laptopImage}
                        alt="Laptop Icon"
                        style={{
                            width: `${laptop.size}px`,
                            top: laptop.top,
                            left: laptop.left,
                            opacity: dynamicOpacity,
                            transform: `translateY(${translateY}px) rotate(0deg)`,
                            animation: `spin ${laptop.duration}s linear infinite`,
                            zIndex: 0,
                            position: 'absolute',
                            pointerEvents: 'none',
                            userSelect: 'none',
                            willChange: 'transform, opacity',
                        }}
                        className="rotating-laptop"
                    />
                );
            })}

            <div
                className={`container position-relative text-dark ${visible ? 'fade-slide-up' : 'hidden'}`}
                style={{ zIndex: 1 }}
            >
                <div className="row align-items-center">
                    <div className="col-md-7 about-text">
                        <h2 className="mb-4 fw-bold">Ben Kimim?</h2>
                        <p className="lead lh-lg">
                            Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi olarak, yazılım geliştirme
                            yolculuğumda C# ve Java dillerinde önemli deneyimler edindim. Bu dillerle geliştirdiğim projeler
                            aracılığıyla veri yapıları ve nesne yönelimli programlama konularındaki bilgi birikimimi pratiğe
                            dökme fırsatı buldum.
                            <br />
                            <br />
                            Frontend dünyasına HTML, CSS ve JavaScript ile adım atarken, Python'ın gücünü keşfederek NumPy,
                            Pandas, SciPy ve TensorFlow gibi kütüphanelerle analitik düşünce yapımı ve makine öğrenimi
                            becerilerimi geliştiriyorum.
                            <br />
                            <br />
                            Teknolojinin hızla değişen dinamiklerine olan ilgimle, sadece mevcut araçları kullanmakla kalmıyor,
                            aynı zamanda yenilikçi projelerde aktif rol almaya çalışarak geleceğin teknolojilerini şekillendirme
                            vizyonu taşıyorum.
                        </p>
                    </div>

                    <div className="col-md-5 text-center mt-4 mt-md-0">
                        <img
                            src={benImage}
                            alt="Benim Fotoğrafım"
                            className="img-fluid rounded-circle shadow-lg about-photo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
