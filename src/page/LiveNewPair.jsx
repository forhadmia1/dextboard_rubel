import React from 'react';
import Hotcard from '../components/Hotcard';
import LivepairTable from '../components/LivePair/LivepairTable';
import search from "../images/searchIcon.svg";

const LiveNewPair = () => {
    const cards = [1, 2, 3]

    return (
        <div>
            <div className='grid lg:grid-cols-3  grid-cols-1 gap-2 mt-5'>
                {
                    cards.map(card => <Hotcard />)
                }
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                <div>
                    <h2 className='text-xl font-bold text-white'>Live New Pairs</h2>
                    <p className='text-[12px] text-white'>New pairs listed on Ethereum exchanges with pool variation in real time</p>
                </div>
                <div className='p-5 w-11/12'>
                    <div class="flex items-center input-field gap-3">
                        <span>
                            <img src={search} alt="" />
                        </span>
                        <input
                            type="text"
                            className="input"
                            placeholder="Find by symbol,token"
                        />
                    </div>
                </div>
            </div>
            <div className='overflow-x-scroll md:overflow-hidden'>
                <LivepairTable />
            </div>
        </div>
    );
};

export default LiveNewPair;