import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ScrollProgress } from "../../components/ui/scroll-progress";

import heroCao from "../../assets/sobrenos/hero-cao.png";
import missaoGato from "../../assets/sobrenos/missao-gato.png";
import filosofiaFloresta from "../../assets/sobrenos/filosofia-floresta.png";
import equipeMarina from "../../assets/sobrenos/equipe-marina.png";
import equipeCarlos from "../../assets/sobrenos/equipe-carlos.png";
import equipeAna from "../../assets/sobrenos/equipe-ana.png";
import iconeMissao from "../../assets/sobrenos/icone-missao.svg";
import iconeSustentabilidade from "../../assets/sobrenos/icone-sustentabilidade.svg";
import iconeSaude from "../../assets/sobrenos/icone-saude.svg";
import iconeAmor from "../../assets/sobrenos/icone-amor.svg";
import iconeFilosofia from "../../assets/sobrenos/icone-filosofia.svg";
import iconeEquipe from "../../assets/sobrenos/icone-equipe.svg";

const VALORES = [
  {
    icone: iconeSustentabilidade,
    titulo: "Sustentabilidade",
    descricao:
      "Cada produto que escolhemos e cada embalagem que usamos é pensada para minimizar nosso impacto no planeta, respeitando a natureza que tanto amamos.",
  },
  {
    icone: iconeSaude,
    titulo: "Saúde Integral",
    descricao:
      "Focamos na prevenção e no cuidado holístico. Nossos serviços vão além da estética, promovendo a saúde física e emocional do seu pet.",
  },
  {
    icone: iconeAmor,
    titulo: "Amor Incondicional",
    descricao:
      "Tratamos cada animal como se fosse nosso. A empatia, o carinho e o respeito pautam cada interação da nossa equipe com o seu melhor amigo.",
  },
];

const EQUIPE = [
  {
    foto: equipeMarina,
    alt: "Veterinária sorrindo",
    nome: "Dra. Marina Silva",
    cargo: "Veterinária Holística",
  },
  {
    foto: equipeCarlos,
    alt: "Especialista em bem-estar animal",
    nome: "Carlos Mendes",
    cargo: "Especialista em Nutrição",
  },
  {
    foto: equipeAna,
    alt: "Groomer profissional",
    nome: "Ana Rosa",
    cargo: "Groomer Orgânica",
  },
];

const aparecer = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function ValorCard({ icone, titulo, descricao }) {
  return (
    <div className="h-full px-6 py-6 bg-[#fbf9f4] rounded-[24px] border border-[#c2c9bb]/30 shadow-[0px_8px_30px_-15px_rgba(45,90,39,0.05)] flex flex-col items-center">
      <div className="size-16 bg-[#f0eee9] rounded-full flex items-center justify-center shrink-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <img src={icone} alt="" width="26" height="26" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-[#293d39] text-2xl font-semibold font-['Quicksand'] leading-8 text-center">
        {titulo}
      </h3>
      <p className="mt-3 text-[#42493e] text-base font-normal font-['Hanken_Grotesk'] leading-6 text-center">
        {descricao}
      </p>
    </div>
  );
}

function MembroCard({ foto, alt, nome, cargo }) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-[4/5] bg-[#f0eee9] rounded-[16px] overflow-hidden">
        <img
          src={foto}
          alt={alt}
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
      <h3 className="mt-4 text-[#154212] text-sm font-semibold font-['Hanken_Grotesk'] leading-5 tracking-[0.7px]">
        {nome}
      </h3>
      <p className="text-[#42493e] text-sm font-normal font-['Hanken_Grotesk'] leading-5">
        {cargo}
      </p>
    </div>
  );
}

