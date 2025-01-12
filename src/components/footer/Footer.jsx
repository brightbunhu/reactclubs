import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [footerContent, setFooterContent] = useState({
    contact: {
      email: 'clubs@msu.ac.zw',
      phone: '+263 123 456 789',
    },
    quickLinks: [
      { text: 'About Us', href: '#' },
      { text: 'FAQ', href: '#' },
      { text: 'Privacy Policy', href: '#' },
    ],
    socialLinks: [
      { platform: 'Facebook', href: '#', iconClass: 'fab fa-facebook' },
      { platform: 'Twitter', href: '#', iconClass: 'fab fa-twitter' },
      { platform: 'Instagram', href: '#', iconClass: 'fab fa-instagram' },
    ],
    footerText: '&copy; 2024 MSU Clubs Portal. All rights reserved.',
  });

  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: {footerContent.contact.email}</p>
            <p>Phone: {footerContent.contact.phone}</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            {footerContent.quickLinks.map((link, index) => (
              <a key={index} href={link.href}>{link.text}</a>
            ))}
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              {footerContent.socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p dangerouslySetInnerHTML={{ __html: footerContent.footerText }}></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
