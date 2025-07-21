import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="bg-primary text-white shadow py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold font-poppins">Julio César Canelón R.</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#sobre-mi" className="hover:text-accent">Sobre mí</a>
            <a href="#habilidades" className="hover:text-accent">Habilidades</a>
            <a href="#portafolio" className="hover:text-accent">Portafolio</a>
            <a href="#contacto" className="hover:text-accent">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-accent text-white px-4 py-2 rounded-lg">Contáctame</a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 bg-gray-100 text-gray-800 flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Ingeniero de Software & Líder Técnico</h2>
        <p className="text-lg md:text-xl mb-6">+15 años en banca digital, retail y docencia | Apasionado por la IA</p>
        <a href="#portafolio" className="bg-accent text-white px-6 py-3 rounded-lg">Ver Portafolio</a>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 md:mb-0">
            <Image src="/perfil.png" alt="Foto Julio" width={192} height={192} />
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

      {/* Habilidades */}
      <section id="habilidades" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold font-poppins text-center mb-8">Habilidades</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {['Java','\.NET','Python','React','Golang','Node.js','Spring','TensorFlow','PyTorch','SQL Server','MySQL','Oracle','Docker','Kubernetes','AWS','Azure DevOps','Git','Figma','Jira','IA Generativa'].map(skill => (
              <div key={skill} className="bg-white rounded-lg shadow p-4">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portafolio" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold font-poppins text-center mb-8">Portafolio</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 shadow">
              <h4 className="text-xl font-bold mb-2">Estrategia de Control de Proyectos con IA</h4>
              <p className="mb-2">Proyecto final de maestría enfocado en optimizar la gestión de proyectos mediante inteligencia artificial.</p>
              <p className="text-sm mb-2">Tech: Python, TensorFlow</p>
              <a href="#" className="text-accent hover:underline">Ver más</a>
            </div>
            <div className="border rounded-lg p-4 shadow">
              <h4 className="text-xl font-bold mb-2">App de Rondas NFC para Vigilantes</h4>
              <p className="mb-2">Aplicación Android con backend Node.js para gestionar rondas de seguridad mediante NFC.</p>
              <p className="text-sm mb-2">Tech: Android, NFC, Node.js</p>
              <a href="#" className="text-accent hover:underline">Ver más</a>
            </div>
            <div className="border rounded-lg p-4 shadow">
              <h4 className="text-xl font-bold mb-2">Pipeline DevSecOps con IA</h4>
              <p className="mb-2">Implementación de pipelines DevSecOps integrando herramientas de IA generativa.</p>
              <p className="text-sm mb-2">Tech: Jenkins, Vertex AI</p>
              <a href="#" className="text-accent hover:underline">Ver más</a>
            </div>
          </div>
        </div>
      </section>

      {/* Educación y Ponencias */}
      <section id="educacion" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold font-poppins text-center mb-8">Educación y Ponencias</h3>
          <ul className="space-y-2">
            <li>2025 - Diplomado en IA Generativa, PUC Chile</li>
            <li>2021 - Diplomado en Big Data & ML, PUC Chile</li>
            <li>2005 - Ingeniería en Informática, UNEG</li>
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold font-poppins text-center mb-8">Contacto</h3>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Nombre" className="w-full border rounded p-2" />
            <input type="email" placeholder="Email" className="w-full border rounded p-2" />
            <textarea placeholder="Mensaje" className="w-full border rounded p-2" rows="4" />
            <button type="submit" className="bg-accent text-white px-4 py-2 rounded">Enviar</button>
          </form>
          <div className="text-center mt-4">
            <a href="mailto:juliocanelon@gmail.com" className="text-accent block">juliocanelon@gmail.com</a>
            <a href="https://www.linkedin.com/in/juliocanelon" className="text-accent block">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4 text-center">
        <p>© 2025 Julio Canelón - <a href="https://github.com/juliocanelon" className="text-accent hover:underline">GitHub</a></p>
      </footer>
    </div>
  );
}