import "./style.scss"
import { CardImage } from "./CardImage"
import { CardBody } from "./CardBody"
import { CardSwitch } from "./CardSwitch"
import { CardFooter } from "./CardFooter"

export function Card ({ name, description, price, imgSrc }) {
    return (
        <div className="card">
            <CardImage imgSrc={imgSrc} />
            <CardBody title={name} description={description} />
            <CardSwitch />
            <CardFooter price={price} />
        </div>
    )
}