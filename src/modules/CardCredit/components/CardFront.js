import classnames from 'classnames';

import Icon from '../../../Icons/';

import cardFront from '../images/bg-card-front.png';
import styles from './styles.module.css';

const CardFront = ({ 
    number = '0000 0000 0000 0000', 
    name = 'Jane Appleseed', 
    valid = '00/00'
}) => {
    const cardClasses = classnames("sm:absolute lg:relative max-w-max", styles.cardFront);
    const infosContanierClasses = classnames("sm:w-full sm:h-full sm:p-6 sm:absolute sm:top-0 max-w-max", styles.image);

    return (
        <div className={cardClasses}>
          <img className={styles.image} src={cardFront}  />
          <div className={infosContanierClasses}>
            <Icon name="CardLogo" />
            <div className="text-white sm:mt-6 lg:mt-12">
                <span className="block lg:text-[32px]">{number}</span>
                <div className="flex justify-between sm:mt-2">
                    <span className="block sm:text-xs lg:text-lg">{name.toUpperCase()}</span>
                    <span className="block sm:text-xs lg:text-lg">{valid}</span>
                </div>
                </div>
          </div>
        </div>
    )
}

export default CardFront;