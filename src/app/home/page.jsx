import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Head>
        <title>Estudio Digital - Innovación y Creatividad</title>
        <meta name="description" content="Ofrecemos servicios digitales como diseño web, creación de contenido, marketing digital y más." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-6xl font-bold mb-4">Transformamos Ideas en Realidad Digital</h1>
        <p className="text-xl mb-8">Diseño web, contenido para redes sociales, marketing digital y más.</p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
          Comienza tu Proyecto
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Diseño Web', 'Contenido para Redes', 'Marketing Digital'].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">{service}</h3>
              <p>Descripción breve del servicio ofrecido, destacando beneficios y características únicas.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-100 py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={`/project${index + 1}.jpg`} alt={`Proyecto ${index + 1}`} className="rounded-lg mb-4"/>
              <h3 className="text-xl font-bold">Proyecto {index + 1}</h3>
              <p>Breve descripción del proyecto y los resultados obtenidos.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"Increíble trabajo y atención al detalle. ¡Altamente recomendados!"</p>
              <p className="font-bold mt-4">- Cliente Satisfecho</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-8">¿Listo para Transformar tu Negocio?</h2>
        <p className="text-xl text-center mb-12">Contáctanos hoy y comienza tu viaje hacia el éxito digital.</p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            Contactar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>© 2023 Estudio Digital. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}