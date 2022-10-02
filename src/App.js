import { useState } from 'react';
import { SectionCardCredit, SectionSucess, SectionForm } from './modules/Sections'
import { CardCreditContext } from './context'

function App() {
  const [sucess, setSucess] = useState(false);
  const [cardCredit, setCardCredit] = useState(() => ({ 
    cardName: '',
    cardNumber: '',
    monthyValid: '',
    yearValid: '',
    cvc: ''
  }));

  return (
    <CardCreditContext.Provider value={{ 
      sucess, 
      setSucess,
      cardCredit,
      setCardCredit
      }}>
      <div className="lg:flex sm:block">
        <SectionCardCredit />
        <SectionSucess />
        {!sucess && <SectionForm onSubmit={(e) => { setSucess(true) }} />}
        </div>
      </CardCreditContext.Provider>
  );
}

export default App;
