// Data loader for portfolio website - Fast loading with embedded data
class PortfolioDataLoader {
  constructor() {
    this.data = null;
    this.init();
  }

  init() {
    try {
      this.loadData();
      this.populateData();
      this.initializePortfolioFilters();
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    }
  }

  loadData() {
    // Embedded data from data.json for instant loading (no network request needed)
    this.data = {
      "personal": {
        "name": "Vinay Ghate",
        "title": "Python and AI Developer",
        "email": "ghatevinay2@gmail.com",
        "birthday": "Jan 31, 2002",
        "location": "Pune, Maharashtra, India",
        "avatar": "./assets/images/my-avatar.png",
        "about": "I am a Python Developer from Pune, India, who enjoys building smart and practical solutions through code. I like exploring new technologies, understanding how systems work, and finding better ways to solve real-world problems. My approach to development is simple - write clean code, build useful products, and keep improving with every project.",
        "aboutExtended": "I work mostly with Python, AI/ML, and cloud technologies, creating automation tools, AI-based applications, and backend systems that make processes faster and more efficient. I enjoy experimenting with new frameworks, learning from hands-on experience, and turning creative ideas into working solutions that actually make a difference."
      },
      "contact": {
        "email": "ghatevinay2@gmail.com",
        "location": "Pune, Maharashtra, India"
      },
      "social": {
        "linkedin": "https://linkedin.com/in/vinay-ghate",
        "github": "https://github.com/vinay-ghate",
        "twitter": "https://x.com/vinayghate",
        "instagram": "https://www.instagram.com/vinay_ghate/"
      },
      "services": [
        {
          "title": "AI Development",
          "description": "Creating smart AI solutions using LangChain, RAG, and LLMs to automate workflows, handle data intelligently, and bring ideas to life through practical AI applications.",
          "icon": "./assets/images/icon-dev.svg"
        },
        {
          "title": "System Engineering",
          "description": "Designing reliable and scalable systems with a focus on automation, performance tuning, and smooth Linux server operations for better efficiency and uptime.",
          "icon": "./assets/images/icon-app.svg"
        },
        {
          "title": "Python Development",
          "description": "Building end-to-end applications using Python frameworks like Flask, FastAPI, and Django — focusing on clean architecture, performance, and real-world usability.",
          "icon": "./assets/images/icon-design.svg"
        },
        {
          "title": "Database Solutions",
          "description": "Designing and managing databases like MySQL, PostgreSQL, MongoDB, and ChromaDB to ensure data is organized, fast, and easy to work with for any project.",
          "icon": "./assets/images/icon-photo.svg"
        }
      ],
      "education": [
        {
          "institution": "Zeal College of Engineering Pune",
          "degree": "Bachelor of Engineering [Computer] + Honors in Cyber Security",
          "period": "2020 - 2024",
          "location": "Pune, India",
          "cgpa": "8.41",
          "coursework": "DBMS, OS, AIML, Cyber Security"
        },
        {
          "institution": "Tuljaram Chaturachand Junior College of Science",
          "degree": "Higher Secondary Education",
          "period": "2018 - 2020",
          "location": "Baramati, India"
        }
      ],
      "experience": [
        {
          "position": "System Engineer C1",
          "company": "Tata Consultancy Services",
          "period": "Nov 2024 - Present",
          "location": "Mumbai, India",
          "responsibilities": [
            "Built an internal POC with Java and Kafka, reducing result delays by 30 times",
            "Created AI POCs for internal hackathons using Python, LangChain, RAG, and OpenAI",
            "Managed Linux servers, ensuring smooth operation and accessibility for everyone",
            "Built automation scripts using bash and cronjobs"
          ]
        },
        {
          "position": "Python Developer Intern",
          "company": "Scrobits Technologies",
          "period": "June 2024 – Nov 2024",
          "location": "Pune, India",
          "responsibilities": [
            "Built an AI platform to create and post blogs and webpages, improving content automation",
            "Developed AI POCs for clients, demonstrating practical AI solutions",
            "Customized the company's Next.js site with dynamic data for improved functionality",
            "Conducted SEO research and implemented AI-driven SEO improvements",
            "Mentored participants in an internal AI hackathon, guiding AI project development"
          ]
        }
      ],
      "projects": [
        {
          "title": "TalkWithDB-AI-Agent",
          "category": "applications",
          "description": "AI Agent using Lang-chain and Gemini to talk with any SQLite file. Auto identify the table structure and create queries to find the accurate result with agentic AI approach.",
          "technologies": ["Python", "LangChain", "Gemini", "SQLite"],
          "image": "./assets/images/project-1.jpg",
          "link": "https://github.com/vinay-ghate/TalkWithDB-AI-Agent"
        },
        {
          "title": "ChatterPy",
          "category": "web development",
          "description": "Python Flask based web-application with web-sockets for live chat. Custom rooms, anonymous chat, Realtime communication, added loggers for systems analysis.",
          "technologies": ["Python", "Flask", "WebSockets", "HTML/CSS"],
          "image": "./assets/images/project-2.png",
          "link": "https://github.com/vinay-ghate/ChatterPy"
        },
        {
          "title": "Diffusion Imaging Application",
          "category": "applications",
          "description": "Built a simple open-source application on Python and DIPY to create 3D images from MRI data, providing a free alternative to paid software in the field.",
          "technologies": ["Python", "PyQt", "DIPY", "TensorFlow"],
          "image": "./assets/images/project-3.jpg",
          "link": "#"
        },
        {
          "title": "AI Blog Generator Platform",
          "category": "web development",
          "description": "AI-powered platform for automated blog and webpage creation with SEO optimization. Built during internship at Scrobits Technologies.",
          "technologies": ["Python", "AI/ML", "Next.js", "SEO"],
          "image": "./assets/images/project-4.png",
          "link": "#"
        },
        {
          "title": "Kafka Performance Optimizer",
          "category": "applications",
          "description": "Internal POC built with Java and Kafka that reduced result delays by 30 times. System-level optimization for enterprise applications.",
          "technologies": ["Java", "Kafka", "System Design", "Performance"],
          "image": "./assets/images/project-5.png",
          "link": "#"
        },
        {
          "title": "Linux Server Automation Suite",
          "category": "web development",
          "description": "Comprehensive automation scripts using bash and cronjobs for Linux server management, monitoring, and maintenance tasks.",
          "technologies": ["Bash", "Linux", "Automation", "Monitoring"],
          "image": "./assets/images/project-6.png",
          "link": "#"
        },
        {
          "title": "AI Hackathon Projects Collection",
          "category": "applications",
          "description": "Multiple AI POCs developed for internal hackathons using Python, LangChain, RAG, and OpenAI technologies for various business solutions.",
          "technologies": ["Python", "OpenAI", "RAG", "LangChain"],
          "image": "./assets/images/project-7.png",
          "link": "#"
        },
        {
          "title": "Multi-Database Query Interface",
          "category": "web development",
          "description": "Interactive web interface for database management supporting MySQL, PostgreSQL, MongoDB, and ChromaDB with real-time query execution.",
          "technologies": ["Python", "FastAPI", "Database", "Web Interface"],
          "image": "./assets/images/project-8.jpg",
          "link": "#"
        },
        {
          "title": "Community Platform - IODump & GDSC",
          "category": "web development",
          "description": "Co-founded and developed community platforms for tech enthusiasts at college level with event management, hackathon organization features.",
          "technologies": ["Python", "Django", "Community", "Events"],
          "image": "./assets/images/project-9.png",
          "link": "#"
        }
      ],
      "skills": [
        {
          "category": "Languages",
          "items": ["Python", "HTML/CSS", "SQL", "Bash"]
        },
        {
          "category": "Generative AI",
          "items": ["Langchain", "n8n", "custom agents", "MCP", "RAG", "LLMs", "Prompting"]
        },
        {
          "category": "Developer Tools",
          "items": ["VS Code", "Git", "GitHub", "Rest API", "Jupyter Notebook", "Anaconda", "Notion", "LM Studio"]
        },
        {
          "category": "Technologies/Frameworks",
          "items": ["Flask", "Pandas", "OOPS", "NumPy", "FastAPI", "Django", "Google Cloud"]
        },
        {
          "category": "Databases",
          "items": ["MySQL", "SQLite", "PostgreSQL", "MongoDB", "Chroma DB"]
        }
      ],
      "skillsProgress": [
        {
          "skill": "Python",
          "percentage": 90
        },
        {
          "skill": "AI/ML",
          "percentage": 85
        },
        {
          "skill": "Web Development",
          "percentage": 80
        },
        {
          "skill": "Database Management",
          "percentage": 85
        },
        {
          "skill": "System Engineering",
          "percentage": 75
        }
      ],
      "activities": [
        "Started communities like IODump and GDSC ZCOER with few friends at college level",
        "Organized few events, hackathons, tech activities also volunteered in few",
        "Got selected for Amazon ML Summer School 2023"
      ],
      "codingProfiles": {
        "github": "https://github.com/vinay-ghate",
        "geeksforgeeks": "https://auth.geeksforgeeks.org/user/vinay_ghate",
        "googleDev": "https://developers.google.com/profile/u/vinay_ghate",
        "leetcode": "https://leetcode.com/u/vinay_ghate/",
        "twitter": "https://x.com/vinayghate"
      },
      "blog": [
        {
          "title": "Building AI Agents with LangChain and RAG",
          "category": "AI Development",
          "date": "2024-12-15",
          "description": "A comprehensive guide to building intelligent AI agents using LangChain framework with RAG implementation for better context understanding.",
          "image": "./assets/images/blog-1.jpg",
          "link": "#"
        },
        {
          "title": "Python Performance Optimization Techniques",
          "category": "Python Development",
          "date": "2024-12-10",
          "description": "Best practices for optimizing Python applications performance in production environments with real-world examples.",
          "image": "./assets/images/blog-2.jpg",
          "link": "#"
        },
        {
          "title": "System Engineering with Linux Automation",
          "category": "System Engineering",
          "date": "2024-12-05",
          "description": "Essential practices for building and maintaining scalable systems using Linux automation and monitoring tools.",
          "image": "./assets/images/blog-3.jpg",
          "link": "#"
        }
      ]
    };
  }

  populateData() {
    if (!this.data) return;

    this.removeHardcodedContent();
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
    this.populateProjects();
    this.populateBlog();
    this.populateContactSection();
    this.removeTestimonials();
    this.removeClients();
  }

  removeHardcodedContent() {
    // Remove hardcoded about text and replace with empty content initially
    const aboutTextElements = document.querySelectorAll('.about-text p');
    aboutTextElements.forEach(p => {
      p.textContent = '';
    });

    // Clear hardcoded name and title
    const nameElement = document.querySelector('.sidebar .name');
    const titleElement = document.querySelector('.sidebar .title');
    if (nameElement) nameElement.textContent = '';
    if (titleElement) titleElement.textContent = '';

    // Clear hardcoded email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
      link.textContent = '';
      link.href = 'mailto:';
    });
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

  populateProjects() {
    const { projects } = this.data;
    const projectsList = document.querySelector('.project-list');

    if (projectsList && projects) {
      projectsList.innerHTML = projects.map(project => `
        <li class="project-item active" data-filter-item data-category="${project.category.toLowerCase()}">
          <a href="${project.link}">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="${project.image}" alt="${project.title}" loading="lazy">
            </figure>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category}</p>
          </a>
        </li>
      `).join('');
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

  removeTestimonials() {
    // Remove testimonials section since it's not relevant for a developer portfolio
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
      testimonialsSection.style.display = 'none';
    }

    const testimonialsModal = document.querySelector('.modal-container');
    if (testimonialsModal) {
      testimonialsModal.style.display = 'none';
    }
  }

  removeClients() {
    // Remove clients section since it's not relevant for a developer portfolio
    const clientsSection = document.querySelector('.clients');
    if (clientsSection) {
      clientsSection.style.display = 'none';
    }
  }

  initializePortfolioFilters() {
    // Update portfolio filter categories to match our data
    const filterButtons = document.querySelectorAll('[data-filter-btn]');
    const selectItems = document.querySelectorAll('[data-select-item]');

    // Update filter button text and add click handlers
    if (filterButtons.length >= 4) {
      filterButtons[1].textContent = 'Applications';
      filterButtons[2].textContent = 'Web Development';
      filterButtons[3].textContent = 'Python Development';

      // Add data attributes for filtering
      filterButtons[0].setAttribute('data-filter', 'all');
      filterButtons[1].setAttribute('data-filter', 'applications');
      filterButtons[2].setAttribute('data-filter', 'web development');
      filterButtons[3].setAttribute('data-filter', 'python development');
    }

    if (selectItems.length >= 4) {
      selectItems[1].textContent = 'Applications';
      selectItems[2].textContent = 'Web Development';
      selectItems[3].textContent = 'Python Development';

      // Add data attributes for filtering
      selectItems[0].setAttribute('data-filter', 'all');
      selectItems[1].setAttribute('data-filter', 'applications');
      selectItems[2].setAttribute('data-filter', 'web development');
      selectItems[3].setAttribute('data-filter', 'python development');
    }

    // Add custom filter functionality
    this.setupCustomFiltering();
  }

  setupCustomFiltering() {
    const filterButtons = document.querySelectorAll('[data-filter-btn]');
    const selectItems = document.querySelectorAll('[data-select-item]');

    // Handle filter button clicks
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter') || button.textContent.toLowerCase();
        this.filterProjects(filterValue);

        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });

    // Handle select dropdown
    selectItems.forEach(item => {
      item.addEventListener('click', () => {
        const filterValue = item.getAttribute('data-filter') || item.textContent.toLowerCase();
        this.filterProjects(filterValue);

        // Update select display
        const selectValue = document.querySelector('[data-selecct-value]');
        if (selectValue) {
          selectValue.textContent = item.textContent;
        }
      });
    });
  }

  filterProjects(filterValue) {
    const projectItems = document.querySelectorAll('[data-filter-item]');

    projectItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      if (filterValue === 'all' || itemCategory === filterValue) {
        item.style.display = 'block';
        item.classList.add('active');
      } else {
        item.style.display = 'none';
        item.classList.remove('active');
      }
    });
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