import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { BsCheck, BsChevronDown, BsChevronExpand } from "react-icons/bs";

const filter = [
  { id: 1, name: "Filter by" },
  { id: 2, name: "ASC" },
  { id: 3, name: "DESC" },
  { id: 4, name: "Modified" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Farm_Filterby() {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState({
    id: 1,
    name: "Filter by",
  });

  const filteredFilter =
    query === ""
      ? filter
      : filter.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedFilter} onChange={setSelectedFilter}>
      <div className="relative ">
        <Combobox.Input
          className="w-auto rounded-md bg-black border border-[#0033AD] outline-none focus:outline-[#3DFFDC] p-3 text-base font-medium text-white shadow-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(data: any) => data?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <BsChevronExpand
            className="h-5 w-5 text-[#0084FF]"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredFilter.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ">
            {filteredFilter.map((item) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-4 pl-3 pr-9",
                    active ? "bg-gray-800 text-white" : "text-gray-200"
                  )
                }
              >
                {({ active, selected }: any) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {item.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-gray-200"
                        )}
                      >
                        <BsCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
