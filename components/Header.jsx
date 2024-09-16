// components
import Logo from "./Logo";
import ButtonSecondary from "./ButtonSecondary";

const Header = () => {
  return (
    <header className="h-[80px] bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* logo */}
        <Logo />
        {/* btn */}
        <ButtonSecondary btnText="Get started" />
      </div>
    </header>
  );
};

export default Header;
