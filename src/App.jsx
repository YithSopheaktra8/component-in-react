import MainContainer from "./component/MainContainer";
import FooterComponent from "./component/footer/FooterComponent";
import NavbarComponent from "./component/navbar/NavbarComponent";

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
