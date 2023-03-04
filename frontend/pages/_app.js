import "../styles/globals.css";
import { NavBar } from "../components/componentsindex.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

