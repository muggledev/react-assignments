import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Naviagtion";
// import Dashboard from "./components/pages/Dashboard";
import ClockPage from "./components/pages/ClockPage";
import ColorChangerPage from "./components/pages/ColorChangerPage";
import CounterPage from "./components/pages/CounterPage";
import FontSizerPage from "./components/pages/FontSizerPage";
import GreetingPage from "./components/pages/GreetingPage";
import HidePage from "./components/pages/HidePage";
import RGBSliderPage from "./components/pages/RGBSliderPage";
import TextAlignmentPage from "./components/pages/TextAlignmentPage";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        {/* <Route path="/" component={Dashboard} /> */}
        <Route path="/clock" component={ClockPage} />
        <Route path="/color-changer" component={ColorChangerPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/font-sizer" component={FontSizerPage} />
        <Route path="/greeting" component={GreetingPage} />
        <Route path="/hide" component={HidePage} />
        <Route path="/rgb-slider" component={RGBSliderPage} />
        <Route path="/text-alignment" component={TextAlignmentPage} />
        <Redirect from="/" to="/clock" />
      </Switch>
    </div>
  );
}

export default App;
