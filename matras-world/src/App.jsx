import "./App.scss";
import PageFooter from "./components/footer/PageFooter";
import PageHeader from "./components/header/PageHeader";
import MainContent from "./components/main/MainContent";
import PageNav from "./components/navigation/PageNav";

function App() {
  return (
    <>
      <PageHeader />
      <PageNav />
      <MainContent />
      <PageFooter />
    </>
  );
}

export default App;
