'use client'

import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  Target,
  Globe,
  Megaphone,
  Users,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Marketing Digital",
      description: "Estratégias personalizadas para aumentar sua presença digital e gerar mais leads qualificados para seu negócio.",
      features: ["SEO/SEM", "Redes Sociais", "Email Marketing", "Analytics"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Websites profissionais, responsivos e otimizados para conversão, desenvolvidos com as melhores tecnologias.",
      features: ["Sites Responsivos", "E-commerce", "Landing Pages", "Otimização"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Gestão de Mídia",
      description: "Criação de conteúdo, gestão de redes sociais e campanhas publicitárias que conectam sua marca ao público-alvo.",
      features: ["Criação de Conteúdo", "Gestão de Redes", "Campanhas Ads", "Branding"]
    }
  ]

  const stats = [
    { number: "50+", label: "Empresas Transformadas" },
    { number: "200%", label: "Aumento Médio em Conversões" },
    { number: "5 Anos", label: "de Experiência no Mercado" },
    { number: "24/7", label: "Suporte Especializado" }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechCorp Soluções",
      text: "A GXD transformou completamente nossa presença digital. Em apenas 3 meses, nossos leads aumentaram 300% e as vendas online triplicaram!",
      rating: 5,
      result: "+300% leads"
    },
    {
      name: "Ana Santos",
      company: "Consultoria Prime",
      text: "Profissionalismo excepcional! O website que desenvolveram é simplesmente perfeito e nossa taxa de conversão aumentou significativamente.",
      rating: 5,
      result: "+150% conversões"
    },
    {
      name: "Roberto Lima",
      company: "Indústria Beta",
      text: "Parceria estratégica que realmente funciona. A gestão de mídia da GXD elevou nossa marca a um novo patamar no mercado.",
      rating: 5,
      result: "+250% engajamento"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-2xl border-b border-yellow-400/20' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-3xl font-bold cursor-pointer group">
              <span className="text-yellow-400 group-hover:scale-110 inline-block transition-transform duration-300">G</span>
              <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">X</span>
              <span className="text-yellow-400 group-hover:scale-110 inline-block transition-transform duration-300">D</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-yellow-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-400/20">
              <nav className="px-4 py-6 space-y-4">
                {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-yellow-400 transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-400/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-yellow-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/20">
                🚀 Assessoria Empresarial de Elite
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transformamos
              <span className="text-gradient block animate-bounce-slow">Empresas</span>
              em Marcas de <span className="text-yellow-400">Sucesso</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Assessoria completa em <span className="text-yellow-400 font-semibold">marketing digital</span>,
              <span className="text-yellow-400 font-semibold"> desenvolvimento web</span> e
              <span className="text-yellow-400 font-semibold"> gestão de mídia</span> para empresas que querem
              dominar o mercado digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Começar Transformação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary">
                Ver Nossos Resultados
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/20">
                💼 Nossos Serviços
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções <span className="text-gradient">Completas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos um ecossistema completo de soluções digitais para elevar sua empresa ao próximo nível no mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl hover:from-gray-700 hover:to-gray-900 transition-all duration-500 card-hover group border border-gray-700 hover:border-yellow-400/30"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 bg-yellow-400/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/20">
                  🏆 Sobre a GXD
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Excelência em <span className="text-gradient">Assessoria</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Somos uma empresa especializada em assessoria empresarial, focada em transformar negócios através de
                estratégias digitais inovadoras, comprovadas e altamente eficazes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Mais de 50 empresas transformadas com sucesso",
                  "Equipe especializada e certificada internacionalmente",
                  "Resultados comprovados e mensuráveis em tempo real",
                  "Suporte contínuo e personalizado 24/7"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary">
                Conheça Nossa História
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 p-8 rounded-2xl border border-yellow-400/20 card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Nossa Missão</h3>
                    <p className="text-yellow-400">Transformação Digital</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Capacitar empresas com soluções digitais que geram resultados reais e sustentáveis,
                  criando valor exponencial para nossos clientes e seus consumidores.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Crescimento</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Inovação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/20">
                💬 Depoimentos
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Resultados que <span className="text-gradient">Falam</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Depoimentos reais de empresas que transformaram seus resultados e dominaram seus mercados conosco.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl card-hover border border-gray-700 hover:border-yellow-400/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-400/20">
                    {testimonial.result}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-400">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/20">
                📞 Contato
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Vamos <span className="text-gradient">Transformar</span> Juntos?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos elevar sua empresa ao próximo nível no mercado digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", info: "contato@gxd.com.br", desc: "Resposta em até 2 horas" },
                { icon: Phone, title: "Telefone", info: "(11) 9 9999-9999", desc: "Atendimento 24/7" },
                { icon: MapPin, title: "Localização", info: "São Paulo, SP - Brasil", desc: "Atendimento presencial e remoto" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl card-hover border border-gray-700 hover:border-yellow-400/30">
                  <div className="bg-yellow-400 p-4 rounded-xl">
                    <contact.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{contact.title}</h3>
                    <p className="text-yellow-400 font-semibold mb-1">{contact.info}</p>
                    <p className="text-gray-400 text-sm">{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Conte-nos sobre seu projeto e objetivos..."
                className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-yellow-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
              ></textarea>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                Solicitar Consultoria Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-center text-gray-400 text-sm">
                🔒 Seus dados estão seguros conosco. Não compartilhamos informações.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-6 group cursor-pointer">
              <span className="text-yellow-400 group-hover:scale-110 inline-block transition-transform duration-300">G</span>
              <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">X</span>
              <span className="text-yellow-400 group-hover:scale-110 inline-block transition-transform duration-300">D</span>
            </div>
            <p className="text-gray-400 mb-8 text-lg">
              Transformando empresas através de soluções digitais inovadoras e estratégias comprovadas.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              {['Política de Privacidade', 'Termos de Uso', 'FAQ'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 GXD Assessoria Empresarial. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}