import { SectionCardCredit, SectionSucess, SectionForm } from './modules/Sections'
import { CardCreditContext, useCardCredit } from './context'

function App() {
  const { sucess, ...state } = useCardCredit();

  return (
    <CardCreditContext.Provider value={{ 
      sucess,
      ...state
      }}>
      <div className="lg:flex sm:block">
        <SectionCardCredit />
        <SectionSucess />
        {!sucess && <SectionForm />}
        </div>
      </CardCreditContext.Provider>
  );
}

export default App;
