import { Button } from "flowbite-react"


function Buttonsmenu({children}) {

    const colorbutton = "rounded-full bg-[#154212] hover:bg-[#0f310d] px-9 md:px-6 transition-all cursor-pointer gap-2 flex justify-center items-center"
    return(
        <Button className={colorbutton}>
            {children}
        </Button>
    )
}

export default Buttonsmenu


