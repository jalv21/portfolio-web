import {
  NavigateBefore,
  NavigateNext,
  Refresh,
  Translate,
} from "@mui/icons-material";

export default function NavigationBar({
  innerMenu,
}: {
  innerMenu: React.ReactNode[];
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
      <div className="flex flex-col mt-4 md:flex-row md:justify-center md:gap-8">
        {innerMenu.map((node, i) => (
          <span key={i} className={itemClassName}>
            {node}
          </span>
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
