import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DailyGainers from '../components/Dextboard/DailyGainers';
import DailyLosers from '../components/Dextboard/DailyLosers';
import HotPairs from '../components/Dextboard/HotPairs';
import RecentlyUpdateSocials from '../components/Dextboard/RecentlyUpdateSocials';
import rectengle1 from '../images/Rectangle 31.jpg'
import rectengle2 from '../images/Rectangle 38.jpg'
import rectengle3 from '../images/Rectangle 30.jpg'
import DextboardTable from '../components/Dextboard/DextboardTable';

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
            <div className='grid grid-cols-4 mt-5 gap-5'>
                <div className='col-span-3'>
                    <div className='flex justify-between'>
                        <div className='flex card-background text-[12px] text-white gap-8 items-center px-5 py-3'>
                            <Link className='link-btn'>Pairs</Link>
                            <Link className='link-btn'>Daily Gainers</Link>
                            <Link className='link-btn'>Daily Losers</Link>
                            <Link className='link-btn'>Recently Update Socials</Link>
                            <Link className='link-btn'>FAVOURITE</Link>
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
                            <div className='flex card-background text-[12px] text-white gap-5 items-center px-4 py-3'>
                                <Link className='link-btn'>24h</Link>
                                <Link className='link-btn'>6h</Link>
                                <Link className='link-btn'>1h</Link>
                                <Link className='link-btn'>5m</Link>
                            </div>
                            <div className='card-background p-4 '>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1554 0H0.84473C0.0952696 0 -0.282906 0.909351 0.248129 1.44039L6.74999 7.94324V15.1875C6.74999 15.4628 6.88433 15.7208 7.10989 15.8787L9.92239 17.8468C10.4773 18.2352 11.25 17.8415 11.25 17.1555V7.94324L17.752 1.44039C18.282 0.910406 17.9064 0 17.1554 0V0Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <DextboardTable />
                    </div>
                </div>
                <div>
                    <div className='card-background p-2 text-sm'>
                        <img className='rounded-lg' src={rectengle1} alt="" />
                        <div className='mt-3 flex justify-between'>
                            <div>
                                <p className='text-[#00E6FD]'>DEXTools Latest Release</p>
                                <p className='text-white'>Latest changes in Version 2.3.4.0</p>
                            </div>
                            <button className='btn-background w-28'>View Details</button>
                        </div>
                    </div>
                    <div className='card-background p-2 text-sm mt-5'>
                        <img className='rounded-lg' src={rectengle2} alt="" />
                        <div className='mt-3 flex justify-between'>
                            <div>
                                <p className='text-[#00E6FD]'>Sponser</p>
                                <p className='text-white'>Glactic Quadrant</p>
                            </div>
                            <button className='btn-background w-28'>View Details</button>
                        </div>
                    </div>
                    <div className='card-background p-2 text-sm mt-5'>
                        <div className='relative'>
                            <img className='rounded-lg' src={rectengle3} alt="" />
                            <div className='w-16 h-16 bg-black opacity-80 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1045 7.5479L2.74732 0.231881C1.66205 -0.36226 0 0.214303 0 1.68383V16.3123C0 17.6307 1.54442 18.4252 2.74732 17.7643L16.1045 10.4518C17.296 9.80141 17.2998 8.19829 16.1045 7.5479Z" fill="white" />
                                </svg>
                            </div>
                            <div className='bg-black opacity-80 p-1 w-14 flex justify-center absolute -bottom-2 right-2 rounded'>
                                <span className='text-white'>10.08</span>
                            </div>
                        </div>
                        <div className='mt-3 flex justify-between'>
                            <div>
                                <p className='text-[#00E6FD]'>DEXTools Academy</p>
                                <p className='text-white'>Ethereum Merge Explained</p>
                            </div>
                            <button className='btn-background w-28'>See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dextboard;