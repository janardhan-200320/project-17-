// ==========================================
// ROMANTIC APOLOGY WEBSITE - JAVASCRIPT
// ==========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initFloatingHearts();
    initScrollAnimations();
    initLandingButton();
    initFlipCards();
    initHeartBubbles();
    initPromises();
    initFloatingClouds();
    initForgiveness();
    initCursorTrail();
    initMusicToggle();
    
    // NEW FEATURES
    initTypewriter();
    initWishJar();
    initScratchCards();
    initPolaroids();
    initFireflies();
    
    // PHOTO FEATURES
    initPhotoGallery();
    initMemoryWall();
    initCarousel();
});

// ==========================================
// FLOATING HEARTS BACKGROUND
// ==========================================
function initFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartEmojis = ['💖', '💕', '💗', '💝', '💓', '🌸', '✨', '🌺', '🌷'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 17000);
    }, 800);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-animate');
        observer.observe(section);
    });
}

// ==========================================
// LANDING BUTTON
// ==========================================
function initLandingButton() {
    const startButton = document.getElementById('startButton');
    const apologySection = document.getElementById('apology');
    
    startButton.addEventListener('click', () => {
        apologySection.scrollIntoView({ behavior: 'smooth' });
        createHeartExplosion(startButton);
    });
}

// ==========================================
// FLIP CARDS (MISTAKES SECTION)
// ==========================================
function initFlipCards() {
    const cards = document.querySelectorAll('.flip-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            
            // Add sparkle effect
            if (card.classList.contains('flipped')) {
                createSparkles(card);
            }
        });
    });
}

// ==========================================
// HEART BUBBLES (MEANING SECTION)
// ==========================================
function initHeartBubbles() {
    const heartBubbles = document.querySelectorAll('.heart-bubble');
    const messageDisplay = document.getElementById('messageDisplay');
    
    heartBubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            const message = bubble.dataset.message;
            
            // Display message
            messageDisplay.textContent = message;
            messageDisplay.classList.add('show');
            
            // Add bounce animation
            bubble.style.animation = 'none';
            setTimeout(() => {
                bubble.style.animation = '';
            }, 10);
            
            // Create hearts explosion
            createHeartExplosion(bubble);
        });
    });
}

// ==========================================
// PROMISES SECTION
// ==========================================
function initPromises() {
    const promiseItems = document.querySelectorAll('.promise-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 200);
            }
        });
    }, { threshold: 0.5 });
    
    promiseItems.forEach(item => {
        observer.observe(item);
    });
}

// ==========================================
// SLIDER (MEMORY SECTION)
// ==========================================
// ==========================================
// FLOATING MESSAGE CLOUDS
// ==========================================
function initFloatingClouds() {
    const cloudContainer = document.getElementById('cloudContainer');
    const messageDisplay = document.getElementById('cloudMessageDisplay');
    const messageText = document.getElementById('cloudMessageText');
    const closeBtn = document.getElementById('closeCloudMessage');
    
    // Romantic messages for Ragini
    const messages = [
        "Every moment without you feels incomplete. You are my everything, Ragini 💖",
        "I'm sorry for the times I made you cry. Your happiness means the world to me 🌸",
        "You deserve someone who cherishes you every single day. Let me be that person again 💕",
        "My heart aches knowing I hurt you. Please give me a chance to make it right 🌹",
        "You are the light in my darkest days. I can't imagine life without your smile ✨",
        "I promise to listen better, love harder, and never take you for granted again 💗",
        "Every mistake taught me how precious you are. I won't waste another second 🦋",
        "Your forgiveness would mean everything to me. I'll spend forever earning it 💫",
        "I miss the way you laugh, the way you look at me. I miss us 🌺",
        "You are my forever, Ragini 💖. Please let me prove it to you again 🌈"
    ];
    
    // Create floating clouds
    messages.forEach((message, index) => {
        const cloud = document.createElement('div');
        cloud.className = 'message-cloud';
        cloud.innerHTML = '💭';
        
        // Random positioning
        const randomTop = Math.random() * 70 + 10; // 10% to 80%
        const randomLeft = Math.random() * 80 + 5; // 5% to 85%
        const randomDelay = Math.random() * 3; // 0-3s delay
        const randomDuration = 8 + Math.random() * 4; // 8-12s duration
        
        cloud.style.top = `${randomTop}%`;
        cloud.style.left = `${randomLeft}%`;
        cloud.style.animationDelay = `${randomDelay}s`;
        cloud.style.animationDuration = `${randomDuration}s`;
        
        // Click handler to show message
        cloud.addEventListener('click', () => {
            messageText.textContent = message;
            messageDisplay.classList.add('active');
            
            // Add pulse effect
            cloud.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cloud.style.transform = 'scale(1)';
            }, 300);
        });
        
        cloudContainer.appendChild(cloud);
    });
    
    // Close message display
    closeBtn.addEventListener('click', () => {
        messageDisplay.classList.remove('active');
    });
    
    // Close on background click
    messageDisplay.addEventListener('click', (e) => {
        if (e.target === messageDisplay) {
            messageDisplay.classList.remove('active');
        }
    });
}


