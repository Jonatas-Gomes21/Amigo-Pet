import Badge from "../../components/Homebadge";
import { AuroraText } from "@/components/ui/aurora-text";
import Buttonsmenu from "../../components/Buttonsmenu";
import Buttonsoutline from "../../components/Buttonsoutline";
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import DogImage from "../../assets/Dogs.png";
impor

function Home() {
  return (
    <main className=" w-full min-h-screen flex flex-col md:flex-row justify-between gap-7 px-10 py-10 md:px-16 md:pt-12 pb-28">
      <section className=" min-w-min flex justify-center items-start">
        <div className="inline-flex flex-col items-center md:items-start gap-4">
          <Badge />
          <div className="flex flex-col md:gap-2">
            <h1 className="text-2xl text-center font-['Quicksand'] leading-10 font-bold md:text-5xl md:text-start md:leading-14">
              Cuidado Vital e<br />
              Orgânico para seu
            </h1>
            <AuroraText
              speed={1}
              className="text-2xl text-center font-bold  md:text-5xl md:text-start "
            >
              Melhor Amigo
            </AuroraText>
          </div>
          <div className="text-stone-700 text-center md:text-start text-lg md:text-lg font-normal font-['Hanken_Grotesk'] leading-7 ">
            <p>
              No Amigo Verde, combinamos amor, natureza e excelência para
              <br />
              oferecer o melhor em saúde e bem-estar animal. Uma experiência
              <br />
              premium focada na vitalidade do seu pet.
            </p>
          </div>
          <div className="inline-flex md:w-full flex-col justify-center gap-3 md:justify-start md:gap-4 md:flex-row md:flex">
            <Buttonsmenu>
                <span className="text-sm font-['Hanken_Grotesk']">
                    Agende uma Visita 
                </span>
                <ArrowRight className="size-5"/>
            </Buttonsmenu>
            <Buttonsoutline>
              
                <span className="text-lime-950 text-sm font-semibold font-['Hanken_Grotesk']">
                    Conheça o Espaço
                </span>
            </Buttonsoutline>      
          </div>
        </div>
      </section>
      <section className=" flex-1 flex justify-center items-center">
        <div className="w-full min-h-87.5 md:min-h-138 md:max-w-110">
          <img src="./src/assets/Dogs.png" alt="Dogs" className="w-full h-full object-cover rounded-lg"/>
        </div>
      </section>
    </main>
  );
}

export default Home;
