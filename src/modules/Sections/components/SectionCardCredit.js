import CardCredit from "../../CardCredit";
import bg from '../../../images/bg-main-desktop.png';

const SectionCardCredit = (props) => {
    return (
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
      )
}

export default SectionCardCredit;