import Link from 'next/link';
import { notFound } from 'next/navigation';

// Datos de los artículos del blog
const blogPosts = [
  {
    id: 1,
    slug: 'guia-licencias-ambientales-mineras-uraba',
    titulo: "Guía Completa: Licencias Ambientales en Proyectos Mineros de Urabá 2025",
    extracto: "Requisitos y pasos actualizados para licencias ambientales en proyectos mineros de Urabá Antioqueño.",
    contenido: `
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Introducción a las Licencias Ambientales en Urabá 2025</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La base regulatoria para licencias ambientales en Colombia está en el <strong>Decreto 1076 de 2015</strong> (Decreto Único del sector ambiente), 
        que se mantiene vigente y actualizado a 2024. Para ciertos sectores se han expedido decretos específicos como el <strong>Decreto 510 de 2024</strong> 
        (ajustes para infraestructura de transporte). Además, la <strong>Ley 2169 de 2021</strong> (Ley de Acción Climática) introduce criterios de carbono 
        neutralidad y resiliencia climática que inciden en la evaluación de proyectos.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">¿Qué es una Licencia Ambiental en 2025?</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Es la autorización que emite la autoridad competente para ejecutar un proyecto, obra o actividad con potencial impacto ambiental. 
        Su alcance integra permisos de agua, vertimientos, emisiones, aprovechamiento forestal, entre otros, de acuerdo con el 
        <strong>Decreto 1076 de 2015</strong>.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Proyectos que requieren Licencia Ambiental en Urabá</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Explotación y beneficio minero cuando así lo determinen los listados del Decreto 1076 y normas complementarias.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Plantas de beneficio y transformación de minerales con potencial impacto significativo.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Proyectos en áreas de especial importancia ecológica o que afecten ecosistemas estratégicos (competencia ANLA en ciertos casos).</li>
      </ul>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Documentación requerida (enfoque 2025)</h2>
      <ol class="text-gray-700 mb-6 space-y-2 list-decimal list-inside">
        <li>Estudio de Impacto Ambiental (EIA) conforme a términos de referencia aplicables.</li>
        <li>Plan de Manejo Ambiental (PMA) incorporando componentes de cambio climático y gestión del riesgo.</li>
        <li>Planes de contingencia y de cierre/abandono, con respaldo financiero cuando aplique.</li>
        <li>Soportes jurídicos del proyecto (título minero cuando aplique) y certificados de existencia/representación.</li>
      </ol>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Autoridades Ambientales en Urabá</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>CORPOURABÁ</strong>: autoridad regional para la mayoría de proyectos locales.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>ANLA</strong>: proyectos de gran envergadura/impacto o de competencia nacional.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>MADS</strong>: define la política ambiental y expide lineamientos.</li>
      </ul>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Plazos y costos (referenciales)</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Los tiempos típicos de evaluación pueden moverse entre varios meses según complejidad, calidad del EIA, visitas y requerimientos. 
        Los costos técnicos y de trámites dependen del alcance del estudio y de los permisos integrados.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Casos y buenas prácticas</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Diagnósticos de línea base robustos y participación temprana de comunidades.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Gestión temprana de permisos sectoriales (aguas, emisiones, forestal) integrados a la licencia.</li>
      </ul>

      <div class="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
        <h3 class="text-xl font-bold text-lexena-azul mb-3">¿Necesita Asesoría en Licencias Ambientales?</h3>
        <p class="text-gray-700 mb-4">Contáctenos para una consulta sobre su proyecto minero en Urabá.</p>
        <a href="https://wa.me/573105302619?text=Hola%20LexENA,%20necesito%20asesor%C3%ADa%20en%20licencias%20ambientales%20para%20mi%20proyecto%20minero" target="_blank" rel="noopener noreferrer"
           class="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-block">
          Consulta Gratuita
        </a>
      </div>
    `,
    fecha: "15 enero 2025",
    categoria: "Derecho Minero Ambiental",
    lectura: "6 min lectura",
    autor: "Albeiro Camelo",
    keywords: ["licencias ambientales", "minería Urabá", "ANLA", "CORPOURABÁ", "Decreto 1076 de 2015", "2025"]
  },
  {
    id: 2,
    slug: 'nuevas-regulaciones-aduaneras-2024-exportadores-uraba',
    titulo: "Nuevas Regulaciones Aduaneras 2025: Impacto en Exportadores de Urabá",
    extracto: "Análisis de las regulaciones aduaneras 2025 y cómo afectan a los exportadores de banano y plátano de la región.",
    contenido: `
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Cambios Normativos en el Comercio Exterior 2025</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">El año 2025 trae importantes modificaciones en la legislación aduanera que afectan directamente a los exportadores de la región de Urabá, especialmente del sector bananero y agroindustrial. La <strong>Resolución 0256 de 2025</strong> de la DIAN establece nuevos procedimientos.</p>
      
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Principales Cambios en la Resolución 0256 de 2025</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">La DIAN ha implementado nuevas disposiciones que impactan:</p>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Procedimientos de exportación totalmente digitalizados</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Nuevos requisitos documentales electrónicos</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Modificaciones en el registro de exportadores ante VUCE</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Cambios en los plazos de declaración y pago</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Impacto en Exportadores de Banano de Urabá</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">La región de Urabá representa el 48% de las exportaciones bananeras de Colombia. Las nuevas regulaciones afectan:</p>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Certificaciones fitosanitarias digitales obligatorias</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Documentación de origen electrónica</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Procesos en puertos de Turbo y Necoclí automatizados</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Trámites ante el ICA mediante ventanilla única</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Oportunidades para Exportadores 2025</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Las nuevas normas también crean oportunidades:</p>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Procesos digitalizados más ágiles (reducción del 40% en tiempos)</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Beneficios para pequeños exportadores en el RUE</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Facilidades para productos no tradicionales</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Simplificación de trámites mediante blockchain</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Recomendaciones para Exportadores 2025</h2>
      <ol class="text-gray-700 mb-6 space-y-2 list-decimal list-inside">
        <li>Actualizar registros ante la DIAN y el RUE antes del 30 de junio 2025</li>
        <li>Capacitar al personal en nuevas normativas digitales</li>
        <li>Implementar sistemas de documentación digital certificada</li>
        <li>Contar con asesoría legal especializada en comercio exterior</li>
      </ol>
      
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Asesoría Legal Especializada</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">En LexENA ofrecemos servicios integrales en legislación aduanera para exportadores de Urabá, incluyendo:</p>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Actualización de registros en VUCE</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Gestión documental electrónica</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Representación ante autoridades aduaneras</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Capacitación empresarial en normativa 2025</li>
      </ul>
      
      <div class="bg-green-50 p-6 rounded-lg mt-8 border border-green-200">
        <h3 class="text-xl font-bold text-lexena-azul mb-3">¿Es Exportador en Urabá?</h3>
        <p class="text-gray-700 mb-4">Le ayudamos a adaptarse a las nuevas regulaciones aduaneras 2025.</p>
        <a href="https://wa.me/573105302619?text=Hola%20LexENA,%20soy%20exportador%20en%20Urabá%20y%20necesito%20asesoría%20sobre%20las%20nuevas%20regulaciones%20aduaneras%202025" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-block">
          Consultar Ahora
        </a>
      </div>
    `,
    fecha: "10 Enero 2025",
    categoria: "Legislación Aduanera",
    lectura: "5 min lectura",
    autor: "Néstor Ramírez",
    keywords: ["regulaciones aduaneras", "exportación Urabá", "banano Colombia", "DIAN", "comercio exterior", "2025"]
  },
  {
    id: 3,
    slug: 'insolvencia-empresarial-pymes-uraba-crisis',
    titulo: "Insolvencia Empresarial 2025: Nuevas Opciones para PYMES de Urabá",
    extracto: "Herramientas actuales para pequeñas y medianas empresas en reorganización y liquidación.",
    contenido: `
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Marco vigente: Ley 2437 de 2024</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        En diciembre de 2024 se expidió la <strong>Ley 2437 de 2024</strong>, que incorporó de forma permanente varias herramientas 
        de los Decretos Legislativos 560 y 772 de 2020 al régimen de insolvencia (complementando la Ley 1116 de 2006). 
        En 2025, la Superintendencia de Sociedades ha emitido orientaciones sobre su aplicación práctica.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Mecanismos clave para PYMES</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>Reorganización con trámites más ágiles</strong> y herramientas tecnológicas (audiencias y gestión electrónica).</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>Medidas de protección</strong> que armonizan embargos y medidas cautelares con la continuidad de la empresa.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>Liquidación con martillo electrónico</strong> como mecanismo para vender activos cuando no prosperan ventas directas.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>Reconocimiento preferente de acreencias laborales</strong> siguiendo la prelación legal.</li>
      </ul>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Por qué actuar a tiempo</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La solicitud temprana evita deterioros irreversibles y mejora la capacidad de negociar con acreedores, suspender ejecuciones y 
        conservar la operación mientras se estructura un acuerdo viable.
      </p>

      <div class="bg-red-50 p-6 rounded-lg mt-8 border border-red-200">
        <h3 class="text-xl font-bold text-lexena-azul mb-3">Su PYME en Urabá tiene futuro</h3>
        <p class="text-gray-700 mb-4">Un proceso de insolvencia bien gestionado puede reactivar su empresa.</p>
        <a href="https://wa.me/573105302619?text=Hola%20LexENA,%20necesito%20asesor%C3%ADa%20sobre%20insolvencia%20empresarial%20para%20mi%20PYME%20en%20Urab%C3%A1" target="_blank" rel="noopener noreferrer"
           class="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-block">
          Solicitar Asesoría
        </a>
      </div>
    `,
    fecha: "8 enero 2025",
    categoria: "Insolvencia Empresarial",
    lectura: "6 min lectura",
    autor: "Edwin Arcila",
    keywords: ["insolvencia PYMES", "Ley 2437 de 2024", "reorganización", "Superintendencia de Sociedades", "2025"]
  },
  {
    id: 4,
    slug: 'derecho-inmobiliario-regularizacion-propiedades-rurales-antioquia',
    titulo: "Derecho Inmobiliario 2025: Regularización de Propiedades en Zonas Rurales de Antioquia",
    extracto: "Procedimientos actuales de formalización de la propiedad rural y beneficios en 2025.",
    contenido: `
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Formalización predial prioritaria</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La <strong>Agencia Nacional de Tierras (ANT)</strong> mantiene en 2025 planes y metas para formalización masiva (barridos prediales) y 
        adjudicación, articulados con el PND 2022–2026. La ANT publicó su Plan de Acción 2025 y ha reportado avances sustantivos en 2024.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">¿Quién puede acceder?</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Posesiones materiales prolongadas (según requisitos técnicos-jurídicos).</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Casos de falsa tradición y títulos sin registrar, con saneamiento y registro ante la ORIP.</li>
      </ul>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Modalidades con la ANT</h2>
      <ol class="text-gray-700 mb-6 space-y-2 list-decimal list-inside">
        <li><strong>Por demanda</strong>: solicitud directa del interesado.</li>
        <li><strong>Barrido predial</strong>: intervención masiva en zonas priorizadas del departamento.</li>
        <li><strong>Proyectos especiales</strong>: con municipios/entidades para grupos de predios.</li>
      </ol>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Recomendaciones y alertas</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Verifique siempre la gratuidad de trámites ante la ANT y evite intermediarios no autorizados.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span>Consolide pruebas de ocupación y tradición; gestione avalúos y levantamientos topográficos confiables.</li>
      </ul>

      <div class="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
        <h3 class="text-xl font-bold text-lexena-azul mb-3">¿Su predio en Antioquia es informal?</h3>
        <p class="text-gray-700 mb-4">Evaluamos su caso y le guiamos hasta la titulación.</p>
        <a href="https://wa.me/573105302619?text=Hola%20LexENA,%20necesito%20asesor%C3%ADa%20para%20regularizar%20un%20predio%20rural%20en%20Antioquia" target="_blank" rel="noopener noreferrer"
           class="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-block">
          Consulta Inmobiliaria
        </a>
      </div>
    `,
    fecha: "12 enero 2025",
    categoria: "Derecho Inmobiliario",
    lectura: "5 min lectura",
    autor: "Albeiro Camelo",
    keywords: ["formalización rural", "ANT", "titulación", "barrido predial", "Antioquia", "2025"]
  },
  {
    id: 5,
    slug: 'gestion-tributaria-eficiente-empresarios-uraba',
    titulo: "Gestión Tributaria Eficiente para Empresarios de Urabá (2025)",
    extracto: "Claves para optimizar el cumplimiento fiscal y aprovechar regímenes y herramientas vigentes.",
    contenido: `
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Panorama 2025</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La DIAN ha venido ajustando instructivos, conceptos y exigencias de información (incluida exógena cambiaria y uso de servicios digitales). 
        Mantener contabilidad y soportes electrónicos en orden es esencial para evitar sanciones y optimizar caja.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Obligaciones centrales</h2>
      <ul class="text-gray-700 mb-6 space-y-2">
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>Impuesto de Renta</strong> y anticipos según actividad y tamaño.</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>IVA</strong> (periodicidad bimestral o cuatrimestral, según topes y régimen).</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>ICA</strong> municipal (Apartadó, Turbo, Carepa, etc.).</li>
        <li class="flex items-start"><span class="text-lexena-naranja mr-2">•</span><strong>Retención en la fuente</strong> (aplicación correcta y oportuno reporte).</li>
      </ul>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Regímenes y buenas prácticas</h2>
      <ol class="text-gray-700 mb-6 space-y-2 list-decimal list-inside">
        <li><strong>Régimen Simple de Tributación (RST)</strong> como opción para MIPYMES con integración de tributos y simplificación del cumplimiento.</li>
        <li><strong>Digitalización</strong> de facturas y soportes; control de vencimientos y reportes (exógena, aduanas, cambiaria).</li>
        <li><strong>Planeación anual</strong> de cargas y beneficios; revisión de conceptos DIAN recientes para mitigar riesgos.</li>
      </ol>

      <div class="bg-yellow-50 p-6 rounded-lg mt-8 border border-yellow-200">
        <h3 class="text-xl font-bold text-lexena-azul mb-3">Maximice su eficiencia tributaria</h3>
        <p class="text-gray-700 mb-4">Optimice flujo de caja y reduzca contingencias con asesoría especializada.</p>
        <a href="https://wa.me/573105302619?text=Hola%20LexENA,%20necesito%20asesor%C3%ADa%20sobre%20gesti%C3%B3n%20tributaria%20para%20mi%20empresa%20en%20Urab%C3%A1" 
           target="_blank" rel="noopener noreferrer"
           class="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-block">
          Optimizar Ahora
        </a>
      </div>
    `,
    fecha: "22 enero 2025",
    categoria: "Gestión Tributaria",
    lectura: "4 min lectura",
    autor: "Edwin Arcila",
    keywords: ["gestión tributaria", "DIAN", "exógena 2025", "RST", "Urabá"]
  },
  {
    id: 6,
    slug: 'proteccion-legal-medio-ambiente-proyectos-desarrollo',
    titulo: "Protección Legal del Medio Ambiente en Proyectos de Desarrollo",
    extracto: "Cómo equilibrar desarrollo y sostenibilidad en proyectos de la región de Urabá.",
    contenido: `
      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Desarrollo sostenible y marco legal</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La <strong>Constitución de 1991</strong> y la <strong>Ley 99 de 1993</strong> estructuran el SINA. El <strong>Decreto 1076 de 2015</strong> 
        compila la reglamentación ambiental. El incumplimiento conlleva el <strong>régimen sancionatorio de la Ley 1333 de 2009</strong>.
      </p>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Instrumentos de gestión ambiental</h2>
      <ol class="text-gray-700 mb-6 space-y-2 list-decimal list-inside">
        <li><strong>Licencia Ambiental</strong> con integración de permisos sectoriales (agua, emisiones, forestal).</li>
        <li><strong>PMA</strong> con medidas de prevención, mitigación, corrección y compensación.</li>
        <li>Permisos específicos según actividad (aprovechamiento forestal, concesión de aguas, etc.).</li>
      </ol>

      <h2 class="text-2xl font-bold text-lexena-azul mt-8 mb-4">Prevención y cumplimiento</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La debida diligencia ambiental, la participación temprana y la coordinación con <strong>CORPOURABÁ</strong> y ANLA reducen riesgos 
        de sanciones, suspensiones o revocatorias.
      </p>

      <div class="bg-green-50 p-6 rounded-lg mt-8 border border-green-200">
        <h3 class="text-xl font-bold text-lexena-azul mb-3">Asegure la legalidad ambiental de su proyecto</h3>
        <p class="text-gray-700 mb-4">Evaluamos obligaciones y riesgos para un cumplimiento sólido.</p>
        <a href="https://wa.me/573105302619?text=Hola%20LexENA,%20necesito%20asesor%C3%ADa%20sobre%20protecci%C3%B3n%20legal%20ambiental%20para%20un%20proyecto%20de%20desarrollo" 
           target="_blank" rel="noopener noreferrer"
           class="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Asesoría Ambiental
        </a>
      </div>
    `,
    fecha: "15 diciembre 2025",
    categoria: "Derecho Ambiental",
    lectura: "7 min lectura",
    autor: "Albeiro Camelo",
    keywords: ["derecho ambiental", "SINA", "Ley 99 de 1993", "Decreto 1076 de 2015", "Ley 1333 de 2009"]
  }
];


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-lexena-blanco">
      {/* Header del Artículo */}
      <header className="bg-lexena-azul text-lexena-blanco py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="text-lexena-gris hover:text-lexena-naranja transition-colors mb-6 inline-block"
            >
              ← Volver al Blog
            </Link>
            
            <div className="flex items-center mb-4">
              <span className="bg-lexena-naranja text-white text-sm font-semibold px-3 py-1 rounded">
                {post.categoria}
              </span>
              <span className="ml-4 text-lexena-gris">{post.fecha}</span>
              <span className="ml-4 text-lexena-gris">{post.lectura}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.titulo}
            </h1>
            
            <p className="text-xl text-lexena-gris mb-2">
              Por <strong>{post.autor}</strong>
            </p>
            
            <p className="text-lg text-lexena-gris">
              {post.extracto}
            </p>
          </div>
        </div>
      </header>

      {/* Contenido del Artículo */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contenido }}
            />
            
            {/* Keywords para SEO */}
            <div className="mt-12 pt-8 border-t border-lexena-gris">
              <h3 className="text-lg font-semibold text-lexena-azul mb-3">Palabras Clave:</h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-lexena-gris text-lexena-azul px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Final */}
            <div className="mt-12 bg-lexena-azul text-lexena-blanco p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesita Asesoría Legal Especializada?</h3>
              <p className="text-lg mb-6">
                En LexENA tenemos la experiencia para ayudarle con sus necesidades legales en Urabá
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/573105302619?text=Hola%20LexENA,%20leí%20su%20artículo%20y%20me%20gustaría%20una%20consulta%20legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lexena-naranja hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Consulta por WhatsApp
                </a>
                <a 
                  href="tel:+573105302619"
                  className="border-2 border-lexena-blanco text-lexena-blanco hover:bg-lexena-blanco hover:text-lexena-azul font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Artículo No Encontrado',
    };
  }

  return {
    title: `${post.titulo} | LexENA Blog`,
    description: post.extracto,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.autor }],
    openGraph: {
      title: post.titulo,
      description: post.extracto,
      type: 'article',
      publishedTime: post.fecha,
      authors: [post.autor],
    },
  };
}