/**
 * Portfolio Website JavaScript
 * Ilham Widi Mahendra - 2025
 */

// Preloader
const preloader = () => {
    const loader = document.createElement('div');
    loader.classList.add('preloader');
    loader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-spinner"></div>
            <div class="mt-4 text-blue-400">Loading...</div>
        </div>
    `;
    document.body.prepend(loader);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('preloader-hidden');
            setTimeout(() => {
                loader.remove();
            }, 1000);
        }, 500);
    });
};

// Initialize all major components
document.addEventListener('DOMContentLoaded', function() {
    // Start preloader
    preloader();
    
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        mirror: false,
        offset: 50,
        delay: 100
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize particles.js for background effect
    if(document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00a3ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00a3ff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.6
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Initialize Typed.js for text typing animation
    if(document.getElementById('typewriter')) {
        const options = {
            strings: ['Ilham Widi', 'a Developer', 'an Entrepreneur', 'a Tech Enthusiast'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        };
        
        new Typed('#typewriter', options);
    }
    
    // Initialize Vanilla Tilt for 3D card effect
    if(document.querySelectorAll(".tilt-card").length > 0) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 10,
            speed: 300,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active section highlight in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.classList.remove('text-blue-400');
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                        link.classList.add('text-blue-400');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Call once on load
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.project-overlay');
            if(overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'scale(1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.project-overlay');
            if(overlay) {
                overlay.style.opacity = '0';
                overlay.style.transform = 'scale(0.8)';
            }
        });
    });
    
    // Parallax effect on mouse move
    const enableParallax = () => {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            document.querySelectorAll('.neomorphic-card').forEach(card => {
                const depth = 20;
                const moveX = mouseX * depth;
                const moveY = mouseY * depth;
                card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        });
    };

    // Only enable parallax on desktop
    if(window.innerWidth > 768) {
        enableParallax();
    }
    
    // Custom cursor effect for desktop
    const setupCustomCursor = () => {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        cursor.style.position = 'fixed';
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.borderRadius = '50%';
        cursor.style.background = 'radial-gradient(circle, rgba(0, 163, 255, 0.5) 0%, rgba(0, 163, 255, 0) 70%)';
        cursor.style.transform = 'translate(-50%, -50%)';
        cursor.style.pointerEvents = 'none';
        cursor.style.zIndex = '9999';
        cursor.style.transition = 'transform 0.15s ease';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', e => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        // Expand cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .social-icon');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.mixBlendMode = 'lighten';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.mixBlendMode = 'normal';
            });
        });
    };
    
    // Only setup custom cursor on desktop
    if(window.innerWidth > 768) {
        setupCustomCursor();
    }
    
    // Add glass reflection effect to glassmorphism elements
    const addGlassReflection = () => {
        const glassElements = document.querySelectorAll('.glassmorphism');
        
        glassElements.forEach(el => {
            const reflection = document.createElement('div');
            reflection.classList.add('glass-reflection');
            reflection.style.position = 'absolute';
            reflection.style.top = '0';
            reflection.style.left = '0';
            reflection.style.right = '0';
            reflection.style.height = '30%';
            reflection.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))';
            reflection.style.borderRadius = 'inherit';
            reflection.style.pointerEvents = 'none';
            
            // Make sure the parent element has position relative
            if(getComputedStyle(el).position === 'static') {
                el.style.position = 'relative';
            }
            
            el.appendChild(reflection);
        });
    };
    
    addGlassReflection();
    
    // Animate skill bars on scroll
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        
        const animateBar = (bar) => {
            const progress = bar.getAttribute('style').match(/--progress: (\d+)%/)[1];
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = `${progress}%`;
            }, 100);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateBar(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    };
    
    animateSkillBars();
    
    // Glitch effect for glitch-text elements
    const setupGlitchEffect = () => {
        const glitchElements = document.querySelectorAll('.glitch-text');
        
        glitchElements.forEach(el => {
            if(!el.getAttribute('data-text')) {
                el.setAttribute('data-text', el.textContent);
            }
        });
    };
    
    setupGlitchEffect();
    
    // Update current year in footer
    const footerYear = document.querySelector('.footer-year');
    if(footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
    
    // Dark/Light mode toggle (if needed)
    const setupThemeToggle = () => {
        const themeToggle = document.getElementById('theme-toggle');
        if(!themeToggle) return;
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            // Save preference to localStorage
            const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'light') {
            document.body.classList.add('light-mode');
        }
    };
    
    setupThemeToggle();
    
    // Add scroll to top button
    const setupScrollToTop = () => {
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.classList.add('scroll-top-btn');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.style.position = 'fixed';
        scrollTopBtn.style.bottom = '20px';
        scrollTopBtn.style.right = '20px';
        scrollTopBtn.style.width = '40px';
        scrollTopBtn.style.height = '40px';
        scrollTopBtn.style.borderRadius = '50%';
        scrollTopBtn.style.backgroundColor = 'var(--primary)';
        scrollTopBtn.style.color = 'var(--accent)';
        scrollTopBtn.style.border = '2px solid var(--accent)';
        scrollTopBtn.style.boxShadow = '0 0 10px rgba(0, 163, 255, 0.5)';
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
        scrollTopBtn.style.cursor = 'pointer';
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
        scrollTopBtn.style.transition = 'all 0.3s ease';
        scrollTopBtn.style.zIndex = '20';
        
        document.body.appendChild(scrollTopBtn);
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        });
    };
    
    setupScrollToTop();
    
    // Add loading animation for images
    const setupImageLoading = () => {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Skip if image is already loaded
            if(img.complete) return;
            
            // Create loader
            const loader = document.createElement('div');
            loader.classList.add('image-loader');
            loader.style.position = 'absolute';
            loader.style.top = '0';
            loader.style.left = '0';
            loader.style.width = '100%';
            loader.style.height = '100%';
            loader.style.background = 'rgba(13, 27, 55, 0.8)';
            loader.style.display = 'flex';
            loader.style.alignItems = 'center';
            loader.style.justifyContent = 'center';
            
            // Create spinner
            const spinner = document.createElement('div');
            spinner.classList.add('loader-spinner');
            spinner.style.width = '30px';
            spinner.style.height = '30px';
            spinner.style.border = '3px solid rgba(255, 255, 255, 0.3)';
            spinner.style.borderTop = '3px solid var(--accent)';
            spinner.style.borderRadius = '50%';
            spinner.style.animation = 'spin 1s linear infinite';
            
            // Add keyframes for spin animation if not already added
            if(!document.querySelector('#loader-keyframes')) {
                const style = document.createElement('style');
                style.id = 'loader-keyframes';
                style.textContent = `
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            loader.appendChild(spinner);
            
            // Add loader to image parent
            const parent = img.parentElement;
            if(getComputedStyle(parent).position === 'static') {
                parent.style.position = 'relative';
            }
            parent.appendChild(loader);
            
            // Remove loader when image loads
            img.addEventListener('load', () => {
                loader.remove();
            });
            
            // Remove loader if image fails to load
            img.addEventListener('error', () => {
                loader.remove();
            });
        });
    };
    
    setupImageLoading();
});