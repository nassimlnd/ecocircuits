import {Fragment, useState} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Label} from "flowbite-react";

export default function ComboboxProducts({allProducts, selectedProduct, setSelectedProduct}) {
    const [selected, setSelected] = useState();
    const [query, setQuery] = useState('');
    const [queryLength, setQueryLength] = useState(0);

    const filteredProducts = query === '' || queryLength < 3 ? [] : allProducts.filter((product) => product.libelle
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')))

    return (<>
        <Label htmlFor="allProducts">Choix du produit</Label>
        <div className="border border-gray-200 rounded">
            <Combobox id="combobox" value={selectedProduct} onChange={setSelectedProduct}>
                <div className="relative">
                    <div
                        className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            id="allProducts"
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            displayValue={(product) => product.libelle}
                            onChange={(event) => {
                                setQuery(event.target.value)
                                event.target.value ? setQueryLength(event.target.value.length) : setQueryLength(0);
                            }}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options
                            className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                            {(filteredProducts.length === 0 && query !== '') || queryLength === 0 ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Aucun produit trouvé.
                                </div>) : (filteredProducts.map((product) => (<Combobox.Option
                                key={product.id}
                                className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'}`}
                                value={product}
                            >
                                {({selected, active}) => (<>
                        <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {product.libelle}
                        </span>
                                    {selected ? (<span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>) : null}
                                </>)}
                            </Combobox.Option>)))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
        <div className="text-sm text-gray-500">Veuillez entrez les 3 premières lettre du produit</div>
    </>)
}
