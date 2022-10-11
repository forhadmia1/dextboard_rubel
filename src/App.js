import "./style/global.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Dextboard from "./page/Dextboard";
import LiveNewPair from "./page/LiveNewPair";
import PairExplorer from "./page/PairExplorer";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dextboard />} />
          <Route path="dextboard" element={<Dextboard />} />
          <Route path="livenewpair" element={<LiveNewPair />} />
          <Route path="pairexplorer" element={<PairExplorer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
