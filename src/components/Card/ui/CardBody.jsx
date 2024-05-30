export function CardBody ({ title, description }) { 
    return (
        <div className="card__body">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{`${description.substring(0, 200)}...`}</p>
        </div> 
    )
}