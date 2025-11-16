'use client';

import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
  {
    id: 1,
    slug: 'guia-licencias-ambientales-mineras-uraba',
    titulo: "Guía Completa: Licencias Ambientales en Proyectos Mineros de Urabá 2025",
    extracto: "Conoce los requisitos y procedimientos para obtener licencias ambientales en proyectos mineros de la región de Urabá Antioqueño.",
    fecha: "15 Enero 2025",
    categoria: "Derecho Minero Ambiental",
    lectura: "6 min lectura",
    imagen: "/blog/mineria-ambiental.jpg",
    autor: "Albeiro Camelo"
  },
  {
    id: 2,
    slug: 'nuevas-regulaciones-aduaneras-2024-exportadores-uraba',
    titulo: "Reglas Aduaneras 2025: Impacto en Exportadores de Urabá",
    extracto: "Análisis de las regulaciones aduaneras y cómo afectan a los exportadores de banano y plátano de la región.",
    fecha: "20 Enero 2025",
    categoria: "Legislación Aduanera",
    lectura: "5 min lectura",
    imagen: "/blog/aduanas-exportacion.jpg",
    autor: "Néstor Ramírez"
  },
  {
    id: 3,
    slug: 'insolvencia-empresarial-pymes-uraba-crisis',
    titulo: "Insolvencia Empresarial 2025: Nuevas Opciones para PYMES de Urabá",
    extracto: "Estrategias legales disponibles para pequeñas y medianas empresas de Urabá enfrentando dificultades financieras.",
    fecha: "8 Enero 2025",
    categoria: "Insolvencia Empresarial",
    lectura: "6 min lectura",
    imagen: "/blog/insolvencia-empresarial.jpg",
    autor: "Edwin Arcila"
  },
  {
    id: 4,
    slug: 'derecho-inmobiliario-regularizacion-propiedades-rurales-antioquia',
    titulo: "Derecho Inmobiliario 2025: Regularización de Propiedades en Zonas Rurales de Antioquia",
    extracto: "Procedimientos para regularizar títulos de propiedad en zonas rurales y los beneficios para propietarios.",
    fecha: "12 Enero 2025",
    categoria: "Derecho Inmobiliario",
    lectura: "5 min lectura",
    imagen: "/blog/derecho-inmobiliario.jpg",
    autor: "Albeiro Camelo"
  },
  {
    id: 5,
    slug: 'gestion-tributaria-eficiente-empresarios-uraba',
    titulo: "Gestión Tributaria Eficiente para Empresarios de Urabá (2025)",
    extracto: "Consejos prácticos para optimizar la gestión tributaria y cumplir con las obligaciones fiscales de manera eficiente.",
    fecha: "22 Enero 2025",
    categoria: "Gestión Tributaria",
    lectura: "4 min lectura",
    imagen: "/blog/gestion-tributaria.jpg",
    autor: "Edwin Arcila"
  },
  {
    id: 6,
    slug: 'proteccion-legal-medio-ambiente-proyectos-desarrollo',
    titulo: "Protección Legal del Medio Ambiente en Proyectos de Desarrollo",
    extracto: "Cómo balancear el desarrollo económico con la protección ambiental en proyectos de la región de Urabá.",
    fecha: "15 Diciembre 2025",
    categoria: "Derecho Ambiental",
    lectura: "7 min lectura",
    imagen: "/blog/proteccion-ambiental.jpg",
    autor: "Albeiro Camelo"
  }
];

  return (
    <section id="blog" className="py-20 bg-lexena-blanco">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-lexena-azul mb-4">
            Blog Legal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Información actualizada y consejos legales para empresas y personas de la región de Urabá
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-lexena-gris hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative bg-gray-200">
                <Image 
                  src={post.imagen}
                  alt={post.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={post.id === 1}
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold bg-lexena-naranja text-white px-2 py-1 rounded">
                    {post.categoria}
                  </span>
                  <div className="text-right text-sm text-gray-500">
                    <div>{post.fecha}</div>
                    <div>{post.lectura}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-lexena-azul mb-3 line-clamp-2">
                  {post.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.extracto}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-lexena-naranja hover:text-orange-600 font-semibold text-sm transition-colors inline-block"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
          >
            Ver Todos los Artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;