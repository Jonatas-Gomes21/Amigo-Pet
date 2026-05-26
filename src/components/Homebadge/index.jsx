import { Badge } from "../ui/badge";

function Homebadge() {
  return (
    <Badge variant="outline" className="bg-[#CAE9BC80] border-[#4B654233]">
      <img src="/folha.svg" alt="Folha" />
      <span className="text-[#4F6A46] text-sm font-semibold font-['Hanken_Grotesk'] leading-5 tracking-wide">
        Abordagem 100% Natural
      </span>
    </Badge>
  );
}

export default Homebadge;
