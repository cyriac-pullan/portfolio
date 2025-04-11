document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize AOS with custom settings for neon theme
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Theme Toggle (now just for neon intensity)
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    let neonIntensity = 1;

    themeToggle.addEventListener('click', () => {
        neonIntensity = neonIntensity === 1 ? 0.5 : 1;
        document.documentElement.style.setProperty('--neon-intensity', neonIntensity);
    });

    // Mobile Menu Toggle with neon effect
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
        hamburger.classList.toggle('active');
        
        // Add neon pulse effect
        if (!mobileMenu.classList.contains('translate-x-full')) {
            gsap.to(mobileMenu, {
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                duration: 0.5,
                yoyo: true,
                repeat: 1
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('translate-x-full');
            hamburger.classList.remove('active');
        }
    });

    // Scroll Progress Bar with neon effect
    const progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
        
        // Add neon pulse effect at certain scroll points
        if (scrolled % 25 === 0) {
            gsap.to(progressBar, {
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
                duration: 0.5,
                yoyo: true,
                repeat: 1
            });
        }
    });

    // Navbar Scroll Effect with neon glow
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-neon');
            gsap.to(navbar, {
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                duration: 0.3
            });
        } else {
            navbar.classList.remove('shadow-neon');
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll with neon trail effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                // Add neon trail effect
                gsap.to(window, {
                    scrollTo: {
                        y: targetPosition,
                        autoKill: false
                    },
                    duration: 1,
                    ease: 'power2.inOut',
                    onStart: () => {
                        gsap.to(progressBar, {
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
                            duration: 0.5,
                            yoyo: true,
                            repeat: 1
                        });
                    }
                });
            }
        });
    });

    // Enhanced Typewriter Effect with neon glow
    const typewriter = document.querySelector('.typewriter');
    const text = typewriter.textContent;
    typewriter.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            // Add neon pulse for each character
            gsap.to(typewriter, {
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Project Card Flip Animation with neon glow
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.project-card-inner');
            inner.classList.toggle('flipped');
            
            // Add neon pulse effect
            gsap.to(card, {
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
                duration: 0.5,
                yoyo: true,
                repeat: 1
            });
        });
    });

    // Skill Bar Animation with neon glow
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const width = bar.getAttribute('data-width');
        gsap.fromTo(bar, 
            { width: '0%' },
            { 
                width: width + '%',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    onEnter: () => {
                        gsap.to(bar, {
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
                            duration: 0.5,
                            yoyo: true,
                            repeat: 1
                        });
                    }
                }
            }
        );
    });

    // Parallax Effect with neon glow
    document.querySelectorAll('.parallax').forEach(section => {
        gsap.to(section.querySelector('.parallax-bg'), {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                onEnter: () => {
                    gsap.to(section, {
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                        duration: 0.5,
                        yoyo: true,
                        repeat: 1
                    });
                }
            }
        });
    });

    // Floating Elements Animation with neon trail
    document.querySelectorAll('.floating').forEach(element => {
        gsap.to(element, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            onRepeat: () => {
                gsap.to(element, {
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    });

    // Scroll Spy with neon highlight
    const sections = document.querySelectorAll('section');
    const navLinksElements = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinksElements.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
                // Add neon pulse effect
                gsap.to(link, {
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    });

    // Print Button with neon effect
    const printButton = document.createElement('button');
    printButton.className = 'fixed bottom-8 left-8 bg-dark-800 text-neon-blue p-4 rounded-full shadow-neon-sm hover:shadow-neon transition-all duration-300 z-50';
    printButton.innerHTML = '<i class="fas fa-print"></i>';
    printButton.addEventListener('click', () => {
        gsap.to(printButton, {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            onComplete: () => window.print()
        });
    });
    document.body.appendChild(printButton);
});