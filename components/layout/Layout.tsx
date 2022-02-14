import Footer from "./Footer";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { server } from "../../config";

const Layout: React.FC = (props) => {
  const [districts, setDistricts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${server}/api/get-all/districts`)
        .then((res) => res.json());
      setDistricts(data);
    }

    fetchData();
  },[])

  return (
    <>
      <Navigation districts={districts} />
      <main>{props.children}</main>
      <Footer/>
    </>
  );
};

export default Layout