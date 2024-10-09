import Link from "next/link"

function Header() {
    return (
        <div className="flex justify-center items-center bg-blue-500 gap-10 h-10 text-white">
            <Link href={"/"}>
                Home
            </Link>
            <Link href={"/about"}>
                About
            </Link>
            <Link href={"/service"}>
                Services
            </Link>
           
        </div>
    )
}


export default Header