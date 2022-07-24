type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-col  items-center sticky space-y-4 py-4 font-Lato">
      <div className="flex items-center justify-center space-x-4">
        <img src="favicon.png" alt="logo" className="w-10 h-10" />
        <p className="text-3xl font-bold">News Archive</p>
      </div>

      <p className="font-thin text-lg leading-4 tracking-wider ">
        "Get updated with the latest news around the world!"
      </p>
      <div className="w-[80%] border-[2px] bg-teal-800 "></div>
    </div>
  );
}
