'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { ShieldCheck, Gavel, Clock, MessageCircle, BookOpen, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nosotros from '@/components/Nosotros';
import CasosExito from '@/components/CasosExito';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog'
import Contacto from '@/components/Contacto';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import Image from 'next/image';

export default function Home() {
  const { trackWhatsAppClick, trackConsultationClick } = useGoogleAnalytics();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleWhatsAppClick = (location: string) => {
    trackWhatsAppClick(location, 'Hero Section');
  };

  const handleConsultationClick = (location: string, service?: string) => {
    trackConsultationClick(location, service);
  };

  return (
    <div className="min-h-screen bg-lexena-blanco">
      <Header />

    {/* Hero Section - Completamente Renovado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lexena-azul text-lexena-blanco">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg" // Necesitarás agregar esta imagen
            alt="Fondo profesional LexENA"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-lexena-azul/15"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          
          {/* Animated Radial Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lexena-naranja/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lexena-verde/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Animated Legal Motifs */}
        <motion.div
          className="absolute top-20 left-10 opacity-5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Scale className="w-32 h-32" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 opacity-5"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Gavel className="w-32 h-32" />
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Text Content */}
              <div className="text-center lg:text-left" data-aos="fade-right">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    Lex<span className="text-lexena-naranja">ENA</span>
                  </h1>
                  
                  
                  <p className="text-xl md:text-2xl mb-8 text-lexena-gris font-light [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                    Excelencia Legal en el Urabá Antioqueño
                  </p>
                  
                  
                  <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">
                    Firma de abogados especializados en <span className="text-lexena-naranja font-semibold [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]">derecho minero ambiental</span>, 
                    <span className="text-lexena-verde font-semibold [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]"> legislación aduanera</span> e 
                    <span className="text-lexena-blanco font-semibold [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]"> insolvencia empresarial</span>.
                  </p>

                  {/* Trust Metrics - Estilo Glassmorphism */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-lexena-naranja/20 to-lexena-verde/20 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-lexena-naranja mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">7+</div>
                        <div className="text-sm text-lexena-blanco [text-shadow:_0_1px_1px_rgb(0_0_0_/_60%)]">Años de Experiencia</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-lexena-verde/20 to-lexena-naranja/20 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-lexena-naranja mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">3</div>
                        <div className="text-sm text-lexena-blanco [text-shadow:_0_1px_1px_rgb(0_0_0_/_60%)]">Áreas Especializadas</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-lexena-naranja/20 to-lexena-verde/20 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-lexena-naranja mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">24/7</div>
                        <div className="text-sm text-lexena-blanco [text-shadow:_0_1px_1px_rgb(0_0_0_/_60%)]">Asistencia con IA</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-lexena-verde/20 to-lexena-naranja/20 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                        <div className="text-3xl font-bold text-lexena-naranja mb-1 [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">100+</div>
                        <div className="text-sm text-lexena-blanco [text-shadow:_0_1px_1px_rgb(0_0_0_/_60%)]">Casos Exitosos</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <motion.a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573105302619'}?text=Hola%20LexENA,%20me%20gustaría%20solicitar%20una%20consulta%20legal`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                      onClick={() => handleConsultationClick('Hero Section', 'General')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Consulta Gratuita
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-lg"
                      >
                        →
                      </motion.span>
                    </motion.a>

                    <motion.a
                      href="#servicios"
                      className="group border-2 border-lexena-blanco text-lexena-blanco hover:bg-lexena-blanco hover:text-lexena-azul font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Nuestros Servicios
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element - Professional Badge */}
              <div className="hidden lg:flex justify-center" data-aos="fade-left">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-lexena-naranja/20 to-lexena-verde/20 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                    <div className="w-64 h-64 bg-gradient-to-br from-lexena-azul to-lexena-azul-dark rounded-full flex items-center justify-center border border-white/20">
                      <div className="text-center">
                        <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-lexena-naranja" />
                        <div className="text-lexena-blanco font-bold text-lg">Confianza</div>
                        <div className="text-lexena-gris text-sm">y Profesionalismo</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-lexena-naranja text-white p-3 rounded-full shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Clock className="w-6 h-6" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-lexena-verde text-white p-3 rounded-full shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <ShieldCheck className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-lexena-gris text-sm">Desplázate para explorar</div>
          <div className="w-6 h-10 border-2 border-lexena-gris rounded-full mx-auto mt-2 flex justify-center">
            <motion.div
              className="w-1 h-3 bg-lexena-gris rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>


      {/* Servicios Section - Completely Redesigned */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-lexena-blanco">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-lexena-azul mb-4">
              Servicios Legales Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluciones legales integrales adaptadas a las necesidades específicas de su empresa o persona.
            </p>
          </div>

          {/* Área 1: Insolvencia y Reestructuración Empresarial */}
          <div className="mb-12" data-aos="fade-up">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Insolvencia: Reorganización - Liquidación</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Soluciones legales para empresas en crisis financiera y procesos de reorganización 
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Insolvencia Empresarial (Ley 1116)</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Gestión de procesos de insolvencia bajo supervisión de Superintendencia de Sociedades
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Reorganización empresarial
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Liquidación judicial
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Liquidación voluntaria
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Insolvencia de persona natural no comerciante y pequeño comerciante (Ley 2445) </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Asesoría legal para personas naturales y pequeños comerciantes
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Acuerdos estratégicos de pagos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Convalidación de acuerdos privados
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Liquidación patrimonial
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Otros Servicios</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Pregunta en qué más te podemos ayudar desde esta área
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Servicios adicionales especializados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Área 2: Legislación Aduanera y Comercio Internacional */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Tributario-Aduanero y Cambiario</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Soluciones integrales para operaciones de comercio exterior y cumplimiento aduanero
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Asesoría Aduanera</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Gestión legal especializada en operaciones de importación y exportación
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Trámites de importación/exportación
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Clasificación arancelaria
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Régimen de zonas francas
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Pago desde y hacia el exterior y canalización de divisas
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Cierre de operaciones cambiarias 
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Representación en Procesos y Respuesta a Requerimientos Aduaneros 
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Inversiones Internacionales</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Canalización y gestión de inversiones extranjeras en Colombia
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Inversión extranjera directa
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Registro ante BanRep
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Canalización de pagos internacionales
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Asesoría Contable y Tributaria</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Servicios contables y fiscales para optimización tributaria
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Planeación tributaria estratégica anual
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Elaboración y revisión de declaraciones tributarias
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Análisis de riesgos tributarios y cumplimiento fiscal
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Representación en procesos administrativos con DIAN
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Actualización y aplicación de nuevas normas tributarias
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Optimización de cargas fiscales dentro del marco legal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Área 3: Derecho Minero y Ambiental */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Derecho Minero Ambiental e Inmobiliario y Desarrollo Urbano</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Asesoría integral en proyectos mineros y ambientales, como también en el derecho inmobiliario y el desarrollo urbano con enfoque en sostenibilidad y cumplimiento normativo.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-3">Derecho minero ambienta </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Gestión integral de trámites y permisos ambientales para proyectos sostenibles
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Contratos de concesión minera
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Licencia ambiental
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Permisos de captación
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Permisos de aprovechamiento forestal
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Permiso de vertimiento
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-3">Avalúos</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Asesoría especializada en todos los aspectos de avalúos
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Corporativos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Urbanos, rurales, obras de infraestructura, construcciones especiales, semovientes, servidumbres, intangibles, daño emergente lucro cesante, recursos naturales y suelos de protección, edificaciones de conservación arqueológica y monumentos históricos, maquinaria y equipos especiales, activos, operacionales y establecimientos de comercio 
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Revisión y contestación de avalúos como prueba pericial ante el juez
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-3">Derecho Inmobiliario y desarrollo urbano</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Servicios legales especializados en desarrollo urbano y propiedad
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Estudio de títulos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      licencias de construcción, parcelación, subdivisión | contratos de arrendamientos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      desarrollo del territorio
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      conciliación extrajudicial
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Código Nacional de Seguridad y Convivencia Ciudadana ley 1801 de 2016
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12" data-aos="fade-up">
            <div className="bg-gradient-to-r from-lexena-azul to-blue-800 rounded-2xl p-8 text-lexena-blanco">
              <h3 className="text-2xl font-bold mb-4">¿Necesita asesoría legal especializada?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Nuestro equipo multidisciplinario está listo para brindarle soluciones legales efectivas y personalizadas
              </p>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573105302619'}?text=Hola%20LexENA,%20me%20gustaría%20solicitar%20una%20consulta%20legal`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
                onClick={() => handleConsultationClick('Services CTA', 'General Consultation')}
              >
                Solicitar Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Sección ENA - Después de Servicios */}
      <section id="ena" className="py-20 bg-gradient-to-br from-gray-900 to-lexena-azul text-lexena-blanco">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de Texto */}
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Presentamos a <span className="text-lexena-naranja">ENA</span>: Inteligencia Artificial al servicio de tu tranquilidad legal.
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300">
                Tu asistente jurídico disponible 24/7. ENA agiliza la consulta inicial, analiza documentos preliminares y te conecta con el especialista adecuado al instante.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-lexena-naranja rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg">Respuestas inmediatas a consultas legales básicas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-lexena-naranja rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg">Análisis preliminar de documentos legales</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-lexena-naranja rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg">Conexión directa con abogados especializados</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-lexena-naranja rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg">Disponible 24 horas, 7 días a la semana</span>
                </div>
              </div>
              <motion.a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573105302619'}?text=Hola%20LexENA,%20me%20gustaría%20interactuar%20con%20ENA%20(Asistente%20Jurídico%20Virtual)`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Interactuar con ENA ahora
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            {/* Imagen de ENA - Usando ia.jpg */}
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-lexena-naranja/20 to-lexena-azul/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-4 border-lexena-naranja/30 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src="/ia.jpg"
                      alt="ENA - Asistente Jurídico Virtual de IA"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-lexena-naranja/10 to-blue-500/10"></div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-lexena-naranja mb-2">ENA</h3>
                  <p className="text-gray-300">Asistente Jurídico Virtual</p>
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">En línea 24/7</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-lexena-naranja text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alcances y Objetivos Section - Nueva Sección */}
      <section id="alcances-objetivos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-lexena-azul mb-4">
              Alcances y Objetivos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra firma se especializa en brindar soluciones legales integrales con enfoque estratégico 
              y resultados medibles para cada área de práctica
            </p>
          </div>

          {/* Servicio 1: Insolvencia Empresarial */}
          <div className="mb-12" data-aos="fade-up">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Insolvencia Empresarial</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> Acompañar a las empresas que atraviesan crisis de liquidez para que entren de forma segura y estratégica a un proceso de insolvencia empresarial.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Reorganización Empresarial</h4>
                  <p className="text-sm text-gray-600">
                    Lograr acuerdos de pago que permitan la continuidad del negocio y el mantenimiento de los empleos.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Liquidación Judicial</h4>
                  <p className="text-sm text-gray-600">
                    Adelantar una liquidación organizada y eficiente ante la Superintendencia de Sociedades, reduciendo al máximo los riesgos personales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 2: Recuperación Persona Natural */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Recuperación de la Persona Natural Sobreendeudada</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> Guiar a personas naturales y pequeños comerciantes que ya no pueden pagar sus deudas para que accedan al régimen de insolvencia.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Detener Cobros</h4>
                  <p className="text-sm text-gray-600">
                    Detener la presión de cobros y embargos dentro del marco legal mediante el Centro de Conciliación APG+1.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Negociar Acuerdos</h4>
                  <p className="text-sm text-gray-600">
                    Negociar acuerdos de pago realistas adaptados a la capacidad económica del cliente.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Reordenar Finanzas</h4>
                  <p className="text-sm text-gray-600">
                    Reordenar la vida financiera y jurídica para volver a empezar sin cargar eternamente con la misma deuda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 3: Regularización Ambiental Agroindustrial */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Regularización Ambiental Agroindustrial</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> Acompañar a fincas, plantas de beneficio, centros de acopio y proyectos agroindustriales en la obtención y regularización de licencias.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Licencias y Permisos</h4>
                  <p className="text-sm text-gray-600">
                    Obtención y regularización de licencias y permisos ambientales para operaciones legales.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Atención a Requerimientos</h4>
                  <p className="text-sm text-gray-600">
                    Atención a requerimientos de autoridades ambientales para evitar sanciones y cierres.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 4: Optimización Aduanera */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Optimización Aduanera y de Comercio Exterior</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> Apoyar a empresas exportadoras e importadoras del Urabá en estrategias legales aduaneras y tributarias.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Estrategias Legales</h4>
                  <p className="text-sm text-gray-600">
                    Diseñar estrategias legales aduaneras y tributarias personalizadas para cada empresa.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Reducción de Costos</h4>
                  <p className="text-sm text-gray-600">
                    Reducir costos innecesarios por errores en la operación, sanciones o mala planificación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 5: Defensa en Delitos Económicos */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Defensa en Delitos Económicos</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> Prevenir contingencias penales y reputacionales en la empresa mediante un enfoque integral de cumplimiento, control interno y gobierno corporativo, reduciendo el riesgo de investigaciones y sanciones.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Mapa de Riesgos y Controles</h4>
                  <p className="text-sm text-gray-600">
                    Identificar focos de riesgo (tributario, cambiario, contratación, proveedores, fraude interno, corrupción, reportes) y diseñar controles, políticas y responsables para mitigarlos.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Cumplimiento y Evidencia de Buena Fe</h4>
                  <p className="text-sm text-gray-600">
                    Implementar protocolos, capacitaciones y trazabilidad documental para demostrar diligencia debida, prevenir fallas y fortalecer la posición de la empresa ante auditorías o requerimientos.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Continuidad del Negocio y Respuesta Temprana</h4>
                  <p className="text-sm text-gray-600">
                    Crear rutas de actuación ante alertas (requerimientos, hallazgos, denuncias internas) con investigaciones internas básicas, planes correctivos y acompañamiento estratégico para contener el riesgo antes de que escale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicio 6: Regularización Inmobiliaria */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="500">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Regularización y Estructuración Inmobiliaria</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> acompañar jurídicamente tanto a personas naturales y jurídicas en el desarrollo inmobiliario, ofreciendo certeza sobre el debido cumplimientos de las normas vigentes de los planes de ordenamiento con todas sus determinantes.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Limpieza Jurídica</h4>
                  <p className="text-sm text-gray-600">
                    Limpieza jurídica y regularización de títulos de propiedad para garantizar seguridad legal.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Solución de Conflictos</h4>
                  <p className="text-sm text-gray-600">
                    Solución de conflictos de tenencia y linderos mediante mecanismos legales adecuados.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Estructuración Legal</h4>
                  <p className="text-sm text-gray-600">
                    Estructuración legal de proyectos de vivienda, comercio o industria para viabilidad jurídica.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Servicio 7: Protección Ambiental Comunitaria */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lexena-azul">Protección Ambiental Comunitaria</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Objetivo:</strong> Asesorar y representar a comunidades, juntas de acción comunal y colectivos ciudadanos en casos de afectación ambiental.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-800 mb-2">Defensa Ambiental</h4>
                  <p className="text-sm text-gray-600">
                    Casos de afectación ambiental por actividades mineras, industriales o de construcción.
                  </p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-800 mb-2">Mecanismos de Protección</h4>
                  <p className="text-sm text-gray-600">
                    Acciones populares, tutelas, medidas cautelares y otros mecanismos de protección legal.
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-teal-50 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Resultados Esperados</h4>
                <p className="text-sm text-gray-600">
                  Buscar medidas de compensación, restauración y protección real del ecosistema local, 
                  sin desconocer la importancia del desarrollo económico de la región.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section para Alcances y Objetivos */}
          <div className="text-center mt-12" data-aos="fade-up">
            <div className="bg-gradient-to-r from-lexena-azul to-blue-800 rounded-2xl p-8 text-lexena-blanco">
              <h3 className="text-2xl font-bold mb-4">¿Necesita asesoría en alguno de estos servicios especializados?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Nuestro equipo de abogados especializados está listo para brindarle soluciones legales efectivas 
                y personalizadas para cada uno de estos alcances y objetivos
              </p>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573105302619'}?text=Hola%20LexENA,%20me%20gustaría%20solicitar%20una%20consulta%20especializada`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
                onClick={() => handleConsultationClick('Alcances CTA', 'Specialized Consultation')}
              >
                Consulta Especializada
              </a>
            </div>
          </div>
        </div>
      </section>
          


      {/* Nosotros Section */}
      <Nosotros />

      {/* Equipo Section - Grid tradicional con ENA */}
      <section id="equipo" className="py-20 bg-lexena-gris">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-lexena-azul mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales multidisciplinarios con amplia experiencia en el sector legal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Abogado 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300" data-aos="fade-up">
              <div className="h-48 relative">
                <Image
                  src="/team/nestor-ramirez.jpg"
                  alt="Néstor Ramírez - Abogado Contador"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-lexena-azul mb-2">Néstor Ramírez - Abogado & Contador</h3>
                <p className="text-gray-600 mb-4">
                  Especialista en legislación aduanera, asesorías contables y tributarias.
                </p>
                <div className="text-sm text-gray-500">
                  <p><strong>Pregrados:</strong> Contador, Abogado</p>
                  <p><strong>Posgrados:</strong> Legislación aduanera</p>
                </div>
              </div>
            </div>

            {/* Abogado 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 relative">
                <Image 
                  src="/team/albeiro-camelo.jpg"
                  alt="Alveiro Camelo - Abogado Constructor Civil"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-lexena-azul mb-2">Albeiro Camelo - Abogado & Constructor Civil</h3>
                <p className="text-gray-600 mb-4">
                  Experto en derecho minero ambiental, inmobiliario y desarrollo urbano.
                </p>
                <div className="text-sm text-gray-500">
                  <p><strong>Pregrados:</strong> Construcciones Civiles, Abogado</p>
                  <p><strong>Posgrados:</strong> Legislación minera y ambiental</p>
                </div>
              </div>
            </div>

            {/* Abogado 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 relative">
                <Image 
                  src="/team/edwin-arcila.jpg"
                  alt="Edwin Arcila - Abogado Economista"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-lexena-azul mb-2">Edwin Arcila - Abogado & Economista</h3>
                <p className="text-gray-600 mb-4">
                  Especialista en gestión tributaria, delitos económicos e insolvencia empresarial.
                </p>
                <div className="text-sm text-gray-500">
                  <p><strong>Pregrados:</strong> Economista, Abogado</p>
                  <p><strong>Posgrados:</strong> Gestión tributaria</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de ENA - Asistente Jurídico Virtual (Simplificada) */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden border-2 border-lexena-naranja/30 hover:scale-105 hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="h-48 relative">
                <Image
                  src="/ia.jpg"
                  alt="ENA - Asistente Jurídico Virtual de IA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-lexena-naranja mb-2">ENA - Asistente Jurídico Virtual</h3>
                <p className="text-gray-300 mb-4">
                  Inteligencia Artificial especializada en consultas legales iniciales, análisis de documentos y conexión con abogados especializados.
                </p>
                <div className="text-sm text-gray-400">
                  <p><strong>Disponibilidad:</strong> 24 horas, 7 días a la semana</p>
                  <p><strong>Especialidad:</strong> Consultas iniciales y análisis preliminar</p>
                  <p><strong>Tecnología:</strong> IA avanzada con aprendizaje continuo</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lexena-naranja rounded-full mr-2"></div>
                    <span className="text-xs text-gray-400">Borde brillante identificativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <CasosExito />

      {/* FAQ */}
      <FAQ />

      {/* Blog */}
      <Blog />

      {/* Contacto */}
      <Contacto />
      
      <Footer />
      
      {/* WhatsApp Floating Button con efecto GeshTech */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573105302619'}?text=Hola%20LexENA,%20me%20gustaría%20solicitar%20una%20consulta%20legal`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center w-16 h-16"
          onClick={() => handleWhatsAppClick('Floating Button')}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452"/>
          </svg>
        </a>
      </div>
    </div>
  );
}