// ==========================================
// FORGIVENESS INTERACTION
// ==========================================
function initForgiveness() {
    const forgivenessButtons = document.querySelectorAll('.forgiveness-btn');
    const responseMessage = document.getElementById('responseMessage');
    const buttonsContainer = document.getElementById('forgivenessButtons');
    
    forgivenessButtons.forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.dataset.choice;
            let message = '';
            
            if (choice === 'forgive') {
                message = '💖 Thank you, Ragini 💖, for your grace and your heart. I promise to honor this second chance every single day. You are everything to me. 🌸✨';
                createEmojiRain(['💖', '💕', '✨', '🌸', '💝']);
            } else {
                message = '🤍 I understand and respect that completely, Ragini 💖. Take all the time you need. I\'ll be here, working on myself, hoping you find peace. You deserve that. 🌙💕';
            }
            
            // Hide buttons
            buttonsContainer.style.display = 'none';
            
            // Show response
            responseMessage.textContent = message;
            responseMessage.classList.add('show');
            
            // Add celebration effect
            setTimeout(() => {
                createSparkles(responseMessage);
            }, 500);
        });
    });
}

// ==========================================
// CURSOR TRAIL (HEARTS)
// ==========================================
function initCursorTrail() {
    const canvas = document.getElementById('cursorCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const hearts = [];
    const heartEmoji = '💖';
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    document.addEventListener('mousemove', (e) => {
        // Only add heart occasionally to avoid clutter
        if (Math.random() > 0.7) {
            hearts.push({
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 15 + 10,
                opacity: 1,
                vx: (Math.random() - 0.5) * 2,
                vy: Math.random() * -2 - 1
            });
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        hearts.forEach((heart, index) => {
            heart.opacity -= 0.02;
            heart.x += heart.vx;
            heart.y += heart.vy;
            
            if (heart.opacity <= 0) {
                hearts.splice(index, 1);
            } else {
                ctx.save();
                ctx.globalAlpha = heart.opacity;
                ctx.font = `${heart.size}px Arial`;
                ctx.fillText(heartEmoji, heart.x, heart.y);
                ctx.restore();
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ==========================================
// HELPER: CREATE HEART EXPLOSION
// ==========================================
function createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const heartEmojis = ['💖', '💕', '💗', '💝', '✨'];
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10000';
        
        document.body.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / 12;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = 0;
        let posY = 0;
        let opacity = 1;
        
        const animation = setInterval(() => {
            posX += vx * 0.016;
            posY += vy * 0.016;
            opacity -= 0.02;
            
            heart.style.transform = `translate(${posX}px, ${posY}px)`;
            heart.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(animation);
                heart.remove();
            }
        }, 16);
    }
}

// ==========================================
// HELPER: CREATE SPARKLES
// ==========================================
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
        sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10000';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.transition = 'all 1s ease';
            sparkle.style.transform = `translateY(-50px) scale(2)`;
            sparkle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1100);
    }
}

// ==========================================
// HELPER: CREATE EMOJI RAIN
// ==========================================
function createEmojiRain(emojis) {
    const container = document.createElement('div');
    container.classList.add('emoji-rain');
    document.body.appendChild(container);
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.classList.add('falling-emoji');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = '-50px';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }, i * 100);
    }
    
    setTimeout(() => {
        container.remove();
    }, 8000);
}

