import { GoHome, GoSearch, GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdExplore } from "react-icons/md";
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiPlusSquare, FiSearch } from "react-icons/fi";
import { RiMessengerLine, RiMessengerFill } from "react-icons/ri";
import { FaSquarePlus } from "react-icons/fa6";

export const SIDEBAR_MENU = [
  {
    id: "home",
    icon: GoHome,
    boldIcon: GoHomeFill,
    title: "Home",
    path: "/",
  },
  {
    id: "search",
    icon: GoSearch,
    boldIcon: FiSearch,
    title: "Search",
    path: "/search",
  },
  {
    id: "explore",
    icon: MdOutlineExplore,
    boldIcon: MdExplore,
    title: "Explore",
    path: "/explore",
  },
  {
    id: "reels",
    icon: BiMoviePlay,
    boldIcon: BiSolidMoviePlay,
    title: "Reels",
    path: "/reels",
  },
  {
    id: "messages",
    icon: RiMessengerLine,
    boldIcon: RiMessengerFill,
    title: "Messages",
    path: "/messages",
  },
  {
    id: "notifications",
    icon: FaRegHeart,
    boldIcon: FaHeart,
    title: "Notifications",
    path: "/notifications",
  },
  {
    id: "create",
    icon: FiPlusSquare,
    boldIcon: FaSquarePlus,
    title: "Create",
    path: "/create",
  },
];
