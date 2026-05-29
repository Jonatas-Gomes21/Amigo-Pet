import { motion } from "framer-motion";
import Badge from "../../components/Homebadge";
import { AuroraText } from "@/components/ui/aurora-text";
import Buttonsmenu from "../../components/Buttonsmenu";
import Buttonsoutline from "../../components/Buttonsoutline";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wheat,
  BriefcaseMedical,
  ShieldCheck,
  Droplets,
  CheckCircle2,
  Stethoscope,
  House,
  Sprout,
} from "lucide-react";
import DogImage from "../../assets/Dogs.png";
import BanhoImage from "../../assets/Banho.png";
import Clinica from "../../assets/Clinica.png";
import Hotel from "../../assets/Hotel.png";
import { ScrollProgress } from "../../components/ui/scroll-progress";

function Home() {
  const diferencialCardClass =
    "flex flex-col items-center md:items-start text-center md:text-left gap-4 p-4 md:p-8 shadow-xl rounded-xl bg-white";

  return (
    <main className="w-full bg-white">
      <ScrollProgress className="top-0 py-0.5" />
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-between px-6 py-10 md:px-16 md:pt-12 pb-28 gap-12 overflow-hidden">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-start items-start"
        >
          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            <Badge />

            <div className="flex flex-col md:gap-2">
              <h1 className="text-3xl text-center font-['Quicksand'] leading-10 font-bold md:text-5xl md:text-start md:leading-14 text-stone-900">
                Cuidado Vital e<br />
                Orgânico para seu
              </h1>
              <AuroraText
                speed={1}
                className="text-3xl text-center font-bold md:text-5xl md:text-start"
              >
                Melhor Amigo
              </AuroraText>
            </div>

            <p className="text-stone-600 text-center md:text-start text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-relaxed max-w-md md:max-w-xl">
              No <strong>Amigo Pet</strong>, combinamos amor, natureza e
              excelência para oferecer o melhor em saúde e bem-estar animal. Uma
              experiência premium focada na vitalidade do seu pet.
            </p>

            <div className="w-full flex flex-col sm:flex-row justify-center gap-3 md:justify-start md:gap-4">
              <Buttonsmenu>
                <span className="text-sm font-['Hanken_Grotesk'] font-medium">
                  Agende uma Visita
                </span>
                <ArrowRight className="size-5" />
              </Buttonsmenu>

              <Buttonsoutline>
                <span className="text-lime-950 text-sm font-semibold font-['Hanken_Grotesk']">
                  Conheça o Espaço
                </span>
              </Buttonsoutline>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-full min-h-87.5 md:max-h-180 md:max-w-138 rounded-2xl overflow-hidden shadow-lg p-2 bg-stone-50">
            <img
              src={DogImage}
              alt="Cachorros felizes e saudáveis do Amigo Verde"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.section>
      </div>

      <section className="w-full px-6 pb-28 md:px-16 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex text-center flex-col justify-center items-center gap-3"
          >
            <h2 className="text-stone-900 text-3xl font-semibold font-['Quicksand'] md:text-4xl">
              A Diferença Amigo Pet
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-stone-600 font-normal font-['Hanken_Grotesk'] leading-relaxed">
              Nossos pilares de cuidado garantem que seu pet receba não apenas
              um serviço, mas uma experiência de bem-estar completa.
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={diferencialCardClass}
            >
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#d8fac9] shadow-sm">
                <Wheat className="text-[#154212] size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-stone-900 text-xl font-semibold font-['Quicksand'] md:text-2xl">
                  Ingredientes Naturais
                </h3>
                <p className="text-stone-600 font-['Hanken_Grotesk'] leading-relaxed">
                  Utilizamos exclusivamente produtos de origem botânica, livres
                  de parabenos e químicos agressivos, respeitando o equilíbrio
                  natural da pele do seu pet.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className={diferencialCardClass}
            >
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#d8fac9] shadow-sm">
                <BriefcaseMedical className="text-[#154212] size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-stone-900 text-xl font-semibold font-['Quicksand'] md:text-2xl">
                  Atendimento Especializado
                </h3>
                <p className="text-stone-600 font-['Hanken_Grotesk'] leading-relaxed">
                  Nossa equipe veterinária possui formação em terapias
                  holísticas e convencionais, proporcionando um diagnóstico
                  preciso e um plano de cuidado integrado.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className={diferencialCardClass}
            >
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#d8fac9] shadow-sm">
                <ShieldCheck className="text-[#154212] size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-stone-900 text-xl font-semibold font-['Quicksand'] md:text-2xl">
                  Ambiente Acolhedor
                </h3>
                <p className="text-stone-600 font-['Hanken_Grotesk'] leading-relaxed">
                  Desenhamos nosso espaço minimizando ruídos e estresse visual.
                  Música suave, aromaterapia leve e muito carinho esperam por
                  vocês.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F3EE] px-6 py-16 md:px-16 md:py-28 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-end gap-6"
          >
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start text-center md:text-left gap-4 max-w-2xl">
              <h2 className="text-stone-900 text-3xl font-semibold font-['Quicksand'] md:text-4xl">
                Nossos Serviços
              </h2>
              <p className="text-stone-700 text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-relaxed">
                Cuidado integral em um só lugar. Cada serviço é realizado com
                foco na saúde orgânica e emocional do seu companheiro.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 w-full mt-12">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col md:flex-row bg-[#FDFBF9] rounded-3xl overflow-hidden shadow-lg border border-stone-100"
            >
              <div className="w-full md:w-3/5 p-4 md:p-6">
                <div className="w-full h-80 md:h-112.5 overflow-hidden rounded-2xl border-2 border-dashed border-blue-400 p-2 bg-stone-50">
                  <img
                    src={BanhoImage}
                    alt="Veterinária banhando um cachorro Golden Retriever"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center gap-6 p-8 md:p-12 text-left">
                <div>
                  <span className="inline-flex items-center bg-gray-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">
                    Spa Premium
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-stone-950 text-4xl font-bold font-['Quicksand'] leading-tight">
                    Banho e Tosa Orgânica
                  </h3>
                  <Droplets className="size-7 text-[#154212]" />
                </div>

                <p className="text-stone-700 text-sm font-normal font-['Hanken_Grotesk'] leading-relaxed max-w-xl">
                  Transforme o banho em um momento de relaxamento. Utilizamos
                  xampus à base de plantas, ozonioterapia e técnicas de massagem
                  relaxante para uma pelagem brilhante e pele saudável, sem
                  estresse.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="size-5 text-[#154212]" />
                    <span className="text-sm font-normal font-['Hanken_Grotesk']">
                      Produtos hipoalergênicos
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="size-5 text-[#154212]" />
                    <span className="text-sm font-normal font-['Hanken_Grotesk']">
                      Secagem silenciosa
                    </span>
                  </li>
                </ul>

                <div className="mt-4">
                  <Link to={"https://w.app/amigoverde"}>
                    <button className="inline-flex items-center justify-center border border-[#1A2E20] text-[#1A2E20] hover:bg-[#1A2E20] hover:text-white rounded-full px-7 py-3 text-sm font-semibold font-['Hanken_Grotesk'] transition-colors duration-300 cursor-pointer">
                      Agendar Spa
                    </button>
                  </Link>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col md:flex-row bg-[#FDFBF9] rounded-3xl overflow-hidden shadow-lg border border-stone-100"
            >
              <div className="w-full md:w-2/5 flex flex-col justify-center gap-6 p-8 md:p-12 text-left order-2 md:order-1">
                <div>
                  <span className="inline-flex items-center bg-gray-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">
                    Saúde Integrativa
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-stone-950 text-4xl font-bold font-['Quicksand'] leading-tight">
                    Clínica Veterinária
                  </h3>
                  <Stethoscope className="size-7 text-[#154212]" />
                </div>

                <p className="text-stone-700 text-sm font-normal font-['Hanken_Grotesk'] leading-relaxed max-w-xl">
                  Consultas especializadas que unem o melhor da medicina
                  veterinária moderna com abordagens naturais. Prevenção,
                  nutrição clínica e diagnóstico preciso em um ambiente que
                  transmite calma.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="size-5 text-[#154212]" />
                    <span className="text-sm font-normal font-['Hanken_Grotesk']">
                      Check-up preventivo
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="size-5 text-[#154212]" />
                    <span className="text-sm font-normal font-['Hanken_Grotesk']">
                      Aconselhamento nutricional natural
                    </span>
                  </li>
                </ul>

                <div className="mt-4">
                  <button className="inline-flex items-center justify-center border border-[#1A2E20] text-[#1A2E20] hover:bg-[#1A2E20] hover:text-white rounded-full px-7 py-3 text-sm font-semibold font-['Hanken_Grotesk'] transition-colors duration-300">
                    Marcar Consulta
                  </button>
                </div>
              </div>
              <div className="w-full md:w-3/5 p-4 md:p-6 order-1 md:order-2">
                <div className="w-full h-80 md:h-112.5 overflow-hidden rounded-2xl border-2 border-dashed border-blue-400 p-2 bg-stone-50">
                  <img
                    src={Clinica}
                    alt="Veterinário examinando um pet com cuidado"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col md:flex-row bg-[#FDFBF9] rounded-3xl overflow-hidden shadow-lg border border-stone-100"
            >
              <div className="w-full md:w-3/5 p-4 md:p-6">
                <div className="w-full h-80 md:h-112.5 overflow-hidden rounded-2xl border-2 border-dashed border-blue-400 p-2 bg-stone-50">
                  <img
                    src={Hotel}
                    alt="Cachorros socializando felizes na creche"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center gap-6 p-8 md:p-12 text-left">
                <div>
                  <span className="inline-flex items-center bg-gray-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">
                    Diversão Segura
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-stone-950 text-4xl font-bold font-['Quicksand'] leading-tight">
                    Hotel e Creche
                  </h3>
                  <House className="size-7 text-[#154212]" />
                </div>

                <p className="text-stone-700 text-sm font-normal font-['Hanken_Grotesk'] leading-relaxed max-w-xl">
                  Um espaço de socialização desenhado para o bem-estar mental e
                  físico do seu pet. Áreas separadas por porte e temperamento,
                  com recreação monitorada por especialistas em comportamento
                  animal.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="size-5 text-[#154212]" />
                    <span className="text-sm font-normal font-['Hanken_Grotesk']">
                      Enriquecimento ambiental
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="size-5 text-[#154212]" />
                    <span className="text-sm font-normal font-['Hanken_Grotesk']">
                      Relatórios diários com fotos
                    </span>
                  </li>
                </ul>

                <div className="mt-4">
                  <button className="inline-flex items-center justify-center border border-[#1A2E20] text-[#1A2E20] hover:bg-[#1A2E20] hover:text-white rounded-full px-7 py-3 text-sm font-semibold font-['Hanken_Grotesk'] transition-colors duration-300">
                    Ver Instalações
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center px-6 py-20 md:py-28 bg-green-300/20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-4xl flex flex-col justify-center items-center bg-white rounded-3xl shadow-[0px_10px_40px_-10px_rgba(45,90,39,0.08)] p-8 md:p-16 gap-6"
        >
          <Sprout className="size-8 text-[#154212]" />
          
          <h2 className="text-center text-stone-900 text-3xl md:text-4xl font-semibold font-['Quicksand'] leading-tight max-w-lg">
            Nossa Missão: Reconectar Pets à Natureza
          </h2>
          
          <div className="w-full flex justify-center items-center mt-2">
            <p className="text-center text-stone-700 text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-relaxed max-w-2xl">
              Acreditamos que nossos animais de estimação merecem o mesmo nível de
              cuidado orgânico e saudável que buscamos para nós mesmos. O Amigo
              Verde nasceu do desejo de criar um refúgio de bem-estar onde a
              biologia natural do animal é respeitada e celebrada em cada serviço
              que prestamos.
            </p>
          </div>
          <div className="w-full h-62.5 sm:h-87.5 md:h-105 flex justify-center items-center mt-4">
            <img src={DogImage} className="w-full h-full object-cover rounded-2xl" alt="" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
