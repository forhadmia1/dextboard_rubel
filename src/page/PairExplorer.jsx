import React from 'react';
import { Link } from 'react-router-dom';
import Hotcard from '../components/Hotcard';
import Chartcard from '../components/LivePair/Chartcard';
import PairExplorerTable from '../components/PairExplorer/PairExplorerTable';

const PairExplorer = () => {
    const cards = [1, 2, 3]
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    cards.map(card => <Hotcard />)
                }
            </div>
            <div className='grid grid-cols-4 mt-5 gap-5'>
                <div className='col-span-3'>
                    <Chartcard />
                    <div className='mt-5 flex justify-between'>
                        <div className='flex card-background text-[12px] text-white gap-8 items-center px-5 py-3'>
                            <Link className="link-btn">Pairs</Link>
                            <Link className='link-btn'>Daily Gainers</Link>
                            <Link className='link-btn'>Daily Losers</Link>
                            <Link className='link-btn'>Recently Update Socials</Link>
                            <Link className='link-btn'>FAVOURITE</Link>
                        </div>
                        <div className='card-background p-4 '>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1554 0H0.84473C0.0952696 0 -0.282906 0.909351 0.248129 1.44039L6.74999 7.94324V15.1875C6.74999 15.4628 6.88433 15.7208 7.10989 15.8787L9.92239 17.8468C10.4773 18.2352 11.25 17.8415 11.25 17.1555V7.94324L17.752 1.44039C18.282 0.910406 17.9064 0 17.1554 0V0Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <PairExplorerTable />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default PairExplorer;