import classnames from 'classnames';

import Icon from '../../../Icons/';

import cardFront from '../images/bg-card-front.png';
import styles from './styles.module.css';

import { useCardCreditContext } from '../../../context';
const mockCredit = {
    number: '0000 0000 0000 0000', 
    name: 'Jane Appleseed', 
    valid: '00/00'
}

const CardFront = ({ props }) => {
    const { cardCredit } = useCardCreditContext();
    const { cardNumber: number, cardName: name, monthyValid, yearValid } = cardCredit;
    
    const validMonthy = monthyValid || '00';
    const validYear = yearValid || '00';

    const valid = `${validMonthy}/${validYear}`;

    const cardClasses = classnames("sm:absolute lg:relative max-w-max", styles.cardFront);
    const infosContanierClasses = classnames("sm:w-full sm:h-full sm:p-6 sm:absolute sm:top-0 max-w-max", styles.image);

    return (
        <div className={cardClasses}>
          <img className={styles.image} src={cardFront}  />
          <div className={infosContanierClasses}>
            <Icon name="CardLogo" />
            <div className="text-white sm:mt-6 lg:mt-12">
                <span className="block lg:text-[32px]">{number || mockCredit['number']}</span>
                <div className="flex justify-between sm:mt-2">
                    <span className="block sm:text-xs lg:text-lg">{name.toUpperCase() || mockCredit['name'].toUpperCase() }</span>
                    <span className="block sm:text-xs lg:text-lg ml-3">{valid || mockCredit['valid']}</span>
                </div>
                </div>
          </div>
        </div>
    )
}

export default CardFront;