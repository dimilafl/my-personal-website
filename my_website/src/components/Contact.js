import React from 'react';

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required /><br />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea><br />

      <input type="submit" value="Send" />
    </form>
  </section>
);

export default Contact;
