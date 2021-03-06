import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { useState } from "react";
import Link from "next/link";
import { IDistrict } from "../../utils/interfaces";

export interface INavigation {
  districts: IDistrict[];
}

const Navigation: React.FC<INavigation> = ({ districts }) => {
  const [isMenuOpen, setMenu] = useState(false);
  const menuHandler = () => {
    isMenuOpen ? setMenu(false) : setMenu(true);
  };

  return (
    <div className="fixed z-30 w-full">
      <div className="bg-teal-500 flex flex-row content-center justify-between px-2 py-2">
        <Logo />

        <span className="hidden md:flex text-4xl text-orange-700 font-extrabold self-center mx-auto">
          WOOF MEETUP
        </span>
        <div>
          <MenuButton onClick={menuHandler} />
        </div>
      </div>
      {isMenuOpen ? (
        <div className="bg-teal-200 text-yellow-700 font-semibold text-center md:text-right md:pr-2">
          <ul className="flex flex-col">
            {districts.map((item) => (
              <li key={item.slug} className="px-2 py-2.5 ">
                <Link href={`/district/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
