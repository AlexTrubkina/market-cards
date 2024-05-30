import { useState } from "react"

export function CardSwitch () { 
    const [active, setActive] = useState(false);

    const handleChange = () => {    
        setActive(!active) ;
    }

    return (
        <div className="card__switch">
            <button onClick={handleChange} style={{backgroundColor: active ? "#EDEDED" : ""}}>Стандарт</button>
            <button onClick={handleChange} style={{backgroundColor: active ? "" : "#EDEDED"}}>Двойной</button>
        </div>
    )
}