import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import Logo from "./components/Logo";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
