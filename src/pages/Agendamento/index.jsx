import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShowerHead,
  Stethoscope,
  House,
  Dog,
  Cat,
  Bird,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WHATSAPP_NUMBER = "5571983144578";

const HORARIOS = ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"];

const SERVICO_LABELS = {
  banho_tosa: "🛁 Banho e Tosa",
  clinica: "🩺 Clínica Integrativa",
  hotel: "🏠 Hotel e Creche",
};

const SERVICO_NOMES = {
  banho_tosa: "Banho e Tosa",
  clinica: "Clínica Integrativa",
  hotel: "Hotel e Creche",
};

const SILVESTRES = [
  { id: "Papagaio", emoji: "🦜" },
  { id: "Calopsita", emoji: "🐦" },
  { id: "Coelho", emoji: "🐰" },
  { id: "Hamster", emoji: "🐹" },
  { id: "Tartaruga", emoji: "🐢" },
  { id: "Iguana", emoji: "🦎" },
  { id: "outro_custom", emoji: "✏️", label: "Outro" },
];

function CheckoutItem({ label, value, filled }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
          filled ? "bg-[#154212]" : "bg-stone-200"
        }`}
      >
        {filled ? (
          <CheckCircle2 className="w-5 h-5 text-white" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-stone-400" />
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-stone-400 text-xs font-medium font-['Hanken_Grotesk'] uppercase tracking-wider">
          {label}
        </span>
        <span
          className={`text-sm font-semibold font-['Hanken_Grotesk'] ${
            filled ? "text-lime-950" : "text-stone-400 italic"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

const BASE_CARD =
  "px-6 py-8 relative bg-white rounded-xl flex flex-col justify-start items-start gap-4 cursor-pointer transition-all duration-300 hover:shadow-md";

const cardClass = (selected) =>
  selected
    ? `${BASE_CARD} shadow-[0px_4px_24px_-4px_rgba(45,90,39,0.12)] outline-2 -outline-offset-2 outline-lime-900`
    : `${BASE_CARD} border border-stone-200 shadow-sm hover:border-lime-700`;

const ICON_MODEL =
  "bg-[#CAE9BC] w-12 h-12 rounded-full flex justify-center items-center";

const STATIC_CARD =
  "self-stretch px-6 py-8 bg-white border border-stone-200 shadow-sm rounded-xl flex flex-col justify-center items-center gap-4";

function Agendamento() {
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [date, setDate] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [animalSilvestre, setAnimalSilvestre] = useState("");
  const [animalCustom, setAnimalCustom] = useState("");
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const toggleServico = (id) => {
    setServicosSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const nomeAnimalSilvestre =
    animalSilvestre === "outro_custom" ? animalCustom : animalSilvestre;

  const petLabels = {
    cachorro: "🐶 Cachorro",
    gato: "🐱 Gato",
    outro: `🦜 Silvestre${nomeAnimalSilvestre ? ` — ${nomeAnimalSilvestre}` : ""}`,
  };

  const petNomes = {
    cachorro: "Cachorro",
    gato: "Gato",
    outro: `Silvestre${nomeAnimalSilvestre ? ` - ${nomeAnimalSilvestre}` : ""}`,
  };

  const formValido =
    servicosSelecionados.length > 0 &&
    petSelecionado !== null &&
    horarioSelecionado !== null &&
    date !== null &&
    (petSelecionado !== "outro" ||
      (animalSilvestre &&
        (animalSilvestre !== "outro_custom" || animalCustom.trim() !== "")));

  const formatarData = (d) => {
    if (!d) return "—";
    return d.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const resetForm = () => {
    setServicosSelecionados([]);
    setPetSelecionado(null);
    setDate(null);
    setHorarioSelecionado(null);
    setAnimalSilvestre("");
    setAnimalCustom("");
    setTentouEnviar(false);
    setEnviado(false);
  };

  const enviarWhatsApp = () => {
    setTentouEnviar(true);
    if (!formValido) return;

    const servicos = servicosSelecionados
      .map((s) => SERVICO_NOMES[s])
      .join(", ");
    const pet = petNomes[petSelecionado];
    const dataFormatada = formatarData(date);

    const mensagem = [
      "Ola Amigo Pet! Gostaria de agendar um servico.",
      "",
      "Resumo do Agendamento",
      "---------------------",
      `Servico(s): ${servicos}`,
      `Pet: ${pet}`,
      `Data: ${dataFormatada}`,
      `Horario: ${horarioSelecionado}`,
      "---------------------",
      "Aguardo a confirmacao!",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
    setEnviado(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [enviado]);
  if (enviado) {
    return (
      <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8 bg-white px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-md text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#d8fac9] flex items-center justify-center">
            <CheckCircle2 className="size-10 text-[#154212]" />
          </div>
          <h1 className="text-lime-950 text-3xl font-bold font-['Quicksand']">
            Agendamento Enviado!
          </h1>
          <p className="text-stone-600 font-['Hanken_Grotesk'] text-base leading-relaxed">
            Você foi redirecionado para o WhatsApp. Nossa equipe confirmará seu
            horário em breve.
          </p>
          <button
            onClick={resetForm}
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1A2E20] text-[#1A2E20] hover:bg-[#1A2E20] hover:text-white font-semibold font-['Quicksand'] transition-colors duration-300 cursor-pointer"
          >
            Fazer novo agendamento
          </button>
          <Link to={"/"}>
            <button className="mt-2 inline-flex items-center gap-2 px-18 py-3 rounded-xl border border-[#1A2E20] text-[#1A2E20] hover:bg-[#1A2E20] hover:text-white font-semibold font-['Quicksand'] transition-colors duration-300 cursor-pointer">
              Pagina Inicial
            </button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Agendar Serviço | Amigo Pet</title>
        <meta
          name="description"
          content="Agende online banho e tosa, consulta veterinária ou hotel para o seu pet. Atendimento em Lauro de Freitas, Bahia."
        />
        <link rel="canonical" href="https://seusite.com.br/agendamento" />
      </Helmet>
      <main className="w-full min-h-screen px-6 py-12 md:px-16 md:py-24 flex flex-col items-center md:items-start gap-12 bg-white">
        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex flex-col items-center md:items-start gap-4 pb-7"
          >
            <h1 className="text-lime-950 text-4xl md:text-5xl font-bold font-['Quicksand'] text-center md:text-left">
              Agendar Serviço
            </h1>
            <p className="text-stone-700 text-center md:text-left text-base md:text-lg font-normal font-['Hanken_Grotesk'] max-w-2xl">
              Escolha o melhor cuidado para o seu melhor amigo. Selecione os
              serviços, o pet e o horário desejado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full flex flex-col items-center md:items-start gap-8 max-w-5xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center bg-[#CAE9BC] rounded-full">
                <span className="text-[#154212] text-lg font-bold font-['Quicksand']">
                  1
                </span>
              </div>
              <h2 className="text-lime-950 text-2xl md:text-3xl font-semibold font-['Quicksand']">
                Selecione o Serviço
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: "banho_tosa",
                  icon: <ShowerHead className="text-[#154212] size-6" />,
                  titulo: "Banho e Tosa",
                  desc: "Estética e higiene completa, com produtos orgânicos.",
                },
                {
                  id: "clinica",
                  icon: <Stethoscope className="text-[#154212] size-6" />,
                  titulo: "Clínica Integrativa",
                  desc: "Consultas, exames de rotina e atendimento especializado.",
                },
                {
                  id: "hotel",
                  icon: <House className="text-[#154212] size-6" />,
                  titulo: "Hotel e Creche",
                  desc: "Diárias de socialização, diversão e descanso seguro.",
                },
              ].map(({ id, icon, titulo, desc }) => (
                <div
                  key={id}
                  onClick={() => toggleServico(id)}
                  className={cardClass(servicosSelecionados.includes(id))}
                >
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <Checkbox
                      checked={servicosSelecionados.includes(id)}
                      className="w-6 h-6 flex rounded-full data-[state=checked]:bg-[#2D5A27] data-[state=checked]:border-none"
                    />
                  </div>
                  <div className={ICON_MODEL}>{icon}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lime-950 text-lg font-semibold font-['Quicksand'] leading-tight">
                      {titulo}
                    </h3>
                    <p className="text-stone-500 text-sm font-['Hanken_Grotesk'] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="w-full max-w-5xl py-6 md:py-8">
          <Separator className="bg-stone-200" />
        </div>

        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full flex items-center gap-4 pb-8"
          >
            <div className="shrink-0 w-10 h-10 flex justify-center items-center bg-[#CAE9BC] rounded-full">
              <span className="text-[#154212] text-lg font-bold font-['Quicksand']">
                2
              </span>
            </div>
            <h2 className="text-lime-950 text-2xl md:text-3xl font-semibold font-['Quicksand']">
              Para quem é o agendamento?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="w-full flex flex-col items-center md:items-start gap-8 max-w-5xl"
          >
            <div className="w-full flex flex-col md:flex-row gap-6 items-start">
              <div
                onClick={() => setPetSelecionado("cachorro")}
                className={`w-full md:w-1/3 ${cardClass(petSelecionado === "cachorro")}`}
              >
                <div className="absolute top-4 right-4 pointer-events-none">
                  <Checkbox
                    checked={petSelecionado === "cachorro"}
                    className="w-6 h-6 flex rounded-full data-[state=checked]:bg-[#2D5A27] data-[state=checked]:border-none"
                  />
                </div>
                <div className={ICON_MODEL}>
                  <Dog className="text-[#154212] size-6" />
                </div>
                <h3 className="text-lime-950 text-lg font-semibold font-['Quicksand'] leading-tight mt-2">
                  Cachorro
                </h3>
              </div>

              <div
                onClick={() => setPetSelecionado("gato")}
                className={`w-full md:w-1/3 ${cardClass(petSelecionado === "gato")}`}
              >
                <div className="absolute top-4 right-4 pointer-events-none">
                  <Checkbox
                    checked={petSelecionado === "gato"}
                    className="w-6 h-6 flex rounded-full data-[state=checked]:bg-[#2D5A27] data-[state=checked]:border-none"
                  />
                </div>
                <div className={ICON_MODEL}>
                  <Cat className="text-[#154212] size-6" />
                </div>
                <h3 className="text-lime-950 text-lg font-semibold font-['Quicksand'] leading-tight mt-2">
                  Gato
                </h3>
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-3">
                <div
                  onClick={() => {
                    setPetSelecionado("outro");
                    setAnimalSilvestre("");
                    setAnimalCustom("");
                  }}
                  className={cardClass(petSelecionado === "outro")}
                >
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <Checkbox
                      checked={petSelecionado === "outro"}
                      className="w-6 h-6 flex rounded-full data-[state=checked]:bg-[#2D5A27] data-[state=checked]:border-none"
                    />
                  </div>
                  <div className={ICON_MODEL}>
                    <Bird className="text-[#154212] size-6" />
                  </div>
                  <h3 className="text-lime-950 text-lg font-semibold font-['Quicksand'] leading-tight mt-2">
                    Outro (Silvestres)
                  </h3>
                </div>

                <AnimatePresence>
                  {petSelecionado === "outro" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-5 bg-[#f0f7ee] border border-[#c6e3bb] rounded-xl flex flex-col gap-4 shadow-lg">
                        <p className="text-[#154212] text-sm font-semibold font-['Quicksand']">
                          Qual é o animal? 🐾
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {SILVESTRES.map(({ id, emoji, label }) => (
                            <button
                              key={id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setAnimalSilvestre(id);
                                if (id !== "outro_custom") setAnimalCustom("");
                              }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium font-['Hanken_Grotesk'] border transition-all duration-200 ${
                                animalSilvestre === id
                                  ? "bg-[#154212] text-white border-[#154212] shadow-sm"
                                  : "bg-white text-stone-600 border-stone-300 hover:border-lime-700 hover:text-lime-900"
                              }`}
                            >
                              <span>{emoji}</span>
                              <span>{label ?? id}</span>
                            </button>
                          ))}
                        </div>
                        <AnimatePresence>
                          {animalSilvestre === "outro_custom" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <input
                                type="text"
                                placeholder="Digite o animal (ex: chinchila, furão...)"
                                value={animalCustom}
                                onChange={(e) =>
                                  setAnimalCustom(e.target.value)
                                }
                                onClick={(e) => e.stopPropagation()}
                                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-700 text-sm font-['Hanken_Grotesk'] focus:outline-none focus:border-lime-700 transition-all"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="w-full max-w-5xl py-6 md:py-8">
          <Separator className="bg-stone-200" />
        </div>

        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="w-full flex items-center gap-4 pb-8"
          >
            <div className="w-10 h-10 flex justify-center items-center bg-[#CAE9BC] rounded-full">
              <span className="text-[#154212] text-lg font-bold font-['Quicksand']">
                3
              </span>
            </div>
            <h2 className="text-lime-950 text-2xl md:text-3xl font-semibold font-['Quicksand'] text-center md:text-left">
              Escolha a Data e Horário
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className={STATIC_CARD}>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
                className="rounded-lg w-fit"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-lime-950">
                <Clock className="size-5" />
                <h3 className="text-lg font-semibold font-['Quicksand']">
                  Horários Disponíveis
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {HORARIOS.map((hora) => (
                  <button
                    key={hora}
                    onClick={() => setHorarioSelecionado(hora)}
                    className={`py-3 px-4 rounded-lg font-medium font-['Hanken_Grotesk'] transition-all duration-300 border ${
                      horarioSelecionado === hora
                        ? "bg-[#154212] text-white border-[#154212] shadow-md"
                        : "bg-white text-stone-600 border-stone-200 hover:border-lime-700 hover:text-lime-900"
                    }`}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <div className="w-full max-w-5xl py-6 md:py-8">
          <Separator className="bg-stone-200" />
        </div>

        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="w-full flex items-center gap-4 pb-8"
          >
            <div className="w-10 h-10 flex justify-center items-center bg-[#CAE9BC] rounded-full">
              <span className="text-[#154212] text-lg font-bold font-['Quicksand']">
                4
              </span>
            </div>
            <h2 className="text-lime-950 text-2xl md:text-3xl font-semibold font-['Quicksand']">
              Resumo do Agendamento
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="w-full max-w-5xl"
          >
            <div className="w-full rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-[#f0f7ee] border-b border-stone-200 flex items-center gap-2">
                <CheckCircle2 className="text-[#154212] size-5" />
                <span className="text-[#154212] font-semibold font-['Quicksand'] text-base">
                  Confira as informações antes de enviar
                </span>
              </div>

              <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <CheckoutItem
                  label="Serviço(s)"
                  filled={servicosSelecionados.length > 0}
                  value={
                    servicosSelecionados.length > 0
                      ? servicosSelecionados
                          .map((s) =>
                            SERVICO_LABELS[s].split(" ").slice(1).join(" "),
                          )
                          .join(", ")
                      : "Nenhum selecionado"
                  }
                />
                <CheckoutItem
                  label="Pet"
                  filled={!!petSelecionado}
                  value={
                    petSelecionado
                      ? petLabels[petSelecionado].split(" ").slice(1).join(" ")
                      : "Nenhum selecionado"
                  }
                />
                <CheckoutItem
                  label="Data"
                  filled={!!date}
                  value={date ? formatarData(date) : "Nenhuma selecionada"}
                />
                <CheckoutItem
                  label="Horário"
                  filled={!!horarioSelecionado}
                  value={horarioSelecionado ?? "Nenhum selecionado"}
                />
              </div>

              <AnimatePresence>
                {tentouEnviar && !formValido && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mx-6 mb-4 flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg"
                  >
                    <AlertCircle className="text-amber-500 size-4 shrink-0" />
                    <p className="text-amber-700 text-sm font-['Hanken_Grotesk']">
                      Preencha todos os campos acima para liberar o envio.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="px-6 py-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-stone-500 text-sm font-['Hanken_Grotesk'] text-center sm:text-left">
                  Ao confirmar, você será redirecionado para o WhatsApp da loja.
                </p>
                <button
                  onClick={enviarWhatsApp}
                  className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold font-['Quicksand'] text-base transition-all duration-300 ${
                    formValido
                      ? "bg-[#154212] text-white hover:bg-[#1e6119] shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                      : "bg-stone-200 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  <BsWhatsapp className="size-5" />
                  Confirmar pelo WhatsApp
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default Agendamento;
