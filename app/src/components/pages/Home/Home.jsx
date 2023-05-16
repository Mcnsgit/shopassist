import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer';
import VideoControls from '../components/VideoControls/VideoControls';
import UserProfile from '../components/UserProfile/UserProfile';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import TopContentSection from '../components/TopContentSection/TopContentSection';
import Footer from '../components/Footer/Footer';
import './Home.module.css';

const Home = () => {
  <div className="home">
    <nav>
      <ul>
        <li><Link to="/userdashboard">User Dashboard</Link></li>
        <li><Link to="/signin">Sign In/Sign Up</Link></li>
      </ul>
    </nav>
    <MediaPlayer />
    <UserProfile />
  </div>
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      <main>
        return (
        <div className={styles.home}>
          <h1>Welcome to YourStreamX</h1>
          <MediaPlayer />
          <VideoControls />
          <FeatureSection />
          <TopContentSection />
          <Footer />
        </div>
        );

        <h1>YourStreamX </h1>
        <MediaPlayer src={exampleVideoSrc} playlistLinks={exampleUser.playlistLinks} />
        <h1>User Profile Demo</h1>
        <UserProfile user={exampleUser} onFollow={handleFollow} onUnfollow={handleUnfollow} />
      </main>
    </div>
  );
};

export default Home;
