import Bathrooms from "./Bathrooms";
import Location from "./Location";
import MinMaxFilter from "./MinMaxFilter";
import Overnight from "./Overnight";
import Pool from "./Pool";
import Rooms from "./Rooms";

export default function NavLeftPart() {
  return (
    <div>
      <Location />
      <MinMaxFilter />
      <Overnight />
      <Rooms />
      <Bathrooms />
      <Pool />
    </div>
  );
}
