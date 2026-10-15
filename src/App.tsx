import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ==================== SVG ICONS ====================

const RingIcon = () => (
  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="36" r="16" />
    <circle cx="32" cy="36" r="12" />
    <path d="M24 24 L32 12 L40 24" strokeLinejoin="round" />
    <path d="M28 20 L32 14 L36 20" fill="currentColor" opacity="0.3" />
    <circle cx="32" cy="14" r="3" fill="currentColor" opacity="0.5" />
  </svg>
);

const NecklaceIcon = () => (
  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 12 C16 12 14 32 32 44 C50 32 48 12 48 12" />
    <path d="M20 14 C20 14 18 30 32 40 C46 30 44 14 44 14" />
    <circle cx="32" cy="44" r="4" fill="currentColor" opacity="0.4" />
    <path d="M28 44 L32 50 L36 44" fill="currentColor" opacity="0.3" />
  </svg>
);

const BraceletIcon = () => (
  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="32" cy="32" rx="20" ry="14" />
    <ellipse cx="32" cy="32" rx="16" ry="10" />
    <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="18" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="46" cy="30" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="46" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

const EarringIcon = () => (
  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
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
  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
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
  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="32" cy="32" rx="22" ry="16" />
    <ellipse cx="32" cy="32" rx="18" ry="12" />
    <path d="M14 28 Q14 24 18 24" />
    <path d="M50 28 Q50 24 46 24" />
    <circle cx="32" cy="16" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="22" cy="20" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="42" cy="20" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const DiamondIcon = () => (
  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.8" />
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-[#0b3b3b]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white/70 flex items-center justify-center">
            <span className="text-white text-lg font-bold">L</span>
          </div>
          <span className="text-xl font-light tracking-[0.3em] text-white">LUXE</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Inicio', 'Colecciones', 'Nosotros', 'Contacto'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ color: '#0f4f4f' }}
              className="text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#0b3b3b]/30"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {['Inicio', 'Colecciones', 'Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b3b3b]/20 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0b3b3b]/15 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px]" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full border border-white/40 flex items-center justify-center floating">
            <DiamondIcon />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-white/60 text-sm tracking-[0.5em] uppercase mb-4 block">
            Colección Exclusiva 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-6"
        >
          <span className="text-gradient">Elegancia</span>
          <br />
          <span className="text-white/90">Atemporal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Descubre piezas únicas creadas con maestría artesanal. Cada joya cuenta una historia 
          de lujo, pasión y dedicación incomparable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(11, 59, 59, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#0b3b3b] text-white text-sm tracking-widest uppercase border border-[#0f4f4f] hover:bg-[#0f4f4f] transition-all duration-300"
          >
            Explorar Colección
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-white text-sm tracking-widest uppercase border border-white/40 hover:border-white transition-all duration-300"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section id="nosotros" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b3b3b]/10 to-black" />
      
      <div className="glow-line w-full mb-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b3b] via-[#072a2a] to-black flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-40 h-40 mx-auto border border-white/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-28 h-28 border border-white/30 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </motion.div>
                  <p className="mt-6 text-white/40 text-sm tracking-[0.3em] uppercase">Desde 1985</p>
                </div>
              </div>
              <div className="absolute inset-0 shimmer" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/20" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/20" />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="text-[#0f4f4f] text-sm tracking-[0.4em] uppercase mb-4 block">
              Bienvenidos
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 leading-tight">
              Donde el Arte se encuentra con la <span className="text-gradient">Perfección</span>
            </h2>
            <div className="space-y-6 text-white/60 font-light leading-relaxed">
              <p>
                En <span className="text-white">Luxe Joyería</span>, cada pieza es una obra maestra 
                que trasciende el tiempo. Desde 1985, hemos dedicado nuestra pasión a crear joyas 
                que capturan la esencia de la elegancia y la sofisticación.
              </p>
              <p>
                Nuestros artesanos combinan técnicas ancestrales con diseños contemporáneos, 
                utilizando solo los materiales más selectos: diamantes de calidad excepcional, 
                oro de 18 quilates y gemas preciosas cuidadosamente seleccionadas.
              </p>
              <p>
                Cada creación es un testimonio de nuestro compromiso con la excelencia, 
                diseñada para ser atesorada por generaciones.
              </p>
            </div>

            <div className="mt-10 flex gap-12">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl text-gradient font-light"
                >
                  40+
                </motion.span>
                <p className="text-white/40 text-sm mt-1 tracking-wider">Años de experiencia</p>
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl text-gradient font-light"
                >
                  5000+
                </motion.span>
                <p className="text-white/40 text-sm mt-1 tracking-wider">Piezas creadas</p>
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl text-gradient font-light"
                >
                  100%
                </motion.span>
                <p className="text-white/40 text-sm mt-1 tracking-wider">Artesanal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="glow-line w-full mt-20" />
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
    <section id="colecciones" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0b3b3b]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#0f4f4f] text-sm tracking-[0.4em] uppercase mb-4 block">
            Nuestras Creaciones
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
            Colección <span className="text-gradient">Exclusiva</span>
          </h2>
          <p className="text-white/50 font-light max-w-xl mx-auto">
            Cada pieza es única, creada con los materiales más finos y una dedicación artesanal incomparable.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="product-card group relative bg-gradient-to-br from-[#0b3b3b]/20 to-black border border-white/10 rounded-sm overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0b3b3b]/30 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white/80 text-xs tracking-wider px-3 py-1.5 border border-white/10">
                  {product.category}
                </div>

                {/* SVG Icon overlay on hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="w-12 h-12 text-white/50">
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-white/40 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-light">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(11, 59, 59, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/30 text-white text-sm tracking-[0.3em] uppercase hover:bg-white/5 transition-all duration-300"
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
    <footer className="relative py-16 border-t border-[#0b3b3b]/30">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b3b]/10 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              <span className="text-lg font-light tracking-[0.3em] text-white">LUXE</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Joyería artesanal de lujo. Creando piezas únicas desde 1985.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm tracking-wider uppercase mb-4">Colecciones</h4>
            <ul className="space-y-2">
              {['Anillos', 'Collares', 'Pulseras', 'Pendientes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm tracking-wider uppercase mb-4">Servicios</h4>
            <ul className="space-y-2">
              {['Diseño Personalizado', 'Restauración', 'Grabado', 'Certificación'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm tracking-wider uppercase mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>📍 Calle Gran Vía 45, Madrid</li>
              <li>📞 +34 912 345 678</li>
              <li>✉️ info@luxejoyeria.com</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#0b3b3b] flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glow-line w-full mt-12 mb-8" />

        <div className="text-center text-white/30 text-xs tracking-wider">
          © 2026 Luxe Joyería. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}
