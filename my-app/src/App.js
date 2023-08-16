import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="flex">
        <Sidebar />
        <MainContainer>
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            blanditiis cum doloremque ea earum error excepturi fuga fugit ipsum,
            minima nesciunt nobis quas quibusdam quidem sint tempora tempore
            ullam voluptatum?
          </p>
        </MainContainer>
      </section>
    </div>
  );
}

export default App;