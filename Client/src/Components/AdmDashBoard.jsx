import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

const Dashboard = () => {
    const userGrowthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Users',
                backgroundColor: '#4c51bf',
                data: [65, 59, 80, 81, 56, 55]
            }
        ]
    };

    const revenueData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Revenue',
                backgroundColor: '#48bb78',
                data: [5000, 7000, 8000, 6000, 9000, 12000]
            }
        ]
    };

    const serverStatusData = {
        labels: ['Online', 'Offline'],
        datasets: [
            {
                label: 'Server Status',
                backgroundColor: ['#38b2ac', '#e53e3e'],
                data: [90, 10]
            }
        ]
    };

    return (
        <div className="p-8 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 min-h-screen">
            <h2 className="text-4xl font-extrabold text-white mb-10 text-center">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-white p-8 shadow-2xl rounded-2xl hover:shadow-md transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">User Growth</h3>
                    <Bar data={userGrowthData} />
                </div>
                <div className="bg-white p-8 shadow-2xl rounded-2xl hover:shadow-md transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Revenue</h3>
                    <Line data={revenueData} />
                </div>
                <div className="bg-white p-8 shadow-2xl rounded-2xl hover:shadow-md transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Server Status</h3>
                    <Doughnut data={serverStatusData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

// import React from 'react';
// import Typed from 'react-typed';

// const Dashboard = () => {
//     return (
//         <div className="p-8 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
//             <div className="text-center">
//                 <h2 className="text-4xl font-extrabold text-white mb-10">Dashboard Overview</h2>
                
//                 {/* Typing Animation */}
//                 <div className="bg-white p-8 shadow-2xl rounded-2xl text-gray-800 text-2xl font-bold hover:shadow-md transition-shadow duration-300 transform hover:scale-105">
//                     <Typed
//                         strings={[
//                             "Welcome back, Admin!",
//                             "Your system is running smoothly.",
//                             "All servers are online.",
//                             "User growth has been consistent.",
//                             "Revenue is steadily increasing!"
//                         ]}
//                         typeSpeed={50}
//                         backSpeed={30}
//                         loop
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
