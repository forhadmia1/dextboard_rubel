import React from 'react';
import logo from "../images/logo.png";
import img1 from "../images/side-img.png";
import grid from "../images/grid.svg";
import explorer from "../images/explore 1.svg";
import swap from "../images/Vector.svg";
import roket from "../images/rocket-sharp 1.svg";
import multichart from "../images/multi-chart.svg";
import simpleswap from "../images/simple-swap.svg";
import starts from "../images/starts.svg";
import bot from "../images/bot.svg";
import twocercle from "../images/two-circles-sign-one-black-other-white 1.svg";
import youtube from "../images/youtube.svg";
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Layout/Header';

const Home = () => {
    const sideMenu = [
        { icon: grid, link: "/dextboard", text: "DEXTboard" },
        { icon: roket, link: "/livenewpair", text: "Live new Pair" },
        { icon: explorer, link: "/pairexplorer", text: "Pair Explorer" },
        { icon: swap, link: "/", text: "Big Swap Explorer" },
        { icon: multichart, link: "/", text: "Multi Chart" },
        { icon: simpleswap, link: "/", text: "Swap" },
        { icon: starts, link: "/", text: "Stats" },
        { icon: bot, link: "/", text: "Price Bot" },
        { icon: twocercle, link: "/", text: "New Pairs Bot" },
        { icon: youtube, link: "/", text: "DEXtool Academy" },
    ];
    return (
        <div className="layout">
            <div className="left-area">
                <div className="left-container">
                    <div className="text-center mb-4">
                        <img src={logo} alt="" />
                    </div>
                    <div className="side-munu mt-[50px]">
                        {sideMenu.map((el, i) => (
                            <Link className="single-side-menu mb-[23px] " key={i} to={el.link}>
                                <span className="icon-wrapper">
                                    <img src={el.icon} alt="" />
                                </span>
                                <span>{el.text}</span>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <div className="text-center">
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h3 className="side-footer-title text-center">
                                Newest Versions are <br />
                                Available !
                            </h3>
                            <p className="side-footer-text text-center">
                                New Laest Version 2.3.4.0
                            </p>
                            <div className="text-center">
                                <button className="side-btn">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-area">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Home;