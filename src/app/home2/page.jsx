import React from 'react';
import { ChevronRight, MousePointerClick, Zap, Code, Palette, Share2, MessageSquare, BarChart3 } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos que cautivan a tu audiencia"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Redes Sociales",
      description: "Gestión integral de contenido para todas tus plataformas sociales"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Chatbots",
      description: "Automatiza tu atención al cliente con respuestas inteligentes"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Diseño Gráfico",
      description: "Logos, branding y diseños que hacen destacar tu marca"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Marketing Digital",
      description: "Estrategias efectivas para aumentar tu presencia online"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatización",
      description: "Optimiza tus procesos con soluciones digitales inteligentes"
    }
  ];

  const stats = [
    { number: "150+", text: "Proyectos Completados" },
    { number: "50+", text: "Clientes Satisfechos" },
    { number: "5+", text: "Años de Experiencia" },
    { number: "24/7", text: "Soporte Técnico" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformamos Ideas en Realidad Digital
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Servicios digitales integrales para impulsar tu presencia online
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                Empezar Ahora <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Servicios
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones digitales completas para hacer crecer tu negocio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para impulsar tu presencia digital?
            </h2>
            <p className="text-xl mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto">
              Contactar Ahora <MousePointerClick className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tu Estudio Digital</h3>
              <p className="text-gray-400">
                Transformando negocios a través de soluciones digitales innovadoras
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desarrollo Web</li>
                <li>Redes Sociales</li>
                <li>Diseño Gráfico</li>
                <li>Marketing Digital</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Casos de Éxito</li>
                <li>Blog</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@tuestudio.com</li>
                <li>+1 234 567 890</li>
                <li>Ciudad, País</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Tu Estudio Digital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;