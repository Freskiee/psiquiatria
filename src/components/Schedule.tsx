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
    <section id="horarios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Horarios de Atención
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra el momento perfecto para tu cita
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Schedule Table */}
            <div className="animate-on-scroll">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Horarios Semanales
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {scheduleData.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-4 rounded-lg ${
                        item.available
                          ? 'bg-white border-l-4 border-green-400'
                          : 'bg-gray-200 border-l-4 border-gray-400'
                      }`}
                    >
                      <span className="font-medium text-gray-800">{item.day}</span>
                      <span className={`${
                        item.available ? 'text-green-600' : 'text-gray-500'
                      } font-medium`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center text-blue-800">
                    <Clock className="mr-2" size={16} />
                    <span className="text-sm font-medium">
                      Las consultas en línea están disponibles 24/7 previa cita
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="animate-on-scroll space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Modalidades de Consulta
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Consulta Presencial</h4>
                      <p className="text-gray-600 text-sm">
                        Av. Reforma 123, Col. Juárez<br />
                        Ciudad de México, CDMX
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Consulta en Línea</h4>
                      <p className="text-gray-600 text-sm">
                        Videollamada segura desde cualquier lugar<br />
                        Disponible 24/7 con cita previa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2">
                  Urgencias Psiquiátricas
                </h4>
                <p className="text-green-700 text-sm mb-4">
                  Para situaciones de crisis o emergencias mentales, 
                  contáctame inmediatamente por WhatsApp o teléfono.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/525512345678?text=URGENCIA%20PSIQUIÁTRICA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Urgente
                  </a>
                  <a
                    href="tel:+525512345678"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-red-700 transition-colors"
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