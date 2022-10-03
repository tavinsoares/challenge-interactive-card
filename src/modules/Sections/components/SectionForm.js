import Section from './Section';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useCardCreditContext } from '../../../context';

const SectionForm = () => {
     const { 
        cardCredit,
        setCardCredit,
        changeSucess
     } = useCardCreditContext();
     const {
        cardNumber,
        cardName,
        monthyValid,
        yearValid,
        cvc,
     } = cardCredit;

    const handlerSubmit = (e) => {
        e.preventDefault();

        changeSucess(true);
    }

    const hasError = cardName['hasError'] || cardNumber['hasError'] || monthyValid['hasError'] || yearValid['hasError'] || cvc['hasError'] 
    const valuesCompleted = Object.keys(cardCredit).filter(value => cardCredit[value].value !== '');
    const isAllComplted = Object.keys(cardCredit).length === valuesCompleted.length

    return (
        <Section classContainer="sm:px-4"  classInnerContainer="sm:pt-12 sm:mt-12 lg:pt-0 lg:mt-0">
            <form className="w-full" onSubmit={handlerSubmit}>
                <Input
                    id="cardName"
                    name="cardName"
                    type="text"
                    inputMode="text"
                    value={cardName['value']}
                    hasError={cardName['hasError']}
                    msgError={cardName['msgError']}
                    onChange={(e) => setCardCredit('cardName', e.target.value)}
                    label="CARDHOLDER NAME"
                    placeholder="e.g Jane Appleseed"
                />
                <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="tel"
                    inputMode="numeric"
                    containerClassName="mt-6"
                    value={cardNumber['value']}
                    hasError={cardNumber['hasError']}
                    msgError={cardNumber['msgError']}
                    onChange={(e) => 
                        setCardCredit('cardNumber', e.target.value)
                    }
                    label="CARD NUMBER"
                    placeholder="e.g 1234 5678 9123 0000"
                />
                <div className="flex justify-between mt-6">
                    <div className="w-2/3">
                    <label className="block text-purple-dark font-bold text-sm mb-2">EXP. DATE (MM/YY)</label>
                    <div className="flex ">
                        <Input
                            id="monthyValid"
                            name="monthyValid"
                            type="tel"
                            inputMode="numeric"
                            containerClassName="w-1/2 pr-3"
                            value={monthyValid['value']}
                            hasError={monthyValid['hasError'] || yearValid['hasError']}
                            msgError={monthyValid['msgError'] || yearValid['msgError']}
                            onChange={(e) => setCardCredit('monthyValid', e.target.value)}
                            placeholder="MM"
                        />
                        <Input
                            id="yearValid"
                            name="yearValid"
                            type="tel"
                            inputMode="numeric"
                            containerClassName="w-1/2 pr-3"
                            value={yearValid['value']}
                            hasError={monthyValid['hasError'] || yearValid['hasError']}
                            onChange={(e) => setCardCredit('yearValid', e.target.value)}
                            placeholder="YY"
                        />
                    </div>
                    </div>
                    <Input
                        id="cvc"
                        name="cvc"
                        type="tel"
                        containerClassName="w-1/3 justify-end h-full"
                        value={cvc['value']}
                        hasError={cvc['hasError']}
                        msgError={cvc['msgError']}
                        onChange={(e) => setCardCredit('cvc', e.target.value)}
                        label="CVC"
                        placeholder="e.g 123"
                    />
                </div>
                <div className="w-full sm:mt-8 sm:h-14">
                    <Button disabled={hasError || !isAllComplted} type="submit">
                        Continue
                    </Button> 
                </div>
            </form>
        </Section>
    )

}

export default SectionForm;