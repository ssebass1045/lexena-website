const CasosExito = () => {
  const casos = [
    {
      id: 1,
      titulo: "Recuperación Empresarial Minera",
      descripcion: "Asesoramos a una empresa minera local en proceso de insolvencia, logrando una reorganización exitosa que permitió mantener 150 empleos en la región de Apartadó.",
      resultado: "Empresa reactivada con 30% de crecimiento post-reorganización",
      categoria: "Insolvencia Empresarial",
      ubicacion: "Apartadó, Antioquia"
    },
    {
      id: 2,
      titulo: "Regularización Ambiental Agroindustrial",
      descripcion: "Gestionamos exitosamente las licencias ambientales para un proyecto agroindustrial en Turbo, superando obstáculos regulatorios complejos.",
      resultado: "Licencia ambiental obtenida en tiempo récord",
      categoria: "Derecho Minero Ambiental",
      ubicacion: "Turbo, Antioquia"
    },
    {
      id: 3,
      titulo: "Optimización Aduanera Exportadora",
      descripcion: "Implementamos estrategias legales para una empresa exportadora de banano en Necoclí, reduciendo costos aduaneros en un 25%.",
      resultado: "Ahorro anual de $180 millones en costos logísticos",
      categoria: "Legislación Aduanera",
      ubicacion: "Necoclí, Antioquia"
    },
    {
      id: 4,
      titulo: "Defensa en Delitos Económicos",
      descripcion: "Representamos exitosamente a un empresario local acusado de delitos económicos, logrando la absolución completa mediante estrategia legal especializada.",
      resultado: "Caso desestimado, reputación empresarial preservada",
      categoria: "Gestión Tributaria",
      ubicacion: "Chigorodó, Antioquia"
    },
    {
      id: 5,
      titulo: "Regularización Inmobiliaria",
      descripcion: "Asesoramos en la regularización de títulos de propiedad para un desarrollo urbano en Mutatá, resolviendo conflictos de tenencia de tierras.",
      resultado: "120 familias con títulos de propiedad regularizados",
      categoria: "Derecho Inmobiliario",
      ubicacion: "Mutatá, Antioquia"
    },
    {
      id: 6,
      titulo: "Protección Ambiental Comunitaria",
      descripcion: "Representamos a una comunidad en Arboletes en un caso de protección ambiental, logrando medidas de compensación y protección del ecosistema local.",
      resultado: "Compensación ambiental de $500 millones para la comunidad",
      categoria: "Derecho Ambiental",
      ubicacion: "Arboletes, Antioquia"
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-lexena-blanco">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-lexena-azul mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados tangibles que demuestran nuestra experiencia y compromiso con los clientes de la región de Urabá
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <div 
              key={caso.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-lexena-gris"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-lexena-naranja text-white text-xs font-semibold px-2 py-1 rounded">
                    {caso.categoria}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    {caso.ubicacion}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-lexena-azul mb-3">
                  {caso.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {caso.descripcion}
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold text-sm">
                    📈 <strong>Resultado:</strong> {caso.resultado}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 mb-6">
            ¿Tienes un caso similar? Contáctanos para una evaluación gratuita
          </p>
          <a 
            href="https://wa.me/573105302619?text=Hola%20LexENA,%20tengo%20un%20caso%20legal%20y%20me%20gustaría%20una%20asesoría"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
          >
            Consultar Mi Caso
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasosExito;