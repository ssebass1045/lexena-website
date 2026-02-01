const Footer = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@lexena.co';
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ;

  return (
    <footer className="bg-lexena-azul text-lexena-blanco py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LexENA</h3>
            <p className="text-lexena-gris mb-4">
              Firma de abogados especializados en derecho minero ambiental, 
              legislación aduanera e insolvencia empresarial.
            </p>
            <p className="text-lexena-gris">
              Servicios en toda la región de Urabá Antioqueño
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Servicios</a></li>
              <li><a href="#equipo" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Nuestro Equipo</a></li>
              <li><a href="#pilares-defensa" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Pilares de Defensa</a></li>
              <li><a href="#faq" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Enlaces legales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/terminos.html" 
                  className="text-lexena-gris hover:text-lexena-naranja transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a 
                  href="/politica-privacidad.html" 
                  className="text-lexena-gris hover:text-lexena-naranja transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a 
                  href="#ena" 
                  className="text-lexena-gris hover:text-lexena-naranja transition-colors"
                >
                  Asistente ENA (IA)
                </a>
              </li>
              <li>
                <a 
                  href="#alcances-objetivos" 
                  className="text-lexena-gris hover:text-lexena-naranja transition-colors"
                >
                  Alcances y Objetivos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto - Limpio y priorizado */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-lexena-gris">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452"/>
                  </svg>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20LexENA,%20me%20gustaría%20solicitar%20una%20consulta%20legal`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lexena-naranja transition-colors font-medium"
                >
                  WhatsApp Prioritario
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href={`mailto:${contactEmail}`}
                  className="hover:text-lexena-naranja transition-colors font-medium"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-lexena-naranja rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Región de Urabá, Antioquia</span>
              </div>
              <p className="text-sm mt-4 pt-4 border-t border-lexena-gris/30">
                Área de servicio: Arboletes, Necoclí, Turbo, Apartadó, 
                Chigorodó, Mutatá, Dabeiba y toda Colombia
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-lexena-gris mt-8 pt-8 text-center text-lexena-gris">
          <p>&copy; {new Date().getFullYear()} LexENA Firma de Abogados. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">
            Servicios legales modernos potenciados por IA y expertos humanos.
          </p>
          <p className="text-xs mt-2 text-lexena-gris/70">
            El asistente virtual ENA es una herramienta de orientación basada en IA y no sustituye el criterio profesional de un abogado humano.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;