import React from 'react';
import PairExplorerTableRow from './PairExplorerTableRow';

const PairExplorerTable = () => {
    const rows = [1, 2, 3, 4]
    return (
        <div className='mt-5'>
            <table className='card-background w-full text-sm text-[#00E6FD] border-collapse border-red-200'>
                <thead>
                    <tr className='table-row'>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Date</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Type</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Price USD</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Price ETH</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Amount DXT</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center gap-1'>
                                <span>Total ETH</span>
                                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0L0 3.88889H5L2.5 0ZM2.5 10L5 6.11111H0L2.5 10Z" fill="white" />
                                </svg>
                            </div>
                        </th>
                        <th>Maker</th>
                        <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(r => < PairExplorerTableRow />)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default PairExplorerTable;