import Logo from "./Departments";

export default function Header() {
  return (
    <div className="flex justify-around gap-2 items-center  py-[24px] [@media(max-width:524px)]:gap-[10px]">
      <Logo />
    </div>
  );
}
