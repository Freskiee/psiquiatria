import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

const Schedule: React.FC = () => {
  const scheduleData = [
    { day: 'Lunes', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Martes', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Miércoles', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Jueves', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Viernes', hours: '9:00 AM - 5:00 PM', available: true },
    { day: 'Sábado', hours: '9:00 AM - 2:00 PM', available: true },
    { day: 'Domingo', hours: 'Cerrado', available: false }
  ];

  return (
    <section id="horarios" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Horarios de Atención
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              Encuentra el momento perfecto para tu cita
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Schedule Table */}
            <div className="animate-on-scroll">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Calendar className="text-blue-600 mr-3" size={20} />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Horarios Semanales
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {scheduleData.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 sm:p-4 rounded-lg ${
                        item.available
                          ? 'bg-white border-l-4 border-green-400'
                          : 'bg-gray-200 border-l-4 border-gray-400'
                      }`}
                    >
                      <span className="font-medium text-gray-800 text-sm sm:text-base">{item.day}</span>
                      <span className={`${
                        item.available ? 'text-green-600' : 'text-gray-500'
                      } font-medium text-xs sm:text-sm`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center text-blue-800">
                    <Clock className="mr-2 flex-shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-medium">
                      Las consultas en línea están disponibles 24/7 previa cita
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="animate-on-scroll space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                  Modalidades de Consulta
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm sm:text-base">Consulta Presencial</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Av. Reforma 123, Col. Juárez<br />
                        Ciudad de México, CDMX
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm sm:text-base">Consulta en Línea</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Videollamada segura desde cualquier lugar<br />
                        Disponible 24/7 con cita previa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">
                  Urgencias Psiquiátricas
                </h4>
                <p className="text-green-700 text-xs sm:text-sm mb-4 leading-relaxed">
                  Para situaciones de crisis o emergencias mentales, 
                  contáctame inmediatamente por WhatsApp o teléfono.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="https://wa.me/525512345678?text=URGENCIA%20PSIQUIÁTRICA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-center hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Urgente
                  </a>
                  <a
                    href="tel:+525512345678"
                    className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-center hover:bg-red-700 transition-colors"
                  >
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;