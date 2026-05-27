import { Button } from "flowbite-react";

const outlinebutton =
  "rounded-full bg-white border border-[#C2C9BB] hover:border hover:bg-[#F2F4F0] px-9 md:px-6 transition-all cursor-pointer gap-2 flex items-center ";
function Buttonsoutline({ children }) {
  return <Button className={outlinebutton}>{children}</Button>;
}

export default Buttonsoutline;
