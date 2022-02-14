import Logo from "./Logo";

const Footer: React.FC = ()=> (
    <div className="flex flex-col md:flex-row justify-between bg-teal-500 p-2">
        <Logo/>
        <span className="font-thin text-xs text-orange-700 md:self-center">&copy;2022 Woof Meetup</span>
    </div>
)

export default Footer