import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/Logo2.png'


const Dashboard = () => {
    return (
        <>
            <div className="flex">
                <div className="bg-secondary-100 h-screen w-2/12 p-4">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <hr />
                    <ul className="mt-10 text-white dashboardMenu">
                        <li className="mb-2">
                            <NavLink to="allItems">
                                All Items
                            </NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to="manageItems">
                                Manage Items
                            </NavLink>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </div>
                <div className="p-10">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;