import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certificación Médica",
      description: "Especialista certificada por el Consejo Mexicano de Psiquiatría"
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
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprometida con tu bienestar mental y emocional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dra. María González"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Años</div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Dra. María Elena González Hernández
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Médico Psiquiatra con más de 15 años de experiencia en el diagnóstico y tratamiento 
                  de trastornos mentales. Graduada con honores de la Universidad Nacional Autónoma de México 
                  y especializada en psiquiatría por el Instituto Nacional de Psiquiatría.
                </p>
                
                <p>
                  Mi enfoque terapéutico se centra en el tratamiento integral del paciente, combinando 
                  las mejores prácticas de la psiquiatría moderna con un trato humano y empático. 
                  Creo firmemente en la importancia de crear un ambiente de confianza y seguridad 
                  para cada uno de mis pacientes.
                </p>
                
                <p>
                  Especialista en trastornos de ansiedad, depresión, trastornos del sueño y 
                  atención psiquiátrica en línea. Certificada por el Consejo Mexicano de Psiquiatría 
                  y miembro activo de la Asociación Psiquiátrica Mexicana.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  UNAM
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Consejo Mexicano de Psiquiatría
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Asociación Psiquiátrica Mexicana
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl card-hover">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-blue-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;