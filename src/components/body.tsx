import { ColorSelectorOne } from "./complement/colorSelectorOne";
import { Pallets } from "./complement/colorSelectorTwo";

export function Body() {
  return (
    <div className="flex">
      <ColorSelectorOne />
      <Pallets />
    </div>
  );
}
