import React, { useState } from 'react';
import './CartAndAndmin.css';

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@system.com',
    phone: '+1 (555) 019-2834',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [avatar, setAvatar] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your admin profile update API logic here
    console.log('Saved Admin Profile Data:', profile);
    alert('Admin profile updated successfully!');
  };

  return (
    <div className="admin-dashboard-container">
      
      {/* LEFT PANEL (matches personal profile visual structure) */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-inner">
          <div className="admin-profile-top">
            <div className="admin-avatar-circle">🛡️</div>
            <div className="admin-name-block">
              <div className="admin-name">Admin</div>
              <div className="admin-subtitle">System Admin</div>
            </div>
          </div>

          <nav className="admin-sidebar-nav" aria-label="Admin navigation">
            <a href="#approve" className="nav-item">
              <span className="nav-icon">📋</span>
              <span className="nav-text">Approve Listings</span>
            </a>
            <a href="#flags" className="nav-item">
              <span className="nav-icon">🚩</span>
              <span className="nav-text">View Flags</span>
            </a>
            <a href="#profile" className="nav-item active">
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Edit Profile</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <button className="logout-btn" type="button">
              <span>🚪</span> Log Out
            </button>
          </div>
        </div>
      </aside>


      {/* MAIN CONTENT WORKSPACE */}
      <main className="admin-main-content">
        <div className="profile-header">
          <h1>Edit Profile Details</h1>
          <p>Manage your administrative account settings and credentials.</p>
        </div>

        <div className="profile-card">
          <form onSubmit={handleSubmit} className="profile-form">
            
            {/* AVATAR SECTION */}
            <div className="avatar-section">
              <div className="avatar-wrapper">
                {avatar ? (
                  <img src={avatar} alt="Admin Avatar" className="avatar-img" />
                ) : (
                  <div className="avatar-fallback">AD</div>
                )}
                <label htmlFor="avatarUpload" className="avatar-upload-label">
                  📷
                  <input 
                    type="file" 
                    id="avatarUpload" 
                    accept="image/*" 
                    onChange={handleAvatarChange} 
                    hidden 
                  />
                </label>
              </div>
              <div className="avatar-meta">
                <h2>Administrator Account</h2>
                <span className="admin-badge">System Admin</span>
                <p className="upload-hint">Allowed JPG, GIF or PNG. Max size of 2MB</p>
              </div>
            </div>

            <hr className="form-divider" />

            {/* PERSONAL INFO SECTION */}
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-grid">
                <div className="input-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={profile.firstName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={profile.lastName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={profile.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={profile.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            </div>

            <hr className="form-divider" />

            {/* SECURITY SECTION */}
            <div className="form-section">
              <h3>Security & Password</h3>
              <div className="form-grid secondary">
                <div className="input-group">
                  <label>Current Password</label>
                  <input 
                    type="password" 
                    name="currentPassword" 
                    placeholder="••••••••" 
                    value={profile.currentPassword} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="input-group">
                  <label>New Password</label>
                  <input 
                    type="password" 
                    name="newPassword" 
                    placeholder="••••••••" 
                    value={profile.newPassword} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="input-group">
                  <label>Confirm New Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="••••••••" 
                    value={profile.confirmPassword} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            </div>

            <hr className="form-divider" />

            {/* FORM ACTIONS */}
            <div className="form-actions">
              <button type="button" className="btn-secondary">Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminProfile;