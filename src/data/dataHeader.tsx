//import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";

interface NavigationItem {
  name: string;
  to: string;
}

interface connectionitem {
  //iconID: TypeIdIcons;
  to: string;
  us: string;
  data: string;
}

const navigation: NavigationItem[] = [
  { name: "About Us", to: "/about_us" },
  { name: "Working with a glossary", to: "/glossary" },
  { name: "Learning", to: "/learning" },
  { name: "News", to: "/news" },
  { name: "Contacts", to: "/contacts" },
];
const connection: connectionitem[] = [
  {
    //iconID: "iPhone",
    to: "tel:405555-0128",
    us: "Call us",
    data: "(405) 555-0128",
  },
  {
    //iconID: "chat",
    to: "mailto:hello@createx.com",
    us: "Talk to us",
    data: "hello@createx.com",
  },
];

export { navigation, connection };
