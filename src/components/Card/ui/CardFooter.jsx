import { Button } from "../../Button";

export function CardFooter ({price}) { 
    return (
        <div className="card__footer">
            <p className="card__price">{price} ₽</p>
            <Button>Заказать</Button>
        </div>
    )
}