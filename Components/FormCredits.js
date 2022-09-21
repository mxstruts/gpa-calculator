import {useState} from 'react'

function FormCredits(props) {
    const [searchValueClass1, setSearchValueClass1] = useState('0')
    const [searchValueClass2, setSearchValueClass2] = useState('0')
    const [searchValueClass3, setSearchValueClass3] = useState('0')
    const [searchValueClass4, setSearchValueClass4] = useState('0')
    const [searchValueClass5, setSearchValueClass5] = useState('0')
    const [searchValueClass6, setSearchValueClass6] = useState('0')
    const [totalGpa, setTotalGpa] = useState('0')

    let Summa = 0

    const sum = (a, b, c, d) => {
        let sum = parseInt(a) * parseInt(b) + parseInt(c) * parseInt(d)
        return setTotalGpa(sum)
    }

    return (
        <div className="pt-8">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Class 1
                        </label>
                    </div>
                    <div className="md:w-1/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Credits"
                            value={searchValueClass1}
                            onChange={(e) =>
                                setSearchValueClass1(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Class 2
                        </label>
                    </div>
                    <div className="md:w-1/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Credits"
                            value={searchValueClass2}
                            onChange={(e) =>
                                setSearchValueClass2(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Class 3
                        </label>
                    </div>
                    <div className="md:w-1/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Credits"
                            value={searchValueClass3}
                            onChange={(e) =>
                                setSearchValueClass3(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Class 4
                        </label>
                    </div>
                    <div className="md:w-1/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Credits"
                            value={searchValueClass4}
                            onChange={(e) =>
                                setSearchValueClass4(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Class 5
                        </label>
                    </div>
                    <div className="md:w-1/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Credits"
                            value={searchValueClass5}
                            onChange={(e) =>
                                setSearchValueClass5(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name">
                            Class 6
                        </label>
                    </div>
                    <div className="md:w-1/4">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Credits"
                            value={searchValueClass6}
                            onChange={(e) =>
                                setSearchValueClass6(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={() =>
                                sum(
                                    searchValueClass1,
                                    searchValueClass2,
                                    searchValueClass3,
                                    searchValueClass4
                                )
                            }>
                            Calculate
                        </button>
                    </div>
                    {totalGpa}
                </div>
            </form>
        </div>
    )
}

export default FormCredits
