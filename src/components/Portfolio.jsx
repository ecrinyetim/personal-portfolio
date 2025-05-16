import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import quizzy1 from '../assets/quizzy1.png';
import quizzy2 from '../assets/quizzy2.png';
import quizzy3 from '../assets/quizzy3.png';
import cafease1 from '../assets/cafease1.png';
import cafease2 from '../assets/cafease2.png';
import cafease3 from '../assets/cafease3.png';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-up');
                    } else {
                        entry.target.classList.remove('animate-fade-up');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="portfolyom" className="portfolio-section py-5">
            <div className="container">
                <h1 className="text-center mb-2 fade-up">PORTFOLYOM</h1>
                <h2 className="text-center mb-4 fade-up position-relative">
                    Projelerim
                    <div className="section-underline mx-auto mt-2"></div>
                </h2>

                {/* Quizzy Section */}
                <div className="row align-items-center mb-5 flex-md-row flex-column-reverse fade-up">
                    <div className="col-md-6">
                        <div className="image-grid">
                            {[quizzy1, quizzy2, quizzy3].map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Quizzy ${i + 1}`}
                                    className="img-fluid rounded shadow-sm clickable"
                                    onClick={() => handleImageClick(img)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Quizzy</h3>
                        <p>
                            Quizzy, genel kültür ve spor alanlarında hazırlanan sorularla kullanıcıların bilgi seviyesini ölçmeyi amaçlayan, Bootstrap ve React ile geliştirilmiş modern ve mobil uyumlu bir quiz uygulamasıdır. Kullanıcı kimlik doğrulama işlemleri Firebase Authentication ile güvenli bir şekilde gerçekleştirilmiştir. Quiz içerikleri JSON formatında dinamik olarak oluşturulmuş ve uygulamaya entegre edilmiştir. Proje, ekip çalışmasıyla bir arkadaşım ile birlikte geliştirilmiş olup, kullanıcı deneyimi ve teknik altyapı açısından güçlü bir yapı sunmaktadır.
                        </p>
                        <a
                            href="https://github.com/ecrinyetim/Quizzy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <FaGithub size={28} /> GitHub'da Görüntüle
                        </a>
                    </div>
                </div>

                {/* CAFEase Section */}
                <div className="row align-items-center mb-5 fade-up">
                    <div className="col-md-6">
                        <h3>CAFEase</h3>
                        <p>
                            CAFEase, menü yönetimi, sipariş takibi, gider kontrolü ve kar/zarar hesaplamalarını bir araya getiren PyQt5 tabanlı masaüstü uygulamasıdır. Kafe ortamına uygun sıcak renk paleti ve kullanıcı dostu arayüzüyle küçük işletmeler için pratik bir dijital çözümdür.
                        </p>
                        <a
                            href="https://github.com/ecrinyetim/CAFEase.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <FaGithub size={28} /> GitHub'da Görüntüle
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="image-grid">
                            {[cafease1, cafease2, cafease3].map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Cafease ${i + 1}`}
                                    className="img-fluid rounded shadow-sm clickable"
                                    onClick={() => handleImageClick(img)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={selectedImage} alt="Preview" />
                    </div>
                </div>
            )}

        </section>
    );
};

export default Portfolio;
