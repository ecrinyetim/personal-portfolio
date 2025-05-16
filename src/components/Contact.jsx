import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_68iusqb',     // ← EmailJS servis ID
            'template_rp0k4xs',    // ← EmailJS şablon ID
            form.current,
            'BZCg-AZ6v_bU3C3KV'         // ← EmailJS public key (örneğin: 'RnB9J5zNxxxxxxx')
        ).then(
            (result) => {
                alert('Mesajınız başarıyla gönderildi!');
                form.current.reset();
            },
            (error) => {
                alert('Bir hata oluştu. Lütfen tekrar deneyin.');
                console.error(error.text);
            }
        );
    };

    return (
        <section id="iletişim" className="contact-section py-5" >
            <div className="container">
                <h2 className="text-center mb-4 fade-up">İletişim</h2>
                <div className="row justify-content-center fade-up">
                    <div className="col-md-8">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label className="form-label">Ad Soyad</label>
                                <input type="text" name="user_name" className="form-control shadow-sm" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mail</label>
                                <input type="email" name="user_email" className="form-control shadow-sm" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mesaj</label>
                                <textarea name="message" className="form-control shadow-sm" rows="4" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-custom px-4 py-2">Gönder</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
