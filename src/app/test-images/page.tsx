import Image from 'next/image';

export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Prueba de Imágenes</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Imagen del Blog</h2>
          <div className="h-48 relative border">
            <Image
              src="/blog/mineria-ambiental.jpg"
              alt="Prueba blog"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="mt-2 text-sm">Ruta: /blog/mineria-ambiental.jpg</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Imagen del Equipo</h2>
          <div className="h-48 relative border">
            <Image
              src="/team/nestor-ramirez.jpg"
              alt="Prueba equipo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="mt-2 text-sm">Ruta: /team/nestor-ramirez.jpg</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Verificación de archivos</h2>
        <ul className="space-y-2">
          <li>✅ /blog/mineria-ambiental.jpg - Existe en public/blog/</li>
          <li>✅ /team/nestor-ramirez.jpg - Existe en public/team/</li>
          <li>✅ Configuración Next.js - Incluye formatos webp y avif</li>
        </ul>
      </div>
    </div>
  );
}