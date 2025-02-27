import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Sangay choden",
      role: "Frontend Developer",
      avatar: "pic1.jpg",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      location: "Thimphu, Bhutan"

    },
    {
      id: 2,
      name: "Yeshey lhaden",
      role: "UX Designer",
      avatar: "pic2.jpg",
      skills: ["Figma", "Wireframing", "Prototyping"],
      location: "Thimphu, Bhutan"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profiile-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default App;