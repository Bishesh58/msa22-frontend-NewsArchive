import { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

export default function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-200 group ">
      <Icon className="h-6 w-6"/>
      <p className="group-hover:text-primary hidden md:inline-flex text-base font-light lg:text-lg">{title}</p>
    </div>
  );
}
