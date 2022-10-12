import React from 'react';
import LivepairTableRow from './LivepairTableRow';

const LivepairTable = () => {
    const rows = [1, 2, 3, 4, 5]
    return (
        <div className='mt-5'>
            <table className='card-background w-full text-[10px] text-[#00E6FD] border-collapse border-red-200'>
                <thead>
                    <tr className='table-row'>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Pair</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Listed</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <p>Token Price USD <span className='text-white'>(ETH)</span></p>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Initial Liquidity</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Total liquidity</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Pool Amount</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Pool Variation</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Pool Remaining</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th></th>
                        <th>Contract</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(r => <LivepairTableRow />)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default LivepairTable;