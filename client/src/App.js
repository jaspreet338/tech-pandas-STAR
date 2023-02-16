import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/dashboard" element={<Dashboard />} />
	</Routes>
);

export default App;
