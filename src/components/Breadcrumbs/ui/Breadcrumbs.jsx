import './style.scss'
export function Breadcrumbs ({ links }) { 
    return (
        <ul className="breadcrumbs">
            {
                links.map((link, index) => <li className="breadcrumbs__link" key={index}><a href={link.href}>{link.name}</a></li>)
            }
        </ul>
    )
}