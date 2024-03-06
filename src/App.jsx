import MainContainer from "./components/MainContainer";
import FooterComponent from "./components/footer/FooterComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";

function App() {
	return (
		<>
			<div className="flex flex-col justify-between mx-[100px]">
				<NavbarComponent />
				<MainContainer />
				<FooterComponent />
			</div>
		</>
	);
}

export default App;
