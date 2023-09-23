interface Props {
  tabs: {
    name: string;
    params: string;
  }[];
  tab: string;
  setTab: any;
}

const HomeGroupButton = ({ tabs, tab, setTab }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <ul className=" rounded-full component-color flex items-center">
        {tabs.map((item, i) => {
          return (
            <li
              onClick={() => setTab(item.params)}
              className={`${(item.params == tab || (i == 0 && !tab)) && " text-white"
                } cursor-pointer px-6 md:px-8 2xl:px-14 py-2 text-xs 2xl:text-base text-neutral-400 hover:text-white font-semibold transition-all`}
              key={item.params}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeGroupButton;
