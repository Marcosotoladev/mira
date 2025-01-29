'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaPalette, FaRobot, FaBullhorn, FaCameraRetro, FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-5">
        <h1 className="text-5xl font-bold mb-4">Transformamos tu presencia digital</h1>
        <p className="text-lg mb-6">Creamos soluciones innovadoras en diseño, marketing y automatización.</p>
        <button className="bg-blue-500 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600">
          Descubre nuestros servicios
        </button>
      </section>

      {/* Servicios */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
              <service.icon className="text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-5 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-8">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="italic">"{test.quote}"</p>
              <h4 className="mt-4 font-semibold">- {test.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Portafolio */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestro Trabajo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img src={project.image} alt={project.title} className="rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-600">
        <h2 className="text-3xl font-bold mb-4">¿Listo para llevar tu marca al siguiente nivel?</h2>
        <button className="bg-white text-blue-600 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Agenda una consulta
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 border-t border-gray-700">
        <p className="text-gray-400">&copy; 2025 Tu Estudio Digital - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

const services = [
  { title: 'Páginas Web', description: 'Desarrollo web a medida.', icon: FaGlobe },
  { title: 'Diseño Gráfico', description: 'Logos, branding y más.', icon: FaPalette },
  { title: 'Automatización', description: 'Respuestas automáticas y chatbots.', icon: FaRobot },
  { title: 'Marketing Digital', description: 'Publicidad y estrategias online.', icon: FaBullhorn },
  { title: 'Contenido para Redes', description: 'Gestión de contenido visual.', icon: FaCameraRetro }
];

const testimonials = [
  { quote: 'Excelentes profesionales, mi web quedó increíble.', author: 'Carlos M.' },
  { quote: 'Me ayudaron a aumentar mis ventas con un marketing efectivo.', author: 'Ana G.' }
];

const portfolio = [
  { title: 'Proyecto 1', image: '/images/project1.jpg' },
  { title: 'Proyecto 2', image: '/images/project2.jpg' },
  { title: 'Proyecto 3', image: '/images/project3.jpg' }
];

