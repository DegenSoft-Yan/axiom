import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../css/swap.css";
import Header from "../componets/swap_components/header.jsx";
import Dashboard from "../componets/dashboard_components/dashboard_.jsx";
import TransactionHistory from "../componets/swap_components/transactionHistory.jsx";
import Footer from "../componets/dashboard_components/footer.jsx";
import { Providers } from "../Providers.js";

function App() {
	return (
		<>
			<div className="main_swap">
				<Providers>
					<Header />
					<Dashboard />
					<TransactionHistory />
					<Footer />
				</Providers>
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
