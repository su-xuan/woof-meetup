import Image from "next/image";
import Button from "../ui/Button";

interface IMenuButton {
    onClick: ()=> void
}
const MenuButton: React.FC<IMenuButton> = ({onClick}) => {
  return (
 <Button ariaLabel="menu" onClick={onClick} >
     <Image src='/icons/menu-icon.svg' alt='menu' width={30} height={40}/>
 </Button>
  );
};

export default MenuButton;
