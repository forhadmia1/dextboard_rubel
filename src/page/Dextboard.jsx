import React, { useState } from 'react';
import DailyGainers from '../components/Dextboard/DailyGainers';
import DailyLosers from '../components/Dextboard/DailyLosers';
import HotPairs from '../components/Dextboard/HotPairs';
import RecentlyUpdateSocials from '../components/Dextboard/RecentlyUpdateSocials';

const Dextboard = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div>
            <div className='flex justify-between items-center my-5'>
                <h2 className='text-xl font-bold text-white'>DextBoard</h2>
                <div className='flex justify-between items-center gap-3'>
                    <p className='text-base text-[#7C86A2]'>Today’s Tranding tokens</p>
                    <label onClick={handleToggle} htmlFor="toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <div className="block bg-blue-600  w-8 h-4 rounded-full"></div>
                            <div className={`absolute left-0 top-0 w-[16px] h-[16px] rounded-full bg-white transition ${toggle && 'translate-x-full'}`}></div>
                        </div>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <DailyGainers />
                <DailyLosers />
                <RecentlyUpdateSocials />
                <HotPairs />
            </div>
        </div>
    );
};

export default Dextboard;