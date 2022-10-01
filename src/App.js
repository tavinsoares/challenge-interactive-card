import bg from './images/bg-main-desktop.png';
import CardCredit from './CardCredit';

function App() {
  return (
    <>
      <section 
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat'
      }} 
      className="container pb-12 pl-14 pt-8 pr-4 lg:py-0 lg:px-0 lg:h-screen">
          <div className="inner-container sm:block lg:flex lg:flex-col-reverse lg:justify-center lg:h-full">
            <CardCredit />
          </div>
      </section>
    </>
  );
}

export default App;
