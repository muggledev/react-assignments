import ColorChanger from "./ColorChanger";
import Clock from "./Clock";
import TextAlignment from "./TextAlignment";
import RGBSlider from "./RGBSlider";
import FontSizer from "./FontSizer";

function App() {
  return (
    <div>
      <FontSizer />
      <TextAlignment />
      <Clock />
      <ColorChanger />
      <RGBSlider />
    </div>
  );
}

export default App;
