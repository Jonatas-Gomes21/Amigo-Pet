import { motion } from "framer-motion";
import { BsInstagram, BsWhatsapp, BsTiktok, BsFacebook } from "react-icons/bs";
import Logo from "/Icon.svg";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <footer className="w-full bg-[#FDFBF9] px-6 py-16 md:px-16 md:py-20 overflow-hidden border-t border-stone-100">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto flex flex-col gap-16"
      >

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="flex flex-col gap-6 md:col-span-1">
            <div className="flex items-center gap-3 text-stone-950">
              <Link to={"/"}>
                <img src={Logo} alt="Logo com formato de patinha de cachorro" />
              </Link>
              <span className="text-2xl font-bold font-['Quicksand'] text-lime-950">Amigo Pet</span>
            </div>
            <p className="text-stone-600 text-sm font-['Hanken_Grotesk'] leading-relaxed">
              Cuidado vital e orgânico para o seu melhor amigo. Uma experiência premium focada na vitalidade e bem-estar do seu pet.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-stone-900 text-lg font-semibold font-['Quicksand']">
              Nossos Serviços
            </h3>
            <ul className="flex flex-col gap-4 text-stone-600 text-sm font-['Hanken_Grotesk']">
              <li>
                <a className="cursor-pointer hover:text-[#154212] hover:font-medium transition-all duration-300">
                  Banho e Tosa Orgânica
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#154212] hover:font-medium transition-all duration-300">
                  Clínica Veterinária Integrativa
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#154212] hover:font-medium transition-all duration-300">
                  Hotel e Creche Segura
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-stone-900 text-lg font-semibold font-['Quicksand']">
              Institucional
            </h3>
            <ul className="flex flex-col gap-4 text-stone-600 text-sm font-['Hanken_Grotesk']">
              <li>
                <a className="cursor-pointer hover:text-[#154212] hover:font-medium transition-all duration-300">
                  Nossa Missão
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#154212] hover:font-medium transition-all duration-300">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#154212] hover:font-medium transition-all duration-300">
                  Termos e Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-stone-900 text-lg font-semibold font-['Quicksand']">
              Fale Conosco
            </h3>
            <ul className="flex flex-col gap-4 text-stone-600 text-sm font-['Hanken_Grotesk']">
              <li>
                <a className="cursor-pointer hover:text-[#154212] transition-colors duration-300">
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#154212] transition-colors duration-300">
                  contato@amigoverde.com.br
                </a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mt-2">
              <a className="cursor-pointer p-2 bg-stone-100 rounded-full hover:bg-[#154212] text-stone-500 hover:text-white transition-all duration-300">
                <BsInstagram className="size-5" />
              </a>
              <a className="cursor-pointer p-2 bg-stone-100 rounded-full hover:bg-[#154212] text-stone-500 hover:text-white transition-all duration-300">
                <BsWhatsapp className="size-5" />
              </a>
              <a className="cursor-pointer p-2 bg-stone-100 rounded-full hover:bg-[#154212] text-stone-500 hover:text-white transition-all duration-300">
                <BsTiktok className="size-5" />
              </a>
              <a className="cursor-pointer p-2 bg-stone-100 rounded-full hover:bg-[#154212] text-stone-500 hover:text-white transition-all duration-300">
                <BsFacebook className="size-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col justify-between md:justify-center md:flex-col items-center gap-4 pt-8 border-t border-stone-200 text-stone-500 text-sm font-['Hanken_Grotesk']">
          <p>© {new Date().getFullYear()} <strong>Amigo Pet.</strong> Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com carinho para o seu pet.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}

export default Footers;