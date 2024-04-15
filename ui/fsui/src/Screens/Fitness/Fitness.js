import React, { useState, useEffect } from 'react';
import "./index.css"
import Confetti from 'react-confetti';
import Compare from '../../Components/Compare';


function Fitness() {


    const [improvement, setImprovement] = useState();
    const [totalScore, setTotalScore] = useState();
    const [FitnessScore, setFitnessScore] = useState();
    const [name, setName] = useState();
    const [scrolledToBottom, setScrolledToBottom] = useState(false);

    // backend api
    const [userID, setuserID] = useState('63ac50006e58e188611c2a86');
    const [URL, setURL] = useState('/api/csv?userID=' + userID);


    useEffect(() => {
        const callBackendAPI = async () => {

            fetch(URL)
                .then(response => response.json())
                .then(resdata => {
                    if (resdata) {
                        setFitnessScore(resdata.at(0).code);
                        setTotalScore(resdata.at(0).totalScore)
                        setImprovement(resdata.at(0).improvement)
                        setName(resdata.at(0).name)

                    }
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);

                });

        };
        callBackendAPI();
    }, []);


    // const [showPopup, setShowPopup] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Check if user has scrolled to a certain position, for example, 500px from the top
    //         if (window.scrollY > 500) {
    //             setShowPopup(true);
    //         } else {
    //             setShowPopup(false);
    //         }
    //     };

    //     // Add event listener for scroll
    //     window.addEventListener('scroll', handleScroll);

    //     // Clean up event listener on unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (

        // <div className="bg-gradient-to-r from-violet-200 to-white-500">

        //     <header className="">
        //         <Confetti recycle={false} numberOfPieces={200} />


        //         <div className="container px-6 py-6 mx-auto " >
        //             <div className="items-center lg:flex">
        //                 <div className="w-full lg:w-1/2">
        //                     <div className="lg:max-w-lg">
        //                         <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl"> Hi <span className="text-blue-500 ">{name}<br /></span>Your Fitness Score is <span className="text-green-500 text-4xl ">{totalScore}<br /></span> </h1>

        //                         <p className="mt-3 text-xl font-medium google__font text-gray-600 ">Your fitness score is a comprehensive measure of your overall physical fitness level.</p>


        //                     </div>
        //                 </div>


        //             </div>
        //         </div>
        //     </header>

        //     <div>
        //         {/* Rings  */}
        //         {/* <div className="ring ring1"></div>
        //         <div className="ring ring2"></div>
        //         <div className="ring ring3"></div>
        //         <div className="ring ring4"></div> */}

        //     </div>

        //     <div>

        //         <section className="text-gray-600 body-font">
        //             <div className="container px-5 py-24 mx-auto flex flex-wrap">
        //                 <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        //                     <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        //                         <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        //                     </div>
        //                     <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
        //                     <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        //                         <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        //                             <p className='text-lg'>32</p>

        //                         </div>
        //                         <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Push</h2>
        //                             <p className="leading-relaxed text-lg">Your push score evaluates the strength and endurance of your upper body muscles, particularly those involved in pushing movements like chest presses, push-ups, and shoulder presses. A higher score indicates greater upper body strength and endurance.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        //                     <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        //                         <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        //                     </div>
        //                     <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
        //                     <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        //                         <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        //                             <p className='text-lg'>32</p>

        //                         </div>
        //                         <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Pull</h2>
        //                             <p className="leading-relaxed">The pull score assesses the strength and endurance of your back muscles and biceps, which are crucial for pulling movements such as rows, pull-ups, and bicep curls. A higher pull score reflects stronger back and arm muscles.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        //                     <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        //                         <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        //                     </div>
        //                     <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
        //                     <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        //                         <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        //                             <p className='text-lg'>32</p>

        //                         </div>
        //                         <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Squat</h2>
        //                             <p className="leading-relaxed">Your squat score measures the strength and stability of your lower body, including muscles in the hips, thighs, and glutes. It evaluates your ability to perform squats and other lower body exercises effectively. A higher squat score indicates better lower body strength and stability.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
        //                     <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        //                         <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        //                     </div>
        //                     <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
        //                     <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        //                         <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        //                             <p className='text-lg'>32</p>

        //                         </div>
        //                         <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Endurance</h2>
        //                             <p className="leading-relaxed">Endurance is essential for sustaining physical activity over an extended period. Your endurance score evaluates your cardiovascular fitness and stamina, reflecting how well your body can perform activities like running, cycling, or any sustained aerobic exercise.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        //     </div>

        //     {/* movecoins */}
        //     {showPopup && (
        //         <div className="p-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow shimmery-gradient">
        //             <svg className="w-7 h-7 text-gray-500  mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        //             </svg>
        //             <Confetti recycle={false} numberOfPieces={200} />
        //             <a href="#">
        //                 <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Congratulations! You've earned 27 movecoins</h5>
        //             </a>
        //             <p className="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
        //             <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        //                 See our guideline
        //                 <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
        //                 </svg>
        //             </a>
        //         </div>

        //     )}



        //     {/* compare section */}
        //     <Compare></Compare>


        // </div>

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
                <p className="leading-relaxed text-white google__font2 p-6 text-xl bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">These are your stats </p>
                <div class="border-t border-gray-300 my-4"></div>
            </div>

            <div>
                <div class="grid grid-cols-2 grid-rows-2  sm:grid-cols-1 sm:grid-rows-4">
                    <div class="bg-green-200 m-2 p-10  rounded-3xl">

                        <div><h3 className='text-xl google__font2 mb-10' >Pull Score</h3></div>
                        <div><h3 className='text-3xl google__font2'>39</h3></div>

                    </div>
                    <div class="bg-gray-300 m-2 p-10  rounded-3xl">

                        <div><h3>Stat Name</h3></div>
                        <div><h3>Stat Score</h3></div>

                    </div>
                    <div class="bg-gray-400 m-2 p-10  rounded-3xl">

                        <div><h3>Stat Name</h3></div>
                        <div><h3>Stat Score</h3></div>

                    </div>
                    <div class="bg-green-500 m-2 p-10  rounded-3xl">

                        <div><h3>Stat Name</h3></div>
                        <div><h3>Stat Score</h3></div></div>

                </div>
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
                                <h2 className='text-3xl'>32</h2>

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
                                <h2 className='text-3xl'>32</h2>

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
                                <h2 className='text-3xl'>32</h2>

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
                                <h2 className='text-3xl'>32</h2>

                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font mb-1 text-3xl  bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">Endurance</h2>
                                <p className="leading-relaxed text-white-100 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Endurance is essential for sustaining physical activity over an extended period. Your endurance score evaluates your cardiovascular fitness and stamina, reflecting how well your body can perform activities like running, cycling, or any sustained aerobic exercise.</p>



                            </div>
                        </div>
                    </div>
                </div>
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