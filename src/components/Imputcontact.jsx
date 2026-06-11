import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BsWhatsapp } from "react-icons/bs";
import { ChevronRight, Send } from "lucide-react";
import { motion } from "framer-motion";

// ✏️ Ajuste os assuntos conforme necessário
const ASSUNTOS = [
  { value: "agendamento", label: "Agendamento" },
  { value: "duvidas", label: "Dúvidas sobre serviços" },
  { value: "orcamento", label: "Orçamento" },
  { value: "elogio", label: "Elogio" },
  { value: "reclamacao", label: "Reclamação" },
  { value: "outro", label: "Outro" },
];

const WHATSAPP_NUMBER = "5571983144578";

function InputContact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [tentouEnviar, setTentouEnviar] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formValido =
    form.nome.trim() !== "" &&
    form.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.assunto !== "" &&
    form.mensagem.trim() !== "";

  const enviarWhatsApp = () => {
    setTentouEnviar(true);
    if (!formValido) return;

    const assuntoLabel =
      ASSUNTOS.find((a) => a.value === form.assunto)?.label ?? form.assunto;

    const mensagem = [
      `Ola Amigo Pet! Entrei em contato pelo formulario do site.`,
      "",
      "Dados do Contato",
      "---------------------",
      `Nome: ${form.nome}`,
      `Email: ${form.email}`,
      `Assunto: ${assuntoLabel}`,
      "",
      `Mensagem:`,
      form.mensagem,
      "---------------------",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-['Hanken_Grotesk'] text-sm text-stone-700 bg-white
    placeholder:text-stone-400 focus:outline-none transition-all duration-200
    ${
      tentouEnviar &&
      (field === "email"
        ? !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        : !form[field]?.trim())
        ? "border-red-300 focus:border-red-400 bg-red-50"
        : "border-stone-200 focus:border-lime-700"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl flex flex-col gap-6"
    >
      {/* Nome + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="nome"
            className="text-xs font-semibold font-['Hanken_Grotesk'] text-stone-500 uppercase tracking-wider"
          >
            Nome Completo <span className="text-red-400">*</span>
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            className={inputClass("nome")}
          />
          {tentouEnviar && !form.nome.trim() && (
            <p className="text-red-400 text-xs font-['Hanken_Grotesk']">
              Nome é obrigatório
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold font-['Hanken_Grotesk'] text-stone-500 uppercase tracking-wider"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClass("email")}
          />
          {tentouEnviar && !form.email.trim() && (
            <p className="text-red-400 text-xs font-['Hanken_Grotesk']">
              Email é obrigatório
            </p>
          )}
          {tentouEnviar &&
            form.email.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (
              <p className="text-red-400 text-xs font-['Hanken_Grotesk']">
                Informe um email válido
              </p>
            )}
        </div>
      </div>

      {/* Assunto */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold font-['Hanken_Grotesk'] text-stone-500 uppercase tracking-wider">
          Assunto <span className="text-red-400">*</span>
        </label>
        <Select
          value={form.assunto}
          onValueChange={(val) => handleChange("assunto", val)}
        >
          <SelectTrigger
            className={`w-full rounded-xl font-['Hanken_Grotesk'] text-sm transition-all duration-200
              ${
                tentouEnviar && !form.assunto
                  ? "border-red-300 bg-red-50 focus:ring-red-200"
                  : "border-stone-200 focus:border-lime-700"
              }`}
          >
            <SelectValue placeholder="Selecione um assunto" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {ASSUNTOS.map(({ value, label }) => (
                <SelectItem
                  key={value}
                  value={value}
                  className="font-['Hanken_Grotesk']"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {tentouEnviar && !form.assunto && (
          <p className="text-red-400 text-xs font-['Hanken_Grotesk']">
            Selecione um assunto
          </p>
        )}
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="mensagem"
          className="text-xs font-semibold font-['Hanken_Grotesk'] text-stone-500 uppercase tracking-wider"
        >
          Mensagem <span className="text-red-400">*</span>
        </label>
        <Textarea
          id="mensagem"
          placeholder="Descreva como podemos ajudar..."
          value={form.mensagem}
          onChange={(e) => handleChange("mensagem", e.target.value)}
          rows={5}
          className={`resize-none rounded-xl font-['Hanken_Grotesk'] text-sm placeholder:text-stone-400 transition-all duration-200
            ${
              tentouEnviar && !form.mensagem.trim()
                ? "border-red-300 bg-red-50 focus:border-red-400"
                : "border-stone-200 focus:border-lime-700"
            }`}
        />
        {tentouEnviar && !form.mensagem.trim() && (
          <p className="text-red-400 text-xs font-['Hanken_Grotesk']">
            Mensagem é obrigatória
          </p>
        )}
      </div>

      {/* Botão */}
      <button
        onClick={enviarWhatsApp}
        className={`self-end flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold font-['Quicksand'] text-base transition-all duration-300
          ${
            formValido || !tentouEnviar
              ? "bg-[#154212] text-white hover:bg-[#1e6119] shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
      >
        <BsWhatsapp className="size-5" />
        Enviar pelo WhatsApp
        <ChevronRight className="size-4" />
      </button>
    </motion.div>
  );
}

export default InputContact;