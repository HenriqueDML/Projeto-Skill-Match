import Link from "next/link";
 
interface NavBarProps {
    active: "dashboard" | "profissionais" | "times" | "feedbacks" | "login";
}
 
export default function NavBar(props:NavBarProps){
    const {active} = props
    const activeClass = "border-b-3  border-green-600 pb-4"
 
    const links = [
        {link: "/dashboard", label: "dashboard"},
        {link: "/feedbacks", label: "feedbacks"},
        {link: "/professionals", label: "profissionais"},
        {link: "/times", label: "times"},
    ]
 
    return(
        <nav className="flex px-6 pt-6 items-center bg-slate-900 justify-between">
            <h1 className="text-4xl font-bold">SkillMatch</h1>
            <ul className="flex gap-6 text-xl">
                {
                    links.map((link, index) =>
                            <li key={index} className={link.label === active? activeClass : ""}><Link href={link.link}>{link.label}</Link></li>      
                    )
                }
 
            </ul>
            <img className="size-12 rounded-full" src="https://github.com/larissa557197.png" alt="" />
        </nav>
    )
}