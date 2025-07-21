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
    <section id="servicios" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tratamientos personalizados para tu bienestar mental y emocional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white p-6 rounded-xl shadow-lg card-hover animate-on-scroll"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ¿Necesitas una consulta personalizada?
              </h3>
              <p className="text-gray-600 mb-6">
                Cada tratamiento es único. Agenda una evaluación inicial para determinar 
                el mejor enfoque terapéutico para tu situación específica.
              </p>
              <a
                href="https://wa.me/525512345678?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-white px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2"
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