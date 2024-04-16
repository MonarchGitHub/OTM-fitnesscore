import React from 'react'

const Compare = () => {

    const comparisonData = [
        { title: '01', aValue: 85, bValue: 70 },
        { title: '02', aValue: 65, bValue: 40 },
        { title: '03', aValue: 25, bValue: 90 },
        { title: '04', aValue: 90, bValue: 25 },
        { title: '05', aValue: 40, bValue: 65 },
        { title: '06', aValue: 70, bValue: 65 },
    ];

    return (
        <>

            <div className="flex flex-col items-center justify-center h-screen">
                <div className=" shadow-lg rounded-lg p-8 w-full max-w-4xl">
                    <h1 className="text-2xl font-bold mb-4">Comparison Infographic</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1 flex flex-col items-center">
                            <span className="text-gray-500 text-sm">A Element</span>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <span className="text-gray-500 text-sm">VS</span>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <span className="text-gray-500 text-sm">B Element</span>
                        </div>
                        {comparisonData.map((item, index) => (
                            <div key={index} className="col-span-1 flex flex-col items-center">
                                <span className="text-gray-500 text-sm">{item.title}</span>
                                <div className="h-6 w-full bg-gray-200 rounded-full mt-2">
                                    <div
                                        className={`h-full bg-green-500 rounded-full`}
                                        style={{ width: `${item.aValue}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                        {comparisonData.map((item, index) => (
                            <div key={index + 'b'} className="col-span-1 flex flex-col items-center">
                                <div className="h-6 w-full bg-gray-200 rounded-full mt-2">
                                    <div
                                        className={`h-full bg-green-500 rounded-full`}
                                        style={{ width: `${item.bValue}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    )
}

export default Compare