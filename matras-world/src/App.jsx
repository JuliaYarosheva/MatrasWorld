import "./App.scss";
import { Outlet } from "react-router-dom";
import PageFooter from "./components/footer/PageFooter";
import PageHeader from "./components/header/PageHeader";
import PageNav from "./components/navigation/PageNav";
import Breadcrumbs from "./components/Breadcrumbs";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <>
      <PageHeader />
      <PageNav />
      <div className="site-layout--default site-layout--primary">
        <div className="container">
          <div className="row">
            <Breadcrumbs />
            <SearchInput />
          </div>
        </div>
      </div>
      <Outlet />
      <PageFooter />
    </>
  );
}

export default App;
