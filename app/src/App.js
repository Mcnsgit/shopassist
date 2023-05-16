import React from 'react';
// eslint-disable-next-line
import MediaPlayer from './components/MediaPlayer/MediaPlayer';
// eslint-disable-next-line
import UserProfile from './components/UserProfile/UserProfile';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const exampleUser = {
    id: 1,
    username: 'AI-chan',
    avatar: 'https://example.com/avatar.jpg',
    bio: 'AI-chan loves to help! 😸',
    isFollowing: false,
  };

  const handleFollow = (userId) => {
    console.log(`Follow user with ID: ${userId}`);
  };

  const handleUnfollow = (userId) => {
    console.log(`Unfollow user with ID: ${userId}`);
  };

  const exampleVideoSrc = 'https://example.com/video.mp4';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <main>
      <h1>YourStreamX </h1>
      <MediaPlayer src={exampleVideoSrc} playlistLinks={exampleUser.playlistLinks} />
      <h1>User Profile Demo</h1>
      <UserProfile user={exampleUser} onFollow={handleFollow} onUnfollow={handleUnfollow} />
    </main>
  </div>
);
};

export default App;
