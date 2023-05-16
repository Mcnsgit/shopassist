import React from 'react';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  // Your component logic...

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>User Dashboard</h1>
      <div className={styles.dashboardItem}>Item 1</div>
      <div className={styles.dashboardItem}>Item 2</div>
      <div className={styles.dashboardItem}>Item 3</div>
    </div>
  );
};

export default UserDashboard;
