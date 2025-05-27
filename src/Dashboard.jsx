import {useEffect, useState} from 'react';
import {FaBell, FaBook, FaCalendarAlt, FaCalendarCheck, FaComments, FaSignOutAlt, FaUser} from 'react-icons/fa';
import styles from './Dashboard.module.css';



// Sample notifications
const notifications = [
    {
        id: 1,
        title: 'Upcoming Session.ts',
        message: 'Your session with Dr. Sarah Johnson is scheduled for tomorrow at 2:00 PM.',
        time: '1 hour ago',
        icon: <FaCalendarCheck />
    },
    {
        id: 2,
        title: 'New Resource Available',
        message: 'Check out our new guide on "Managing Exam Stress" in the resource library.',
        time: '2 days ago',
        icon: <FaBook />
    },
    {
        id: 3,
        title: 'Session.ts Reminder',
        message: 'Don\'t forget your session with Prof. Michael Ochieng on Friday at 10:00 AM.',
        time: '3 days ago',
        icon: <FaBell />
    }
];

export default function Dashboard() {


    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.header}>
                    <p className={styles.welcomeSubtitle}>How can we support you today?</p>

            </header>

        </div>
    );
}