import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Safe from "./pages/safe.jsx";
import { AirDao } from "./pages/strategies/airDao.jsx";
import { UltraDao } from "./pages/strategies/ultraDao.jsx";
import { SafeDao } from "./pages/strategies/safeDao.jsx";
import { BtcDao } from "./pages/strategies/btcDao.jsx";
import { AltDao } from "./pages/strategies/altDao.jsx";
import Home from "./pages/home.jsx";
import Swap from "./pages/swap.jsx";
import Swap_btcdao from "./pages/swap_btcdao.jsx";
import Swap_airdropdao from "./pages/swap_airdropdao.jsx";
import Swap_altporfoliodao from "./pages/swap_altporfoliodao.jsx";
import Swap_ultrdao from "./pages/swap_ultrdao.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { Provider } from "ankr-react";

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/strategies/btcdao" element={<BtcDao />} />
					<Route path="/strategies/altporfoliodao" element={<AltDao />} />
					<Route path="/strategies/ultrdao" element={<UltraDao />} />
					<Route path="/strategies/airdropdao" element={<AirDao />} />
					<Route path="/strategies/safedao" element={<SafeDao />} />
					<Route path="/strategies/btcdao/swap" element={<Swap_btcdao />} />
					<Route
						path="/strategies/altporfoliodao/swap"
						element={<Swap_altporfoliodao />}
					/>
					<Route path="/strategies/ultrdao/swap" element={<Swap_ultrdao />} />
					<Route
						path="/strategies/airdropdao/swap"
						element={<Swap_airdropdao />}
					/>
					<Route path="/strategies/safedao/swap" element={<Swap />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
