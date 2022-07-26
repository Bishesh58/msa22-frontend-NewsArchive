import { motion } from "framer-motion";
import { useAppDispatch } from "../app/hooks";
import { getHeadlines } from "../slices/newsSlice";

type Props = {};

export default function Navbar({}: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className="px-4 max-w-7xl mx-auto flex items-center  sticky space-x-4 py-4 font-Lato border-b-2 ">
      <div className="flex items-center justify-start space-x-4 flex-grow">
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          onClick={() => dispatch(getHeadlines())}
          src="news_logo.png"
          alt="logo"
          className="w-10 h-10 cursor-pointer"
        />
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="sm:text-xl md:text-2xl lg:text-3xl font-bold"
        >
          News Archive
        </motion.p>
      </div>
    </div>
  );
}
