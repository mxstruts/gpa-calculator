import {useState} from 'react'

function Form() {
    const [creditsPoints1, setCreditsPoints1] = useState('')
    const [creditsPoints2, setCreditsPoints2] = useState('')
    const [creditsPoints3, setCreditsPoints3] = useState('')
    const [creditsPoints4, setCreditsPoints4] = useState('')
    const [creditsPoints5, setCreditsPoints5] = useState('')
    const [creditsPoints6, setCreditsPoints6] = useState('')
    const [creditsPoints7, setCreditsPoints7] = useState('')
    const [creditsPoints8, setCreditsPoints8] = useState('')
    const [creditsPoints9, setCreditsPoints9] = useState('')
    const [searchValueMark1, setSearchValueMark1] = useState('')
    const [searchValueMark2, setSearchValueMark2] = useState('')
    const [searchValueMark3, setSearchValueMark3] = useState('')
    const [searchValueMark4, setSearchValueMark4] = useState('')
    const [searchValueMark5, setSearchValueMark5] = useState('')
    const [searchValueMark6, setSearchValueMark6] = useState('')
    const [searchValueMark7, setSearchValueMark7] = useState('')
    const [searchValueMark8, setSearchValueMark8] = useState('')
    const [searchValueMark9, setSearchValueMark9] = useState('')
    const [addClassSix, setAddClassSix] = useState(false)
    const [addClassSeven, setAddClassSeven] = useState(false)
    const [addClassEight, setAddClassEight] = useState(false)
    const [addClassNine, setAddClassNine] = useState(false)
    let [totalGpa, setTotalGpa] = useState('0.00')

    const sum = (
        a,
        b,
        c,
        d,
        f,
        g,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        u,
        i,
        v,
        x,
        z,
        e
    ) => {
        let gradePoints =
            parseInt(a) * parseInt(b) +
            parseInt(c) * parseInt(d) +
            parseInt(f) * parseInt(g) +
            parseInt(k) * parseInt(l) +
            parseInt(m) * parseInt(n)

        let credits =
            parseInt(a) + parseInt(c) + parseInt(f) + parseInt(k) + parseInt(m)
        /*+parseInt(o) * parseInt(p)*/
        if (addClassSix) {
            gradePoints = gradePoints + parseInt(o) * parseInt(p)
            credits = credits + parseInt(o)
        } else if (addClassSeven && addClassSix) {
            gradePoints = gradePoints + parseInt(q) * parseInt(r)
            credits = credits + parseInt(q)
        } else if (addClassSeven && addClassSix && addClassSeven) {
            gradePoints = gradePoints + parseInt(u) * parseInt(i)
            credits = credits + parseInt(u)
        } else if (
            addClassSeven &&
            addClassSix &&
            addClassSeven &&
            addClassEight
        ) {
            gradePoints = gradePoints + parseInt(v) * parseInt(x)
            credits = credits + parseInt(v)
        } else if (
            addClassSeven &&
            addClassSix &&
            addClassSeven &&
            addClassEight &&
            addClassNine
        ) {
            gradePoints = gradePoints + parseInt(z) * parseInt(e)
            credits = credits + parseInt(z)
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
        setSearchValueMark7('')
        setSearchValueMark8('')
        setSearchValueMark9('')
        setCreditsPoints1('')
        setCreditsPoints2('')
        setCreditsPoints3('')
        setCreditsPoints4('')
        setCreditsPoints5('')
        setCreditsPoints6('')
        setCreditsPoints7('')
        setCreditsPoints8('')
        setCreditsPoints9('')
        setTotalGpa('0.00')
    }
    return (
        <div className="bg-[#18181F] rounded-xl h-[40rem] w-1/2 mt-[100px]  m-[auto] flex   pt-[4rem] border-white border-2">
            <div className="flex flex-col space-y-3 ml-14">
                <div className="flex space-x-10 ml-24 ">
                    <label className="font-bold">Credits</label>
                    <label className="font-bold">Marks</label>
                </div>
                <div className="flex space-x-7">
                    <label className="pt-2" htmlFor="1">
                        Class 1
                    </label>
                    <input
                        className="w-20"
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
                    <input
                        className="w-20"
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

                <div className="flex space-x-7">
                    <label className="pt-2" htmlFor="1">
                        Class 2
                    </label>
                    <input
                        className="w-20"
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
                    <input
                        className="w-20"
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
                <div className="flex space-x-7">
                    <label className="pt-2" htmlFor="1">
                        Class 3
                    </label>
                    <input
                        className="w-20"
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
                    <input
                        className="w-20"
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

                <div className="flex space-x-7">
                    <label className="pt-2" htmlFor="1">
                        Class 4
                    </label>
                    <input
                        className="w-20"
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
                    <input
                        className="w-20"
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
                <div className="flex space-x-7">
                    <label className="pt-2" htmlFor="1">
                        Class 5
                    </label>
                    <input
                        className="w-20"
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
                    <input
                        className="w-20"
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
                {addClassSix && (
                    <div className="flex space-x-7">
                        <label className="pt-2" htmlFor="1">
                            Class 6
                        </label>
                        <input
                            className="w-20"
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
                        <input
                            className="w-20"
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
                        <button
                            onClick={() => {
                                setAddClassSix(false), setAddClassSeven(false)
                                setAddClassEight(false)
                                setAddClassNine(false)
                            }}>
                            X
                        </button>
                    </div>
                )}
                {addClassSeven && addClassSix && (
                    <div className="flex space-x-7">
                        <label className="pt-2" htmlFor="1">
                            Class 7
                        </label>
                        <input
                            className="w-20"
                            maxLength={1}
                            type="text"
                            placeholder="Credits"
                            value={creditsPoints7}
                            onChange={(e) =>
                                setCreditsPoints7(
                                    e.target.value
                                        .replace(/\D/g, '')
                                        .replace(/6|7|8|9|0/gi, '')
                                )
                            }
                        />
                        <input
                            className="w-20"
                            maxLength={1}
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark7}
                            onChange={(e) =>
                                setSearchValueMark7(
                                    e.target.value
                                        .replace(/\D/g, '')
                                        .replace(/6|7|8|9|/gi, '')
                                )
                            }
                        />
                        <button
                            onClick={() => {
                                setAddClassSeven(false),
                                    setAddClassEight(false),
                                    setAddClassNine(false)
                            }}>
                            X
                        </button>
                    </div>
                )}
                {addClassSix && addClassSeven && addClassEight && (
                    <div className="flex space-x-7">
                        <label className="pt-2" htmlFor="1">
                            Class 8
                        </label>
                        <input
                            className="w-20"
                            maxLength={1}
                            type="text"
                            placeholder="Credits"
                            value={creditsPoints8}
                            onChange={(e) =>
                                setCreditsPoints8(
                                    e.target.value
                                        .replace(/\D/g, '')
                                        .replace(/6|7|8|9|0/gi, '')
                                )
                            }
                        />
                        <input
                            className="w-20"
                            maxLength={1}
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark8}
                            onChange={(e) =>
                                setSearchValueMark8(
                                    e.target.value
                                        .replace(/\D/g, '')
                                        .replace(/6|7|8|9|/gi, '')
                                )
                            }
                        />
                        <button
                            onClick={() => {
                                setAddClassEight(false), setAddClassNine(false)
                            }}>
                            X
                        </button>
                    </div>
                )}
                {addClassNine && addClassSix && addClassSeven && addClassEight && (
                    <div className="flex space-x-7">
                        <label className="pt-2" htmlFor="1">
                            Class 9
                        </label>
                        <input
                            className="w-20"
                            maxLength={1}
                            type="text"
                            placeholder="Credits"
                            value={creditsPoints9}
                            onChange={(e) =>
                                setCreditsPoints9(
                                    e.target.value
                                        .replace(/\D/g, '')
                                        .replace(/6|7|8|9|0/gi, '')
                                )
                            }
                        />
                        <input
                            className="w-20"
                            maxLength={1}
                            type="text"
                            placeholder="Mark"
                            value={searchValueMark9}
                            onChange={(e) =>
                                setSearchValueMark9(
                                    e.target.value
                                        .replace(/\D/g, '')
                                        .replace(/6|7|8|9|/gi, '')
                                )
                            }
                        />
                        <button onClick={() => setAddClassNine(false)}>
                            X
                        </button>
                    </div>
                )}
            </div>

            <div className=" space-y-3 flex flex-col ml-[25.5rem] mt-9 fixed ">
                <button
                    className=" shadow bg-[#0b537a] hover:bg-blue-900 focus:shadow-outline focus:outline-none text-gray-100 font-bold py-2 px-4 rounded"
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
                            searchValueMark6,
                            creditsPoints7,
                            searchValueMark7,
                            creditsPoints8,
                            searchValueMark8,
                            creditsPoints9,
                            searchValueMark9
                        )
                    }>
                    Calculate
                </button>
                <button
                    className="shadow bg-red-700 hover:bg-red-900 focus:shadow-outline focus:outline-none text-gray-300 font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                        resetValues()
                    }}>
                    Reset
                </button>

                <button
                    className=" shadow bg-gray-600 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-gray-100 font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setAddClassSix(true)
                        if (addClassSix === true) {
                            setAddClassSeven(true)
                        }
                        if (addClassSeven === true) {
                            setAddClassEight(true)
                        }
                        if (addClassEight === true) {
                            setAddClassNine(true)
                        }
                    }}>
                    Add class
                </button>

                <div className="font-mono h-32 text-amber-300 border-[#0E79B2] border-2 w-32 rounded-xl flex justify-center">
                    <ul>
                        <li>mark A = 4.0</li>
                        <li>mark B = 3.0</li>
                        <li>mark C = 2.0</li>
                        <li>mark D = 1.0</li>
                        <li>mark F = 0.0</li>
                    </ul>
                </div>
            </div>
            <div className="bg-red-900 w-1/6 h-[14.5rem] ml-[37rem] mt-9 rounded-xl flex pl-4 pt-2 fixed">
                <label className="fixed" htmlFor="">
                    Your GPA is:
                </label>
                <div className="flex pt-9 align-middle justify-center ">
                    <label className="text-9xl  pl-9">
                        {totalGpa === 'NaN' ? '0.00' : totalGpa}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Form