function SobreNos() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Amigo Pet</title>
        <meta
          name="description"
          content="Conheça a história, a missão e a equipe da Amigo Pet. Cuidado genuíno, orgânico e respeitoso para os seus melhores amigos."
        />
        <link rel="canonical" href="https://amigo-petshop.vercel.app/sobrenos" />
      </Helmet>

      <main className="w-full px-6 py-12 md:px-16 md:py-16 bg-white">
        <ScrollProgress className="top-0 py-0.5" />

        <div className="w-full max-w-6xl mx-auto flex flex-col gap-20 md:gap-[120px]">
          {/* Hero */}
          <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col items-start gap-6"
            >
              <h1 className="text-[#154212] text-4xl md:text-5xl font-bold font-['Quicksand'] leading-tight md:leading-[56px] tracking-[-0.96px]">
                Reconectando pets com a natureza.
              </h1>
              <p className="text-[#42493e] text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-7">
                Nascemos do desejo de oferecer um cuidado genuíno, orgânico e
                respeitoso para os nossos melhores amigos. Acreditamos que a
                vitalidade natural é o segredo para uma vida longa e feliz.
              </p>
              <div className="w-24 h-1 bg-[#bcf0ae] rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-7 relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0px_20px_40px_-15px_rgba(45,90,39,0.15)]"
            >
              <img
                src={heroCao}
                alt="Cão feliz em ambiente natural"
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#154212]/20 to-[#154212]/0" />
            </motion.div>
          </section>

          {/* Nossa Missão */}
          <motion.section
            {...aparecer}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="md:col-span-2 relative px-8 py-8 bg-[#f5f3ee] rounded-[12px] border border-[#c2c9bb]/20 shadow-[0px_4px_20px_-10px_rgba(45,90,39,0.04)] flex flex-col justify-center">
              <div className="w-12 h-10 bg-[#2d5a27] rounded-full flex items-center justify-center shrink-0">
                <img
                  src={iconeMissao}
                  alt=""
                  width="17"
                  height="17"
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-6 text-[#154212] text-2xl font-semibold font-['Quicksand'] leading-8">
                Nossa Missão
              </h2>
              <p className="mt-4 text-[#42493e] text-base font-normal font-['Hanken_Grotesk'] leading-6">
                Proporcionar bem-estar absoluto aos animais através de produtos
                e serviços rigorosamente selecionados, 100% naturais e
                orgânicos. Nosso compromisso é elevar o padrão de cuidado pet,
                garantindo saúde e harmonia em cada interação.
              </p>
            </div>

            <div className="bg-[#cae9bc] rounded-[12px] overflow-hidden min-h-[250px]">
              <img
                src={missaoGato}
                alt="Gato em ambiente calmo"
                loading="lazy"
                className="size-full object-cover object-center opacity-80"
              />
            </div>
          </motion.section>

          {/* Nossos Valores */}
          <motion.section {...aparecer} className="w-full flex flex-col gap-12">
            <h2 className="text-[#154212] text-3xl md:text-[32px] font-semibold font-['Quicksand'] leading-10 text-center">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALORES.map((valor) => (
                <ValorCard key={valor.titulo} {...valor} />
              ))}
            </div>
          </motion.section>

          {/* Nossa Filosofia */}
          <motion.section
            {...aparecer}
            className="relative w-full rounded-[32px] overflow-hidden"
          >
            <img
              src={filosofiaFloresta}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#154212]/80 mix-blend-multiply" />

            <div className="relative max-w-3xl mx-auto px-8 py-20 md:py-32 flex flex-col items-center">
              <img
                src={iconeFilosofia}
                alt=""
                width="40"
                height="40"
                aria-hidden="true"
              />
              <h2 className="mt-6 text-[#bcf0ae] text-3xl md:text-[32px] font-semibold font-['Quicksand'] leading-10 text-center">
                Nossa Filosofia
              </h2>
              <blockquote className="mt-6 text-white/90 text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-[29.25px] text-center">
                &ldquo;Acreditamos que a verdadeira beleza e vitalidade de um
                animal provêm de um cuidado que respeita sua essência. Retornar
                ao natural não é apenas uma escolha, é um compromisso com a
                vida.&rdquo;
              </blockquote>
            </div>
          </motion.section>

          {/* Nossa Equipe */}
          <motion.section {...aparecer} className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#154212] text-3xl md:text-[32px] font-semibold font-['Quicksand'] leading-10">
                Nossa Equipe
              </h2>
              <p className="text-[#42493e] text-base font-normal font-['Hanken_Grotesk'] leading-6">
                Especialistas apaixonados por cuidado natural.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EQUIPE.map((membro) => (
                <MembroCard key={membro.nome} {...membro} />
              ))}

              <div className="w-full aspect-[4/5] px-6 bg-[#f0eee9] rounded-[16px] border border-[#2d5a27]/10 flex flex-col items-center justify-center gap-2">
                <img
                  src={iconeEquipe}
                  alt=""
                  width="36"
                  height="18"
                  aria-hidden="true"
                />
                <h3 className="mt-1 text-[#154212] text-sm font-semibold font-['Hanken_Grotesk'] leading-5 tracking-[0.7px] text-center">
                  Junte-se a nós
                </h3>
                <p className="text-[#42493e] text-sm font-normal font-['Hanken_Grotesk'] leading-5 text-center">
                  Estamos sempre buscando talentos apaixonados por pets.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default SobreNos;
