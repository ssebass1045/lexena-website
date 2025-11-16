const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 bg-lexena-blanco">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-lexena-azul mb-4">
            Sobre LexENA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Años de experiencia brindando soluciones legales especializadas y ahoras enfocados en potenciar y servir a la región de Urabá
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-lexena-azul mb-6">Nuestra Misión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Somos el aliado estratégico integral que impulsa el desarrollo empresarial, la inversión y la infraestructura en el Urabá antioqueño.
              Facilitamos el establecimiento y la exitosa operación de negocios en la región,
              combinando nuestra experiencia jurídica especializada con un profundo entendimiento económico, contable, aduanero e inmobiliario.,
               para capitalizar las oportunidades generadas por los nuevos puertos internacionales.
            </p>
            
            <h3 className="text-2xl font-bold text-lexena-azul mb-6">Nuestra Visión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Para el 2030, seremos la firma líder y el referente indiscutible en la prestación de servicios integrales
               (legales, financieros y técnicos) en el eje portuario de Urabá.
                Seremos reconocidos como el pilar fundamental para las operaciones de comercio internacional,
                 el desarrollo de infraestructura y la estructuración de negocios sostenibles en la región.
            </p>

            <div className="bg-lexena-azul text-lexena-blanco p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">¿Por qué elegirnos?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-lexena-naranja mr-2">✓</span>
                  <span>Especialización en las áreas legales más demandadas de Urabá</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lexena-naranja mr-2">✓</span>
                  <span>Conocimiento profundo del contexto regional y sus particularidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lexena-naranja mr-2">✓</span>
                  <span>Equipo multidisciplinario con formación complementaria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lexena-naranja mr-2">✓</span>
                  <span>Resultados comprobados en casos complejos</span>
                </li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-lexena-gris p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-lexena-azul mb-6">Nuestros Valores</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lexena-naranja p-3 rounded-lg mr-4">
                    <span className="text-lexena-blanco font-bold">1.</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-lexena-azul mb-1">Compromiso Regional: </h4>
                    <p className="text-gray-700">Creemos en el potencial de Urabá. Nuestro éxito está ligado al crecimiento sostenible de la región y sus empresas.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lexena-naranja p-3 rounded-lg mr-4">
                    <span className="text-lexena-blanco font-bold">2.</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-lexena-azul mb-1">Integridad:</h4>
                    <p className="text-gray-700">Actuamos con transparencia y ética absoluta, construyendo relaciones de confianza a largo plazo con inversionistas, empresas y las instituciones de la región.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lexena-naranja p-3 rounded-lg mr-4">
                    <span className="text-lexena-blanco font-bold">3.</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-lexena-azul mb-1">Responsabilidad:</h4>
                    <p className="text-gray-700">Asumir las consecuencias de las decisiones y cumplir con los compromisos adquiridos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lexena-naranja p-3 rounded-lg mr-4">
                    <span className="text-lexena-blanco font-bold">4.</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-lexena-azul mb-1">Innovación:</h4>
                    <p className="text-gray-700">Adaptamos nuestras estrategias a las necesidades cambiantes del mercado.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lexena-naranja p-3 rounded-lg mr-4">
                    <span className="text-lexena-blanco font-bold">5.</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-lexena-azul mb-1">Respeto:</h4>
                    <p className="text-gray-700">Trato digno y empático hacia clientes, compañeros y contrapartes.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lexena-naranja p-3 rounded-lg mr-4">
                    <span className="text-lexena-blanco font-bold">6.</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-lexena-azul mb-1">Confidencialidad: </h4>
                    <p className="text-gray-700">Proteger de manera absoluta la información de los clientes y procesos.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;