// Data loader for portfolio website - Fast loading with embedded data
class PortfolioDataLoader {
  constructor() {
    this.data = null;
    this.init();
  }

  async init() {
    try {
      await this.loadData();
      this.populateData();

    } catch (error) {
      console.error('Error loading portfolio data:', error);
    }
  }

  async loadData() {
    try {
      const response = await fetch('./assets/data/portfolio.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Failed to load portfolio data:', error);
      this.data = null;
    }
  }

  populateData() {
    if (!this.data) return;

    this.populatePersonalInfo();
    this.populateContact();
    this.populateSocial();
    this.populateAbout();
    this.populateServices();
    this.populateEducation();
    this.populateExperience();
    this.populateSkills();
    this.populateSkillsDetailed();
    this.populateActivities();
    this.populateCodingProfiles();
    this.populateProjectsPage();
    this.populateBlog();
    this.populateContactSection();
  }

  populatePersonalInfo() {
    const { personal } = this.data;

    // Update name and title in sidebar
    const nameElement = document.querySelector('.sidebar .name');
    const titleElement = document.querySelector('.sidebar .title');
    const avatarElement = document.querySelector('.sidebar .avatar-box img');

    if (nameElement) nameElement.textContent = personal.name;
    if (titleElement) titleElement.textContent = personal.title;
    if (avatarElement) {
      avatarElement.src = personal.avatar;
      avatarElement.alt = personal.name;
    }

    // Update page title
    document.title = `${personal.name} - ${personal.title}`;
  }

  populateContact() {
    const { contact } = this.data;

    // Update email
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
      emailLink.href = `mailto:${contact.email}`;
      emailLink.textContent = contact.email;
    }

