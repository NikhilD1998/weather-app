import sunnyMorning from "../../images/sunnyMorning.jpg";
import sunnyAfternoon from "../../images/sunnyAfternoon.jpg";
import sunnyEvening from "../../images/sunnyEvening.jpg";
import sunnyNight from "../../images/sunnyNight.jpg";
import rainyAfternoon from "../../images/rainyAfternoon.jpg";
import rainyEvening from "../../images/rainyEvening.jpg";
import rainyMorning from "../../images/rainyMorning.jpg";
//import winterAfternoon from "../../images/winterAfternoon.jpg";
import winterEvening from "../../images/winterEvening.jpg";
import winterMorning from "../../images/winterMorning.jpg";
import winterNight from "../../images/winterNight.jpg";
import rainyNight from "../../images/rainyNight.jpg";

const BackgroundCard = (props) => {

  const today = new Date();
  const currentHour = today.getHours();
  let mainImage = rainyNight;
  let currentDescription = ''

  const mystyle = {
    backgroundImage: `url("${mainImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "95vh",
    backgroundPosition: "center",
    marginTop: "-30px",
  };

  return <div style={mystyle}>{props.children}</div>;
};

export default BackgroundCard;
