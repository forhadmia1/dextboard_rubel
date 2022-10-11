import React from 'react';
import { Link } from 'react-router-dom';

const DailyGainers = () => {
    return (
        <div className='card-background'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[16px] font-semibold text-[#00E6FD]'>Daily Gainers</h2>
                <Link className='text-[12px] font-normal text-white'>View all</Link>
            </div>
            <div className='mt-6 flex justify-between'>
                <div className='text-sm'>
                    <p className='text-white font-normal'>WETH/TWITTER</p>
                    <div className='flex items-center gap-[12px] mt-3'>
                        <div className='flex items-center'>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 2.92432H8.61572V0.924316H12.6157H13.6157V1.92432V5.92432H11.6157V4.50687L8.31796 7.80462L7.61086 8.51173L6.90375 7.80462L4.79451 5.69539L1.41422 9.0757L0 7.66149L4.0874 3.57407L4.79451 2.86696L5.50162 3.57407L7.61086 5.6833L10.3698 2.92432Z" fill="#01F987" />
                            </svg>
                            <span className='ml-1 text-[#01F987]'>92,535.29%</span>
                        </div>
                        <span>$0.0₈2150</span>
                    </div>
                </div>
                <div>
                    <svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 27L5.5 16.2862L10.4131 12.5026H14.6901L19.6858 9.71491L21.8125 4.66776L25.2556 9.71491L26.875 15.8339L31.9375 12.5026L34.4688 7.04298L36.7188 12.5026L41.2056 7.04298L44.9761 4.66776L46.5625 9.71491L49.4655 11.6542H54.1211L57.2676 7.04298L61.0194 4.66776L66.1506 1L70.1875 3.33541L73.4526 4.66776L78.9908 7.04298L81.2579 4.66776L86.6582 7.04298V3.33541L91 4.66776V26.1967L1 27Z" fill="url(#paint0_linear_34_209)" />
                        <path d="M1 27L5.5 16.2862L10.4131 12.5026H14.6901L19.6858 9.71491L21.8125 4.66776L25.2556 9.71491L26.875 15.8339L31.9375 12.5026L34.4688 7.04298L36.7188 12.5026L41.2056 7.04298L44.9761 4.66776L46.5625 9.71491L49.4655 11.6542H54.1211L57.2676 7.04298L61.0194 4.66776L66.1506 1L70.1875 3.33541L73.4526 4.66776L78.9908 7.04298L81.2579 4.66776L86.6582 7.04298V3.33541L91 4.66776" stroke="#1ECB4F" stroke-linecap="square" />
                        <defs>
                            <linearGradient id="paint0_linear_34_209" x1="1" y1="1" x2="1" y2="29" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00FF3F" stop-opacity="0.378797" />
                                <stop offset="1" stop-color="#252E45" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DailyGainers;