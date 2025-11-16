'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pregunta: "¿En qué municipios de Urabá prestan servicios?",
      respuesta: "Prestamos servicios en toda la región de Urabá Antioqueño, incluyendo Arboletes, Necoclí, Turbo, Apartadó, Chigorodó, Mutatá, Dabeiba y municipios aledaños. También atendemos casos a nivel nacional."
    },
    {
      pregunta: "¿Ofrecen consulta gratuita inicial?",
      respuesta: "Sí, ofrecemos una consulta inicial gratuita para evaluar tu caso y determinar la mejor estrategia legal. Puedes contactarnos por WhatsApp al +57 310 530 2619 para agendar tu consulta."
    },
    {
      pregunta: "¿Cuáles son los honorarios por los servicios?",
      respuesta: "Nuestros honorarios varían según la complejidad del caso y el servicio requerido. Trabajamos con diferentes modalidades de pago y ofrecemos planes personalizados según las necesidades de cada cliente."
    },
    {
      pregunta: "¿Qué documentación necesito para una asesoría en derecho minero ambiental?",
      respuesta: "Para asesoría minero ambiental necesitamos: documento de identidad, títulos mineros si los tiene, estudios ambientales previos, y cualquier documentación relacionada con el proyecto o propiedad."
    },
    {
      pregunta: "¿Pueden ayudarme con trámites de importación y exportación?",
      respuesta: "Sí, somos especialistas en legislación aduanera. Gestionamos trámites de importación/exportación, registro ante BanRep, canalización de inversiones y asesoría en comercio internacional."
    },
    {
      pregunta: "¿Qué tipos de casos de insolvencia empresarial manejan?",
      respuesta: "Manejamos reestructuración empresarial, liquidación voluntaria, procesos de insolvencia de persona natural no comerciante, y representación ante la Superintendencia de Sociedades."
    },
    {
      pregunta: "¿Cuánto tiempo toma un proceso de regularización de propiedad?",
      respuesta: "El tiempo varía según la complejidad del caso, pero generalmente entre 3 y 6 meses. Trabajamos de manera eficiente para agilizar todos los trámites necesarios."
    },
    {
      pregunta: "¿Atienden casos de delitos económicos y tributarios?",
      respuesta: "Sí, nuestro equipo incluye especialistas en gestión tributaria y delitos económicos. Ofrecemos defensa legal y asesoría en procesos fiscales y penales económicos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-lexena-gris">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-lexena-azul mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre nuestros servicios legales en Urabá
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-lexena-azul pr-4">
                  {faq.pregunta}
                </h3>
                <span className="text-lexena-naranja text-xl font-bold flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 mb-6">
            ¿No encontraste respuesta a tu pregunta?
          </p>
          <a 
            href="https://wa.me/573105302619?text=Hola%20LexENA,%20tengo%20una%20pregunta%20específica%20sobre%20servicios%20legales"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
          >
            Consulta Directa
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;