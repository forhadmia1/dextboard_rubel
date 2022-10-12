import React from 'react';
import Hotcard from '../components/Hotcard';
import Chartcard from '../components/LivePair/Chartcard';

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
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default PairExplorer;