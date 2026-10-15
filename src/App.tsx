import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ==================== SVG ICONS ====================

const RingIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="36" r="16" />
    <circle cx="32" cy="36" r="12" />
    <path d="M24 24 L32 12 L40 24" strokeLinejoin="round" />
    <path d="M28 20 L32 14 L36 20" fill="currentColor" opacity="0.3" />
    <circle cx="32" cy="14" r="3" fill="currentColor" opacity="0.5" />
  </svg>
);

const NecklaceIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 12 C16 12 14 32 32 44 C50 32 48 12 48 12" />
    <path d="M20 14 C20 14 18 30 32 40 C46 30 44 14 44 14" />
    <circle cx="32" cy="44" r="4" fill="currentColor" opacity="0.4" />
    <path d="M28 44 L32 50 L36 44" fill="currentColor" opacity="0.3" />
  </svg>
);

const BraceletIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="32" cy="32" rx="20" ry="14" />
    <ellipse cx="32" cy="32" rx="16" ry="10" />
    <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="18" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="46" cy="30" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="46" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

const EarringIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="16" r="3" />
    <line x1="24" y1="19" x2="24" y2="32" />
    <circle cx="24" cy="36" r="5" fill="currentColor" opacity="0.3" />
    <path d="M20 36 L24 44 L28 36" fill="currentColor" opacity="0.2" />
    <circle cx="40" cy="16" r="3" />
    <line x1="40" y1="19" x2="40" y2="32" />
    <circle cx="40" cy="36" r="5" fill="currentColor" opacity="0.3" />
    <path d="M36 36 L40 44 L44 36" fill="currentColor" opacity="0.2" />
  </svg>
);

const WatchIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="18" y="20" width="28" height="24" rx="4" />
    <circle cx="32" cy="32" r="9" />
    <line x1="32" y1="32" x2="32" y2="26" />
    <line x1="32" y1="32" x2="37" y2="32" />
    <line x1="18" y1="28" x2="10" y2="24" />
    <line x1="18" y1="36" x2="10" y2="40" />
    <line x1="46" y1="28" x2="54" y2="24" />
    <line x1="46" y1="36" x2="54" y2="40" />
    <circle cx="32" cy="32" r="1.5" fill="currentColor" />
  </svg>
);

const BangleIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="32" cy="32" rx="22" ry="16" />
    <ellipse cx="32" cy="32" rx="18" ry="12" />
    <path d="M14 28 Q14 24 18 24" />
    <path d="M50 28 Q50 24 46 24" />
    <circle cx="32" cy="16" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="22" cy="20" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="42" cy="20" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

