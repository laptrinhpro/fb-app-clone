import { 
  MdHome, MdAccountCircle, 
  MdReorder, MdMenu, 
  MdNotifications, MdOndemandVideo
} from 'react-icons/md'

export const headerIcons = [
  {
    link: "/",
    icon: <MdHome size="28" />,
    notiNumber: 5,
    isNoti: false,
  },
  {
    link: "/account",
    icon: <MdAccountCircle size="28" />,
    notiNumber: 1,
    isNoti: true,
  },
  {
    link: "/videos",
    icon: <MdOndemandVideo size="28" />,
    notiNumber: 2,
    isNoti: true,
  },
  {
    link: "/noti",
    icon: <MdNotifications size="28" />,
    notiNumber: 185,
    isNoti: true,
  },
  {
    link: "/menu",
    icon: <MdMenu size="35" />,
    notiNumber: 0,
    isNoti: false,
  },
]
