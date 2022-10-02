import { useState } from 'react';
import Section from './Section';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const SectionForm = ({ 
    onSubmit = () => {}
 }) => {
    const [value, setValue] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();

        onSubmit(e)

    }

    return (
        <Section classContainer="sm:px-4"  classInnerContainer="sm:pt-12 sm:mt-12 lg:pt-0 lg:mt-0">
            <form className="w-full" onSubmit={handlerSubmit}>
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="CARDHOLDER NAME"
                    placeholder="e.g Jane Appleseed"
                />
                <Input
                    containerClassName="mt-6"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="CARD NUMBER"
                    placeholder="e.g 1234 5678 9123 0000"
                />
                <div className="flex justify-between mt-6">
                    <div className="w-2/3">
                    <label className="block text-purple-dark font-bold text-sm mb-2">EXP. DATE (MM/YY)</label>
                    <div className="flex ">
                        <Input
                            containerClassName="w-1/2 pr-3"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="MM"
                        />
                        <Input
                            containerClassName="w-1/2 pr-3"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="YY"
                        />
                    </div>
                    </div>
                    <Input
                        containerClassName="w-1/3 justify-end h-full"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
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
            {value}
        </Section>
    )

}

export default SectionForm;