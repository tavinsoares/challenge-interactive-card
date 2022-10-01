import CardBack from './components/CardBack';
import CardFront from './components/CardFront';

const CardCredit = () => {

    return(
        <>
            <CardBack />
            <div className="relative">
                <CardFront />
            </div>
        </>
    )
}

export default CardCredit;