import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappNumber = "525512345678";
  const whatsappMessage = "Hola, me gustaría agendar una cita con la Dra. María González";

  return (
    <section id="inicio" className="gradient-bg pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Dra. María González
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              Psiquiatra Certificada
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Atención profesional para tu salud mental con más de 15 años de experiencia
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 text-lg"
              >
                <MessageCircle size={24} />
                <span>Agenda tu Cita por WhatsApp</span>
              </a>
              
              <a
                href="#sobre-mi"
                className="text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Conoce Más
              </a>
            </div>
          </div>
          
          <div className="mt-16 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Consultas en Línea</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;