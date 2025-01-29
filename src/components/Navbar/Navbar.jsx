"use client";

import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  MessageSquare,
  BarChart3,
  Users,
  ShoppingBag,
  Share2,
  Smartphone,
  HeartHandshake,
  BookOpen,
  Phone,
  Lightbulb
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenus, setMobileMenus] = useState({
    solutions: false,
    management: false,
    about: false
  });

  useEffect(() => {
    const closeMenus = () => {
      setIsOpen(false);
      setMobileMenus({
        solutions: false,
        management: false,
        about: false
      });
    };
    window.addEventListener('scroll', closeMenus);
    return () => window.removeEventListener('scroll', closeMenus);
  }, []);

  const NavItem = ({ children, className = '' }) => (
    <div className={`relative group ${className}`}>
      {children}
      <div className="absolute top-full left-0 w-full h-10 bg-transparent" />
    </div>
  );

  const DropdownContent = ({ children }) => (
    <div className="invisible group-hover:visible
      absolute top-full left-0 w-64
      flex-col space-y-1 bg-white shadow-xl
      rounded-lg p-4 mt-2
      opacity-0 group-hover:opacity-100
      translate-y-4 group-hover:translate-y-0
      transition-all duration-500 ease-in-out
      flex
      before:content-['']
      before:absolute
      before:-top-10
      before:left-0
      before:w-full
      before:h-10">
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );

  const NavLink = ({ icon: Icon, children }) => (
    <div className="relative group/item cursor-pointer py-2">
      <div className="flex items-center space-x-1 text-gray-700 group-hover:text-indigo-600 
                    transition-colors duration-300">
        <Icon className="w-4 h-4" />
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 
                         group-hover/item:scale-x-100 transition-transform duration-300 
                         origin-left"></span>
        </span>
        {children !== "Atención al Cliente" && (
          <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
        )}
      </div>
    </div>
  );

  const DropdownItem = ({ icon: Icon, children }) => (
    <a href="#" 
       className="flex items-center space-x-2 p-3 rounded-md hover:bg-indigo-50
                  transition-all duration-200 ease-out
                  hover:translate-x-1
                  group/link">
      <Icon className="w-4 h-4 text-indigo-600" />
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 
                       group-hover/link:scale-x-100 transition-transform duration-200 
                       origin-left"></span>
      </span>
    </a>
  );

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-indigo-600">
            Studio<span className="text-purple-500">Digital</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Soluciones */}
            <NavItem>
              <NavLink icon={Lightbulb}>Soluciones</NavLink>
              <DropdownContent>
                <DropdownItem icon={Globe}>Presencia Inicial</DropdownItem>
                <DropdownItem icon={BarChart3}>Mira Go</DropdownItem>
                <DropdownItem icon={Globe}>Página Web</DropdownItem>
                <DropdownItem icon={Share2}>Redes Sociales</DropdownItem>
                <DropdownItem icon={MessageSquare}>Campaña Digital</DropdownItem>
                <DropdownItem icon={ShoppingBag}>Tienda Online</DropdownItem>
              </DropdownContent>
            </NavItem>

            {/* Gestión */}
            <NavItem>
              <NavLink icon={Smartphone}>Gestión</NavLink>
              <DropdownContent>
                <DropdownItem icon={HeartHandshake}>Mira Conecta</DropdownItem>
              </DropdownContent>
            </NavItem>

            {/* Nosotros */}
            <NavItem>
              <NavLink icon={Users}>Nosotros</NavLink>
              <DropdownContent>
                <DropdownItem icon={Users}>Conócenos</DropdownItem>
                <DropdownItem icon={BookOpen}>Blog</DropdownItem>
                <DropdownItem icon={BookOpen}>Tutoriales</DropdownItem>
              </DropdownContent>
            </NavItem>

            {/* Atención al Cliente */}
            <NavItem>
              <NavLink icon={Phone}>Atención al Cliente</NavLink>
            </NavItem>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                        hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none 
                        transition-colors duration-200">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {/* Soluciones Mobile */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileMenus(prev => ({ ...prev, solutions: !prev.solutions }))}
              className="w-full flex items-center justify-between px-3 py-2 text-gray-700 
                        hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4" />
                <span>Soluciones</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 
                                  ${mobileMenus.solutions ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${mobileMenus.solutions ? 'max-h-96' : 'max-h-0'} 
                          overflow-hidden transition-all duration-300 ease-in-out`}>
              <div className="pl-4 space-y-2 py-2">
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Presencia Inicial</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Mira Go</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Página Web</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Redes Sociales</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Campaña Digital</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Tienda Online</a>
              </div>
            </div>
          </div>

          {/* Gestión Mobile */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileMenus(prev => ({ ...prev, management: !prev.management }))}
              className="w-full flex items-center justify-between px-3 py-2 text-gray-700 
                        hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Gestión</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 
                                  ${mobileMenus.management ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${mobileMenus.management ? 'max-h-96' : 'max-h-0'} 
                          overflow-hidden transition-all duration-300 ease-in-out`}>
              <div className="pl-4 py-2">
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Mira Conecta</a>
              </div>
            </div>
          </div>

          {/* Nosotros Mobile */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileMenus(prev => ({ ...prev, about: !prev.about }))}
              className="w-full flex items-center justify-between px-3 py-2 text-gray-700 
                        hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Nosotros</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 
                                  ${mobileMenus.about ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${mobileMenus.about ? 'max-h-96' : 'max-h-0'} 
                          overflow-hidden transition-all duration-300 ease-in-out`}>
              <div className="pl-4 space-y-2 py-2">
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Conócenos</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Blog</a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 
                                    hover:bg-indigo-50 rounded-md">Tutoriales</a>
              </div>
            </div>
          </div>

          {/* Atención al Cliente Mobile */}
          <a
            href="#"
            className="block px-3 py-2 text-gray-700 hover:text-indigo-600 
                      hover:bg-indigo-50 rounded-md">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Atención al Cliente</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;