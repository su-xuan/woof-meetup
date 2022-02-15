import Footer from "./Footer";
import Navigation from "./Navigation";
import { useRouter } from 'next/router';
import { ILayout } from "../../utils/interfaces";


const Layout: React.FC<ILayout> = ({children, districts}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navigation districts={districts} />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout