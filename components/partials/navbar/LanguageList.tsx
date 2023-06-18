import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { BsCheck, BsChevronDown, BsChevronExpand } from 'react-icons/bs'

const people = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Urdu' },
    { id: 3, name: 'Arabic' },
    { id: 4, name: 'Bengali' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function LanguageList() {
    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState({ id: 1, name: 'English' })
    console.log(selectedPerson);


    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative mt-2 text-base 2xl:text-xl">
                <Combobox.Input
                    className="w-full rounded-2xl small-component-color border-0 border-transparent outline-none focus:outline-[#3DFFDC] py-4 pl-4 pr-10 text-base 2xl:text-xl text-white shadow-sm sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(data: any) => data?.name}

                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <BsChevronExpand className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ">
                        {filteredPeople.map((person) => (
                            <Combobox.Option
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-4 pl-3 pr-9',
                                        active ? 'bg-gray-800 text-white' : 'text-gray-200'
                                    )
                                }
                            >
                                {({ active, selected }: any) => (
                                    <>
                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active ? 'text-white' : 'text-gray-200'
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
    )
}
