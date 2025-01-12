import './EventsSection.css';


const ClubSidebar = ({ leadership, contact }) => (
    <aside className="club-sidebar">
      <div className="leadership-box">
        <h3>Club Leadership</h3>
        {leadership.map((leader, index) => (
          <div key={index} className="leader-item">
            <img src={leader.image} alt={leader.role} />
            <div className="leader-info">
              <h4>{leader.name}</h4>
              <p className="role">{leader.role}</p>
              {leader.department && <p className="department">{leader.department}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="join-club">
        <h3>Join Our Club</h3>
        <p>Become a member to participate in club activities and events.</p>
        <button className="join-btn">Register Now</button>
      </div>
      <div className="club-contact">
        <h3>Contact Information</h3>
        <p><i className="fas fa-envelope"></i> {contact.email}</p>
        <p><i className="fab fa-whatsapp"></i> {contact.whatsapp}</p>
        <div className="social-links">
          {contact.socialLinks.map((link, index) => (
            <a key={index} href={link.link}>
              <i className={`fab fa-${link.platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
  
  export default ClubSidebar;
  