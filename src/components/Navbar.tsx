type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="px-4 max-w-7xl mx-auto flex items-center  sticky space-x-4 py-4 font-Lato border-b-2 ">
      <div className="flex items-center justify-start space-x-4 flex-grow">
        <img src="favicon.png" alt="logo" className="w-10 h-10" />
        <p className="sm:text-xl md:text-2xl lg:text-3xl font-bold">
          News Archive
        </p>
      </div>

      <p className="text-center font-thin text-sm lg:text-lg tracking-wider">
        "Get updated with the latest news around the world!"
      </p>
    </div>
  );
}
