import React from 'react';
import vector from '../images/11865 1.png'

const Hotcard = () => {
    return (
        <div className='p-6 card-background'>
            <div className='flex justify-between '>
                <h2 className='text-[#00E6FD] text-[12px] font-semibold'>HOT#1</h2>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.69162 10.1418L3.2945 11.4588C2.97071 11.6367 2.57023 11.5066 2.4 11.1682C2.33221 11.0335 2.30882 10.8791 2.33345 10.7291L2.79125 7.93971C2.82811 7.71517 2.75687 7.48606 2.60076 7.32704L0.661452 5.3516C0.399498 5.08476 0.394138 4.64653 0.64948 4.37279C0.751158 4.26378 0.884388 4.19284 1.02854 4.17095L3.7086 3.76399C3.92434 3.73123 4.11084 3.58963 4.20732 3.38534L5.40588 0.847484C5.56778 0.504681 5.96495 0.363935 6.29298 0.533118C6.42361 0.600488 6.52934 0.710978 6.59381 0.847484L7.79237 3.38534C7.88885 3.58963 8.07535 3.73123 8.29109 3.76399L10.9711 4.17095C11.3332 4.22593 11.584 4.57717 11.5314 4.95547C11.5104 5.10611 11.4425 5.24534 11.3382 5.3516L9.39893 7.32704C9.24282 7.48606 9.17158 7.71517 9.20843 7.93971L9.66624 10.7291C9.72808 11.1059 9.48593 11.4637 9.12538 11.5283C8.98181 11.554 8.83412 11.5296 8.70519 11.4588L6.30807 10.1418C6.11511 10.0358 5.88458 10.0358 5.69162 10.1418Z" fill="#FFC700" />
                </svg>
            </div>
            <div className='flex justify-between mt-5'>
                <div>
                    <div className='flex items-center gap-1 -ml-4 text-[12px]'>
                        <img src={vector} alt="" />
                        <p className='text-white'>WETH<span className='text-[#9DA9C7]'>/BONE</span></p>
                    </div>
                    <div className='flex items-center gap-2 text-[10px]'>
                        <p className='text-white'>$0.9368</p>
                        <div className='flex items-center'>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 7.07568H8.61572V9.07568H12.6157H13.6157V8.07568V4.07568H11.6157V5.49313L8.31796 2.19538L7.61086 1.48827L6.90375 2.19538L4.79451 4.30461L1.41422 0.924298L0 2.33851L4.0874 6.42593L4.79451 7.13304L5.50162 6.42593L7.61086 4.3167L10.3698 7.07568Z" fill="#FF4C5B" />
                            </svg>
                            <span className='ml-1 text-[#FF4D5B]'>92,535.29%</span>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#00E6FD] text-sm'>ETH: <span className='text-[#9DA9C7]'> 0.00004462</span></p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-1 '>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 6.00006H7.33333C6.59695 6.00006 6 6.59701 6 7.33339V13.3334C6 14.0698 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0698 14.6667 13.3334V7.33339C14.6667 6.59701 14.0697 6.00006 13.3333 6.00006Z" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.3335 10H2.66683C1.93045 10 1.3335 9.40311 1.3335 8.66671V2.66671C1.3335 1.93033 1.93045 1.33337 2.66683 1.33337H8.66683C9.40323 1.33337 10.0002 1.93033 10.0002 2.66671V3.33337" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#00E6FD] text-[10px]'>ETH: <span className='text-[#9DA9C7]'> 0.00004462</span></p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 6.00006H7.33333C6.59695 6.00006 6 6.59701 6 7.33339V13.3334C6 14.0698 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0698 14.6667 13.3334V7.33339C14.6667 6.59701 14.0697 6.00006 13.3333 6.00006Z" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.3335 10H2.66683C1.93045 10 1.3335 9.40311 1.3335 8.66671V2.66671C1.3335 1.93033 1.93045 1.33337 2.66683 1.33337H8.66683C9.40323 1.33337 10.0002 1.93033 10.0002 2.66671V3.33337" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#00E6FD] text-[10px]'>ETH: <span className='text-[#9DA9C7]'> 0.00004462</span></p>
                    </div>
                    <div className='flex justify-end mt-5'>
                        <button className='bg-from-[#E41919] bg-to-[#FF7347] bg-red-500 rounded px-4 py-1'>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotcard;