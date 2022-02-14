import Footer from "./Footer";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

const Layout: React.FC = (props) => {
  const [districts, setDistricts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api/get-all/districts')
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