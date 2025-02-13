import Footer from "./components/Footer";
import { Cases, Cover, Differential, Form, InfiniteAnimation, InitialPresentation, Numbers, Slider, VideoPresentation } from "./components/Sessions";

function App() {
  return (
    <div>
      <Cover />
      <InitialPresentation />
      <VideoPresentation />
      <InfiniteAnimation />
      <Differential />
      <Slider />
      <Cases />
      <Numbers />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
