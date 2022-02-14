import Image from "next/image";
import Button from "../ui/Button";
const Logo: React.FC = () => {
  return (
    <Button ariaLabel="home" link="/">
      <Image src="/icons/logo.svg" alt="woof-meetup logo" height={50} width={50} />
    </Button>
  );
};

export default Logo;
