import {useState} from 'react'

function Form() {
    const [creditsPoints1, setCreditsPoints1] = useState('')
    const [creditsPoints2, setCreditsPoints2] = useState('')
    const [creditsPoints3, setCreditsPoints3] = useState('')
    const [creditsPoints4, setCreditsPoints4] = useState('')
    const [creditsPoints5, setCreditsPoints5] = useState('')
    const [creditsPoints6, setCreditsPoints6] = useState('')
    const [searchValueMark1, setSearchValueMark1] = useState('')
    const [searchValueMark2, setSearchValueMark2] = useState('')
    const [searchValueMark3, setSearchValueMark3] = useState('')
    const [searchValueMark4, setSearchValueMark4] = useState('')
    const [searchValueMark5, setSearchValueMark5] = useState('')
    const [searchValueMark6, setSearchValueMark6] = useState('')
    const [addClass, setAddClass] = useState(false)
    let [totalGpa, setTotalGpa] = useState('0')
    const sum = (a, b, c, d, f, g, k, l, m, n, o, p) => {
        let gradePoints =
            parseInt(a) * parseInt(b) +
            parseInt(c) * parseInt(d) +
            parseInt(f) * parseInt(g) +
            parseInt(k) * parseInt(l) +
            parseInt(m) * parseInt(n)

        let credits =
            parseInt(a) + parseInt(c) + parseInt(f) + parseInt(k) + parseInt(m)
        /*+parseInt(o) * parseInt(p)*/
        if (addClass) {
            gradePoints = gradePoints + parseInt(o) * parseInt(p)
            credits = credits + parseInt(o)
        }

        const res = (gradePoints / credits).toFixed(2)
        console.log(res)
        setTotalGpa(res)
    }
    const resetValues = () => {
        setSearchValueMark1('')
        setSearchValueMark2('')
        setSearchValueMark3('')
        setSearchValueMark4('')
        setSearchValueMark5('')
        setSearchValueMark6('')
        setCreditsPoints1('')
        setCreditsPoints2('')
        setCreditsPoints3('')
        setCreditsPoints4('')
        setCreditsPoints5('')
        setCreditsPoints6('')
        setTotalGpa('0')
    }

    return (
        <div className="bg-[#18181F] rounded-xl h-[600px] w-1/2 mt-[100px]  m-[auto] flex space-x-1  justify-center pt-[4rem] border-white border-2">
            <div className="pt-8">
                <form className="w-full max-w-sm ">
                    <p className="flex ml-24 mb-8">Credits</p>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label htmlFor="inline-full-name">Class 1</label>
                        </div>
                        <div className="md:w-1/4">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Credits"
                                value={creditsPoints1}
                                onChange={(e) =>
                                    setCreditsPoints1(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|0/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label htmlFor="inline-full-name">Class 2</label>
                        </div>
                        <div className="md:w-1/4">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Credits"
                                value={creditsPoints2}
                                onChange={(e) =>
                                    setCreditsPoints2(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|0/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label htmlFor="inline-full-name">Class 3</label>
                        </div>
                        <div className="md:w-1/4">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Credits"
                                value={creditsPoints3}
                                onChange={(e) =>
                                    setCreditsPoints3(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|0/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label htmlFor="inline-full-name">Class 4</label>
                        </div>
                        <div className="md:w-1/4">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Credits"
                                value={creditsPoints4}
                                onChange={(e) =>
                                    setCreditsPoints4(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|0/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label htmlFor="inline-full-name">Class 5</label>
                        </div>
                        <div className="md:w-1/4">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Credits"
                                value={creditsPoints5}
                                onChange={(e) =>
                                    setCreditsPoints5(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|0/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>
                    {addClass && (
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label htmlFor="inline-full-name">
                                    Class 6
                                </label>
                            </div>
                            <div className="md:w-1/4">
                                <input
                                    id="inline-full-name"
                                    maxLength={1}
                                    type="text"
                                    placeholder="Credits"
                                    value={creditsPoints6}
                                    onChange={(e) =>
                                        setCreditsPoints6(
                                            e.target.value
                                                .replace(/\D/g, '')
                                                .replace(/6|7|8|9|0/gi, '')
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )}
                </form>
            </div>
            <div className="pt-8">
                <p className="flex ml-4 mb-8">Mark</p>
                <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Mark"
                                value={searchValueMark1}
                                onChange={(e) =>
                                    setSearchValueMark1(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Mark"
                                value={searchValueMark2}
                                onChange={(e) =>
                                    setSearchValueMark2(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Mark"
                                value={searchValueMark3}
                                onChange={(e) =>
                                    setSearchValueMark3(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Mark"
                                value={searchValueMark4}
                                onChange={(e) =>
                                    setSearchValueMark4(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <input
                                id="inline-full-name"
                                maxLength={1}
                                type="text"
                                placeholder="Mark"
                                value={searchValueMark5}
                                onChange={(e) =>
                                    setSearchValueMark5(
                                        e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/6|7|8|9|/gi, '')
                                    )
                                }
                            />
                        </div>
                    </div>
                    {addClass && (
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <input
                                    id="inline-full-name"
                                    maxLength={1}
                                    type="text"
                                    placeholder="Mark"
                                    value={searchValueMark6}
                                    onChange={(e) =>
                                        setSearchValueMark6(
                                            e.target.value
                                                .replace(/\D/g, '')
                                                .replace(/6|7|8|9|/gi, '')
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )}
                </form>
            </div>
            <div className="mt-32 space-y-3">
                <div className=" space-y-3 flex flex-col ">
                    <button
                        className=" shadow bg-[#0b537a] hover:bg-[#00693c] focus:shadow-outline focus:outline-none text-gray-100 font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() =>
                            sum(
                                creditsPoints1,
                                searchValueMark1,
                                creditsPoints2,
                                searchValueMark2,
                                creditsPoints3,
                                searchValueMark3,
                                creditsPoints4,
                                searchValueMark4,
                                creditsPoints5,
                                searchValueMark5,
                                creditsPoints6,
                                searchValueMark6
                            )
                        }>
                        Calculate
                    </button>
                    <button
                        className="shadow bg-[#0E79B2] hover:bg-[#00693c] focus:shadow-outline focus:outline-none text-gray-300 font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => {
                            resetValues()
                        }}>
                        Reset
                    </button>
                    <button
                        className="shadow bg-[#0E79B2] hover:bg-[#00693c] focus:shadow-outline focus:outline-none text-gray-300 font-bold py-2 px-4 rounded float-left w-[8.3rem] "
                        onClick={() => setAddClass(!addClass)}>
                        {addClass ? 'Remove class' : 'Add class'}
                    </button>
                </div>

                <div className="font-extralight text-amber-300 border-[#0E79B2] border-2 w-28 rounded-xl flex justify-center">
                    <ul>
                        <li>mark A = 4.0</li>
                        <li>mark B = 3.0</li>
                        <li>mark C = 2.0</li>
                        <li>mark D = 1.0</li>
                        <li>mark F = 0.0</li>
                    </ul>
                </div>
            </div>
            <div className="relative pt-12 right-32 h-3 w-36 flex space-x-3">
                <p>Your GPA is:</p>
                <p className="text-amber-400">
                    {totalGpa === 'NaN' ? '0' : totalGpa}
                </p>
            </div>
        </div>
    )
}

export default Form
