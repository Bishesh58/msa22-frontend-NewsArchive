import {
  HomeIcon,
  HashtagIcon,
  HeartIcon,
  DesktopComputerIcon,
  BeakerIcon,
  VideoCameraIcon,
  OfficeBuildingIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import SidebarRow from "./SidebarRow";
export default function Sidebar() {
  return (
    <div className="flex flex-col px-4 col-span-2">
      <SidebarRow Icon={DesktopComputerIcon} title="Technology" />
      <SidebarRow Icon={OfficeBuildingIcon} title="Business" />
      <SidebarRow Icon={VideoCameraIcon} title="Entertainment" />
      <SidebarRow Icon={HeartIcon} title="Health" />
      <SidebarRow Icon={BeakerIcon} title="Science" />
      <SidebarRow Icon={SupportIcon} title="Sports" />
    </div>
  );
}
