import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+52 55 1234 5678",
      description: "Respuesta rápida de 8 AM a 8 PM",
      action: "https://wa.me/525512345678?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@dra-gonzalez.com",
      description: "Respuesta en menos de 24 horas",
      action: "mailto:contacto@dra-gonzalez.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+52 55 1234 5678",
      description: "Llamadas de lunes a viernes",
      action: "tel:+525512345678",
      color: "purple"
    }
  ];

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Contacto
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              Estoy aquí para ayudarte. Agenda tu cita hoy mismo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="animate-on-scroll">
                <a
                  href={method.action}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="block bg-white p-6 sm:p-8 rounded-2xl shadow-lg card-hover text-center group"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ${
                    method.color === 'green' ? 'bg-green-100 text-green-600' :
                    method.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon size={20} className="sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">
                    {method.title}
                  </h3>
                  <p className={`font-medium mb-2 text-sm sm:text-base ${
                    method.color === 'green' ? 'text-green-600' :
                    method.color === 'blue' ? 'text-blue-600' :
                    'text-purple-600'
                  }`}>
                    {method.info}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {method.description}
                  </p>
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Office Location */}
            <div className="animate-on-scroll">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4 sm:mb-6">
                  <MapPin className="text-blue-600 mr-3" size={20} />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Ubicación del Consultorio
                  </h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Dirección</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Av. Paseo de la Reforma 123, Piso 15<br />
                      Col. Juárez, Cuauhtémoc<br />
                      Ciudad de México, CDMX 06600
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Referencias</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      • Frente al Monumento a la Revolución<br />
                      • Metro Revolución (Línea 2) - 3 min caminando<br />
                      • Estacionamiento disponible en el edificio
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8751296756516!2d-99.15424968507757!3d19.43384774690236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5d4a9f3%3A0x3ca82e3d02f2b6b7!2sAv.%20Paseo%20de%20la%20Reforma%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1650000000000!5m2!1sen!2smx"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg sm:h-48 lg:h-56"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Office Hours & Security */}
            <div className="animate-on-scroll space-y-4 sm:space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Clock className="text-green-600 mr-3" size={20} />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Información Adicional
                  </h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Formas de Pago</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      • Efectivo<br />
                      • Transferencia bancaria<br />
                      • Tarjeta de crédito/débito<br />
                      • Facturación disponible
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Seguros Médicos</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      • GNP<br />
                      • Seguros Monterrey<br />
                      • AXA<br />
                      • Consulta otros seguros
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Shield className="text-blue-600 mr-3" size={20} />
                  <h4 className="font-semibold text-blue-800 text-sm sm:text-base">
                    Confidencialidad y Seguridad
                  </h4>
                </div>
                <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                  Todas las consultas se manejan con estricta confidencialidad médica. 
                  Las videollamadas utilizan plataformas seguras y encriptadas que 
                  cumplen con las normativas de protección de datos de salud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;