// ==========================================
// MUSIC TOGGLE WITH BACKGROUND MUSIC
// ==========================================
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const audio = document.getElementById('backgroundMusic');
    
    // Set initial state
    let isPlaying = true;
    musicToggle.textContent = '🔇'; // Show mute icon initially (music will play)
    
    // Try to auto-play immediately
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Auto-play started successfully
            isPlaying = true;
            musicToggle.textContent = '🔇';
        }).catch(() => {
            // Auto-play was prevented, set to stopped state
            isPlaying = false;
            musicToggle.textContent = '🎵';
            
            // Try to play on first user interaction
            const startOnInteraction = () => {
                audio.play().then(() => {
                    isPlaying = true;
                    musicToggle.textContent = '🔇';
                }).catch(() => {});
                document.removeEventListener('click', startOnInteraction);
                document.removeEventListener('touchstart', startOnInteraction);
            };
            
            document.addEventListener('click', startOnInteraction, { once: true });
            document.addEventListener('touchstart', startOnInteraction, { once: true });
        });
    }
    
    // Toggle music on button click
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering other click events
        
        if (isPlaying) {
            audio.pause();
            musicToggle.textContent = '🎵';
            isPlaying = false;
        } else {
            audio.play();
            musicToggle.textContent = '🔇';
            isPlaying = true;
        }
    });
}

// ==========================================
// SMOOTH SCROLLING FOR ALL INTERNAL LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================================
// ADD TOUCH FEEDBACK FOR MOBILE
// ==========================================
if ('ontouchstart' in window) {
    document.querySelectorAll('button, .flip-card, .heart-bubble').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// ==========================================
// PERFORMANCE: REDUCE ANIMATIONS ON LOW-END DEVICES
// ==========================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
}

// ==========================================
// NEW FEATURE 1: TYPEWRITER EFFECT
// ==========================================
function initTypewriter() {
    const letterContent = document.getElementById('letterContent');
    if (!letterContent || !letterContent.dataset.typewriter) return;
    
    const paragraphs = letterContent.querySelectorAll('p');
    letterContent.classList.add('typewriter');
    
    let currentParagraph = 0;
    
    function typeNextParagraph() {
        if (currentParagraph >= paragraphs.length) return;
        
        const p = paragraphs[currentParagraph];
        const text = p.innerHTML;
        p.innerHTML = '';
        p.classList.add('typing');
        
        let charIndex = 0;
        const cursor = document.createElement('span');
        cursor.classList.add('typing-cursor');
        p.appendChild(cursor);
        
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                cursor.remove();
                
                // Handle HTML tags
                if (text[charIndex] === '<') {
                    const closingIndex = text.indexOf('>', charIndex);
                    const tag = text.substring(charIndex, closingIndex + 1);
                    p.innerHTML += tag;
                    charIndex = closingIndex + 1;
                } else {
                    p.innerHTML += text[charIndex];
                    charIndex++;
                }
                
                p.appendChild(cursor);
            } else {
                clearInterval(typeInterval);
                cursor.remove();
                currentParagraph++;
                setTimeout(typeNextParagraph, 500);
            }
        }, 30);
    }
    
    // Start typing when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeNextParagraph, 500);
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(letterContent);
}

// ==========================================
// NEW FEATURE 2: VIRTUAL WISH JAR
// ==========================================
function initWishJar() {
    const wishJar = document.getElementById('wishJarElement');
    const wishMessage = document.getElementById('wishMessage');
    
    const messages = [
        "Ragini 💖, you are the most precious person in my life 💖✨",
        "Thank you, Ragini 💖, for showing me what real love feels like 🌸",
        "I promise to protect your heart like the treasure it is, Ragini 💖 💝",
        "Every day with you is a gift I'll never take for granted, Ragini 💖 🎁",
        "Ragini 💖, your smile is my favorite thing in the entire world 😊💕",
        "I'm so grateful you exist and that you chose me, Ragini 💖 🙏💗",
        "You make me want to be the best version of myself 🌟",
        "Ragini 💖, I will spend forever proving how much you mean to me ♾️💖",
        "You deserve all the happiness in the universe 🌌💫",
        "Thank you, Ragini 💖, for being patient with my growth 🌱💕",
        "You are my home, my peace, my everything 🏡💗",
        "Ragini 💖, I fall more in love with you every single day 📈💖",
        "Your happiness will always be my priority, Ragini 💖 🎯💕",
        "I'm sorry for the times I made you doubt my love 💔➡️💖",
        "Ragini 💖, you are beautiful, inside and out, always 🌺✨",
        "I choose you, Ragini 💖, today and every day after 💍💕",
        "Thank you for loving me even when I mess up 🙏💗",
        "Ragini 💖, you make life worth living 🌈💖",
        "I promise to always listen with my heart 👂💕",
        "You are more than enough, you are everything, Ragini 💖 🌟💗"
    ];
    
    let lastMessage = -1;
    
    wishJar.addEventListener('click', () => {
        // Get random message (different from last)
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * messages.length);
        } while (randomIndex === lastMessage && messages.length > 1);
        
        lastMessage = randomIndex;
        
        // Display message
        wishMessage.textContent = messages[randomIndex];
        wishMessage.classList.remove('show');
        
        setTimeout(() => {
            wishMessage.classList.add('show');
        }, 10);
        
        // Jar animation
        wishJar.style.animation = 'none';
        setTimeout(() => {
            wishJar.style.animation = '';
        }, 10);
        
        // Create sparkles
        createSparkles(wishJar);
    });
}

// ==========================================
// NEW FEATURE 3: SCRATCH CARDS
// ==========================================
function initScratchCards() {
    const canvases = document.querySelectorAll('.scratch-canvas');
    
    canvases.forEach(canvas => {
        const message = canvas.dataset.message;
        const ctx = canvas.getContext('2d');
        const wrapper = canvas.parentElement;
        
        // Set canvas size
        canvas.width = wrapper.offsetWidth;
        canvas.height = wrapper.offsetHeight;
        
        // Draw scratch surface
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#ffd6e8');
        gradient.addColorStop(1, '#e6d9ff');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('❤️ Scratch Here ❤️', canvas.width / 2, canvas.height / 2);
        
        let isScratching = false;
        let scratchedPercentage = 0;
        
        function scratch(e) {
            if (!isScratching) return;
            
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;
            
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 25, 0, Math.PI * 2);
            ctx.fill();
            
            // Check if enough is scratched
            checkScratchProgress();
        }
        
        function checkScratchProgress() {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            let transparent = 0;
            
            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] < 128) transparent++;
            }
            
            scratchedPercentage = (transparent / (pixels.length / 4)) * 100;
            
            if (scratchedPercentage > 60) {
                canvas.style.opacity = '0';
                canvas.style.pointerEvents = 'none';
                createSparkles(wrapper);
            }
        }
        
        // Mouse events
        canvas.addEventListener('mousedown', () => isScratching = true);
        canvas.addEventListener('mouseup', () => isScratching = false);
        canvas.addEventListener('mousemove', scratch);
        
        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isScratching = true;
        });
        canvas.addEventListener('touchend', () => isScratching = false);
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            scratch(e);
        });
    });
}

