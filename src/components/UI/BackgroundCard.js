import sunnyMorning from "../../images/sunnyMorning.jpg";
import sunnyAfternoon from "../../images/sunnyAfternoon.jpg";
import sunnyEvening from "../../images/sunnyEvening.jpg";
import sunnyNight from "../../images/sunnyNight.jpg";
import rainyAfternoon from "../../images/rainyAfternoon.jpg";
import rainyEvening from "../../images/rainyEvening.jpg";
import rainyMorning from "../../images/rainyMorning.jpg";
import winterAfternoon from "../../images/winterAfternoon.jpg";
import winterEvening from "../../images/winterEvening.jpg";
import winterMorning from "../../images/winterMorning.jpg";
import winterNight from "../../images/winterNight.jpg";
import rainyNight from "../../images/rainyNight.jpg";

const currrentTime = 10
let mainImage = winterAfternoon

if(currrentTime > 5 & currrentTime < 12){
    mainImage = sunnyMorning
}else{
    mainImage = sunnyAfternoon
}

const BackgroundCard = (props) => {
    const mystyle = {
        backgroundImage: `url("${mainImage}")`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        height: '95vh',
      };
    
    return(
        <div style={mystyle}>{props.children}</div>
    )
}

export default BackgroundCard