import React from 'react';
import vector from '../../images/Vector.png'

const DextboardTableRow = () => {
    return (
        <tr className='table-row'>
            <td >
                <div className='text-sm'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-yellow-400 w-5 h-5 rounded-full flex justify-center items-center'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99988 0.799988L3.57638 5.22372L5.20354 6.85088L7.99988 4.05455L10.7979 6.85236L12.4251 5.22531L7.99988 0.799988ZM0.800049 7.99971L2.4271 9.62677L4.05438 7.9996L2.42722 6.37255L0.800049 7.99971ZM5.20354 9.14891L7.99988 11.9452L10.7978 9.14743L12.4258 10.7737L12.4251 10.7747L7.99988 15.1997L3.57626 10.7761L3.57388 10.7738L5.20354 9.14891ZM11.9457 8.00043L13.5728 9.62748L15.2 8.00043L13.5728 6.37326L11.9457 8.00043ZM6.77969 7.56807L7.99992 6.34783L9.65109 7.999H9.65041L9.65188 7.99979L9.65109 8.0007L7.99992 9.65187L6.35024 8.00218L6.34796 7.99979L6.35024 7.99752L6.63946 7.7083L6.77958 7.56807H6.77969Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-white font-normal'>WETH/TWITTER</p>
                            <span><p>0x16....2891F57</p></span>
                        </div>
                    </div>
                </div>
            </td>
            <td >
                <div className='flex items-center'>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 7.07568H8.61572V9.07568H12.6157H13.6157V8.07568V4.07568H11.6157V5.49313L8.31796 2.19538L7.61086 1.48827L6.90375 2.19538L4.79451 4.30461L1.41422 0.924298L0 2.33851L4.0874 6.42593L4.79451 7.13304L5.50162 6.42593L7.61086 4.3167L10.3698 7.07568Z" fill="#FF4C5B" />
                    </svg>
                    <span className='ml-1 text-[#FF4D5B]'>92,535.29%</span>
                </div>
            </td>
            <td >$281.64</td>
            <td >$79.33M</td>
            <td >39.79K</td>
            <td >149.28M</td>
            <td >$1402.67B</td>
            <td >
                <div className='bg-[#184863] rounded-full h-6 w-6 flex justify-center items-center'>
                    <img src={vector} alt="" />
                </div>
            </td>
            <td >
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
            </td>
            <td >
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
            </td>
        </tr>
    );
};

export default DextboardTableRow;