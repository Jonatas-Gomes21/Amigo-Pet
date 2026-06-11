import { Helmet } from "react-helmet-async"
import { Badge } from "../../components/ui/badge"
import { RiFlowerFill, RiMedicineBottleFill } from "react-icons/ri"
import { FaRegCalendar } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import Shower from "../../assets/shower.webp"
import Agendamento from "../../assets/agendamento.webp"
import Farmacia from "../../assets/farmacia.webp"
import Cardquestion from "../../components/Cardquestion"
import { Button } from "../../components/ui/button"
import { motion } from "framer-motion"
import { ScrollProgress } from "../../components/ui/scroll-progress"
import { Link } from "react-router-dom"

function FAQSection({ title, description, icon: Icon, iconBg, iconColor, questions, reversed, image }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 mt-12"
    >
      <div className={`flex flex-col gap-6 md:col-span-2 lg:col-span-1 ${reversed ? "md:order-2" : ""}`}>
        <div className="w-full inline-flex justify-start items-center gap-4">
          <div className={`w-10 h-10 ${iconBg} rounded-full flex justify-center items-center shrink-0`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <h2 className="text-lime-950 text-3xl font-semibold font-['Quicksand']">{title}</h2>
        </div>

        <p className="text-stone-700 text-left text-base font-normal font-['Hanken_Grotesk']">
          {description}
        </p>

        <div className="w-full h-64 relative mt-2 overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={image}
            alt={`Ilustração da seção ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className={`flex flex-col gap-4 md:col-span-2 lg:col-span-3 ${reversed ? "md:order-1" : ""}`}>
        <div className="w-full h-full flex items-center justify-center p-5">
          <Cardquestion questions={questions} />
        </div>
      </div>
    </motion.section>
  )
}

function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funcionam os produtos orgânicos para pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nossos produtos são feitos com ingredientes 100% naturais, sem conservantes artificiais...",
        },
      },
    ],
  }

  const serviceQuestions = [
    {
      id: 1,
      title: "Quais os benefícios do banho orgânico para o meu pet?",
      content: "O banho orgânico utiliza produtos naturais livres de sulfatos e parabenos, reduzindo o risco de alergias, hidratando a pele profundamente e mantendo a pelagem saudável e brilhante.",
    },
    {
      id: 2,
      title: "A aromaterapia pet é segura para todos os animais?",
      content: "Sim, mas com ressalvas. A aromaterapia deve ser feita com óleos essenciais específicos e diluídos corretamente, pois os pets têm um olfato muito sensível. É importante consultar um especialista.",
    },
    {
      id: 3,
      title: "Como funciona o cronograma de cuidados personalizados?",
      content: "Avaliamos o tipo de pelagem, pele e rotina do seu pet para criar um calendário específico de banhos, tosa e hidratação, garantindo que ele receba exatamente o que precisa ao longo do mês.",
    },
  ]

  const schedulingQuestions = [
    {
      id: 1,
      title: "Como posso agendar um horário online?",
      content: "Você pode agendar pelo nosso site, WhatsApp ou telefone. O agendamento online está disponível 24h por dia, 7 dias por semana.",
    },
    {
      id: 2,
      title: "Qual a política de cancelamento?",
      content: "Cancelamentos com até 24h de antecedência não geram cobrança. Após esse prazo, pode haver uma taxa de 50% do valor do serviço.",
    },
    {
      id: 3,
      title: "Quais as formas de pagamento disponíveis?",
      content: "Aceitamos cartões de crédito e débito, PIX e dinheiro. Parcelamento disponível em até 3x no cartão de crédito.",
    },
  ]

  const pharmacyQuestions = [
    {
      id: 1,
      title: "Os brinquedos são seguros para mastigação intensa?",
      content: "Sim! Nossos brinquedos são fabricados com borracha natural atóxica e materiais certificados, resistentes à mastigação intensa. Recomendamos sempre supervisionar o pet durante o uso e substituir o brinquedo caso apresente pedaços soltos.",
    },
    {
      id: 2,
      title: "As rações orgânicas são indicadas para pets com sensibilidade alimentar?",
      content: "Sim! As rações orgânicas são especialmente recomendadas para pets com sensibilidade alimentar, pois são livres de corantes artificiais, conservantes e ingredientes alergênicos comuns. Indicamos consultar seu veterinário para escolher a fórmula ideal para o seu pet.",
    },
    {
      id: 3,
      title: "Vocês realizam entregas de produtos?",
      content: "Sim, entregamos em toda a cidade. Compras acima de R$150 têm frete grátis. O prazo médio de entrega é de 1 a 3 dias úteis.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes | Cuidados Naturais para Pets</title>
        <meta
          name="description"
          content="Tudo o que você precisa saber sobre nossos cuidados naturais, produtos orgânicos e como proporcionar a melhor experiência para o seu pet."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen w-full px-5 md:px-16 flex flex-col justify-start items-start pb-20 overflow-hidden">
        <ScrollProgress className="top-0 py-0.5" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="self-stretch py-28 flex flex-col justify-center items-center gap-4"
        >
          <Badge variant="outline" className="border-none px-4 py-4 bg-[#CAE9BC] flex justify-center items-center">
            <span className="text-stone-600 text-base font-normal font-['Hanken_Grotesk']">
              Central de Ajuda
            </span>
          </Badge>

          <h1 className="text-lime-950 text-3xl md:text-5xl font-bold font-['Quicksand'] text-center">
            Perguntas Frequentes
          </h1>

          <div className="flex px-5 text-center md:max-w-2xl">
            <p className="text-stone-700 text-lg font-normal font-['Hanken_Grotesk']">
              Tudo o que você precisa saber sobre nossos cuidados naturais, produtos orgânicos
              e como proporcionar a melhor experiência para o seu pet.
            </p>
          </div>
        </motion.div>

        
        <FAQSection
          title="Serviços & Tratamentos"
          description="Dúvidas sobre banho terapêutico, aromaterapia pet e cronograma de cuidados orgânicos."
          icon={RiFlowerFill}
          iconBg="bg-lime-900"
          iconColor="text-[#9DD090]"
          questions={serviceQuestions}
          image={Shower}
        />

        <FAQSection
          title="Agendamentos"
          description="Informações sobre reservas online, cancelamentos e formas de pagamento aceitas."
          icon={FaRegCalendar}
          iconBg="bg-green-200"
          iconColor="text-[#4F6A46]"
          questions={schedulingQuestions}
          image={Agendamento}
          reversed
        />

        <FAQSection
          title="Produtos Orgânicos"
          description="Saiba mais sobre nossa linha de pet shop selecionada com rigor ético e ambiental."
          icon={RiMedicineBottleFill}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
          questions={pharmacyQuestions}
          image={Farmacia}
        />

        
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 w-full p-10 md:p-16 relative bg-[#2D5A27] rounded-[48px] flex flex-col justify-center items-center gap-6"
        >
          <h2 className="text-center text-white text-2xl md:text-3xl font-semibold font-['Quicksand']">
            Ainda tem dúvidas?
          </h2>
          
          <div className="w-full max-w-2xl flex">
            <p className="text-center text-green-200/90 text-lg font-normal font-['Hanken_Grotesk']">
              Nossa equipe de especialistas em bem-estar animal está pronta para
              conversar com você e encontrar a melhor solução para seu pet.
            </p>
          </div>
          
          <Link to={"/contato"}>
            <Button variant="outline" className="group bg-[#154212] border-none rounded-full hover:bg-[#1a5216] px-6 py-6 flex items-center gap-3 transition-colors duration-300">
              <span className="text-white text-base font-normal font-['Hanken_Grotesk']">
                Entrar em Contato
              </span>
            
              <FaArrowRight className="text-white w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.section>
        
      </main>
    </>
  )
}

export default FAQ