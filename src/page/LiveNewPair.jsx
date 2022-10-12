import React from 'react';
import Hotcard from '../components/Hotcard';
import LivepairTable from '../components/LivePair/LivepairTable';
import search from "../images/searchIcon.svg";

const LiveNewPair = () => {
    const cards = [1, 2, 3]

    return (
        <div>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    cards.map(card => <Hotcard />)
                }
            </div>
            <div className='flex justify-between items-center my-5'>
                <div>
                    <h2 className='text-xl font-bold text-white'>Live New Pairs</h2>
                    <p className='text-[12px] text-white'>New pairs listed on Ethereum exchanges with pool variation in real time</p>
                </div>
                <div>
                    <div>
                        <div class="flex items-center input-field gap-3">
                            <span>
                                <img src={search} alt="" />
                            </span>
                            <input
                                type="text"
                                className="input"
                                placeholder="Find by symbol, name, token contract or pair address"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <LivepairTable />
        </div>
    );
};

export default LiveNewPair;