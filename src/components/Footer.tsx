import React from 'react';
import { Heart, Shield, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Dr. Walfred Rueda</h3>
              <p className="text-gray-300 mb-4">
                Psiquiatra certificado comprometido con tu bienestar mental y emocional.
              </p>
              <div className="flex items-center text-gray-300">
                <Heart className="mr-2" size={16} />
                <span className="text-sm">Cuidando tu salud mental desde 2009</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
                <li><a href="#sobre-mi" className="hover:text-blue-400 transition-colors">Sobre Mí</a></li>
                <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
                <li><a href="#horarios" className="hover:text-blue-400 transition-colors">Horarios</a></li>
                <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto de Emergencia</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  <span className="text-sm">+52 55 1234 5678</span>
                </div>
                <p className="text-sm">
                  Para urgencias psiquiátricas disponible 24/7
                </p>
                <a
                  href="https://wa.me/525512345678?text=URGENCIA%20PSIQUIÁTRICA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                >
                  WhatsApp Urgente
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center">
                  <Shield className="mr-2" size={16} />
                  <span className="text-sm">Cédula Profesional: 1234567</span>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-300 text-sm">
                  © 2025 Dr. Walfred Rueda. Todos los derechos reservados.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  <a href="/privacy" className="hover:text-blue-400 transition-colors mr-4">
                    Aviso de Privacidad
                  </a>
                  <a href="/terms" className="hover:text-blue-400 transition-colors">
                    Términos y Condiciones
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-300 text-xs text-center">
              <strong>Aviso Importante:</strong> La información médica en este sitio es únicamente para propósitos educativos. 
              No reemplaza el consejo médico profesional. Siempre consulta a un profesional de la salud para diagnósticos 
              y tratamientos específicos. En caso de emergencia psiquiátrica, contacta inmediatamente los servicios de emergencia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;