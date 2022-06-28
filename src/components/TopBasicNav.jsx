import "./TopBasicNav.css";
import prevBtn from "../assets/icon/icon-arrow-left.png";
import moreBtn from "../assets/icon/icon-more-vertical.png";

export default function TopBasicNav() {
  return (
    <nav className="topBasicNav">
      <button className="prevBtn"></button>
      <button className="moreBtn"></button>
    </nav>
  );
}
