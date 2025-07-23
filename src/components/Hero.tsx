import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappNumber = "525512345678";
  const whatsappMessage = "Hola, me gustaría agendar una cita con el Dr. Walfred Rueda";

  return (
    <section id="inicio" className="gradient-bg pt-16 sm:pt-20 pb-12 sm:pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-on-scroll">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                ))}
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Dr. Walfred Rueda
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-600 font-semibold mb-4 sm:mb-6">
              Psiquiatra Certificado
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto px-4 leading-relaxed">
              Atención profesional para tu salud mental con más de 15 años de experiencia
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span className="whitespace-nowrap">Agenda tu Cita por WhatsApp</span>
              </a>
              
              <a
                href="#sobre-mi"
                className="text-blue-600 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base lg:text-lg w-full sm:w-auto text-center"
              >
                Conoce Más
              </a>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 lg:mt-20 animate-on-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg card-hover">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm sm:text-base">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg card-hover">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600 text-sm sm:text-base">Pacientes Atendidos</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg card-hover">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm sm:text-base">Consultas en Línea</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;