import card1 from "../../assets/all_image/images/icons/1.png";
import card2 from "../../assets/all_image/images/icons/2.png";
import card3 from "../../assets/all_image/images/icons/3.png";
import card4 from "../../assets/all_image/images/icons/4.png";

const Card = () => {
  return (
    <div className="bg-[#ECEAE3]">
      {/* card no-1 */}
      <div>
        <img src={card1} alt="" />
        <h4 className="font-bold text-xl">Awesome Aroma</h4>
        <p className="text-gray-500">
          You will definitely be a fan of the design <br /> & aroma of your coffee
        </p>
      </div>
    </div>
  );
};

export default Card;
