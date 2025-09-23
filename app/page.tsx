'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Target, Globe, Megaphone, CheckCircle, Users, Trophy, Star, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Marketing Digital",
      description: "Estratégias completas de marketing digital para alavancar seu negócio e alcançar novos clientes."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Websites modernos, responsivos e otimizados para conversão e resultados excepcionais."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Gestão de Mídia",
      description: "Gestão completa das suas redes sociais e campanhas publicitárias para máxima visibilidade."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechCorp Ltda",
      text: "A GXD transformou completamente nossa presença digital. Resultados impressionantes em apenas 3 meses.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Inovação & Co",
      text: "Profissionalismo exemplar e entrega de qualidade. Recomendo a GXD para qualquer empresa.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "StartUp Plus",
      text: "Nossa receita aumentou 150% após implementar as estratégias da GXD. Equipe fantástica!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-yellow-400">
              GXD
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">Início</a>
              <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">Serviços</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">Sobre</a>
              <a href="#portfolio" className="hover:text-yellow-400 transition-colors duration-300">Portfólio</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4 px-6 py-6">
                <a href="#home" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Início</a>
                <a href="#services" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                <a href="#about" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                <a href="#portfolio" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
                <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contato</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Impulsione Seu
            <span className="text-yellow-400 block">Negócio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Assessoria completa em marketing digital, desenvolvimento web e gestão de mídia para empresas que querem resultados extraordinários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Solicite uma Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
              Ver Nossos Casos
            </button>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-yellow-400/10 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos <span className="text-yellow-400">Serviços</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas para elevar sua empresa ao próximo nível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gray-900 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-400 mb-6 group-hover:animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Por que escolher a <span className="text-yellow-400">GXD</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Somos uma empresa especializada em assessoria empresarial com foco em resultados mensuráveis. Nossa experiência e dedicação garantem o crescimento sustentável do seu negócio.
              </p>

              <div className="space-y-4">
                {[
                  "Estratégias personalizadas para cada cliente",
                  "Equipe especializada e experiente",
                  "Resultados comprovados e mensuráveis",
                  "Suporte completo durante todo o processo"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Clientes Ativos</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-gray-300">Satisfação</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-400 mb-2">150%</div>
                <div className="text-gray-300">ROI Médio</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Testimonials Section */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-yellow-400">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Veja os depoimentos de empresas que transformaram seus resultados conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quo;</p>
                <div>
                  <div className="font-semibold text-yellow-400">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos conversar sobre seu <span className="text-yellow-400">projeto</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos acelerar o crescimento da sua empresa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-yellow-400">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">contato@gxd.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-300">(99  ) 9999-9999</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold">Localização</div>
                    <div className="text-gray-300">Campo Grande, ms - Brasil</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4 text-yellow-400">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome da Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-300"
                    placeholder="Sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-300"
                    placeholder="(99) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-300"
                    placeholder="Conte-nos sobre seu projeto e objetivos..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-4">GXD</div>
              <p className="text-gray-400 leading-relaxed">
                Assessoria empresarial especializada em marketing digital, desenvolvimento web e gestão de mídia.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Desenvolvimento Web</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Gestão de Mídia</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Consultoria</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Portfólio</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@gxd.com.br</li>
                <li>(99) 9999-9999</li>
                <li>Campo Grande, MS</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GXD. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}