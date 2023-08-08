import Link from "next/link"
import { links } from "@/constants/links"

export function LinksList({ navigatorContainerClass, linkClass }:{ navigatorContainerClass: string, linkClass: string }) {
    return (
        <ul className={navigatorContainerClass}>
            {
                links.map(link => {
                    return (
                        <li key={link.id} className={linkClass}>
                            <Link href={link.href}>
                                {link.description}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}