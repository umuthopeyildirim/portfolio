import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './styles.module.css';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xaykywla");
  if (state.succeeded) {
      return (<div className={styles.contactUsResponse} id="contact-us"><p>Thanks for your question! I'll get back to you shortly.</p></div>);
  }
  return (

    <div className={styles.contactUsBackground} id="contact-us">
        <div className={`${styles.contactContainer} container`}>
            <div className={styles.contactSideBySide}>
                <div className={styles.contactMainPart}>
                    <h3 className={styles.contactTitle}><a href="https://open.spotify.com/track/58zsLZPvfflaiIbNWoA22O?si=3a358c16f55e42ac">I'm only human after all</a></h3>
                    <div className={styles.contactLimitContainer}>
                        <p className={styles.contactDetails}>
                            Yes, you read my text right. If you have a question, please fill out the form below and I will get back to you as soon as possible.
                        </p>
                    </div>

                    <div className={styles.contactRow}>
                        <div className={styles.contactGrid}>
                            <h5 className={styles.contactSubTitle}>Don't feel like talking?</h5>
                            <a href="mailto:info@umutyildirim.com" target="_blank">Email Me</a>

                            <h5 className={styles.contactSubTitle}>Social media? Of course...</h5>
                            <a href="https://www.instagram.com/umuthopeyildirim/" target="_blank">Instagram</a><br/>
                            <a href="https://www.linkedin.com/in/umuthopeyildirim/" target="_blank">LinkedIn</a><br/>
                            <a href="https://github.com/umuthopeyildirim" target="_blank">GitHub</a><br/>
                            <a href="https://garden.umutyildirim.com/" target="_blank">Digital Garden</a>

                        </div>

                        <div className={styles.contactGrid}>                                                     
                                <form onSubmit={handleSubmit}>
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input className={styles.messageInput}
                                    id="name"
                                    type="name" 
                                    name="name"
                                />
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input className={styles.messageInput}
                                    id="email"
                                    type="email" 
                                    name="email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea className={styles.messageInput}
                                    id="message"
                                    name="message"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                                <button className={styles.thisButton} type="submit" disabled={state.submitting}>
                                    Submit
                                </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  );
}

export default ContactForm;