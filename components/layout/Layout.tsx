import Footer from "./Footer";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { server } from "../../config";

const Layout: React.FC = (props) => {
  const [districts, setDistricts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${server}/api/get-all/districts`)
        .then((res) => res.json());
      setDistricts(data);
    }
    fetchData();
  },[])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navigation districts={districts} />
      <main>{props.children}</main>
      <Footer/>
    </>
  );
};

export default Layout