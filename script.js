
const { useEffect, useRef, useState } = React;

// Nav Component with Light Blue Theme
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        gsap.from(navRef.current.children, {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out'
        });
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 py-4 shadow-lg border-b border-blue-100" ref={navRef}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center blue-glow">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-gray-800">LeadBaseAI</span>
                        <div className="text-xs text-blue-500 font-medium">AI AUTOMATION & LEADS</div>
                    </div>
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#automation" className="nav-link text-sm font-medium">Automation</a>
                    <a href="#leads" className="nav-link text-sm font-medium">Lead Generation</a>
                    <a href="#technology" className="nav-link text-sm font-medium">Technology</a>
                    <a href="#results" className="nav-link text-sm font-medium">Results</a>
                    <a href="#contact" className="nav-link text-sm font-medium">Contact</a>
                </div>

                <div className="hidden md:block">
                    <button className="btn-primary">
                        Get Started
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/98 border-t border-blue-100 p-4">
                    <div className="flex flex-col space-y-4">
                        <a href="#automation" className="nav-link text-sm">Automation</a>
                        <a href="#leads" className="nav-link text-sm">Lead Generation</a>
                        <a href="#technology" className="nav-link text-sm">Technology</a>
                        <a href="#results" className="nav-link text-sm">Results</a>
                        <a href="#contact" className="nav-link text-sm">Contact</a>
                        <button className="btn-primary w-fit">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

// Enhanced Hero Component with Rich Animations
const Hero = () => {
    const heroRef = useRef(null);
    const statsRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const [currentStats, setCurrentStats] = useState({ leads: 0, automation: 0, clients: 0 });

    useEffect(() => {
        // Enhanced entrance animations
        const tl = gsap.timeline();
        tl.from('.hero-badge', { opacity: 0, y: 30, duration: 0.8, ease: 'back.out(1.7)' })
            .from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' }, '-=0.5')
            .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.3')
            .from('.hero-buttons', { opacity: 0, y: 40, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.2')
            .from('.hero-stats', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.3')
            .from('.hero-dashboard', { opacity: 0, scale: 0.8, duration: 1, ease: 'back.out(1.7)' }, '-=0.8');

        // Typewriter effect
        const texts = ['AI Automation', 'Lead Generation', 'Business Growth', 'Smart Workflows'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeWriter = () => {
            const currentText = texts[textIndex];
            if (isDeleting) {
                setTypedText(currentText.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypedText(currentText.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeWriter, isDeleting ? 50 : 100);
        };
        typeWriter();

        // Animated counters
        gsap.to(currentStats, {
            leads: 50000,
            automation: 98,
            clients: 500,
            duration: 3,
            ease: 'power2.out',
            onUpdate: () => setCurrentStats({ ...currentStats })
        });

        // Create enhanced floating particles
        const createParticles = () => {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 8 + 4;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 12}s`;
                particle.style.animationDuration = `${Math.random() * 8 + 8}s`;
                heroRef.current.appendChild(particle);
            }
        };
        createParticles();

        // Continuous floating animation for dashboard cards
        gsap.to('.dashboard-card', {
            y: -10,
            duration: 2,
            ease: 'power2.inOut',
            stagger: 0.2,
            repeat: -1,
            yoyo: true
        });

    }, []);

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-32" ref={heroRef}>
            <div className="absolute inset-0 grid-bg opacity-40"></div>

            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-30" style={{ animation: 'float-up-down 8s ease-in-out infinite' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div className="space-y-10">
                        <div className="space-y-8">
                            <div className="hero-badge inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 mega-glow mt-8">
                                🚀 #1 AI-Powered Business Growth Platform
                            </div>

                            <h1 className="hero-title text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                                Transform Your Business with{' '}
                                <span className="text-shimmer block mt-2">
                                    {typedText}<span className="animate-pulse">|</span>
                                </span>
                            </h1>

                            <p className="hero-subtitle text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                🎯 Generate <strong className="text-blue-600">10x more qualified leads</strong><br />
                                ⚡ Automate <strong className="text-blue-600">80% of repetitive tasks</strong><br />
                                📈 Scale your business <strong className="text-blue-600">without limits</strong>
                            </p>
                        </div>

                        <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                            <a href="https://calendly.com/aakashmishra2050880/ai-automation-call" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center text-lg px-6 py-3 text-glow">
                                <svg className="w-5 h-5 mr-2 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                                </svg>
                                Get Started
                            </a>
                            <button className="btn-outline text-lg px-6 py-3">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>

                        <div className="hero-stats grid grid-cols-3 gap-8 pt-8 border-t border-blue-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {Math.floor(currentStats.leads).toLocaleString()}+
                                </div>
                                <div className="text-sm text-gray-600">Leads Generated</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {Math.floor(currentStats.automation)}%
                                </div>
                                <div className="text-sm text-gray-600">Automation Success</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {Math.floor(currentStats.clients)}+
                                </div>
                                <div className="text-sm text-gray-600">Happy Clients</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-dashboard relative">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 mega-glow">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Live AI Dashboard</h3>
                                <p className="text-gray-600">Real-time automation in action</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="dashboard-card bg-white rounded-2xl p-6 hover-card shadow-lg">
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 animated-gradient">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">AI Lead Scoring</h4>
                                    <p className="text-sm text-gray-600 mb-3">Qualify leads automatically</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '87%' }}></div>
                                    </div>
                                </div>

                                <div className="dashboard-card bg-white rounded-2xl p-6 hover-card shadow-lg">
                                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 animated-gradient">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Smart Automation</h4>
                                    <p className="text-sm text-gray-600 mb-3">Workflows that adapt</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '94%' }}></div>
                                    </div>
                                </div>

                                <div className="dashboard-card bg-white rounded-2xl p-6 hover-card shadow-lg">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 animated-gradient">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Real-time Analytics</h4>
                                    <p className="text-sm text-gray-600 mb-3">Performance insights</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full animate-pulse" style={{ width: '76%' }}></div>
                                    </div>
                                </div>

                                <div className="dashboard-card bg-white rounded-2xl p-6 hover-card shadow-lg">
                                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 animated-gradient">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">CRM Integration</h4>
                                    <p className="text-sm text-gray-600 mb-3">Seamless connectivity</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{ width: '91%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                                <div className="flex items-center justify-center space-x-4 mb-4">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-700">System Status: Optimal</span>
                                    <div className="text-sm text-gray-500 loading-dots">Processing</div>
                                </div>
                                <div className="text-2xl font-bold text-blue-600 mb-2">
                                    {Math.floor(Math.random() * 100 + 1200).toLocaleString()} leads processed today
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Enhanced Automation Solutions Component
const Automation = () => {
    const automationRef = useRef(null);
    const [activeCard, setActiveCard] = useState(0);
    const [processCount, setProcessCount] = useState(0);

    useEffect(() => {
        // Enhanced scroll animations
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: automationRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
            }
        });

        tl.from('.automation-badge', { opacity: 0, y: 50, duration: 1 })
            .from('.automation-title', { opacity: 0, y: 30, duration: 1 }, '-=0.5')
            .from('.automation-card', { opacity: 0, y: 80, stagger: 0.2, duration: 1 }, '-=0.3')
            .from('.automation-stats', { opacity: 0, scale: 0.8, duration: 1 }, '-=0.5');

        // Auto-rotate active card
        const interval = setInterval(() => {
            setActiveCard(prev => (prev + 1) % 3);
        }, 3000);

        // Animate process counter
        gsap.to({ count: 0 }, {
            count: 1247,
            duration: 3,
            ease: 'power2.out',
            onUpdate: function () {
                setProcessCount(Math.floor(this.targets()[0].count));
            }
        });

        return () => clearInterval(interval);
    }, []);

    const automationSolutions = [
        {
            title: 'Smart Workflow Automation',
            desc: 'Transform your business with AI that learns your patterns and automates complex workflows. From email sequences to data processing, our intelligent automation handles it all.',
            icon: '⚙️',
            features: ['Email Automation', 'Data Processing', 'Task Scheduling', 'Document Generation', 'API Integrations'],
            savings: '80% time saved',
            color: 'blue',
            stats: { processed: '50K+', accuracy: '99.7%', speed: '10x faster' }
        },
        {
            title: 'AI Lead Qualification',
            desc: 'Never miss a hot lead again. Our AI analyzes behavior, engagement, and demographics to score and route leads automatically to your best sales reps.',
            icon: '🎯',
            features: ['Lead Scoring', 'Auto-Routing', 'Behavioral Analysis', 'Predictive Modeling', 'Real-time Alerts'],
            savings: '300% more qualified leads',
            color: 'green',
            stats: { qualified: '15K+', conversion: '47%', response: '2.3x faster' }
        },
        {
            title: 'Intelligent CRM Management',
            desc: 'Keep your CRM pristine with AI-powered data enrichment, duplicate detection, and automated updates. Your sales team will thank you.',
            icon: '📊',
            features: ['Data Enrichment', 'Pipeline Management', 'Contact Updates', 'Duplicate Detection', 'Sales Forecasting'],
            savings: '90% data accuracy',
            color: 'purple',
            stats: { contacts: '100K+', accuracy: '94%', time: '5hrs saved/week' }
        }
    ];

    return (
        <section id="automation" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-20" style={{ animation: 'float-up-down 12s ease-in-out infinite' }}></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-200 rounded-full opacity-25 animate-bounce"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8" ref={automationRef}>
                    <div className="automation-badge inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-6 py-3 rounded-full text-sm font-bold mb-6 mega-glow border border-blue-200">
                        🤖 AI Automation Solutions - Processing {processCount.toLocaleString()} tasks today
                    </div>
                    <h2 className="automation-title text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
                        Automate Everything with{' '}
                        <span className="text-shimmer">Intelligent AI</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        🚀 <strong>Save 40+ hours per week</strong> with AI that works 24/7<br />
                        ⚡ <strong>Increase efficiency by 300%</strong> with smart automation<br />
                        🎯 <strong>Reduce errors by 95%</strong> with intelligent workflows
                    </p>
                </div>

                {/* Professional Carousel Section */}
                <div className="mb-4">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Automation in Action</h3>
                        <p className="text-gray-600">Real-time processes running 24/7</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-5 mb-8">
                    {automationSolutions.map((solution, index) => (
                        <div
                            key={index}
                            className={`automation-card hover-card bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden ${activeCard === index ? 'mega-glow' : ''
                                }`}
                            onMouseEnter={() => setActiveCard(index)}
                        >
                            {/* Card glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${solution.color === 'blue' ? 'from-blue-500/5 to-blue-600/5' :
                                solution.color === 'green' ? 'from-green-500/5 to-emerald-600/5' :
                                    'from-purple-500/5 to-violet-600/5'
                                } opacity-0 transition-opacity duration-500 ${activeCard === index ? 'opacity-100' : ''}`}></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`text-6xl animate-bounce`}>{solution.icon}</div>
                                    <div className={`text-${solution.color}-500 text-sm bg-${solution.color}-50 px-4 py-2 rounded-full font-bold border border-${solution.color}-200`}>
                                        {solution.savings}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                                    {solution.title}
                                </h3>

                                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    {solution.desc}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <svg className={`w-5 h-5 text-${solution.color}-500 mr-3`} fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                                    {Object.entries(solution.stats).map(([key, value]) => (
                                        <div key={key} className="text-center">
                                            <div className={`text-lg font-bold text-${solution.color}-600`}>{value}</div>
                                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                                        </div>
                                    ))}
                                </div>

                                <a href="https://calendly.com/aakashmishra2050880/ai-automation-call" target="_blank" rel="noopener noreferrer" className="w-full btn-primary text-lg py-4 flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                                    </svg>
                                    Start Automation
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trusted by section - reduced spacing */}
                <div className="text-center py-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Trusted by <span className="text-blue-500">500+</span> Growing Businesses
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            From startups to enterprises, companies worldwide rely on GameNeXT to automate their workflows and scale their operations.
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                                <span className="text-gray-700 font-semibold">TechCorp</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                                <span className="text-gray-700 font-semibold">InnovateLabs</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                                <span className="text-gray-700 font-semibold">ScaleUp Inc</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                                <span className="text-gray-700 font-semibold">GrowthCo</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                                <span className="text-gray-700 font-semibold">FutureTech</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced stats section with better spacing */}
                <div className="automation-stats bg-white rounded-3xl p-12 shadow-2xl mega-glow">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-blue-200">
                            📊 Live Performance Dashboard
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Automation in Action</h3>
                        <p className="text-xl text-gray-600">Real-time performance across all our AI systems</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-1">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animated-gradient">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">2.4M+</div>
                            <div className="text-gray-600">Tasks Automated</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animated-gradient">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animated-gradient">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l-2 7h6l-2-7zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">847hrs</div>
                            <div className="text-gray-600">Time Saved Daily</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animated-gradient">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                            <div className="text-gray-600">Always Running</div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <a href="https://calendly.com/aakashmishra2050880/ai-automation-call" target="_blank" rel="noopener noreferrer" className="btn-primary text-2xl px-12 py-6 text-glow inline-flex items-center">
                        <svg className="w-6 h-6 mr-3 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                        </svg>
                        Start Automating Everything Today
                    </a>
                    <p className="text-gray-600 mt-4">⚡ Setup in 5 minutes • 🎯 No coding required • 🚀 Results in 24 hours</p>
                </div>
            </div>
        </section>
    );
};

// Enhanced Lead Generation Component
const LeadGeneration = () => {
    const leadsRef = useRef(null);
    const [liveStats, setLiveStats] = useState({
        leads: 1247,
        qualification: 68,
        pipeline: 47000,
        conversion: 23
    });
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        // Enhanced scroll animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: leadsRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
            }
        });

        tl.from('.leads-content', { opacity: 0, x: -100, duration: 1 })
            .from('.leads-dashboard', { opacity: 0, x: 100, duration: 1 }, '-=0.5')
            .from('.strategy-item', { opacity: 0, y: 50, stagger: 0.2, duration: 1 }, '-=0.3');

        // Live updating stats
        const interval = setInterval(() => {
            setLiveStats(prev => ({
                leads: prev.leads + Math.floor(Math.random() * 3),
                qualification: Math.min(99, prev.qualification + (Math.random() > 0.7 ? 1 : 0)),
                pipeline: prev.pipeline + Math.floor(Math.random() * 1000),
                conversion: Math.min(50, prev.conversion + (Math.random() > 0.8 ? 1 : 0))
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const leadStrategies = [
        {
            title: 'AI-Powered Hyper-Personalization',
            desc: 'Our AI analyzes 50+ data points to craft personalized messages that feel human-written. Each prospect gets a unique approach based on their behavior, industry, and preferences.',
            icon: '🎯',
            results: '400% higher response rates',
            features: ['Behavioral Analysis', 'Industry Targeting', 'Sentiment Analysis', 'A/B Testing'],
            color: 'blue'
        },
        {
            title: 'Smart Lead Magnets & Content',
            desc: 'AI-generated lead magnets, whitepapers, and content that your ideal customers can\'t resist. Automatically optimized based on what converts best in your industry.',
            icon: '🧲',
            results: '250% more lead captures',
            features: ['Content Generation', 'Landing Pages', 'Form Optimization', 'Exit Intent'],
            color: 'green'
        },
        {
            title: 'Predictive Lead Scoring 2.0',
            desc: 'Machine learning algorithms that predict which leads will convert before they even know it themselves. Get ahead of your competition with future-focused insights.',
            icon: '🔥',
            results: '60% faster conversions',
            features: ['Predictive Analytics', 'Behavioral Scoring', 'Intent Signals', 'Real-time Updates'],
            color: 'purple'
        }
    ];

    const handleGenerateLeads = () => {
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 3000);
    };

    return (
        <section id="leads" className="py-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20" style={{ animation: 'float-up-down 15s ease-in-out infinite' }}></div>
                <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 animate-bounce"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div className="leads-content" ref={leadsRef}>
                        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-6 py-3 rounded-full text-sm font-bold mb-8 mega-glow border border-blue-200">
                            🎯 Lead Generation Engine - {liveStats.leads.toLocaleString()} leads generated this month
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
                            Generate More{' '}
                            <span className="text-shimmer">Qualified Leads</span>{' '}
                            with AI
                        </h2>

                        <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
                            🚀 <strong>10x your lead generation</strong> with AI that never sleeps<br />
                            🎯 <strong>Qualify leads automatically</strong> while you focus on closing<br />
                            💰 <strong>Increase pipeline value by 300%</strong> with smarter targeting
                        </p>

                        <div className="space-y-8 mb-12">
                            {leadStrategies.map((strategy, index) => (
                                <div key={index} className={`strategy-item flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover-card`}>
                                    <div className={`w-16 h-16 bg-gradient-to-r ${strategy.color === 'blue' ? 'from-blue-500 to-blue-600' :
                                        strategy.color === 'green' ? 'from-green-500 to-emerald-600' :
                                            'from-purple-500 to-violet-600'
                                        } rounded-xl flex items-center justify-center flex-shrink-0 animated-gradient`}>
                                        <span className="text-2xl">{strategy.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{strategy.desc}</p>
                                        <div className={`text-${strategy.color}-500 font-bold text-lg mb-4`}>{strategy.results}</div>
                                        <div className="flex flex-wrap gap-2">
                                            {strategy.features.map((feature, idx) => (
                                                <span key={idx} className={`text-xs bg-${strategy.color}-50 text-${strategy.color}-600 px-3 py-1 rounded-full border border-${strategy.color}-200`}>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="leads-dashboard relative">
                        <div className="bg-white rounded-3xl p-6 shadow-2xl mega-glow">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Lead Generation Dashboard</h3>
                                <p className="text-gray-600 text-sm">Real-time performance metrics</p>
                                <div className="flex items-center justify-center space-x-2 mt-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-gray-500">Live Data</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center hover-card">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">{liveStats.leads.toLocaleString()}</div>
                                    <div className="text-xs text-gray-600 font-medium">Leads This Month</div>
                                    <div className="text-xs text-green-600 mt-1">↗ +{Math.floor(Math.random() * 20 + 10)}%</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 text-center hover-card">
                                    <div className="text-2xl font-bold text-green-600 mb-1">{liveStats.qualification}%</div>
                                    <div className="text-xs text-gray-600 font-medium">Qualification Rate</div>
                                    <div className="text-xs text-green-600 mt-1">↗ +{Math.floor(Math.random() * 15 + 5)}%</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-4 text-center hover-card">
                                    <div className="text-2xl font-bold text-purple-600 mb-1">${(liveStats.pipeline / 1000).toFixed(0)}K</div>
                                    <div className="text-xs text-gray-600 font-medium">Pipeline Value</div>
                                    <div className="text-xs text-green-600 mt-1">↗ +{Math.floor(Math.random() * 25 + 15)}%</div>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-4 text-center hover-card">
                                    <div className="text-2xl font-bold text-orange-600 mb-1">{liveStats.conversion}%</div>
                                    <div className="text-xs text-gray-600 font-medium">Conversion Rate</div>
                                    <div className="text-xs text-green-600 mt-1">↗ +{Math.floor(Math.random() * 10 + 3)}%</div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-bold text-gray-700">AI Optimization Engine</span>
                                    <span className="text-sm text-green-600 font-bold">+{Math.floor(Math.random() * 30 + 20)}% this week</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full animate-pulse" style={{ width: `${Math.floor(Math.random() * 20 + 75)}%` }}></div>
                                </div>
                                <div className="text-sm text-gray-600">Learning from {Math.floor(Math.random() * 1000 + 5000).toLocaleString()} data points</div>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">System Status: Generating leads now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Button Section */}
                <div className="mt-8 text-center">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <a
                            href="https://calendly.com/aakashmishra2050880/ai-automation-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn-primary text-xl px-12 py-6 w-full flex items-center justify-center ${isGenerating ? 'animate-pulse' : ''}`}
                            onClick={handleGenerateLeads}
                        >
                            <svg className={`w-6 h-6 mr-3 ${isGenerating ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                            </svg>
                            {isGenerating ? 'Generating Leads...' : 'Start Generating Leads Now'}
                        </a>
                        <p className="text-center text-gray-600 text-lg">⚡ Setup in 2 minutes • 🎯 First leads in 24 hours • 🚀 No credit card required</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Technology Stack Component
const Technology = () => {
    const techRef = useRef(null);
    useEffect(() => {
        gsap.from(techRef.current.children, {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: techRef.current, start: 'top 80%' }
        });
    }, []);

    const techStack = [
        { name: 'GPT-4 & Claude', category: 'Advanced AI Models', icon: '🧠', desc: 'Latest language models for intelligent automation' },
        { name: 'TensorFlow & PyTorch', category: 'Machine Learning', icon: '⚡', desc: 'Deep learning frameworks for predictive analytics' },
        { name: 'Python & Node.js', category: 'Backend Systems', icon: '🔧', desc: 'Robust server-side processing and APIs' },
        { name: 'React & Next.js', category: 'Modern Frontend', icon: '⚛️', desc: 'Responsive user interfaces and dashboards' },
        { name: 'AWS & Azure', category: 'Cloud Infrastructure', icon: '☁️', desc: 'Scalable cloud computing and storage' },
        { name: 'PostgreSQL & Redis', category: 'Data Management', icon: '🗄️', desc: 'High-performance databases and caching' },
        { name: 'Docker & Kubernetes', category: 'DevOps', icon: '🐳', desc: 'Containerized deployment and orchestration' },
        { name: 'Stripe & PayPal', category: 'Payment Processing', icon: '💳', desc: 'Secure payment gateway integrations' },
        { name: 'Zapier & Make', category: 'Integrations', icon: '🔗', desc: 'Seamless third-party app connections' }
    ];

    return (
        <section id="technology" className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        🔬 Technology Stack
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Built on <span className="text-blue-500">Cutting-Edge</span> Technology
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our AI automation platform is powered by the latest advances in artificial intelligence,
                        machine learning, and cloud computing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1" ref={techRef}>
                    {techStack.map((tech, index) => (
                        <div key={index} className="hover-card bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg text-center border border-blue-100">
                            <div className="text-5xl mb-6">{tech.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{tech.name}</h3>
                            <p className="text-blue-600 font-semibold mb-3">{tech.category}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security & Reliability</h3>
                    <div className="grid md:grid-cols-3 gap-1">
                        <div>
                            <div className="text-3xl font-bold mb-2">99.9%</div>
                            <div className="text-blue-100">Uptime Guarantee</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">SOC 2</div>
                            <div className="text-blue-100">Compliance</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <div className="text-blue-100">Support</div>
                        </div>
                    </div>
                </div>

                {/* Additional Technology Features */}
                <div className="mt-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Our Technology Leads the Industry</h3>
                        <p className="text-lg text-gray-600">Advanced features that set us apart from the competition</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-1">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover-card">
                            <div className="w-16 h-16 bg-blue-500 rounded-xl mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Self-Learning AI Models</h4>
                            <p className="text-gray-600 mb-4">Our AI continuously learns from your data to improve performance and accuracy over time.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Adaptive algorithms</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Real-time optimization</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Predictive insights</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover-card">
                            <div className="w-16 h-16 bg-green-500 rounded-xl mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Lightning-Fast Processing</h4>
                            <p className="text-gray-600 mb-4">Process millions of data points in seconds with our optimized infrastructure.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Sub-second response times</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Parallel processing</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Global CDN network</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 hover-card">
                            <div className="w-16 h-16 bg-purple-500 rounded-xl mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Bank-Level Security</h4>
                            <p className="text-gray-600 mb-4">Your data is protected with military-grade encryption and security protocols.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>256-bit encryption</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>GDPR compliant</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Regular security audits</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover-card">
                            <div className="w-16 h-16 bg-orange-500 rounded-xl mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integrations</h4>
                            <p className="text-gray-600 mb-4">Connect with 500+ tools and platforms through our robust API ecosystem.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>REST & GraphQL APIs</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Webhook support</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Custom connectors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Results Component
const Results = () => {
    const resultsRef = useRef(null);
    const [counters, setCounters] = useState([0, 0, 0, 0]);

    useEffect(() => {
        gsap.from(resultsRef.current.children, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: resultsRef.current,
                start: 'top 80%',
                onEnter: () => {
                    const targets = [50000, 98, 500, 24];
                    targets.forEach((target, index) => {
                        gsap.to({}, {
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: function () {
                                const progress = this.progress();
                                setCounters(prev => {
                                    const newCounters = [...prev];
                                    newCounters[index] = Math.floor(target * progress);
                                    return newCounters;
                                });
                            }
                        });
                    });
                }
            }
        });
    }, []);

    const metrics = [
        { value: counters[0], suffix: '+', label: 'Leads Generated', desc: 'High-quality leads delivered to our clients' },
        { value: counters[1], suffix: '%', label: 'Automation Success', desc: 'Tasks automated successfully without errors' },
        { value: counters[2], suffix: '+', label: 'Active Automations', desc: 'AI workflows running across all clients' },
        { value: 24, suffix: '/7', label: 'Support Available', desc: 'Round-the-clock expert assistance' }
    ];

    return (
        <section id="results" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        📊 Proven Results
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Real Numbers, <span className="text-blue-500">Real Impact</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See the measurable results our AI automation and lead generation solutions deliver for businesses like yours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" ref={resultsRef}>
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 text-center hover-card shadow-lg">
                            <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
                                {metric.value.toLocaleString()}{metric.suffix}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{metric.label}</h3>
                            <p className="text-gray-600 text-sm">{metric.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Success Stories</h3>
                        <p className="text-gray-600">Real testimonials from businesses we've helped grow</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                "LeadBaseAI increased our lead generation by 300% in just 2 months. The AI automation is incredible!"
                            </blockquote>
                            <div className="font-semibold text-gray-900">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">CEO, TechStart Inc.</div>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                "The automation saved us 40 hours per week. Our team can now focus on high-value activities."
                            </blockquote>
                            <div className="font-semibold text-gray-900">Mike Chen</div>
                            <div className="text-sm text-gray-500">Operations Director, ScaleUp Co.</div>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💰</span>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                "ROI was immediate. We saw a 250% increase in qualified leads within the first month."
                            </blockquote>
                            <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                            <div className="text-sm text-gray-500">Marketing Manager, GrowthCorp</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Component
const Contact = () => {
    const contactRef = useRef(null);
    useEffect(() => {
        gsap.from(contactRef.current.children, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: contactRef.current, start: 'top 80%' }
        });
    }, []);

    return (
        <section id="contact" className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8" ref={contactRef}>
                        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            🚀 Ready to Get Started?
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            Transform Your Business with <span className="text-blue-500">AI Automation</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join hundreds of businesses already using LeadBaseAI to automate their workflows and generate more qualified leads.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 items-center">
                        <div className="space-y-8">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get:</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-gray-700">Free consultation & strategy session</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-gray-700">Custom AI automation setup</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-gray-700">Lead generation system implementation</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-gray-700">Ongoing optimization & support</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <a href="https://calendly.com/aakashmishra2050880/ai-automation-call" target="_blank" rel="noopener noreferrer" className="w-full btn-primary text-lg py-4 flex items-center justify-center">
                                    Schedule Free Consultation
                                </a>
                                <button className="w-full btn-outline text-lg py-4">
                                    Download Case Studies
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                            <div className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Business Email"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                                />
                                <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none">
                                    <option>What's your main goal?</option>
                                    <option>Automate workflows</option>
                                    <option>Generate more leads</option>
                                    <option>Improve efficiency</option>
                                    <option>Scale operations</option>
                                </select>
                                <textarea
                                    placeholder="Tell us about your current challenges..."
                                    rows="4"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                                ></textarea>
                                <a href="https://calendly.com/aakashmishra2050880/ai-automation-call" target="_blank" rel="noopener noreferrer" className="w-full btn-primary text-lg py-4 flex items-center justify-center">
                                    Schedule Call Instead
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => (
    <footer className="py-8 bg-gray-900 border-t border-blue-200">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white">LeadBaseAI</div>
                            <div className="text-xs text-blue-400">AI AUTOMATION & LEADS</div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Transforming businesses with intelligent AI automation and lead generation solutions.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Solutions</h4>
                    <div className="space-y-2 text-sm">
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">AI Automation</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Lead Generation</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">CRM Integration</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Analytics</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Resources</h4>
                    <div className="space-y-2 text-sm">
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Documentation</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Case Studies</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Blog</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Support</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Connect</h4>
                    <div className="space-y-2 text-sm">
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Email</a>
                        <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Schedule Call</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 LeadBaseAI. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Security</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

// Main App Component
const App = () => {
    return (
        <div className="light-gradient">
            <Nav />
            <Hero />
            <Automation />
            <LeadGeneration />
            <Technology />
            <Results />
            <Contact />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
