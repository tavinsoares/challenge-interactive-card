import { useState } from 'react';
import { SectionCardCredit, SectionSucess, SectionForm } from './modules/Sections'

function App() {
  const [sucess, setSucess] = useState(false)
  return (
    <div className="lg:flex sm:block">
      <SectionCardCredit />
      <SectionSucess sucess={sucess} setSucess={setSucess} />
      {!sucess && <SectionForm onSubmit={(e) => { setSucess(true) }} />}
    </div>
  );
}

export default App;
