import { useNavigate } from "react-router-dom";
import {
  NavigateBefore,
  NavigateNext,
  Refresh,
  Translate,
} from "@mui/icons-material";

export default function NavigationBar({
  innerMenu,
  paths,
}: {
  innerMenu: React.ReactNode[];
  paths: string[];
}) {
  const itemClassName =
    "text-white text-lg font-jetbrains hover:cursor-pointer";
  const basicFlex = "flex justify-between items center";
  return (
    <section className="bg-black/30 backdrop-blur-2xs w-full p-4 border-neutral-700 border-1">
      <ul className="flex justify-between gap-2 items-center text-white">
        <div className={basicFlex + " gap-4"}>
          <span className={basicFlex}>
            <NavigationItem
              icon=<NavigateBefore />
              className={itemClassName}
              link=""
            />
            <NavigationItem
              icon=<NavigateNext />
              className={itemClassName}
              link=""
            />
          </span>
          <NavigationItem icon=<Refresh /> className={itemClassName} link="" />
        </div>
        <NavigationItem icon=<Translate /> className={itemClassName} link="" />
      </ul>
      <div className="flex flex-col mt-4 md:flex-row md:gap-8">
        {innerMenu.map((node, i) => (
          <InnerMenuItem key={i} name={node as string} path={paths[i]} />
        ))}
      </div>
    </section>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  className: string;
  link: string;
}
const NavigationItem = (props: NavItemProps) => {
  return (
    <li className={props.className}>
      <a href={props.link}>{props.icon}</a>
    </li>
  );
};

const InnerMenuItem = (props: { name: string; path: string }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.path);
  }
  return (
    <span className="text-white text-lg font-jetbrains hover:cursor-pointer">
      {props.name}
    </span>
  );
}
