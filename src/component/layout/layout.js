import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer/footer";
import Header from "../../pages/header/header";

function Layout(props) {
  return (
    <>
      <Header />
      <p> {props.component}</p>
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
