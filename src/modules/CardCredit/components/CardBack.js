import classnames from 'classnames';

import cardBack from '../images/bg-card-back.png';
import styles from './styles.module.css';

const CardBack = ({ cvc = 'CVC'}) => {
    const spanProps = classnames("text-white text-bold sm:text-xs lg:text-lg", styles.cvc);
    return (
        <div className="relative lg:pl-16 lg:mt-12 sm:pl-0 sm:mt-0 max-w-max">
          <img className="sm:w-full lg:w-min" src={cardBack}  />
          <div className="sm:max-w-full absolute top-0 left-0">
            <span className={spanProps}>{cvc}</span>
          </div>
        </div>
    )
}

export default CardBack;