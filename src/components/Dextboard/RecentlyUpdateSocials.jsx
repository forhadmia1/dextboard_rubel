import React from 'react';
import { Link } from 'react-router-dom';

const RecentlyUpdateSocials = () => {
    return (
        <div className='card-background px-[14px] py-[22px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[16px] font-semibold text-[#00E6FD]'>Daily Gainers</h2>
                <Link className='text-[12px] font-normal text-white'>View all</Link>
            </div>
            <div className='mt-6 flex justify-between'>
                <div className='text-sm'>
                    <p className='text-white font-normal'>X</p>
                    <p className='text-[#9DA9C7]'>2hago</p>
                </div>
                <div className='flex items-center gap-2'>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.574001 1.286L8.074 5.315C8.326 5.45 8.652 5.514 8.98 5.514C9.308 5.514 9.634 5.45 9.886 5.315L17.386 1.286C17.875 1.023 18.337 0 17.44 0H0.521002C-0.375998 0 0.0860016 1.023 0.574001 1.286ZM17.613 3.489L9.886 7.516C9.546 7.694 9.308 7.715 8.98 7.715C8.652 7.715 8.414 7.694 8.074 7.516C7.734 7.338 0.941001 3.777 0.386002 3.488C-0.00399834 3.284 1.61606e-06 3.523 1.61606e-06 3.707V11C1.61606e-06 11.42 0.566002 12 1 12H17C17.434 12 18 11.42 18 11V3.708C18 3.524 18.004 3.285 17.613 3.489Z" fill="white" />
                    </svg>

                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.1345 2.85614C2.157 2.63937 2.07225 2.42555 1.90725 2.28006L0.22725 0.296122V0H5.44575L9.47925 8.66688L13.0252 0H18V0.296122L16.563 1.64594C16.4392 1.73852 16.3778 1.89062 16.4032 2.04125V11.9595C16.3778 12.1094 16.4392 12.2615 16.563 12.3541L17.9662 13.7039V14H10.9072V13.7039L12.3615 12.321C12.504 12.1814 12.504 12.1402 12.504 11.9264V3.90983L8.46225 13.9677H7.91625L3.21 3.90983V10.6508C3.171 10.9337 3.267 11.2195 3.47025 11.4238L5.361 13.6708V13.9677H0V13.6708L1.89075 11.4238C2.09325 11.2188 2.18325 10.9315 2.1345 10.6508V2.85614Z" fill="white" />
                    </svg>

                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4 4.2H1.6C2.37 4.2 3 4.83 3 5.6V12.6C3 13.37 2.37 14 1.6 14H1.4C0.63 14 0 13.37 0 12.6V5.6C0 4.83 0.63 4.2 1.4 4.2ZM7 0C7.77 0 8.4 0.63 8.4 1.4V12.6C8.4 13.37 7.77 14 7 14C6.23 14 5.6 13.37 5.6 12.6V1.4C5.6 0.63 6.23 0 7 0ZM12.6 8C13.37 8 14 8.63 14 9.4V12.6C14 13.37 13.37 14 12.6 14C11.83 14 11.2 13.37 11.2 12.6V9.4C11.2 8.63 11.83 8 12.6 8Z" fill="#00E6FD" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default RecentlyUpdateSocials;