import RGBSlider from "../widgets/RGBSlider";

export default function RGBSliderPage() {
  return (
    <div>
      <h2>RGB Slider Widget</h2>
      <p>
        This widget lets users adjust red, green, and blue values using sliders
        to create custom colors. The color box updates in real time to reflect
        the selected RGB combination.
      </p>
      <RGBSlider />
    </div>
  );
}
