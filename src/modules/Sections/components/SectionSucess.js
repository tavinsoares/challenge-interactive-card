import Icon from '../../../Icons';
import Button from '../../../components/Button';
import Section from './Section';

const SectionSucess = ({ sucess, setSucess, ...props }) => {
    if(!sucess){
        return null;
    }

    return(
        <Section>
            <Icon name="Complete" />
            <span className="block sm:text-[32px] text-purple-dark font-bold sm:mt-8">THANK YOU!</span>
            <span className="block sm:text-xl sm:mt-8">We've added your card details</span>
            <div className="w-full sm:mt-8 sm:h-14 sm:px-8">
                <Button onClick={() => setSucess(false)}>
                    Continue
                </Button> 
            </div>
        </Section>
    )
}

export default SectionSucess;