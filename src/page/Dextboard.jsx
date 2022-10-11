import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='mt-5 flex justify-between'>
                <div className='flex card-background text-[12px] text-white gap-8 items-center px-5 py-3'>
                    <Link className='btn-background px-2 py-1'>Pairs</Link>
                    <Link>Daily Gainers</Link>
                    <Link>Daily Losers</Link>
                    <Link>Recently Update Socials</Link>
                    <Link>FAVOURITE</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-[#7C86A2] text-sm'>Active in Last:</p>
                    <div className=''>
                        <select className='flex card-background text-[12px] text-white gap-8 items-center px-4 py-4 focus:outline-none' name="cars" id="cars">
                            <option className='text-black' value="volvo">All Exchanges</option>
                            <option className='text-black' value="saab">Saab</option>
                            <option className='text-black' value="opel">Opel</option>
                            <option className='text-black' value="audi">Audi</option>
                        </select>
                    </div>
                    <p className='text-[#7C86A2] text-sm'>Active in Last:</p>
                    <div className='flex card-background text-[12px] text-white gap-8 items-center px-4 py-3'>
                        <Link className='btn-background px-2 py-1'>24h</Link>
                        <Link>6h</Link>
                        <Link>1h</Link>
                        <Link>5m</Link>
                    </div>
                    <div className='card-background p-4 '>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1554 0H0.84473C0.0952696 0 -0.282906 0.909351 0.248129 1.44039L6.74999 7.94324V15.1875C6.74999 15.4628 6.88433 15.7208 7.10989 15.8787L9.92239 17.8468C10.4773 18.2352 11.25 17.8415 11.25 17.1555V7.94324L17.752 1.44039C18.282 0.910406 17.9064 0 17.1554 0V0Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dextboard;