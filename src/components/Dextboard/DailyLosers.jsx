import React from 'react';
import { Link } from 'react-router-dom';

const DailyLosers = () => {
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
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 7.07568H8.61572V9.07568H12.6157H13.6157V8.07568V4.07568H11.6157V5.49313L8.31796 2.19538L7.61086 1.48827L6.90375 2.19538L4.79451 4.30461L1.41422 0.924298L0 2.33851L4.0874 6.42593L4.79451 7.13304L5.50162 6.42593L7.61086 4.3167L10.3698 7.07568Z" fill="#FF4C5B" />
                            </svg>
                            <span className='ml-1 text-[#FF4D5B]'>92,535.29%</span>
                        </div>
                        <span>$0.0₈2150</span>
                    </div>
                </div>
                <div>
                    <svg width="92" height="29" viewBox="0 0 92 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 28L7.74775 20.5631L9.83217 23.4311L16.439 19.2315L25.1871 18.4828L29.8276 13.016L32.121 10.5249L35.3325 13.8849L43.7729 2L48.8965 13.8849L52.2098 4.65238L54.6865 15L57.1678 7.78509L61.5693 16.2513L65.8711 9.74166L68.9713 18.4828L73.3428 16.2513L76.1807 13.8849L79.1562 18.4828L83.7363 15L88.8721 20.5631L87.9999 24.7034L91 28" stroke="#FF3E4A" stroke-linecap="square" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 28L7.74775 20.5631L9.83217 23.4311L16.439 19.2315L25.1871 18.4828L29.3477 14.0197L32.121 10.5249L35.272 14.0197L43.7729 2L48.8965 13.8849L52.2098 4.65238L54.7666 16.2513L57.1678 7.78509L61.4268 16.6335L65.8711 9.74166L68.9713 18.4828L73.3428 16.2513L76.2798 12.9592L79.1562 18.4828L83.7363 15L88.8721 20.5631L87.9999 24.7034L89.3752 26.2147L91 28" fill="url(#paint0_linear_34_248)" />
                        <defs>
                            <linearGradient id="paint0_linear_34_248" x1="1" y1="3.5" x2="1" y2="38.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000" stop-opacity="0.378797" />
                                <stop offset="1" stop-color="#252E45" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DailyLosers;