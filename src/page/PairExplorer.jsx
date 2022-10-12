import React from 'react';
import { Link } from 'react-router-dom';
import Hotcard from '../components/Hotcard';
import Chartcard from '../components/LivePair/Chartcard';
import PairExplorerTable from '../components/PairExplorer/PairExplorerTable';
import rectangle from '../images/Rectangle 31.png'
import vertor1 from '../images/Vector.png'

const PairExplorer = () => {
    const cards = [1, 2, 3]
    return (
        <div className='mt-5'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    cards.map(card => <Hotcard />)
                }
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 mt-5 gap-5'>
                <div className='col-span-3'>
                    <Chartcard />
                    <div className='mt-5 flex flex-col md:flex-row justify-between  gap-2'>
                        <div className='flex card-background text-[12px] text-white gap-8 items-center px-5 py-3'>
                            <Link className="link-btn">Pairs</Link>
                            <Link className='link-btn'>Daily Gainers</Link>
                            <Link className='link-btn'>Daily Losers</Link>
                            <Link className='link-btn'>Recently Update Socials</Link>
                            <Link className='link-btn'>FAVOURITE</Link>
                        </div>
                        <div className='card-background p-4 flex justify-center items-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1554 0H0.84473C0.0952696 0 -0.282906 0.909351 0.248129 1.44039L6.74999 7.94324V15.1875C6.74999 15.4628 6.88433 15.7208 7.10989 15.8787L9.92239 17.8468C10.4773 18.2352 11.25 17.8415 11.25 17.1555V7.94324L17.752 1.44039C18.282 0.910406 17.9064 0 17.1554 0V0Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className='overflow-x-scroll md:overflow-hidden'>
                        <PairExplorerTable />
                    </div>
                </div>
                <div >
                    <div className='card-background flex p-5 justify-center '>
                        <div className='flex'>
                            <div className='flex justify-center flex-col items-center'>
                                <p className='text-[#00E6FD]'>Swap</p>
                                <div className='w-32 bg-[#00E6FD] h-[4px] rounded'></div>
                            </div>
                            <div className='flex justify-center flex-col items-center'>
                                <p className='text-[#9DA9C7]'>Pool Info</p>
                                <div className='w-32 bg-[#9DA9C7] h-[4px] rounded'></div>
                            </div>
                        </div>
                    </div>
                    <div className='card-background mt-5 p-5'>
                        <div className='flex justify-between'>
                            <p className='text-[12px] text-white'>DEXTSWAP</p>
                            <p className='text-[#01B3FC] text-[10px]'>Try Pancakeswap</p>
                        </div>
                        <div className='relative'>
                            <div className="card-background p-3 mt-5 flex justify-between items-center text-[10px]">
                                <p>100</p>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <div>
                                            <div className='bg-[#184863] rounded-full h-6 w-6 flex justify-center items-center'>
                                                <img src={vertor1} alt="" />
                                            </div>
                                        </div>
                                        <span className='text-white'>DEXT</span>
                                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L4 4L7 1" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className='text-white mt-5'>Balance: <span className='text-[#01B3FC]'>0</span></p>
                                </div>
                            </div>
                            <div className="card-background p-3 mt-5 flex justify-between items-center text-[10px]">
                                <p>100</p>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <div>
                                            <div className='bg-[#184863] rounded-full h-6 w-6 flex justify-center items-center'>
                                                <img src={vertor1} alt="" />
                                            </div>
                                        </div>
                                        <span className='text-white'>DEXT</span>
                                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L4 4L7 1" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className='text-white mt-5'>Balance: <span className='text-[#01B3FC]'>0</span></p>
                                </div>
                            </div>
                            <div className='bg-black opacity-80 p-5 absolute rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7483 8.4375H0.156463C0.0705259 8.4375 0.000213418 8.50781 0.000213418 8.59375V9.76562C0.000213418 9.85156 0.0705259 9.92188 0.156463 9.92188H11.9768L9.15842 13.4961C9.07834 13.5977 9.1506 13.75 9.28146 13.75H10.6975C10.7932 13.75 10.883 13.707 10.9436 13.6309L14.2404 9.44922C14.5627 9.03906 14.2717 8.4375 13.7483 8.4375ZM14.219 3.82812H2.39865L5.21701 0.253906C5.29709 0.152344 5.22482 0 5.09396 0H3.67795C3.58224 0 3.4924 0.0429689 3.43185 0.119141L0.134979 4.30078C-0.187287 4.71094 0.103729 5.3125 0.625213 5.3125H14.219C14.3049 5.3125 14.3752 5.24219 14.3752 5.15625V3.98438C14.3752 3.89844 14.3049 3.82812 14.219 3.82812Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='mt-5 text-[10px]'>
                            <div className='flex justify-between'>
                                <p className='text-white'>Price per DEXT</p>
                                <p className='text-[#00E6FD]'>0.0₃3976 BNB</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-white'>Price impact</p>
                                <p className='text-[#00E6FD]'>0.21 %</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-white'>Slippage</p>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[#00E6FD]'>auto</p>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.82309 5.48958C8.84451 5.33333 8.85522 5.17188 8.85522 5C8.85522 4.83333 8.84451 4.66667 8.81773 4.51042L9.90469 3.6875C10.0011 3.61458 10.0278 3.47396 9.96894 3.36979L8.94089 1.64062C8.87663 1.52604 8.74277 1.48958 8.62497 1.52604L7.34525 2.02604C7.07753 1.82812 6.79375 1.66146 6.47783 1.53646L6.28507 0.213542C6.26365 0.0885416 6.15656 0 6.02806 0H3.97194C3.84344 0 3.7417 0.0885416 3.72028 0.213542L3.52752 1.53646C3.21161 1.66146 2.92247 1.83333 2.6601 2.02604L1.38038 1.52604C1.26258 1.48437 1.12872 1.52604 1.06447 1.64062L0.041765 3.36979C-0.0224886 3.47917 -0.00107077 3.61458 0.106019 3.6875L1.19297 4.51042C1.1662 4.66667 1.14478 4.83854 1.14478 5C1.14478 5.16146 1.15549 5.33333 1.18227 5.48958L0.0953096 6.3125C-0.00107076 6.38542 -0.027843 6.52604 0.0310561 6.63021L1.05911 8.35938C1.12337 8.47396 1.25723 8.51042 1.37503 8.47396L2.65474 7.97396C2.92247 8.17187 3.20625 8.33854 3.52217 8.46354L3.71493 9.78646C3.7417 9.91146 3.84344 10 3.97194 10H6.02806C6.15656 10 6.26365 9.91146 6.27972 9.78646L6.47248 8.46354C6.78839 8.33854 7.07753 8.17187 7.3399 7.97396L8.61962 8.47396C8.73742 8.51562 8.87128 8.47396 8.93553 8.35938L9.96359 6.63021C10.0278 6.51562 10.0011 6.38542 9.89934 6.3125L8.82309 5.48958ZM5 6.875C3.93982 6.875 3.07239 6.03125 3.07239 5C3.07239 3.96875 3.93982 3.125 5 3.125C6.06018 3.125 6.92761 3.96875 6.92761 5C6.92761 6.03125 6.06018 6.875 5 6.875Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button className='btn-background px-6 py-2 text-sm text-white'>Connect Wallet</button>
                        </div>
                        <p className='text-[#9DA9C7] text-center mt-5 text-[12px]'>Powered by <span className='text-[#00E6FD]'>KyberSwap.com</span></p>
                    </div>
                    <div className='card-background p-2 text-sm mt-5'>
                        <img className='card-background' src={rectangle} alt="" />
                        <div className='mt-3 flex justify-between'>
                            <div className='text-[12px]'>
                                <p className='text-[#00E6FD]'>BC.Game</p>
                                <p className='text-white'>Coinzilla.Ads</p>
                            </div>
                            <button className='btn-background w-28'>View site</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PairExplorer;