import SideBarContent from "./SideBarContent";
import Logo from "./Logo"

function SideBar() {
  return (
    <>
      <div class="flex-wrap w-[360px]">
        <Logo />
        <SideBarContent />
      </div>
    </>
  );
}
export default SideBar;
