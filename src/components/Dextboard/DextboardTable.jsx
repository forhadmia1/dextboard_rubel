import React from 'react';
import '../../style/dextboardtable.css'
import DextboardTableRow from './DextboardTableRow';

const DextboardTable = () => {
    const row = [1, 2, 3, 4, 5]
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
                                <span>%24h</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Price</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Volume 24h</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Swap 24h</span>
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
                                <span>FDV</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>DEX</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        row.map(r => <DextboardTableRow />)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default DextboardTable;