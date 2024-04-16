import React, { useState, useEffect } from 'react';
import "./index.css"
import Confetti from 'react-confetti';
import Compare from '../../Components/Compare';


function Fitness() {


    const [improvement, setImprovement] = useState();
    const [totalScore, setTotalScore] = useState();
    const [FitnessScore, setFitnessScore] = useState();
    const [CategoryData, setCategoryData] = useState();

    const [PushData, setPushData] = useState();
    const [PullData, setPullData] = useState();
    const [SquatData, setSquatData] = useState();
    const [EnduranceData, setEnduranceData] = useState();
    const [CoreData, setCoreData] = useState();

    const [name, setName] = useState();

    // backend api
    const [userID, setuserID] = useState('63ac50006e58e188611c2a86');
    const [URL, setURL] = useState('/api/csv?userID=' + userID);


    useEffect(() => {
        const callBackendAPI = async () => {

            fetch(URL)
                .then(response => response.json())
                .then(resdata => {

                    if (resdata) {

                        setCategoryData(JSON.parse(resdata.at(0).scorePerCategory));
                        console.log(CategoryData);
                        setFitnessScore(resdata.at(0).code);
                        setTotalScore(resdata.at(0).totalScore)
                        setImprovement(resdata.at(0).improvement)
                        setName(resdata.at(0).name)


                        try {

                            if (CategoryData) {

                                console.log("inside if", CategoryData.at(0).score);
                                setPushData(CategoryData.at(0).score);
                                setPullData(CategoryData.at(1).score);
                                setSquatData(CategoryData.at(2).score);
                                setEnduranceData(CategoryData.at(3).score);
                                setCoreData(CategoryData.at(4).score);
                            }

                        } catch (error) {
                            console.error('Error fetching category data:', error);
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);

                });

        };
        callBackendAPI();
    }, [CategoryData, URL]);


    return (



        <div className='bg-black'>
            <Confetti recycle={false} numberOfPieces={200} />

            <section className="body-font ">
                <div className="container px-5 py-4 mx-auto ">

                    <div className="flex flex-wrap -m-4 ">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white border border-gray-200 p-6 rounded-3xl sparkling-gradient2">

                                <h2 className="text-3xl font-medium title-font mb-2 text-gray-800 google__font2 ">Hello, {name}</h2>
                                <p className="leading-relaxed google__font1 text-xl ">Your fitness score is a comprehensive measure of your overall physical fitness level.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div>
                <p className="leading-relaxed text-white google__font2 p-6 text-xl bg-gradient-to-r from-green-400  to-white bg-clip-text text-transparent">Your Overall Fitness Score is <span className=' bg-gradient-to-r from-green-400  to-white bg-clip-text text-transparent  text-3xl'>{totalScore}</span>  </p>
                <p className="leading-relaxed text-white google__font2 pr-6 pl-6 pt-0 text-xl bg-gradient-to-r from-green-400  to-white bg-clip-text text-transparent">With Improvement score of<span className=' bg-gradient-to-r from-green-400  to-white bg-clip-text text-transparent  text-3xl'> {improvement}</span>  </p>
                <div className="border-t border-gray-300 my-4"></div>
            </div>

            <div>
                <div className="grid grid-cols-2 grid-rows-2  sm:grid-cols-1 sm:grid-rows-4">
                    <div className="bg-gradient-to-r from-lime-500 to-lime-100 m-2 p-10  rounded-3xl">

                        <div><h3 className='text-xl google__font2 mb-10  google__font2 font-semibold' >Pull Score</h3></div>
                        <div><h3 className='text-4xl google__font2 text-center font-semibold text-gray-900 '>{PullData}</h3></div>

                    </div>
                    <div className="bg-gradient-to-l from-gray-500 to-gray-100 m-2 p-10  rounded-3xl">

                        <div><h3 className='text-xl google__font2 mb-10 google__font2 font-semibold' >Push Score</h3></div>
                        <div><h3 className='text-4xl google__font2 text-center font-semibold text-gray-900 '>{PushData}</h3></div>

                    </div>
                    <div className="bg-gradient-to-r from-gray-400 to-gray-100 m-2 p-10  rounded-3xl">

                        <div><h3 className='text-xl google__font2 mb-10  google__font2 font-semibold' >Squat Score</h3></div>
                        <div><h3 className='text-4xl google__font2 text-center font-semibold text-gray-900 '>{SquatData}</h3></div>

                    </div>
                    <div className="bg-gradient-to-l from-green-500 to-green-100 m-2 p-10  rounded-3xl">

                        <div><h3 className='text-xl google__font2 mb-10  text-center google__font2 font-semibold'>Endurance Score</h3></div>
                        <div><h3 className='text-4xl google__font2 text-center font-semibold text-gray-900 '>{EnduranceData}</h3></div>

                    </div>

                </div>
            </div>

            <div>
                <div className="border-t border-gray-300 my-4"></div>
                <p className="leading-relaxed text-white google__font2 p-2 text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text  text-center text-transparent">Detailed Breakdown </p>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 sparkling-gradient text-green-700 rounded-full inline-flex items-center justify-center">
                                <h2 className='text-3xl'>{PushData}</h2>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font mb-1 text-3xl  bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">Push</h2>
                                <p className="leading-relaxed text-white-100 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Your push score evaluates the strength and endurance of your upper body muscles, particularly those involved in pushing movements like chest presses, push-ups, and shoulder presses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 sparkling-gradient text-green-700 rounded-full inline-flex items-center justify-center">
                                <h2 className='text-3xl'>{PullData}</h2>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font mb-1 text-3xl  bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">Pull</h2>
                                <p className="leading-relaxed text-white-100 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">The pull score assesses the strength and endurance of your back muscles and biceps, which are crucial for pulling movements such as rows, pull-ups, and bicep curls. A higher pull score reflects stronger back and arm muscles.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 sparkling-gradient text-green-700 rounded-full inline-flex items-center justify-center">
                                <h2 className='text-3xl'>{SquatData}</h2>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font mb-1 text-3xl  bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">Squat</h2>
                                <p className="leading-relaxed text-white-100 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Your squat score measures the strength and stability of your lower body, including muscles in the hips, thighs, and glutes. It evaluates your ability to perform squats and other lower body exercises effectively. A higher squat score indicates better lower body strength and stability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 sparkling-gradient text-green-700 rounded-full inline-flex items-center justify-center">
                                <h2 className='text-3xl'>{EnduranceData}</h2>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font mb-1 text-3xl  bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">Endurance</h2>
                                <p className="leading-relaxed text-white-100 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Endurance is essential for sustaining physical activity over an extended period. Your endurance score evaluates your cardiovascular fitness and stamina, reflecting how well your body can perform activities like running, cycling, or any sustained aerobic exercise.</p>



                            </div>
                        </div>
                    </div>
                </div>
                <Compare></Compare>
            </section>

        </div>


    );
}


export default Fitness;

// const Fitness = () => {
//     return (
//         <div>Fitness</div>
//     )
// }

// export default Fitness