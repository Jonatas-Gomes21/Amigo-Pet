import { motion } from "framer-motion";
import Inputcontact from "../../components/Imputcontact";
import { MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp, BsQuestionCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { ScrollProgress } from "../../components/ui/scroll-progress";
import { Link } from "react-router-dom";

const CONTACT_CARDS = [
  {
    icon: <FaPhoneAlt className="text-white size-4" />,
    titulo: "Telefone",
    descricao: "Para assuntos urgentes e agendamentos diretos.",
    acaoTexto: "(11) 99999-9999",
    acaoHref: "tel:+551199999999",
  },
  {
    icon: <MdEmail className="text-white size-4" />,
    titulo: "E-mail",
    descricao: "Dúvidas gerais, parcerias e informações.",
    acaoTexto: "contato@amigopet.com.br",
    acaoHref: "mailto:contato@amigopet.com.br",
  },
  {
    icon: <BsWhatsapp className="text-white size-4" />,
    titulo: "WhatsApp",
    descricao: "Atendimento rápido e envio de fotos do seu pet.",
    acaoTexto: "Iniciar Conversa",
    acaoHref: "https://wa.me/5571983144578",
  },
  {
    icon: <FaInstagram className="text-white size-4" />,
    titulo: "Instagram",
    descricao: "Acompanhe novidades, dicas e fotos dos nossos pets.",
    acaoTexto: "@amigopet",
    acaoHref: "https://instagram.com/amigopet",
  },
];

function ContactCard({ icon, titulo, descricao, acaoTexto, acaoHref }) {
  return (
    <div className="w-full px-5 py-4 bg-white rounded-2xl border border-stone-200 flex justify-start items-center gap-4">
      <div className="size-10 bg-[#154212] rounded-full flex justify-center items-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-lime-950 text-base font-bold font-['Quicksand'] leading-tight">
          {titulo}
        </h3>
        <p className="text-stone-500 text-xs font-['Hanken_Grotesk']">
          {descricao}
        </p>
        <a
          href={acaoHref}
          target={acaoHref.startsWith("http") ? "_blank" : undefined}
          rel={acaoHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-1 self-start text-xs font-semibold font-['Hanken_Grotesk'] text-stone-700 border border-stone-300 rounded-md px-2 py-0.5 hover:border-lime-700 hover:text-lime-900 transition-colors"
        >
          {acaoTexto}
        </a>
      </div>
    </div>
  );
}
function FaqCard() {
  return (
    <div className="w-full px-6 py-5 bg-[#1a3a17] rounded-2xl flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <BsQuestionCircle className="text-[#CAE9BC] size-4 shrink-0" />
        <h3 className="text-white text-base font-bold font-['Quicksand'] leading-tight">
          Dúvida Rápida?
        </h3>
      </div>
      <p className="text-stone-300 text-xs font-['Hanken_Grotesk'] leading-relaxed">
        Muitas vezes, a resposta que você procura já está na nossa página de Perguntas Frequentes.
      </p>
      <Link
        to="/faq"
        className="mt-1 self-start inline-flex items-center gap-2 text-xs font-semibold font-['Hanken_Grotesk'] text-white border border-white/30 rounded-md px-3 py-1 hover:bg-white/10 transition-colors"
      >
        Acessar FAQ
        <FaArrowRight className="size-3" />
      </Link>
    </div>
  );
}

function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | Amigo Pet</title>
        <meta
          name="description"
          content="Entre em contato com a Amigo Pet. Tire dúvidas, agende serviços ou fale sobre o bem-estar do seu pet."
        />
        <link rel="canonical" href="https://amigo-petshop.vercel.app/contato" />
      </Helmet>

      <main className="w-full px-6 py-12 md:px-16 md:py-24 flex flex-col items-center gap-12 bg-white">
        <ScrollProgress className="top-0 py-0.5" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-4"
        >
          <h1 className="text-lime-950 text-4xl md:text-5xl font-bold font-['Quicksand'] text-center">
            Estamos Aqui Para Você
          </h1>
          <p className="text-stone-700 text-base md:text-lg font-normal font-['Hanken_Grotesk'] max-w-2xl text-center">
            Dúvidas sobre nossos produtos naturais, agendamentos de serviços ou
            apenas quer bater um papo sobre o bem-estar do seu pet? Entre em
            contato, adoraríamos ouvir de você.
          </p>
        </motion.div>

        <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full px-8 py-10 bg-white rounded-2xl shadow-[0px_4px_24px_0px_rgba(45,90,39,0.06)] outline outline-1 outline-offset-[-1px] outline-stone-200 flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1 pb-4">
              <h2 className="text-lime-950 text-xl font-bold font-['Quicksand']">
                Envie uma mensagem
              </h2>
              <p className="text-stone-500 text-sm font-['Hanken_Grotesk']">
                Responderemos em até 1 dia útil via WhatsApp.
              </p>
            </div>
            <Inputcontact />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            {CONTACT_CARDS.map((card, i) => (
              <motion.div
                key={card.titulo}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07, ease: "easeOut" }}
              >
                <ContactCard {...card} />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + CONTACT_CARDS.length * 0.07, ease: "easeOut" }}
            >
              <FaqCard />
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl flex flex-col items-center gap-3"
        >
          <h2 className="text-lime-950 text-2xl md:text-3xl font-bold font-['Quicksand'] text-center">
            Nossa Localização
          </h2>
          <div className="flex items-center gap-1.5 text-stone-500">
            <MapPin className="size-4 text-[#154212]" />
            <span className="text-sm font-['Hanken_Grotesk']">
              Rua Exemplo, 123 – Lauro de Freitas, BA
            </span>
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-stone-200 shadow-sm mt-2">
            <iframe
              title="Localização Amigo Pet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d-38.33!3d-12.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTGF1cm8gZGUgRnJlaXRhcw!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 z-10 bg-white rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-2 max-w-56">
              <div className="flex items-center gap-2">
                <div className="size-7 bg-[#154212] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="size-3.5 text-white" />
                </div>
                <span className="text-lime-950 text-sm font-bold font-['Quicksand'] leading-tight">
                  Amigo Pet
                </span>
              </div>
              <p className="text-stone-500 text-xs font-['Hanken_Grotesk'] leading-relaxed">
                Rua Exemplo, 123 – Lauro de Freitas, BA
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-1.5 text-xs font-semibold font-['Hanken_Grotesk'] text-white bg-[#154212] rounded-lg px-3 py-1.5 hover:bg-[#1e6119] transition-colors"
              >
                <MapPin className="size-3" />
                Como Chegar
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}

export default Contato;