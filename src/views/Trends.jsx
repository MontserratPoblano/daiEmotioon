
import TrendsView from "../Components/Calendar";
import CurrentDate from "../Components/CurrentDate";
import NavBar from "../Components/NavBar";
function Trends() {
  return (
    <>
      <NavBar/>
      <CurrentDate />
      <TrendsView />
    </>
  );
}

export default Trends;
