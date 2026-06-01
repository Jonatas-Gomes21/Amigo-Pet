import {
  Button,
  MegaMenu,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

function Header() {
  const navLinkClass =
    "relative group text-stone-700 text-[15px] font-['Hanken_Grotesk'] leading-6 font-normal hover:text-stone-900 transition-colors";

  const underlineClass =
    "absolute -bottom-1 left-0 w-full h-0.5 bg-lime-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";

  return (
    <MegaMenu className="border-b ">
      <NavbarBrand as={Link} to="/">
        <img
          alt="Amigo Verde Logo"
          src="/Icon.svg"
          className="mr-2 size-5 sm:h-9"
        />
        <span className="self-center whitespace-nowrap text-2xl font-bold font-['Quicksand'] text-lime-950">
          Amigo Pet
        </span>
      </NavbarBrand>

      <div className="order-2 hidden items-center md:flex">
        <Link to="/agendar">
          <Button className="rounded-full bg-[#154212] hover:bg-[#0f310d] transition-all cursor-pointer gap-1 flex items-center">
            <span className="text-sm font-['Hanken_Grotesk']">
              Agendar Serviço
            </span>
            <CalendarDays className="size-4" />
          </Button>
        </Link>
      </div>

      <NavbarToggle />

      <NavbarCollapse>
        <Link to={"/servicos"} className={navLinkClass}>
          Serviços
          <span className={underlineClass}></span>
        </Link>

        <Link to={"/sobrenos"} className={navLinkClass}>
          Sobre Nós
          <span className={underlineClass}></span>
        </Link>

        <Link to={"/contato"} className={navLinkClass}>
          Contato
          <span className={underlineClass}></span>
        </Link>
      </NavbarCollapse>
    </MegaMenu>
  );
}

export default Header;
