const CasosExito = () => {
  const pilares = [
    {
      id: 1,
      titulo: "Derecho Corporativo: Blindaje jurídico para startups y PYMES",
      descripcion: "Estructuración legal integral para empresas emergentes y pequeñas empresas, incluyendo constitución, contratos, propiedad intelectual y cumplimiento regulatorio.",
      categoria: "Derecho Corporativo",
      icono: "🏢"
    },
    {
      id: 2,
      titulo: "Resolución de Conflictos: Estrategias de negociación y litigio efectivas",
      descripcion: "Métodos alternativos de resolución de conflictos y representación en procesos judiciales para proteger sus intereses empresariales y personales.",
      categoria: "Resolución de Conflictos",
      icono: "⚖️"
    },
    {
      id: 3,
      titulo: "Derecho Minero Ambiental: Sostenibilidad y cumplimiento normativo",
      descripcion: "Asesoría integral en proyectos mineros y ambientales, gestión de licencias, permisos y relaciones con comunidades para operaciones sostenibles.",
      categoria: "Derecho Minero Ambiental",
      icono: "🌿"
    },
    {
      id: 4,
      titulo: "Legislación Aduanera: Optimización del comercio internacional",
      descripcion: "Estrategias legales para importación, exportación, zonas francas y cumplimiento aduanero que maximizan eficiencia y reducen costos operativos.",
      categoria: "Legislación Aduanera",
      icono: "🌐"
    },
    {
      id: 5,
      titulo: "Insolvencia Empresarial: Reorganización y recuperación financiera",
      descripcion: "Soluciones legales para empresas en crisis, procesos de reorganización, liquidación y protección de activos ante situaciones de insolvencia.",
      categoria: "Insolvencia Empresarial",
      icono: "📊"
    },
    {
      id: 6,
      titulo: "Derecho Inmobiliario: Desarrollo urbano y regularización de propiedades",
      descripcion: "Asesoría en proyectos inmobiliarios, compraventas, contratos de construcción y regularización de títulos de propiedad para seguridad jurídica.",
      categoria: "Derecho Inmobiliario",
      icono: "🏠"
    }
  ];

  return (
    <section id="pilares-defensa" className="py-20 bg-lexena-blanco">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-lexena-azul mb-4">
            Nuestros Pilares de Defensa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Áreas de especialización donde concentramos nuestra experiencia para brindar soluciones legales estratégicas y efectivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div 
              key={pilar.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-lexena-gris hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{pilar.icono}</div>
                  <div>
                    <span className="bg-lexena-naranja text-white text-xs font-semibold px-2 py-1 rounded">
                      {pilar.categoria}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-lexena-azul mb-3">
                  {pilar.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {pilar.descripcion}
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-lexena-blanco border border-blue-100 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold text-sm">
                    🔍 <strong>Enfoque:</strong> Soluciones personalizadas basadas en las necesidades específicas de cada cliente
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 mb-6">
            ¿Necesita asesoría en alguno de nuestros pilares de especialización?
          </p>
          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573105302619'}?text=Hola%20LexENA,%20me%20gustaría%20una%20asesoría%20en%20uno%20de%20sus%20pilares%20de%20defensa`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
          >
            Consulta Especializada
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
