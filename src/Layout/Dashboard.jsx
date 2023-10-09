import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/Logo2.png'
import { Icon } from "@iconify/react";


const Dashboard = () => {

    const isadmin = true;


    return (
        <>
            <div className="flex">
                <div className="bg-secondary-100 min-h-screen w-3/12 py-5">
                    <Link to='/dashboard'>
                        <img src={logo} className="w-full" alt="" />
                    </Link>
                    <hr />
                    <ul className="mt-10 text-white dashboardMenu text-xl space-y-5 px-5">
                        {!isadmin ?
                            <>
                                <li>
                                    <NavLink to="allMyItems" className='flex items-center gap-2'>
                                        <span><Icon icon="fluent-mdl2:task-manager" /></span>
                                        My All Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="manageMyItems" className='flex items-center gap-2'>
                                        <span><Icon icon="carbon:inventory-management" /></span>
                                        Manage My Items
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="allItems" className='flex items-center gap-2'>
                                        <span><Icon icon="fluent-mdl2:task-manager" /></span>
                                        All Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="manageItems" className='flex items-center gap-2'>
                                        <span><Icon icon="carbon:inventory-management" /></span>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="addItems" className='flex items-center gap-2'>
                                        <span><Icon icon="ion:bag-add" /></span>
                                        Add Items
                                    </NavLink>
                                </li>
                            </>
                        }
                        <hr />
                        <li>
                            <NavLink to="/" className='flex items-center gap-2'>
                                <span><Icon icon="ic:round-home" /></span>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/allJewelry" className='flex items-center gap-2'>
                                <span><Icon icon="game-icons:shopping-bag" /></span>
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='flex items-center gap-2'>
                                <span><Icon icon="lucide:contact" /></span>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <button className='flex items-center gap-2'>
                                <span><Icon icon="basil:logout-solid" /></span>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="p-10 w-full">
                    <Outlet />
                </div>
            </div >
        </>
    );
};

export default Dashboard;