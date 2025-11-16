const Footer = () => {
  return (
    <footer className="bg-lexena-azul text-lexena-blanco py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
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
              <li><a href="#casos-exito" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Casos de Éxito</a></li>
              <li><a href="#faq" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="text-lexena-gris hover:text-lexena-naranja transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-lexena-gris">
              <p>
                📞 <a href="tel:+573105302619" className="hover:text-lexena-naranja transition-colors">+57 310 530 2619</a>
              </p>
              <p>
                💬 <a 
                  href="https://wa.me/573105302619?text=Hola%20LexENA,%20me%20gustaría%20solicitar%20una%20consulta%20legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lexena-naranja transition-colors"
                >
                  WhatsApp
                </a>
              </p>
              <p>
                📍 Región de Urabá, Antioquia
              </p>
              <p className="text-sm mt-4">
                Área de servicio: Arboletes, Necoclí, Turbo, Apartadó, 
                Chigorodó, Mutatá, Dabeiba y toda Colombia
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-lexena-gris mt-8 pt-8 text-center text-lexena-gris">
          <p>&copy; {new Date().getFullYear()} LexENA Firma de Abogados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;