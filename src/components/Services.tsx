import React from 'react';
import { Brain, Heart, Moon, Video, Users, Shield, Zap, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "Terapia para Ansiedad",
      description: "Tratamiento especializado para trastornos de ansiedad generalizada, ataques de pánico y fobias.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Tratamiento de Depresión",
      description: "Enfoque integral para superar la depresión y recuperar la motivación y bienestar.",
      color: "red"
    },
    {
      icon: Moon,
      title: "Trastornos del Sueño",
      description: "Diagnóstico y tratamiento de insomnio, apnea del sueño y otros trastornos del descanso.",
      color: "indigo"
    },
    {
      icon: Video,
      title: "Consulta en Línea",
      description: "Sesiones virtuales seguras y confidenciales desde la comodidad de tu hogar.",
      color: "green"
    },
    {
      icon: Users,
      title: "Terapia de Pareja",
      description: "Sesiones especializadas para mejorar la comunicación y resolver conflictos relacionales.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Trastorno Bipolar",
      description: "Manejo especializado y estabilización del estado de ánimo con seguimiento continuo.",
      color: "yellow"
    },
    {
      icon: Zap,
      title: "TDAH en Adultos",
      description: "Evaluación y tratamiento del déficit de atención en población adulta.",
      color: "orange"
    },
    {
      icon: Clock,
      title: "Urgencias Psiquiátricas",
      description: "Atención inmediata para crisis emocionales y situaciones de emergencia mental.",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      pink: 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Servicios Especializados
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Tratamientos personalizados para tu bienestar mental y emocional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white p-4 sm:p-6 rounded-xl shadow-lg card-hover animate-on-scroll"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <service.icon size={20} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 lg:mt-16 animate-on-scroll">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                ¿Necesitas una consulta personalizada?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Cada tratamiento es único. Agenda una evaluación inicial para determinar 
                el mejor enfoque terapéutico para tu situación específica.
              </p>
              <a
                href="https://wa.me/525512345678?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold inline-flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>Solicitar Evaluación</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;