// ==========================================
// NEW FEATURE 4: MEMORY POLAROIDS
// ==========================================
function initPolaroids() {
    const polaroids = document.querySelectorAll('.polaroid');
    
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            // Remove active from all
            polaroids.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            polaroid.classList.add('active');
            
            // Create hearts
            createHeartExplosion(polaroid);
            
            // Reset after animation
            setTimeout(() => {
                polaroid.classList.remove('active');
            }, 2000);
        });
    });
}

// ==========================================
// NEW FEATURE 5: FIREFLIES
// ==========================================
function initFireflies() {
    const firefliesContainer = document.getElementById('fireflies');
    const fireflyCount = 20;
    
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        // Random starting position
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        
        // Random movement
        firefly.style.setProperty('--tx', (Math.random() - 0.5) * 400 + 'px');
        firefly.style.setProperty('--ty', (Math.random() - 0.5) * 400 + 'px');
        
        // Random delay
        firefly.style.animationDelay = Math.random() * 10 + 's';
        firefly.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        firefliesContainer.appendChild(firefly);
    }
}

// ==========================================
// PHOTO FEATURE 1: GALLERY LOVE STORY
// ==========================================
function initPhotoGallery() {
    const gallery = document.getElementById('timelineGallery');
    
    // Romantic captions for each image
    const captions = [
        "The moment I first saw you and my world changed forever 💕",
        "When your smile made everything else disappear ✨",
        "That day we laughed until our hearts were full 😊💖",
        "The memory that reminds me why I fell for you 🌸",
        "Your eyes telling me everything I needed to know 💫",
        "When I realized you were my person 🥰",
        "The joy you bring into my life, captured perfectly 🌟",
        "A moment I replay in my mind every single day 💭💕",
        "The way you look at me makes me believe in love 💗",
        "Our hearts in perfect sync, just like this moment 💞",
        "When time stopped and all I could see was you ⏰💖",
        "The memory that makes me smile even on hard days 😌",
        "Your beauty, inside and out, shining so bright 🌺✨",
        "The day you showed me what true happiness feels like 🎈",
        "This moment when I knew I never wanted to let you go 🫶",
        "Your presence making everything more beautiful 🌷",
        "The smile that lives rent-free in my heart 💝",
        "When we created a memory I'll treasure forever 📸💕",
        "The look that says 'I love you' without words 💬❤️",
        "You, being the most amazing person in my world 🌍💖",
        "Forever grateful this moment happened with you 🙏✨"
    ];
    
    for (let i = 1; i <= 21; i++) {
        const item = document.createElement('div');
        item.classList.add('timeline-item');
        
        item.innerHTML = `
            <div class="timeline-image">
                <img src="image${i}.jpeg" alt="Memory ${i}" onerror="this.style.display='none'">
            </div>
            <div class="timeline-content">
                <div class="timeline-date">Memory ${i}</div>
                <div class="timeline-caption">${captions[i-1]}</div>
            </div>
        `;
        
        gallery.appendChild(item);
    }
    
    // Make first few items visible immediately (no delay)
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        if (index < 5) {
            item.classList.add('visible');
        }
    });
    
    // Animate on scroll with lower threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.01,
        rootMargin: '50px'
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// ==========================================
// PHOTO FEATURE 2: INTERACTIVE MEMORY WALL
// ==========================================
function initMemoryWall() {
    const grid = document.getElementById('memoryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentIndex = 0;
    const totalImages = 21;
    
    const captions = [
        "Every moment with you, Ragini 💖, is a treasure 💎",
        "Your smile lights up my entire world 🌟",
        "Thank you for being my everything 💕",
        "This memory makes my heart so full 💗",
        "The day you showed me what love truly means 💫",
        "Forever grateful for moments like these 🙏✨",
        "You make every day brighter, Ragini 💖 🌞",
        "My favorite memory with my favorite person 💝",
        "The happiness you bring is irreplaceable 🎈",
        "This smile of yours melts my heart every time 😊💕",
        "Together, we create the most beautiful memories 🌸",
        "You are my greatest blessing 🙌💖",
        "The moment I knew you were special ✨",
        "Your presence is my favorite gift 🎁💗",
        "Love captured in a single moment 📸💞",
        "With you, every moment is magical 🪄💕",
        "The joy in your eyes is my happiness 😍",
        "Thank you for being you, Ragini 💖 🌺",
        "Memories with you are my most precious 💎💕",
        "You make life so much more beautiful 🌷",
        "Forever and always, this moment with you 💍💖"
    ];
    
    // Create memory cards
    for (let i = 1; i <= totalImages; i++) {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.index = i - 1;
        
        card.innerHTML = `
            <img src="image${i}.jpeg" alt="Memory ${i}" loading="lazy">
            <div class="memory-overlay">
                <div class="memory-heart">💖</div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            currentIndex = parseInt(card.dataset.index);
            showLightbox();
        });
        
        grid.appendChild(card);
    }
    
    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.memory-card').forEach(card => {
        observer.observe(card);
    });
    
    // Lightbox functions
    function showLightbox() {
        lightboxImage.src = `image${currentIndex + 1}.jpeg`;
        lightboxCaption.textContent = captions[currentIndex];
        lightbox.classList.add('active');
        createHeartExplosion(lightbox);
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        showLightbox();
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showLightbox();
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', showNext);
    lightboxPrev.addEventListener('click', showPrev);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
}

// ==========================================
// PHOTO FEATURE 3: CAROUSEL WITH MUSIC
// ==========================================
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const playPauseBtn = document.getElementById('carouselPlayPause');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const audio = document.getElementById('backgroundMusic');
    
    let currentSlide = 0;
    const totalSlides = 21;
    let isAutoPlaying = true;
    let autoPlayInterval;
    
    const captions = [
        "Our love story begins here, Ragini 💖 💕",
        "Every picture tells our beautiful journey 📖💗",
        "Moments that made us who we are together 💫",
        "The memories we've built, one smile at a time 😊",
        "Your happiness is my mission in life 🎯💕",
        "Together, we create magic every single day ✨",
        "Thank you for every beautiful moment 🙏💖",
        "The joy we share is my greatest treasure 💎",
        "You and me, against the world 🌍💗",
        "Forever grateful for this journey with you 🛤️💕",
        "Every moment with you is a gift 🎁💖",
        "Building memories that will last forever ♾️",
        "You make ordinary moments extraordinary ⭐",
        "Our story, written in moments of love 💌",
        "The best times are always with you 🥰",
        "Creating our forever, one day at a time 📅💗",
        "You are my happy place, Ragini 💖 🏡",
        "These moments define what love means to me 💕",
        "Together is my favorite place to be 🫶",
        "Thank you for being my person 💝",
        "Here's to us and our beautiful journey ahead 🥂💖"
    ];
    
    // Create slides
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        
        slide.innerHTML = `
            <img src="image${i}.jpeg" alt="Memory ${i}">
            <div class="carousel-slide-caption">${captions[i-1]}</div>
        `;
        
        track.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (i === 1) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i - 1));
        indicatorsContainer.appendChild(indicator);
    }
    
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function toggleAutoPlay() {
        isAutoPlaying = !isAutoPlaying;
        
        if (isAutoPlaying) {
            playPauseBtn.textContent = '⏸';
            startAutoPlay();
            // Don't control music here - let the main toggle handle it
        } else {
            playPauseBtn.textContent = '▶';
            stopAutoPlay();
            // Don't control music here - let the main toggle handle it
        }
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 4000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        if (isAutoPlaying) startAutoPlay(); // Reset timer
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        if (isAutoPlaying) startAutoPlay(); // Reset timer
    });
    
    playPauseBtn.addEventListener('click', toggleAutoPlay);
    
    // Start auto-play immediately
    startAutoPlay();
}
