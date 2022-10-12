import React from 'react';
import vector from '../../images/11865 1.png'
import ether from '../../images/etherscan-logo-freelogovectors 1.png'
import chart from '../../images/Untitled-2 1.png'

const Chartcard = () => {
    return (
        <div className='p-6 card-background text-[12px]'>
            <div className='flex flex-col md:flex-row gap-2 justify-between mt-5'>
                <div>
                    <div className='flex items-center gap-1 -ml-3'>
                        <img src={vector} alt="" />
                        <p className='text-white'>WETH<span className='text-[#9DA9C7]'>/BONE</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
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
                    <div className='mt-5 card-background px-2 py-1 flex gap-2 items-center'>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#00E6FD]'>24h</p>
                            <div className='flex items-center'>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 7.07568H8.61572V9.07568H12.6157H13.6157V8.07568V4.07568H11.6157V5.49313L8.31796 2.19538L7.61086 1.48827L6.90375 2.19538L4.79451 4.30461L1.41422 0.924298L0 2.33851L4.0874 6.42593L4.79451 7.13304L5.50162 6.42593L7.61086 4.3167L10.3698 7.07568Z" fill="#FF4C5B" />
                                </svg>
                                <span className='ml-1 text-[#FF4D5B]'>92,535.29%</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#00E6FD]'>24h</p>
                            <div className='flex items-center'>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3698 7.07568H8.61572V9.07568H12.6157H13.6157V8.07568V4.07568H11.6157V5.49313L8.31796 2.19538L7.61086 1.48827L6.90375 2.19538L4.79451 4.30461L1.41422 0.924298L0 2.33851L4.0874 6.42593L4.79451 7.13304L5.50162 6.42593L7.61086 4.3167L10.3698 7.07568Z" fill="#FF4C5B" />
                                </svg>
                                <span className='ml-1 text-[#FF4D5B]'>92,535.29%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end gap-2 mb-4'>
                        <div className='card-background 
                          p-2 flex justify-center items-center rounded-full'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0C8.38234 0 10.8 2.41766 10.8 5.4C10.8 6.67487 10.3582 7.84655 9.61938 8.77031L11.8243 10.9757C12.0586 11.2101 12.0586 11.5899 11.8243 11.8243C11.608 12.0406 11.2676 12.0572 11.0323 11.8742L10.9757 11.8243L8.77031 9.61938C7.84655 10.3582 6.67487 10.8 5.4 10.8C2.41766 10.8 0 8.38234 0 5.4C0 2.41766 2.41766 0 5.4 0ZM5.4 1.2C3.0804 1.2 1.2 3.0804 1.2 5.4C1.2 7.7196 3.0804 9.6 5.4 9.6C7.7196 9.6 9.6 7.7196 9.6 5.4C9.6 3.0804 7.7196 1.2 5.4 1.2Z" fill="white" />
                            </svg>
                        </div>
                        <div className='card-background rounded-full
                          p-2 flex justify-center items-center'>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.13821 10.487L3.32493 11.9137C2.94492 12.1064 2.47491 11.9655 2.27513 11.5989C2.19558 11.453 2.16812 11.2858 2.19702 11.1232L2.73431 8.10141C2.77756 7.85816 2.69396 7.60995 2.51075 7.43768L0.234753 5.29762C-0.0726787 5.00855 -0.0789694 4.5338 0.220703 4.23725C0.340034 4.11915 0.496393 4.0423 0.665575 4.01859L3.81092 3.57771C4.06412 3.54222 4.28299 3.38882 4.39622 3.16751L5.80287 0.418164C5.99287 0.0467938 6.45899 -0.105681 6.84398 0.0776005C6.99729 0.150584 7.12137 0.270282 7.19703 0.418164L8.60368 3.16751C8.71691 3.38882 8.93578 3.54222 9.18898 3.57771L12.3343 4.01859C12.7592 4.07814 13.0536 4.45865 12.9918 4.86848C12.9672 5.03168 12.8876 5.18251 12.7651 5.29762L10.4892 7.43768C10.3059 7.60995 10.2223 7.85816 10.2656 8.10141L10.8029 11.1232C10.8755 11.5314 10.5913 11.919 10.1681 11.9891C9.99962 12.0169 9.82629 11.9905 9.67497 11.9137L6.86169 10.487C6.63522 10.3722 6.36468 10.3722 6.13821 10.487Z" fill="#FFC700" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 6.00006H7.33333C6.59695 6.00006 6 6.59701 6 7.33339V13.3334C6 14.0698 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0698 14.6667 13.3334V7.33339C14.6667 6.59701 14.0697 6.00006 13.3333 6.00006Z" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.3335 10H2.66683C1.93045 10 1.3335 9.40311 1.3335 8.66671V2.66671C1.3335 1.93033 1.93045 1.33337 2.66683 1.33337H8.66683C9.40323 1.33337 10.0002 1.93033 10.0002 2.66671V3.33337" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#00E6FD] text-sm'>ETH: <span className='text-[#9DA9C7]'> 0.00004462</span></p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 6.00006H7.33333C6.59695 6.00006 6 6.59701 6 7.33339V13.3334C6 14.0698 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0698 14.6667 13.3334V7.33339C14.6667 6.59701 14.0697 6.00006 13.3333 6.00006Z" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.3335 10H2.66683C1.93045 10 1.3335 9.40311 1.3335 8.66671V2.66671C1.3335 1.93033 1.93045 1.33337 2.66683 1.33337H8.66683C9.40323 1.33337 10.0002 1.93033 10.0002 2.66671V3.33337" stroke="#9DA9C7" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#00E6FD] text-sm'>ETH: <span className='text-[#9DA9C7]'> 0.00004462</span></p>
                    </div>
                    <div className='mt-5'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#FF007A] p-[2px] rounded-full'>
                                <div className='bg-white rounded-full'>
                                    <svg width="20" height="20" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.69314 2.23134C3.58547 2.21569 3.58034 2.21048 3.63162 2.20527C3.72904 2.18962 3.95464 2.21048 4.11359 2.24698C4.48276 2.33562 4.81605 2.56504 5.16984 2.96652L5.26213 3.07602L5.39544 3.05516C5.96458 2.96131 6.54911 3.03431 7.03621 3.26372C7.16952 3.32629 7.37974 3.45143 7.40538 3.48272C7.41564 3.49314 7.43102 3.56093 7.44127 3.62871C7.47717 3.87377 7.46178 4.05626 7.38487 4.19704C7.34385 4.27526 7.34385 4.29611 7.36949 4.36389C7.39 4.41604 7.45153 4.45253 7.50793 4.45253C7.63099 4.45253 7.75917 4.2544 7.8207 3.97805L7.84634 3.86856L7.89248 3.9207C8.15398 4.2179 8.35908 4.62981 8.38984 4.9218L8.4001 5.00001L8.35395 4.93223C8.27704 4.81231 8.20526 4.73409 8.10784 4.66631C7.9335 4.54639 7.74892 4.50989 7.26182 4.48382C6.82086 4.45775 6.56962 4.42125 6.3235 4.33782C5.90305 4.19704 5.6877 4.01455 5.19034 3.34194C4.96987 3.04473 4.83143 2.8831 4.69299 2.74753C4.39047 2.45033 4.08795 2.29391 3.69314 2.23134Z" fill="#FF007A" />
                                        <path d="M7.55308 2.91262C7.56423 2.72351 7.59209 2.59909 7.65341 2.48463C7.6757 2.43984 7.698 2.40002 7.70357 2.40002C7.70914 2.40002 7.698 2.43486 7.68128 2.47467C7.63669 2.58416 7.63111 2.73844 7.65898 2.91262C7.698 3.13657 7.71472 3.16643 7.98226 3.41029C8.10488 3.52476 8.2498 3.66908 8.30554 3.7288L8.40029 3.83829L8.30554 3.75866C8.18849 3.65913 7.92095 3.47001 7.85964 3.44513C7.82062 3.42522 7.81505 3.42522 7.78718 3.4501C7.76488 3.47001 7.75931 3.49987 7.75931 3.6442C7.75373 3.86815 7.72029 4.00749 7.63668 4.15182C7.59209 4.22647 7.58652 4.21154 7.62554 4.12693C7.65341 4.06224 7.65898 4.03238 7.65898 3.81838C7.65898 3.38541 7.60324 3.2809 7.26324 3.10671C7.17963 3.06192 7.03472 2.99723 6.95111 2.96239C6.86193 2.92755 6.79504 2.89769 6.80062 2.89769C6.81177 2.88774 7.14062 2.97234 7.26881 3.02211C7.4639 3.09178 7.49734 3.09676 7.51964 3.09178C7.53636 3.07685 7.5475 3.03704 7.55308 2.91262Z" fill="#FF007A" />
                                        <path d="M3.90137 3.72627C3.70314 3.40033 3.57571 2.89456 3.60403 2.51804L3.61347 2.40002L3.66066 2.41126C3.74562 2.42812 3.89193 2.49556 3.96273 2.54614C4.15152 2.68101 4.23648 2.86646 4.31671 3.32727C4.34031 3.46215 4.37335 3.6195 4.38751 3.67008C4.41111 3.75437 4.50079 3.95106 4.5763 4.07469C4.62822 4.16461 4.59518 4.20957 4.47719 4.19833C4.29783 4.17585 4.05713 3.97916 3.90137 3.72627Z" fill="#FF007A" />
                                        <path d="M7.34573 5.94288C6.3515 5.5273 6 5.16886 6 4.56106C6 4.47275 6.00502 4.40002 6.00502 4.40002C6.01004 4.40002 6.04519 4.43119 6.09039 4.46756C6.29124 4.63379 6.5172 4.70652 7.14488 4.80002C7.51144 4.85717 7.72234 4.89873 7.91315 4.96626C8.52074 5.17405 8.89734 5.60002 8.98773 6.17665C9.01283 6.34288 8.99777 6.65976 8.9576 6.826C8.92245 6.95587 8.82202 7.19483 8.79691 7.20002C8.79189 7.20002 8.78185 7.17405 8.78185 7.13249C8.77181 6.91431 8.66636 6.70652 8.49061 6.54548C8.27971 6.35847 8.00855 6.21821 7.34573 5.94288Z" fill="#FF007A" />
                                        <path d="M6.6275 6.09375C6.61702 6.01644 6.59083 5.91852 6.57511 5.87729L6.54891 5.79999L6.59607 5.85668C6.66417 5.93398 6.71656 6.02675 6.76372 6.15559C6.80039 6.25351 6.80039 6.28443 6.80039 6.4442C6.80039 6.59881 6.79515 6.63488 6.76372 6.72249C6.71133 6.86164 6.64846 6.95956 6.54367 7.06779C6.35507 7.25847 6.10883 7.36155 5.75781 7.40793C5.69494 7.41309 5.51681 7.42855 5.35963 7.43885C4.9667 7.45947 4.70474 7.5007 4.46898 7.58316C4.43755 7.59346 4.40611 7.60377 4.40087 7.59862C4.39039 7.58831 4.55281 7.49554 4.68379 7.4337C4.86715 7.34609 5.05576 7.2997 5.46965 7.22755C5.67398 7.19663 5.88354 7.1554 5.93594 7.13479C6.45461 6.97502 6.71133 6.57819 6.6275 6.09375Z" fill="#FF007A" />
                                        <path d="M7.11831 6.88347C6.99697 6.59069 6.96896 6.31332 7.0343 6.05136C7.04364 6.02568 7.05297 6 7.0623 6C7.07164 6 7.09964 6.01541 7.12764 6.03595C7.18365 6.07705 7.30032 6.14896 7.59901 6.32873C7.97704 6.55474 8.19172 6.72937 8.34106 6.9297C8.47174 7.10433 8.55108 7.30466 8.58841 7.5512C8.61175 7.68989 8.59775 8.02376 8.56508 8.16244C8.4624 8.59904 8.22905 8.94831 7.88836 9.14864C7.83703 9.17945 7.79502 9.2 7.79036 9.2C7.78569 9.2 7.80436 9.14864 7.83236 9.087C7.94437 8.82504 7.95837 8.57335 7.87436 8.29085C7.82302 8.11621 7.71568 7.90562 7.501 7.5512C7.24432 7.14029 7.18365 7.03242 7.11831 6.88347Z" fill="#FF007A" />
                                        <path d="M3.11306 8.4616C3.51147 8.12927 4.0014 7.89342 4.45365 7.81837C4.64747 7.78621 4.9705 7.79693 5.14817 7.84517C5.43352 7.92022 5.69195 8.08102 5.82654 8.27935C5.95576 8.47232 6.01498 8.63849 6.0742 9.00834C6.09574 9.15307 6.12266 9.30316 6.12804 9.33532C6.17111 9.52829 6.25725 9.67837 6.36493 9.75878C6.53183 9.88206 6.82256 9.88742 7.10791 9.78022C7.15636 9.76414 7.19943 9.74806 7.19943 9.75342C7.2102 9.76414 7.06484 9.86062 6.96793 9.90886C6.83333 9.97855 6.72565 9.99999 6.58029 9.99999C6.32186 9.99999 6.10112 9.86598 5.92345 9.59797C5.88577 9.54437 5.81039 9.38892 5.74578 9.24419C5.55735 8.81002 5.46044 8.68137 5.2397 8.53664C5.04588 8.41336 4.79822 8.38656 4.60978 8.47768C4.36212 8.59561 4.29752 8.91186 4.4698 9.10483C4.53979 9.18523 4.66901 9.24955 4.77668 9.26564C4.97589 9.29244 5.14817 9.13699 5.14817 8.93866C5.14817 8.81002 5.09972 8.73497 4.9705 8.67601C4.79822 8.60097 4.60978 8.68673 4.61517 8.8529C4.61517 8.92258 4.64747 8.96546 4.71746 8.99762C4.76053 9.01906 4.76053 9.01906 4.72823 9.0137C4.5721 8.98154 4.53441 8.78857 4.65824 8.66529C4.80899 8.5152 5.12664 8.57953 5.23431 8.78857C5.27739 8.87434 5.28277 9.04587 5.24508 9.15307C5.15356 9.38892 4.89513 9.51221 4.63132 9.44252C4.45365 9.39428 4.37828 9.34604 4.16292 9.12627C3.78605 8.74033 3.64068 8.66529 3.10229 8.58489L3 8.5688L3.11306 8.4616Z" fill="#FF007A" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.381373 0.223509C1.62135 1.69451 3.53188 3.98157 3.62767 4.10632C3.7075 4.21028 3.67557 4.30904 3.54252 4.38181C3.46802 4.42339 3.31368 4.46497 3.23918 4.46497C3.15403 4.46497 3.05292 4.42339 2.98373 4.35582C2.93584 4.30904 2.72829 4.01276 2.25997 3.30065C1.90341 2.75487 1.60006 2.30266 1.59474 2.29746C1.57346 2.28706 1.57346 2.28706 2.22271 3.4202C2.63249 4.13231 2.76554 4.38701 2.76554 4.41819C2.76554 4.48576 2.74425 4.52215 2.6591 4.61571C2.51541 4.77165 2.45155 4.94838 2.40366 5.31742C2.35044 5.72806 2.20675 6.01914 1.79697 6.51294C1.55749 6.80402 1.52024 6.856 1.4617 6.97555C1.38719 7.12109 1.36591 7.20425 1.35526 7.39138C1.34462 7.5889 1.36591 7.71364 1.42445 7.90077C1.47766 8.0671 1.5362 8.17626 1.67989 8.38937C1.80229 8.57649 1.8768 8.71683 1.8768 8.76881C1.8768 8.8104 1.88744 8.8104 2.07903 8.76881C2.5367 8.66486 2.91455 8.48813 3.1221 8.26982C3.24982 8.13467 3.28175 8.0619 3.28175 7.87478C3.28175 7.75523 3.27643 7.72924 3.2445 7.65647C3.19128 7.54211 3.09017 7.44855 2.87197 7.30301C2.5846 7.11069 2.4622 6.95476 2.43026 6.74684C2.40366 6.57011 2.43559 6.45056 2.59524 6.1231C2.76022 5.78523 2.80279 5.64489 2.8294 5.30183C2.84537 5.08352 2.87197 4.99516 2.93584 4.92758C3.00502 4.85481 3.06356 4.82882 3.22853 4.80803C3.49995 4.77165 3.67557 4.70408 3.81393 4.57413C3.93633 4.46497 3.98955 4.35582 3.99487 4.19468L4.0002 4.07513L3.93101 4.00236C3.68089 3.72168 0.216397 0 0.200432 0C0.19511 0 0.280259 0.0987596 0.381373 0.223509ZM2.01516 7.61488C2.0737 7.51613 2.04177 7.39138 1.94598 7.329C1.85551 7.27183 1.71714 7.29781 1.71714 7.37578C1.71714 7.39657 1.72779 7.41737 1.75972 7.42776C1.80761 7.45375 1.81294 7.47974 1.77568 7.53692C1.73843 7.59409 1.73843 7.64607 1.78633 7.68246C1.86083 7.73963 1.96195 7.70845 2.01516 7.61488Z" fill="#FF007A" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.07403 4.81464C3.95679 4.85661 3.84444 5.01248 3.81025 5.16835C3.79071 5.26427 3.80048 5.43812 3.83467 5.49208C3.88841 5.57601 3.93725 5.59999 4.07403 5.59999C4.34268 5.59999 4.57226 5.45611 4.59669 5.28225C4.62111 5.13837 4.51853 4.94054 4.37688 4.85061C4.30361 4.80265 4.15218 4.78467 4.07403 4.81464ZM4.38665 5.11439C4.42572 5.04245 4.41107 4.96452 4.3378 4.91056C4.20591 4.80865 4.00564 4.89258 4.00564 5.04845C4.00564 5.12638 4.10822 5.21031 4.20591 5.21031C4.26941 5.21031 4.35734 5.16235 4.38665 5.11439Z" fill="#FF007A" />
                                    </svg>
                                </div>
                            </div>

                            <img src={ether} alt="" />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.577836 4.24598C2.07419 0.724739 6.13003 -0.922173 9.63812 0.579791C13.1462 2.08175 14.787 6.1528 13.2906 9.67404C11.7943 13.1953 7.73843 14.8422 4.23033 13.3402C0.722243 11.8383 -0.918518 7.76972 0.577836 4.24598ZM12.7454 9.44413C14.1272 6.24027 12.6308 2.48661 9.40907 1.12959C6.1873 -0.227421 2.47753 1.24455 1.12559 4.4784C-0.226361 7.71224 1.26999 11.4359 4.46188 12.8229C7.65377 14.2099 11.3934 12.678 12.7454 9.44413Z" fill="url(#paint0_linear_121_3421)" />
                                <defs>
                                    <linearGradient id="paint0_linear_121_3421" x1="9.64085" y1="0.581021" x2="4.19483" y2="13.3259" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D8FF55" />
                                        <stop offset="0.0960846" stop-color="#CFFC52" />
                                        <stop offset="0.256" stop-color="#B5F54B" />
                                        <stop offset="0.4599" stop-color="#8CE83F" />
                                        <stop offset="0.7" stop-color="#52D72F" />
                                        <stop offset="0.9677" stop-color="#09C21A" />
                                        <stop offset="1" stop-color="#00BF17" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 0C9.77939 0 12.6 2.82061 12.6 6.3C12.6 7.78734 12.0846 9.15431 11.2226 10.232L13.795 12.805C14.0683 13.0784 14.0683 13.5216 13.795 13.795C13.5426 14.0473 13.1456 14.0667 12.871 13.8532L12.805 13.795L10.232 11.2226C9.15431 12.0846 7.78734 12.6 6.3 12.6C2.82061 12.6 0 9.77939 0 6.3C0 2.82061 2.82061 0 6.3 0ZM6.3 1.4C3.5938 1.4 1.4 3.5938 1.4 6.3C1.4 9.0062 3.5938 11.2 6.3 11.2C9.0062 11.2 11.2 9.0062 11.2 6.3C11.2 3.5938 9.0062 1.4 6.3 1.4Z" fill="white" />
                            </svg>

                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.61038 12.2348L3.58069 13.8993C3.17145 14.1242 2.66529 13.9597 2.45014 13.5321C2.36447 13.3618 2.3349 13.1667 2.36603 12.9771L2.94465 9.45164C2.99122 9.16785 2.90119 8.87828 2.70388 8.6773L0.252811 6.18055C-0.0782694 5.8433 -0.085044 5.28944 0.23768 4.94345C0.36619 4.80568 0.534577 4.71602 0.716773 4.68835L4.10407 4.174C4.37674 4.13259 4.61245 3.95363 4.73439 3.69543L6.24924 0.487858C6.45386 0.0545928 6.95584 -0.123295 7.37044 0.090534C7.53554 0.175682 7.66917 0.315329 7.75065 0.487858L9.2655 3.69543C9.38744 3.95363 9.62315 4.13259 9.89582 4.174L13.2831 4.68835C13.7407 4.75783 14.0577 5.20176 13.9912 5.6799C13.9647 5.87029 13.8789 6.04626 13.7471 6.18055L11.296 8.6773C11.0987 8.87828 11.0087 9.16785 11.0552 9.45164L11.6339 12.9771C11.712 13.4533 11.406 13.9056 10.9503 13.9872C10.7688 14.0198 10.5822 13.9889 10.4192 13.8993L7.38951 12.2348C7.14562 12.1008 6.85427 12.1008 6.61038 12.2348Z" fill="white" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.4 4.2H1.6C2.37 4.2 3 4.83 3 5.6V12.6C3 13.37 2.37 14 1.6 14H1.4C0.63 14 0 13.37 0 12.6V5.6C0 4.83 0.63 4.2 1.4 4.2ZM7 0C7.77 0 8.4 0.63 8.4 1.4V12.6C8.4 13.37 7.77 14 7 14C6.23 14 5.6 13.37 5.6 12.6V1.4C5.6 0.63 6.23 0 7 0ZM12.6 8C13.37 8 14 8.63 14 9.4V12.6C14 13.37 13.37 14 12.6 14C11.83 14 11.2 13.37 11.2 12.6V9.4C11.2 8.63 11.83 8 12.6 8Z" fill="#00E6FD" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <img className='w-full' src={chart} alt="" />
            </div>
        </div>
    );
};

export default Chartcard;