// ==================== COMPONENTS ====================

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-[#0b3b3b]/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/70 flex items-center justify-center">
              <span className="text-white text-sm sm:text-lg font-bold">L</span>
            </div>
            <span className="text-base sm:text-xl font-light tracking-[0.3em] text-white">LUXE</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Inicio', 'Colecciones', 'Nosotros', 'Contacto'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ color: '#0f4f4f' }}
                className="text-xs lg:text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-white p-2 -mr-2 transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg md:hidden flex flex-col items-center justify-center"
          >
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2"
              aria-label="Cerrar menú"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="flex flex-col items-center gap-8">
              {['Inicio', 'Colecciones', 'Nosotros', 'Contacto'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-10 flex gap-6">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all"
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b3b3b]/20 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-[#0b3b3b]/15 blur-[80px] sm:blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-white/5 blur-[60px] sm:blur-[80px]" />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-3 sm:mb-4"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto rounded-full border border-white/40 flex items-center justify-center floating">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-white/60 text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-2 sm:mb-3 block">
            Colección Exclusiva 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-[2.5rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-3 sm:mb-4"
        >
          <span className="text-gradient">Elegancia</span>
          <br />
          <span className="text-white/90">Atemporal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-white/50 font-light max-w-lg sm:max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed px-2"
        >
          Descubre piezas únicas creadas con maestría artesanal. Cada joya cuenta una historia 
          de lujo, pasión y dedicación incomparable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center sm:items-start mb-14 sm:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(11, 59, 59, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-[#0b3b3b] text-white text-[11px] sm:text-xs tracking-widest uppercase border border-[#0f4f4f] hover:bg-[#0f4f4f] transition-all duration-300"
          >
            Explorar Colección
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-transparent text-white text-[11px] sm:text-xs tracking-widest uppercase border border-white/40 hover:border-white transition-all duration-300"
          >
            Ver Catálogo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section id="nosotros" className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b3b3b]/10 to-black" />
      
      <div className="glow-line w-full mb-12 sm:mb-16 md:mb-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative max-w-sm mx-auto md:max-w-none"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b3b] via-[#072a2a] to-black flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto border border-white/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border border-white/30 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </motion.div>
                  <p className="mt-4 sm:mt-6 text-white/40 text-xs sm:text-sm tracking-[0.3em] uppercase">Desde 1985</p>
                </div>
              </div>
              <div className="absolute inset-0 shimmer" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 border-t border-l border-white/20" />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 border-b border-r border-white/20" />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="text-[#0f4f4f] text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-4 block">
              Bienvenidos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-5 sm:mb-6 md:mb-8 leading-tight">
              Donde el Arte se encuentra con la <span className="text-gradient">Perfección</span>
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-white/60 text-sm sm:text-base font-light leading-relaxed">
              <p>
                En <span className="text-white">Luxe Joyería</span>, cada pieza es una obra maestra 
                que trasciende el tiempo. Desde 1985, hemos dedicado nuestra pasión a crear joyas 
                que capturan la esencia de la elegancia y la sofisticación.
              </p>
              <p className="hidden sm:block">
                Nuestros artesanos combinan técnicas ancestrales con diseños contemporáneos, 
                utilizando solo los materiales más selectos: diamantes de calidad excepcional, 
                oro de 18 quilates y gemas preciosas cuidadosamente seleccionadas.
              </p>
              <p className="hidden md:block">
                Cada creación es un testimonio de nuestro compromiso con la excelencia, 
                diseñada para ser atesorada por generaciones.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-12">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl text-gradient font-light"
                >
                  40+
                </motion.span>
                <p className="text-white/40 text-xs sm:text-sm mt-1 tracking-wider">Años de experiencia</p>
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl text-gradient font-light"
                >
                  5000+
                </motion.span>
                <p className="text-white/40 text-xs sm:text-sm mt-1 tracking-wider">Piezas creadas</p>
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl text-gradient font-light"
                >
                  100%
                </motion.span>
                <p className="text-white/40 text-xs sm:text-sm mt-1 tracking-wider">Artesanal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="glow-line w-full mt-12 sm:mt-16 md:mt-20" />
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      name: 'Anillo Eternity',
      category: 'Anillos',
      price: '€2,450',
      description: 'Oro blanco 18k con diamantes',
      icon: <RingIcon />,
      image: 'https://image.qwenlm.ai/generated-images/0a35c0ae-97aa-4222-91a3-20597ea7bde9/_result.png',
    },
    {
      name: 'Collar Celestial',
      category: 'Collares',
      price: '€3,800',
      description: 'Oro rosa con zafiro azul',
      icon: <NecklaceIcon />,
      image: 'https://image.qwenlm.ai/generated-images/eb8bbc52-3480-4c09-82b5-8a3433849ea4/_result.png',
    },
    {
      name: 'Pulsera Aurora',
      category: 'Pulseras',
      price: '€1,950',
      description: 'Oro amarillo con esmeraldas',
      icon: <BraceletIcon />,
      image: 'https://image.qwenlm.ai/generated-images/78f2ae4e-a7a2-4c46-84b5-9bf2241fe3b2/_result.png',
    },
    {
      name: 'Pendientes Luna',
      category: 'Pendientes',
      price: '€1,200',
      description: 'Platino con perlas del Mar del Sur',
      icon: <EarringIcon />,
      image: 'https://image.qwenlm.ai/generated-images/0be7f091-1b38-4f83-a798-d1979847b491/_result.png',
    },
    {
      name: 'Reloj Imperial',
      category: 'Relojes',
      price: '€8,500',
      description: 'Acero y oro con diamantes',
      icon: <WatchIcon />,
      image: 'https://image.qwenlm.ai/generated-images/60137e18-62a4-4ded-8ebf-643293d8049a/_result.png',
    },
    {
      name: 'Brazalete Royale',
      category: 'Brazaletes',
      price: '€4,200',
      description: 'Oro blanco con rubíes birmanos',
      icon: <BangleIcon />,
      image: 'https://image.qwenlm.ai/generated-images/2e3f240b-a1fe-45b7-a67b-bb427b565ce5/_result.png',
    },
  ];

  return (
    <section id="colecciones" className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0b3b3b]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 md:mb-20 px-2"
        >
          <span className="text-[#0f4f4f] text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-4 block">
            Nuestras Creaciones
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-4 sm:mb-6">
            Colección <span className="text-gradient">Exclusiva</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-xl mx-auto">
            Cada pieza es única, creada con los materiales más finos y una dedicación artesanal incomparable.
          </p>
        </motion.div>

        {/* Products Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="product-card group relative bg-gradient-to-br from-[#0b3b3b]/20 to-black border border-white/10 rounded-sm overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0b3b3b]/30 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-sm text-white/80 text-[10px] sm:text-xs tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 border border-white/10">
                  {product.category}
                </div>

                {/* SVG Icon overlay on hover */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 text-white/50">
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-light text-white mb-1.5 sm:mb-2 group-hover:text-white transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm mb-3 sm:mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm sm:text-base md:text-lg font-light">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Añadir al carrito"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-sm pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 md:mt-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(11, 59, 59, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-white/30 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase hover:bg-white/5 transition-all duration-300"
          >
            Ver Toda la Colección
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="relative py-12 sm:py-14 md:py-16 border-t border-[#0b3b3b]/30">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b3b]/10 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/50 flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">L</span>
              </div>
              <span className="text-base sm:text-lg font-light tracking-[0.3em] text-white">LUXE</span>
            </div>
            <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed max-w-xs mx-auto sm:mx-0">
              Joyería artesanal de lujo. Creando piezas únicas desde 1985.
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">Colecciones</h4>
            <ul className="space-y-2">
              {['Anillos', 'Collares', 'Pulseras', 'Pendientes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">Servicios</h4>
            <ul className="space-y-2">
              {['Diseño Personalizado', 'Restauración', 'Grabado', 'Certificación'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/40 text-xs sm:text-sm">
              <li>📍 Calle Gran Vía 45, Madrid</li>
              <li>📞 +34 912 345 678</li>
              <li>✉️ info@luxejoyeria.com</li>
            </ul>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center sm:justify-start">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0b3b3b] flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-[10px] sm:text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glow-line w-full mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8" />

        <div className="text-center text-white/30 text-[10px] sm:text-xs tracking-wider">
          © 2026 Luxe Joyería. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}
