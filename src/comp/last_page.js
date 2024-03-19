import React from 'react';

function last_page() {
  const profilesTop = [
    { name: '조태완', job: 'Leader-PM', imgSrc: require('./photo/태완.png')},
    { name: '장희진', job: 'Second-PM', imgSrc: require('./photo/희진.jpg')},
    { name: '김의진', job: 'Back-end', imgSrc: require('./photo/의진.jpg')},
  ];

  const profilesBottom = [
    { name: '박지원', job: 'Back-end', imgSrc: require('./photo/지원.png' )},
    { name: '유현우', job: 'Front-end', imgSrc: require('./photo/현우.jpg') },
    { name: '최준범', job: 'Front-end', imgSrc: require('./photo/준범.jpg' )},
    { name: '정승민', job: 'Front-end', imgSrc: require('./photo/승민.jpg') },
  ];

  return (
    <div>
      <div>
        <h4>TEAM GO를 소개합니다</h4>
        <h1>만든 사람들</h1>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {profilesTop.map((profile, index) => (
            <div key={index} className="profile">
              <img src={profile.imgSrc} alt={profile.name} />
              <h2>{profile.name}</h2>
              <p>{profile.job}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {profilesBottom.map((profile, index) => (
            <div key={index} className="profile">
              <img src={profile.imgSrc} alt={profile.name} />
              <h2>{profile.name}</h2>
              <p>{profile.job}</p>
            </div>
          ))}
        </div>
      </div>
      <p>This is Intro Page</p>
    </div>
  );
}

export default last_page;