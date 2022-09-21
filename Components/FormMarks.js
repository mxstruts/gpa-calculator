import {useState} from 'react'

function FormMarks(props) {
    const [searchValueMark1, setSearchValueMark1] = useState('')
    const [searchValueMark2, setSearchValueMark2] = useState('')
    const [searchValueMark3, setSearchValueMark3] = useState('')
    const [searchValueMark4, setSearchValueMark4] = useState('')
    const [searchValueMark5, setSearchValueMark5] = useState('')
    const [searchValueMark6, setSearchValueMark6] = useState('')

    return (
        <div className="pt-8">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark1}
                            onChange={(e) =>
                                setSearchValueMark1(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark2}
                            onChange={(e) =>
                                setSearchValueMark2(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark3}
                            onChange={(e) =>
                                setSearchValueMark3(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark4}
                            onChange={(e) =>
                                setSearchValueMark4(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark5}
                            onChange={(e) =>
                                setSearchValueMark5(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark6}
                            onChange={(e) =>
                                setSearchValueMark6(e.target.value)
                            }
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormMarks
