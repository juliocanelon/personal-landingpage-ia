// Archivo: pages/index.js
// Stack: Next.js + Tailwind CSS
// Objetivo: generar la página de inicio de mi landing page profesional, con mi información personal y profesional

/*
  Datos del propietario (Julio César Canelón Rangel):
  - Título: Ingeniero en Informática | Líder Técnico | Desarrollador de Software | Docente Universitario
  - Extracto:
    "Ingeniero en Informática con más de 15 años de experiencia en desarrollo de software, 
    arquitectura de soluciones y liderazgo técnico en el sector bancario, retail y de servicios. 
    Sólida carrera académica como docente universitario y entusiasta de la Inteligencia Artificial." :contentReference[oaicite:0]{index=0}
  - Habilidades:
    Java, .NET, Python, React, Golang, Node.js, Spring, TensorFlow, PyTorch, SQL Server, MySQL, Oracle, Docker, Kubernetes, AWS, Azure DevOps, Git, Figma, Jira, IA generativa. :contentReference[oaicite:1]{index=1}
  - Experiencia destacada:
    • Líder Técnico en Scotiabank Chile (Ene 2023 – Actualidad)  
    • Senior Software Developer en Mobdev Chile (Sep 2020 – Dic 2022)  
    • Proyectos de microservicios bancarios, CI/CD con Jenkins, pipelines DevSecOps. :contentReference[oaicite:2]{index=2}
  - Educación:
    • Ingeniería en Informática, UNEG (2005)  
    • Diplomado en IA Generativa, PUC Chile (Abr 2025)  
    • Diplomado en Big Data & ML, PUC Chile (2020–2021) :contentReference[oaicite:3]{index=3}
  - Contacto:
    Email: juliocanelon@gmail.com  
    LinkedIn: https://www.linkedin.com/in/juliocanelon :contentReference[oaicite:4]{index=4}
  - Portafolio:
    1. Estrategia de Control de Proyectos con IA (proyecto final de maestría)  
    2. App de Rondas NFC para vigilantes (Android + NFC + Backend en Node.js)  
    3. Pipeline DevSecOps con Claude Code y Vertex AI  

  Secciones a generar:
  1. Header: nombre, menú ancla (Sobre mí, Habilidades, Portafolio, Contacto), botón “Contáctame”.
  2. Hero: título principal, subtítulo con tu rol y frase de impacto, botón “Ver Portafolio”.
  3. Sobre mí: foto circular + extracto profesional.
  4. Habilidades: grid de iconos + etiquetas.
  5. Portafolio: tarjetas responsivas para los 3 proyectos, con título, descripción breve, tech stack y enlace.
  6. Educación y Ponencias: lista cronológica con títulos y fechas.
  7. Contacto: formulario (Nombre, Email, Mensaje) + enlaces a email/LinkedIn.
  8. Footer: copyright + link al repo de GitHub.

  Requisitos de estilo:
  - Responsive (mobile-first).
  - Paleta: azul oscuro (#1F2937), blanco (#FFFFFF), acento verde (#10B981).
  - Tipos: Inter para texto, Poppins para títulos.
  - Tailwind CSS para todas las clases.

  Genera el componente React funcional completo y exporta por defecto.
*/

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-inter text-gray-800">
      {/* Header */}
      <header className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold font-poppins">Julio César Canelón R.</h1>
          <nav className="space-x-6">
            <a href="#sobre-mi" className="hover:text-green-500">Sobre mí</a>
            <a href="#habilidades" className="hover:text-green-500">Habilidades</a>
            <a href="#portafolio" className="hover:text-green-500">Portafolio</a>
            <a href="#contacto" className="hover:text-green-500">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-green-500 text-white px-4 py-2 rounded-lg">Contáctame</a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 bg-gray-100 flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-5xl font-bold mb-4 font-poppins">Ingeniero de Software & Líder Técnico</h2>
        <p className="text-xl mb-6">+15 años en banca digital, retail y docencia | Apasionado por la IA</p>
        <a href="#portafolio" className="bg-green-500 text-white px-6 py-3 rounded-lg">Ver Portafolio</a>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 md:mb-0">
            <Image src="/perfil.jpg" alt="Foto Julio" width={192} height={192} />
          </div>
          <div className="md:ml-12 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 font-poppins">Sobre mí</h3>
            <p className="text-lg leading-relaxed">
              Ingeniero en Informática con más de 15 años de experiencia en desarrollo de software,
              arquitectura de soluciones y liderazgo técnico en el sector bancario, retail y de servicios.
              Sólida carrera académica como docente universitario y entusiasta de la Inteligencia Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* ...y así sucesivamente para las demás secciones */}
    </div>
  );
}
