import Section from './Section';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useCardCreditContext } from '../../../context';

const SectionForm = ({ 
    onSubmit = () => {}
 }) => {
     const { 
        cardCredit,
        setCardCredit
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

        onSubmit(e)
    }

    const validateCardNumber = (value) => {
       return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
    }

    const validateCVCNumber = (value) => {
        return value.replace(/\s/g, "").substr(0, 3)  || ""
    }

    return (
        <Section classContainer="sm:px-4"  classInnerContainer="sm:pt-12 sm:mt-12 lg:pt-0 lg:mt-0">
            <form className="w-full" onSubmit={handlerSubmit}>
                <Input
                    id="cardName"
                    name="cardName"
                    type="text"
                    inputMode="text"
                    value={cardName}
                    onChange={(e) => setCardCredit(state => ({
                        ...state,
                        cardName: e.target.value
                    }))}
                    label="CARDHOLDER NAME"
                    placeholder="e.g Jane Appleseed"
                />
                <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="tel"
                    inputMode="numeric"
                    containerClassName="mt-6"
                    value={cardNumber}
                    onChange={(e) => 
                        setCardCredit(state => ({
                            ...state,
                            cardNumber: validateCardNumber(e.target.value)
                        }))
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
                            value={monthyValid}
                            onChange={(e) => setCardCredit(state => ({
                                ...state,
                                monthyValid: e.target.value
                            }))}
                            placeholder="MM"
                        />
                        <Input
                            id="yearValid"
                            name="yearValid"
                            type="tel"
                            inputMode="numeric"
                            containerClassName="w-1/2 pr-3"
                            value={yearValid}
                            onChange={(e) => setCardCredit(state => ({
                                ...state,
                                yearValid: e.target.value
                            }))}
                            placeholder="YY"
                        />
                    </div>
                    </div>
                    <Input
                        id="cvc"
                        name="cvc"
                        type="tel"
                        containerClassName="w-1/3 justify-end h-full"
                        value={cvc}
                        onChange={(e) => setCardCredit(state => ({
                            ...state,
                            cvc: validateCVCNumber(e.target.value)
                        }))}
                        label="CVC"
                        placeholder="e.g 123"
                    />
                </div>
                <div className="w-full sm:mt-8 sm:h-14">
                    <Button type="submit">
                        Continue
                    </Button> 
                </div>
            </form>
        </Section>
    )

}

export default SectionForm;