    // Update phone
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink) {
      phoneLink.href = `tel:${contact.phone}`;
      phoneLink.textContent = contact.phone;
    }

    // Update location
    const locationElement = document.querySelector('.contact-info address');
    if (locationElement) {
      locationElement.textContent = contact.location;
    }

    // Update birthday
    const birthdayElement = document.querySelector('time[datetime]');
    if (birthdayElement) {
      birthdayElement.textContent = this.data.personal.birthday;
    }
  }

  populateSocial() {
    const { social } = this.data;
    const socialLinks = document.querySelectorAll('.social-list .social-link');

    if (socialLinks.length >= 3) {
      socialLinks[0].href = social.linkedin;
      socialLinks[1].href = social.twitter;
      socialLinks[2].href = social.instagram;
    }
  }

  populateAbout() {
    const { personal } = this.data;
    const aboutTextElements = document.querySelectorAll('.about-text p');

    if (aboutTextElements.length >= 2) {
      aboutTextElements[0].textContent = personal.about;
      aboutTextElements[1].textContent = personal.aboutExtended;
    }
  }

  populateServices() {
    const { services } = this.data;
    const servicesList = document.querySelector('.service-list');

    if (servicesList && services) {
      servicesList.innerHTML = services.map(service => `
        <li class="service-item">
          <div class="service-icon-box">
            <img src="${service.icon}" alt="${service.title} icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">${service.title}</h4>
            <p class="service-item-text">${service.description}</p>
          </div>
        </li>
      `).join('');
    }
  }

  populateEducation() {
    const { education } = this.data;
    const educationList = document.querySelector('.timeline .timeline-list');

    if (educationList && education) {
      educationList.innerHTML = education.map(edu => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${edu.institution}</h4>
          <span>${edu.period}</span>
          <p class="timeline-text">
            ${edu.degree}${edu.cgpa ? ` (CGPA: ${edu.cgpa})` : ''}<br>
            ${edu.coursework ? `Coursework: ${edu.coursework}` : ''}
          </p>
        </li>
      `).join('');
    }
  }

  populateExperience() {
    const { experience } = this.data;
    const experienceList = document.querySelectorAll('.timeline .timeline-list')[1];

    if (experienceList && experience) {
      experienceList.innerHTML = experience.map(exp => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${exp.position}</h4>
          <span>${exp.period}</span>
          <p class="timeline-text">
            <strong>${exp.company}</strong> - ${exp.location}<br>
            ${exp.responsibilities.map(resp => `• ${resp}`).join('<br>')}
          </p>
        </li>
      `).join('');
    }
  }

  populateSkills() {
    const { skillsProgress } = this.data;
    const skillsList = document.querySelector('.skills-list');

    if (skillsList && skillsProgress) {
      skillsList.innerHTML = skillsProgress.map(skill => `
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">${skill.skill}</h5>
            <data value="${skill.percentage}">${skill.percentage}%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: ${skill.percentage}%;"></div>
          </div>
        </li>
      `).join('');
    }
  }

  populateSkillsDetailed() {
    const { skills } = this.data;

    // Add detailed skills section after the existing skills section
    const skillSection = document.querySelector('.skill');
    if (skillSection && skills) {
      const detailedSkillsHTML = `
        <section class="detailed-skills" style="margin-top: 40px;">
          <h3 class="h3 skills-title">Technical Skills</h3>
          <div class="skills-categories content-card" style="padding: 20px;">
            ${skills.map(skillCategory => `
              <div class="skill-category" style="margin-bottom: 25px;">
                <h4 class="h4" style="color: #ffdb70; margin-bottom: 10px;">${skillCategory.category}</h4>
                <div class="skill-tags" style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${skillCategory.items.map(skill => `
                    <span class="skill-tag" style="background: rgba(255, 219, 112, 0.1); color: #ffdb70; padding: 5px 12px; border-radius: 15px; font-size: 12px; border: 1px solid rgba(255, 219, 112, 0.2);">${skill}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
      skillSection.insertAdjacentHTML('afterend', detailedSkillsHTML);
    }
  }

  populateActivities() {
    const { activities } = this.data;

    // Add activities section after skills
    const skillSection = document.querySelector('.detailed-skills') || document.querySelector('.skill');
    if (skillSection && activities) {
      const activitiesHTML = `
        <section class="activities" style="margin-top: 40px;">
          <h3 class="h3 skills-title">Activities & Achievements</h3>
          <div class="activities-list content-card" style="padding: 25px; background: rgba(255, 255, 255, 0.02); border-radius: 15px; border: 1px solid rgba(255, 219, 112, 0.1);">
            ${activities.map(activity => `
              <div class="activity-item" style="margin-bottom: 15px; padding: 20px; background: rgba(255, 219, 112, 0.15); border-radius: 12px; border-left: 4px solid #ffdb70; border: 1px solid rgba(255, 219, 112, 0.3); transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(255, 219, 112, 0.1);">
                <p style="margin: 0; line-height: 1.6; color: #e8e8e8; font-size: 15px; font-weight: 400;">${activity}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `;
      skillSection.insertAdjacentHTML('afterend', activitiesHTML);
    }
  }

  populateCodingProfiles() {
    const { codingProfiles } = this.data;

    // Add coding profiles section after activities
    const activitiesSection = document.querySelector('.activities') || document.querySelector('.detailed-skills') || document.querySelector('.skill');
    if (activitiesSection && codingProfiles) {
      const profilesHTML = `
        <section class="coding-profiles" style="margin-top: 40px;">
          <h3 class="h3 skills-title">Coding Profiles</h3>
          <div class="profiles-grid content-card" style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
            ${Object.entries(codingProfiles).map(([platform, url]) => `
              <a href="${url}" target="_blank" class="profile-link" style="display: flex; align-items: center; padding: 12px; background: rgba(255, 219, 112, 0.1); border-radius: 8px; text-decoration: none; color: #ffdb70; border: 1px solid rgba(255, 219, 112, 0.2); transition: all 0.3s ease;">
                <div class="profile-icon" style="width: 24px; height: 24px; margin-right: 10px; background: #ffdb70; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #1e1e1f; font-weight: bold; font-size: 12px;">${platform.charAt(0).toUpperCase()}</span>
                </div>
                <div class="profile-info">
                  <div class="profile-name" style="font-weight: 500; text-transform: capitalize;">${platform === 'geeksforgeeks' ? 'GeeksforGeeks' : platform === 'googleDev' ? 'Google Dev' : platform === 'leetcode' ? 'LeetCode' : platform}</div>
                  <div class="profile-handle" style="font-size: 11px; opacity: 0.8;">View Profile</div>
                </div>
              </a>
            `).join('')}
          </div>
        </section>
      `;
      activitiesSection.insertAdjacentHTML('afterend', profilesHTML);
    }
  }



  populateProjectsPage() {
    const { projects } = this.data;
    const projectsContainer = document.querySelector('.projects-list-container');

    if (projectsContainer && projects) {
      projectsContainer.innerHTML = `
        <div class="projects-grid-layout" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-top: 20px;">
          ${projects.map(project => `
            <a href="${project.link}" target="_blank" class="project-card-link" style="text-decoration: none; color: inherit; display: block;">
              <div class="project-card" style="background: var(--border-gradient-onyx); border-radius: 16px; padding: 0; overflow: hidden; box-shadow: var(--shadow-2); transition: all 0.3s ease; position: relative; cursor: pointer; height: 100%;">
                <div class="project-card-inner" style="background: var(--bg-gradient-jet); border-radius: inherit; padding: 0; height: 100%; display: flex; flex-direction: column;">
                  
                  <div class="project-image-container" style="position: relative; height: 200px; overflow: hidden; border-radius: 16px 16px 0 0;">
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" loading="lazy">
                    <div class="project-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(255, 219, 112, 0.1) 0%, rgba(255, 219, 112, 0.05) 100%); opacity: 0; transition: opacity 0.3s ease;"></div>
                    <div class="project-link-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
                      <div class="link-icon" style="background: rgba(255, 219, 112, 0.9); color: #1e1e1f; padding: 12px; border-radius: 50%; font-size: 20px; transform: scale(0.8); transition: transform 0.3s ease;">
                        <ion-icon name="open-outline"></ion-icon>
                      </div>
                    </div>
                  </div>

                  <div class="project-content" style="padding: 25px; flex-grow: 1; display: flex; flex-direction: column;">
                    <h3 class="project-title" style="color: var(--white-2); font-size: 18px; font-weight: 600; margin-bottom: 12px; line-height: 1.3;">${project.title}</h3>
                    
                    <p class="project-description" style="color: var(--light-gray); font-size: 14px; line-height: 1.6; margin-bottom: 20px; flex-grow: 1;">${project.description}</p>
                    
                    <div class="project-technologies" style="margin-bottom: 15px;">
                      <div class="tech-tags" style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${project.technologies.map(tech => `
                          <span class="tech-tag" style="background: rgba(255, 219, 112, 0.1); color: #ffdb70; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 500; border: 1px solid rgba(255, 219, 112, 0.2);">${tech}</span>
                        `).join('')}
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      `;

      // Add hover effects
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          const overlay = card.querySelector('.project-overlay');
          const linkOverlay = card.querySelector('.project-link-overlay');
          const linkIcon = card.querySelector('.link-icon');
          const image = card.querySelector('img');

          if (overlay) overlay.style.opacity = '1';
          if (linkOverlay) linkOverlay.style.opacity = '1';
          if (linkIcon) linkIcon.style.transform = 'scale(1)';
          if (image) image.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
          const overlay = card.querySelector('.project-overlay');
          const linkOverlay = card.querySelector('.project-link-overlay');
          const linkIcon = card.querySelector('.link-icon');
          const image = card.querySelector('img');

          if (overlay) overlay.style.opacity = '0';
          if (linkOverlay) linkOverlay.style.opacity = '0';
          if (linkIcon) linkIcon.style.transform = 'scale(0.8)';
          if (image) image.style.transform = 'scale(1)';
        });
      });
    }
  }

  populateBlog() {
    const { blog } = this.data;
    const blogList = document.querySelector('.blog-posts-list');

    if (blogList && blog) {
      blogList.innerHTML = blog.map(post => `
        <li class="blog-post-item">
          <a href="${post.link}">
            <figure class="blog-banner-box">
              <img src="${post.image}" alt="${post.title}" loading="lazy">
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">${post.category}</p>
                <span class="dot"></span>
                <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })}</time>
              </div>
              <h3 class="h3 blog-item-title">${post.title}</h3>
              <p class="blog-text">${post.description}</p>
            </div>
          </a>
        </li>
      `).join('');
    }
  }

  populateContactSection() {
    const contactSection = document.querySelector('.contact-form');
    const { personal, social } = this.data;

    if (contactSection) {
      contactSection.innerHTML = `
        <h3 class="h3 form-title">Get In Touch</h3>
        
        <div class="contact-info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px;">
          
          <!-- Email Contact -->
          <div class="contact-method" style="background: rgba(255, 219, 112, 0.05); padding: 25px; border-radius: 15px; border: 1px solid rgba(255, 219, 112, 0.1); text-align: center; transition: all 0.3s ease;">
            <div class="contact-icon" style="width: 60px; height: 60px; background: linear-gradient(135deg, #ffdb70 0%, #ffa726 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <ion-icon name="mail-outline" style="font-size: 28px; color: #1e1e1f;"></ion-icon>
            </div>
            <h4 class="h4" style="color: #ffdb70; margin-bottom: 8px; font-size: 18px;">Email</h4>
            <p style="color: #d6d6d6; font-size: 14px; margin-bottom: 20px; opacity: 0.8;">Send me a direct email</p>
            <a href="mailto:${personal.email}?subject=Portfolio Contact&body=Hello Vinay,%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0ABest regards" 
               class="contact-link" 
               style="display: inline-block; background: rgba(255, 219, 112, 0.15); color: #ffdb70; padding: 12px 20px; border-radius: 25px; text-decoration: none; border: 1px solid rgba(255, 219, 112, 0.3); transition: all 0.3s ease; font-weight: 500; font-size: 14px;">
              ${personal.email}
            </a>
          </div>

          <!-- LinkedIn Contact -->
          <div class="contact-method" style="background: rgba(0, 119, 181, 0.05); padding: 25px; border-radius: 15px; border: 1px solid rgba(0, 119, 181, 0.1); text-align: center; transition: all 0.3s ease;">
            <div class="contact-icon" style="width: 60px; height: 60px; background: linear-gradient(135deg, #0077b5 0%, #005885 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <ion-icon name="logo-linkedin" style="font-size: 28px; color: white;"></ion-icon>
            </div>
            <h4 class="h4" style="color: #ffdb70; margin-bottom: 8px; font-size: 18px;">LinkedIn</h4>
            <p style="color: #d6d6d6; font-size: 14px; margin-bottom: 20px; opacity: 0.8;">Connect professionally</p>
            <a href="${social.linkedin}" 
               target="_blank"
               class="contact-link" 
               style="display: inline-block; background: rgba(0, 119, 181, 0.15); color: #0077b5; padding: 12px 20px; border-radius: 25px; text-decoration: none; border: 1px solid rgba(0, 119, 181, 0.3); transition: all 0.3s ease; font-weight: 500; font-size: 14px;">
              Connect on LinkedIn
            </a>
          </div>

          <!-- Twitter/X Contact -->
          <div class="contact-method" style="background: rgba(29, 161, 242, 0.05); padding: 25px; border-radius: 15px; border: 1px solid rgba(29, 161, 242, 0.1); text-align: center; transition: all 0.3s ease;">
            <div class="contact-icon" style="width: 60px; height: 60px; background: linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <ion-icon name="logo-twitter" style="font-size: 28px; color: white;"></ion-icon>
            </div>
            <h4 class="h4" style="color: #ffdb70; margin-bottom: 8px; font-size: 18px;">Twitter / X</h4>
            <p style="color: #d6d6d6; font-size: 14px; margin-bottom: 20px; opacity: 0.8;">Follow and message me</p>
            <a href="${social.twitter}" 
               target="_blank"
               class="contact-link" 
               style="display: inline-block; background: rgba(29, 161, 242, 0.15); color: #1da1f2; padding: 12px 20px; border-radius: 25px; text-decoration: none; border: 1px solid rgba(29, 161, 242, 0.3); transition: all 0.3s ease; font-weight: 500; font-size: 14px;">
              Follow on X
            </a>
          </div>

          <!-- GitHub Contact -->
          <div class="contact-method" style="background: rgba(51, 51, 51, 0.05); padding: 25px; border-radius: 15px; border: 1px solid rgba(51, 51, 51, 0.1); text-align: center; transition: all 0.3s ease;">
            <div class="contact-icon" style="width: 60px; height: 60px; background: linear-gradient(135deg, #333 0%, #24292e 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
              <ion-icon name="logo-github" style="font-size: 28px; color: white;"></ion-icon>
            </div>
            <h4 class="h4" style="color: #ffdb70; margin-bottom: 8px; font-size: 18px;">GitHub</h4>
            <p style="color: #d6d6d6; font-size: 14px; margin-bottom: 20px; opacity: 0.8;">Check out my code</p>
            <a href="${social.github}" 
               target="_blank"
               class="contact-link" 
               style="display: inline-block; background: rgba(51, 51, 51, 0.15); color: #d6d6d6; padding: 12px 20px; border-radius: 25px; text-decoration: none; border: 1px solid rgba(51, 51, 51, 0.3); transition: all 0.3s ease; font-weight: 500; font-size: 14px;">
              View GitHub Profile
            </a>
          </div>

        </div>

        <div class="contact-note" style="margin-top: 30px; padding: 20px; background: rgba(255, 219, 112, 0.05); border-radius: 10px; border-left: 4px solid #ffdb70;">
          <p style="margin: 0; color: #d6d6d6; line-height: 1.6;">
            <strong style="color: #ffdb70;">Let's collaborate!</strong> I'm always open to discussing new opportunities, 
            interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>
      `;

      // Add hover effects
      this.addContactHoverEffects();
    }
  }

  addContactHoverEffects() {
    const contactMethods = document.querySelectorAll('.contact-method');
    const contactLinks = document.querySelectorAll('.contact-link');

    // Add hover effects to contact method cards
    contactMethods.forEach(method => {
      method.addEventListener('mouseenter', () => {
        method.style.transform = 'translateY(-5px)';
        method.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      });

      method.addEventListener('mouseleave', () => {
        method.style.transform = 'translateY(0)';
        method.style.boxShadow = 'none';
      });
    });

    // Add hover effects to contact links
    contactLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
        link.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
        link.style.boxShadow = 'none';
      });
    });
  }
}

// Initialize the data loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioDataLoader();
});