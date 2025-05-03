import card1 from "../../assets/all_image/images/icons/1.png";
import card2 from "../../assets/all_image/images/icons/2.png";
import card3 from "../../assets/all_image/images/icons/3.png";
import card4 from "../../assets/all_image/images/icons/4.png";

const Card = () => {
  return (
    <div className="bg-[#ECEAE3] py-10 px-14">
      {/* card no-1 */}
      <div>
        <img className="mb-3" src={card1} alt="" />
        <h4 className="font-bold text-xl text-[#331A15] opacity-100">Awesome Aroma</h4>
        <p className="text-[#1B1A1A] opacity-100">
          You will definitely be a fan of the <br />  design & aroma of your coffee
        </p>
      </div>
      {/* card no-2 */}
      <div>
        <img className="mb-3" src={card2} alt="" />
        <h4 className="font-bold text-xl text-[#331A15] opacity-100">High Quality</h4>
        <p className="text-[#1B1A1A] opacity-100">
        We served the coffee to you <br /> maintaining the best quality
        </p>
      </div>
      {/* card no-3 */}
      <div>
        <img className="mb-3" src={card3} alt="" />
        <h4 className="font-bold text-xl text-[#331A15] opacity-100">Pure Grades</h4>
        <p className="text-[#1B1A1A] opacity-100">
        The coffee is made of the green <br /> coffee beans which you will love
        </p>
      </div>
      {/* card no-2 */}
      <div>
        <img className="mb-3" src={card2} alt="" />
        <h4 className="font-bold text-xl text-[#331A15] opacity-100">High Quality</h4>
        <p className="text-[#1B1A1A] opacity-100">
        We served the coffee to you <br /> maintaining the best quality
        </p>
      </div>
    </div>
  );
};

export default Card;
