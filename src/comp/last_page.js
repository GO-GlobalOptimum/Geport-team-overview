import React from 'react';

function last_page() {
  const profilesTop = [
    { name: '조태완', job: 'Leader-PM', mbti: "ENTJ",intro : "Ontology",imgSrc: require('./photo/태완.png')},
    { name: '장희진', job: 'Second-PM', mbti: "ESTP", intro : "High Hopes",imgSrc: require('./photo/희진.jpg')},
    { name: '김의진', job: 'Back-end', mbti : "INFJ",intro : "투지",imgSrc: require('./photo/의진.jpg')},
  ];

  const profilesBottom = [
    { name: '박지원', job: 'Back-end',mbti:"INFP", intro : "Make Your Wave",imgSrc: require('./photo/지원.png' )},
    { name: '유현우', job: 'Front-end', mbti:"ENFJ" ,intro : "Passion", imgSrc: require('./photo/현우.jpg') },
    { name: '최준범', job: 'Front-end',mbti: "ISTJ",intro : "Reality", imgSrc: require('./photo/준범.jpg' )},
    { name: '정승민', job: 'Front-end',mbti: "INTP",intro : "Positive", imgSrc: require('./photo/승민.jpg') },
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
              <p style={{marginTop:"10px", color:"green", fontWeight:"bold"}}>{profile.job}</p>
              <p style={{marginTop:"10px"}}>{profile.mbti}</p>
              <p>{profile.intro}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {profilesBottom.map((profile, index) => (
            <div key={index} className="profile">
              <img src={profile.imgSrc} alt={profile.name} />
              <h2>{profile.name}</h2>
              <p style={{marginTop:"10px", color:"green", fontWeight:"bold"}}>{profile.job}</p>
              <p style={{marginTop:"10px"}}>{profile.mbti}</p>
              <p>{profile.intro}</p>
            </div>
          ))}
        </div>
      </div>
      <p>This is Intro Page</p>
    </div>
  );
}

export default last_page;