import React, {useState} from 'react';
import './UserProfile.module.css';

const UserProfile = ({ user, onFollow, onUnfollow }) => {
  const [playlistLinks, setPlaylistLinks] = useState(user.playlistLinks || []);
  const handleFollow = () => {
    onFollow(user.id);
};

  const handleUnfollow = () => {
    onUnfollow(user.id);
  };
  const handleAddPlaylistLink = (e) => {
    e.preventDefault();
    if (validatePlaylistLink(playlistLinks)) {
      setPlaylistLinks([...playlistLinks, playlistLinks]);
      setPlaylistLinks('');
    } else {
      alert('Invalid playlist link');
    }
  };
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.username}'s avatar`} className="avatar" />
      <h2 className="username">{user.username}</h2>
      <p className="bio">{user.bio}</p>
      {user.isFollowing ? (
        <button onClick={handleUnfollow} className="unfollow-btn">
          Unfollow
        </button>
      ) : (
        <button onClick={handleFollow} className="follow-btn">
          Follow
        </button>
      )}
      <form onSubmit={handleAddPlaylistLink}>
        <input
    type="text"
    placeholder="Enter playlist link"
    value={playlistLinks}
    onChange={(e) => setPlaylistLinks(e.target.value)}
    />
  <button type="submit" onClick={handleAddPlaylistLink}>Add Playlist Link</button>

  </form>
    </div>
  );
};
const validatePlaylistLink = (link) => {
  const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
return urlPattern.test(link);

};

export default UserProfile;
