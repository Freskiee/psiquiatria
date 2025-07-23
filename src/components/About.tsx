import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certificación Médica",
      description: "Especialista certificado por el Consejo Mexicano de Psiquiatría"
    },
    {
      icon: BookOpen,
      title: "Educación Continua",
      description: "Actualización constante en las últimas técnicas terapéuticas"
    },
    {
      icon: Heart,
      title: "Enfoque Humanizado",
      description: "Tratamiento personalizado con calidez y profesionalismo"
    },
    {
      icon: Users,
      title: "Experiencia Clínica",
      description: "Más de 1000 pacientes tratados exitosamente"
    }
  ];

  return (
    <section id="sobre-mi" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Sobre Mí
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprometido con tu bienestar mental y emocional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <img
                  src="/images/walfredRuedaFoto.png"
                  alt="Dr. Walfred Rueda"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm">Años</div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                Dr. Walfred Rueda
              </h3>
              
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Médico Psiquiatra con más de 15 años de experiencia en el diagnóstico y tratamiento 
                  de trastornos mentales. Graduado con honores de la Universidad Nacional Autónoma de México 
                  y especializado en psiquiatría por el Instituto Nacional de Psiquiatría.
                </p>
                
                <p>
                  Mi enfoque terapéutico se centra en el tratamiento integral del paciente, combinando 
                  las mejores prácticas de la psiquiatría moderna con un trato humano y empático. 
                  Creo firmemente en la importancia de crear un ambiente de confianza y seguridad 
                  para cada uno de mis pacientes.
                </p>
                
                <p>
                  Especialista en trastornos de ansiedad, depresión, trastornos del sueño y 
                  atención psiquiátrica en línea. Certificado por el Consejo Mexicano de Psiquiatría 
                  y miembro activo de la Asociación Psiquiátrica Mexicana.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 pt-4">
                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  UNAM
                </span>
                <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Consejo Mexicano de Psiquiatría
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Asociación Psiquiátrica Mexicana
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-on-scroll">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl card-hover">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <achievement.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{achievement.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;