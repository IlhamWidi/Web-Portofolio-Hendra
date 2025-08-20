/**
 * Portfolio Website JavaScript
 * Ilham Widi Mahendra
 * Last updated: 2025-08-20
 */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Create and show preloader
    const createPreloader = () => {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = '<div class="preloader-spinner"></div>';
        document.body.appendChild(preloader);
        
        // Remove preloader when page is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 500);
        });
    };
    
    createPreloader();
    
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false,
            mirror: false,
            offset: 50,
            delay: 100
        });
    } else {
        console.warn('AOS library not loaded');
    }
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize particles.js for background
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
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
    } else {
        console.warn('particles.js library not loaded or container not found');
    }
    
    // Initialize Typed.js for text typing animation
    if (typeof Typed !== 'undefined' && document.getElementById('typewriter')) {
        new Typed('#typewriter', {
            strings: ['Ilham Widi', 'a Developer', 'an Entrepreneur', 'a Tech Enthusiast'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    } else {
        console.warn('Typed.js library not loaded or container not found');
    }
    
    // Initialize VanillaTilt for 3D card effect
    if (typeof VanillaTilt !== 'undefined') {
        const tiltElements = document.querySelectorAll(".tilt-card");
        if (tiltElements.length > 0) {
            VanillaTilt.init(tiltElements, {
                max: 10,
                speed: 300,
                glare: true,
                "max-glare": 0.2,
                scale: 1.05
            });
        }
    } else {
        console.warn('VanillaTilt library not loaded');
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
    const highlightActiveSection = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (sections.length === 0 || navLinks.length === 0) return;
        
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
    };
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once on load
    
    // Project card hover effects
    const setupProjectCards = () => {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const overlay = this.querySelector('.project-overlay');
                if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'scale(1)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const overlay = this.querySelector('.project-overlay');
                if (overlay) {
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'scale(0.8)';
                }
            });
        });
    };
    
    setupProjectCards();
    
    // Project filtering
    const setupProjectFilter = () => {
        const filterBtns = document.querySelectorAll('.project-filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (filterBtns.length === 0 || projectCards.length === 0) return;
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        
                        if (cardCategory && cardCategory.includes(filterValue)) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    };
    
    setupProjectFilter();
    
    // Skill tabs
    const setupSkillTabs = () => {
        const tabBtns = document.querySelectorAll('.skill-tab-btn');
        const tabContents = document.querySelectorAll('.skill-content');
        
        if (tabBtns.length === 0 || tabContents.length === 0) return;
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding content
                const targetId = this.getAttribute('data-target');
                const targetContent = document.getElementById(`${targetId}-skills`);
                
                if (targetContent) {
                    targetContent.classList.add('active');
                    
                    // Re-animate skill bars in the active tab
                    const skillBars = targetContent.querySelectorAll('.skill-progress-bar');
                    
                    skillBars.forEach(bar => {
                        const progress = window.getComputedStyle(bar).getPropertyValue('--progress');
                        bar.style.width = '0';
                        
                        setTimeout(() => {
                            bar.style.width = progress;
                        }, 50);
                    });
                }
            });
        });
    };
    
    setupSkillTabs();
    
    // Counter animation
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        if (counters.length === 0) return;
        
        const startCounting = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            let count = 0;
            const duration = 2000; // ms
            const increment = Math.ceil(target / (duration / 16)); // 16ms is approx 1 frame at 60fps
            
            const updateCount = () => {
                count += increment;
                
                if (count >= target) {
                    counter.textContent = target;
                } else {
                    counter.textContent = count;
                    requestAnimationFrame(updateCount);
                }
            };
            
            updateCount();
        };
        
        // Use Intersection Observer to trigger when visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    };
    
    animateCounters();
    
    // Parallax effect on mouse move (desktop only)
    const setupParallaxEffect = () => {
        if (window.innerWidth <= 768) return; // Skip on mobile
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            // Apply to neomorphic cards
            document.querySelectorAll('.neomorphic-card').forEach(card => {
                const depth = 20;
                const moveX = mouseX * depth;
                const moveY = mouseY * depth;
                card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
            
            // Apply to floating elements
            document.querySelectorAll('.floating-element').forEach(el => {
                const depth = 50;
                const moveX = mouseX * depth;
                const moveY = mouseY * depth;
                el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1)`;
            });
        });
    };
    
    setupParallaxEffect();
    
    // Custom cursor (desktop only)
    const setupCustomCursor = () => {
        if (window.innerWidth <= 768) return; // Skip on mobile
        
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        // Expand cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .project-card, .social-icon-large, .service-card, .testimonial-card'
        );
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.mixBlendMode = 'lighten';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.mixBlendMode = 'screen';
            });
        });
        
        // Hide when cursor leaves window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    };
    
    setupCustomCursor();
    
    // Add glass reflection effect to glassmorphism elements
    const addGlassReflection = () => {
        const glassElements = document.querySelectorAll('.glassmorphism');
        
        glassElements.forEach(el => {
            // Skip if already has a reflection
            if (el.querySelector('.glass-reflection')) return;
            
            const reflection = document.createElement('div');
            reflection.className = 'glass-reflection';
            reflection.style.position = 'absolute';
            reflection.style.top = '0';
            reflection.style.left = '0';
            reflection.style.right = '0';
            reflection.style.height = '30%';
            reflection.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))';
            reflection.style.borderRadius = 'inherit';
            reflection.style.pointerEvents = 'none';
            
            // Make sure the parent element has position relative
            if (window.getComputedStyle(el).position === 'static') {
                el.style.position = 'relative';
            }
            
            el.appendChild(reflection);
        });
    };
    
    addGlassReflection();
    
    // Animate skill bars on scroll
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        
        if (skillBars.length === 0) return;
        
        const animateBar = (bar) => {
            const progressValue = window.getComputedStyle(bar).getPropertyValue('--progress');
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = progressValue;
            }, 100);
        };
        
        // Use Intersection Observer to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
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
    
    // Set up glitch text effect
    const setupGlitchEffect = () => {
        const glitchElements = document.querySelectorAll('.glitch-text');
        
        glitchElements.forEach(el => {
            if (!el.getAttribute('data-text')) {
                el.setAttribute('data-text', el.textContent);
            }
        });
    };
    
    setupGlitchEffect();
    
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
        scrollTopBtn.style.zIndex = '50';
        
        document.body.appendChild(scrollTopBtn);
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        });
    };
    
    setupScrollToTop();
    
    // Image loading animations
    const setupImageLoading = () => {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Skip if image is already loaded
            if (img.complete) return;
            
            // Create loading placeholder
            const parent = img.parentElement;
            if (window.getComputedStyle(parent).position === 'static') {
                parent.style.position = 'relative';
            }
            
            const loader = document.createElement('div');
            loader.className = 'image-loader';
            loader.style.position = 'absolute';
            loader.style.inset = '0';
            loader.style.display = 'flex';
            loader.style.alignItems = 'center';
            loader.style.justifyContent = 'center';
            loader.style.backgroundColor = 'rgba(13, 27, 55, 0.7)';
            loader.style.borderRadius = 'inherit';
            
            const spinner = document.createElement('div');
            spinner.style.width = '30px';
            spinner.style.height = '30px';
            spinner.style.border = '3px solid rgba(0, 163, 255, 0.2)';
            spinner.style.borderTop = '3px solid var(--accent)';
            spinner.style.borderRadius = '50%';
            spinner.style.animation = 'spin 1s linear infinite';
            
            loader.appendChild(spinner);
            parent.appendChild(loader);
            
            // Remove loader when image loads
            img.addEventListener('load', () => {
                loader.remove();
            });
            
            // Remove loader if image fails to load
            img.addEventListener('error', () => {
                loader.remove();
                img.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
            });
        });
    };
    
    setupImageLoading();
    
    // Animate tech orbit planets
    const animateTechOrbit = () => {
        const planets = document.querySelectorAll('.tech-planet');
        
        if (planets.length === 0) return;
        
        planets.forEach((planet, index) => {
            const angle = index * (360 / planets.length);
            planet.style.setProperty('--rotate', `${angle}deg`);
            
            // Add animation delay to each planet
            planet.style.animationDelay = `${index * 0.5}s`;
        });
    };
    
    animateTechOrbit();
    
    // Setup service card hover effects
    const setupServiceCards = () => {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.service-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                    icon.style.boxShadow = '0 0 20px rgba(0, 163, 255, 0.6)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.service-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.boxShadow = '0 0 15px rgba(0, 163, 255, 0.4)';
                }
            });
        });
    };
    
    setupServiceCards();
    
    // Set current year in footer
    const updateFooterYear = () => {
        const yearElements = document.querySelectorAll('.footer-year');
        const currentYear = new Date().getFullYear();
        
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    };
    
    updateFooterYear();
    
    // Add console greeting
    console.log('%c👋 Welcome to Ilham Widi\'s Portfolio!', 'color: #00a3ff; font-size: 20px; font-weight: bold;');
    console.log('%cCurrent date: 2025-08-20 00:49:21', 'color: #fff; font-size: 14px;');
    console.log('%cLogged in as: IlhamWidi', 'color: #fff; font-size: 14px;');
});