// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add project functionality
function addProject() {
    const projectTitle = prompt("Enter project title:");
    const projectDescription = prompt("Enter project description:");
    
    if (projectTitle && projectDescription) {
        const projectsGrid = document.querySelector('.projects-grid');
        const addProjectCard = document.querySelector('.add-project');
        
        // Create new project card
        const newProjectCard = document.createElement('div');
        newProjectCard.className = 'project-card';
        newProjectCard.innerHTML = `
            <div class="project-image">
                🚀
            </div>
            <div class="project-content">
                <h3>${projectTitle}</h3>
                <p>${projectDescription}</p>
                <button onclick="removeProject(this)" style="background: #ff4757; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">Remove</button>
            </div>
        `;
        
        // Insert before the add button
        projectsGrid.insertBefore(newProjectCard, addProjectCard);
        
        // Add animation
        newProjectCard.style.opacity = '0';
        newProjectCard.style.transform = 'translateY(20px)';
        setTimeout(() => {
            newProjectCard.style.transition = 'all 0.3s ease';
            newProjectCard.style.opacity = '1';
            newProjectCard.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Remove project functionality
function removeProject(button) {
    const projectCard = button.closest('.project-card');
    projectCard.style.transition = 'all 0.3s ease';
    projectCard.style.opacity = '0';
    projectCard.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        projectCard.remove();
    }, 300);
}

// Create floating particles with cybersecurity theme
function createParticles() {
    const hero = document.querySelector('.hero');
    const colors = ['', 'green', 'purple'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        particle.className = `particle ${colorClass}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        hero.appendChild(particle);
    }
}

// Create binary rain effect
function createBinaryRain() {
    const binaryRain = document.getElementById('binaryRain');
    const binaryChars = ['0', '1'];
    
    for (let i = 0; i < 50; i++) {
        const char = document.createElement('div');
        char.className = 'binary-char';
        char.textContent = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 10 + 's';
        char.style.animationDuration = (Math.random() * 8 + 12) + 's';
        binaryRain.appendChild(char);
    }
}

// Monitor text animation
function animateMonitorText() {
    const monitors = document.querySelectorAll('.monitor-content');
    
    monitors.forEach((monitor, index) => {
        const lines = monitor.querySelectorAll('div:not(.monitor-header)');
        lines.forEach((line, lineIndex) => {
            line.style.opacity = '0';
            setTimeout(() => {
                line.style.transition = 'opacity 0.5s ease';
                line.style.opacity = '1';
            }, (index * 1000) + (lineIndex * 200));
        });
    });
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createBinaryRain();
    animateMonitorText();
    
    // Re-animate monitors periodically
    setInterval(animateMonitorText, 8000);
});

// Add mobile menu toggle functionality
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// Add smooth reveal animation for skill cards
function revealSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize skill cards animation
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
});

// Trigger animations when skills section is visible
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            revealSkillCards();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});