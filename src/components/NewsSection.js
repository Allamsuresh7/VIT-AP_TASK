import React from 'react';

const newsData = [
  {
    img: '/images/home_newsimg.png',
    date: '04-10-2023',
    title: 'Honorable CM to VIT-APHonorableHonorableHono',
    desc: "Convocation a culmination of student's accomplishment",
  },
  {
    img: '/images/home_newsimg1.png',
    date: '27-09-2023',
    title: 'Honorable CM to VIT-APHonorableHonorableHono',
    desc: "Convocation a culmination of student's accomplishment",
  },
  {
    img: '/images/home_newsimg2.png',
    date: '09-11-2023',
    title: 'Honorable CM to VIT-APHonorableHonorableHono',
    desc: "Convocation a culmination of student's accomplishment",
  },
];

const NewsSection = () => {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: 0, position: 'relative', zIndex: 0 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
        <div className="d-flex justify-content-between align-items-center" style={{ paddingTop: 48, marginBottom: 32 }}>
          <h2 style={{ color: '#7a1620', fontSize: 56, fontWeight: 700 }}>News about VIT-AP</h2>
          <a href="#" style={{ color: '#7a1620', fontWeight: 500, fontSize: 18, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            See all <span style={{ marginLeft: 8, borderBottom: '2px solid #7a1620', width: 32, display: 'inline-block' }}></span>
          </a>
        </div>
        <div className="row justify-content-center" style={{ gap: 0, position: 'relative', zIndex: 3 }}>
          {newsData.map((news, idx) => (
            <div className="col-12 col-md-4 d-flex justify-content-center" key={idx} style={{ marginBottom: 0 }}>
              <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', flex: 1, maxWidth: 370, minWidth: 320, margin: '0 16px', position: 'relative', zIndex: 4 }}>
                <img src={news.img} alt="news" style={{ width: 370, height: 220, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8}} />
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#757575', fontSize: 16, marginBottom: 8 }}>Date: {news.date}</div>
                  <div style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>{news.title}</div>
                  <div style={{ color: '#333', fontSize: 16, marginBottom: 'auto' }}>{news.desc}</div>
                  <a href="#" style={{ color: '#7a1620', fontWeight: 500, fontSize: 16, marginTop: 24, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>&rarr;</span> EXPLORE NEWS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Brown background absolutely positioned behind cards */}
      <div style={{ position: 'absolute', left: 0, right: 0, height: 220, background: '#7a1620', bottom: 0, zIndex: 1 }}></div>
      {/* White corner lines */}
      <div style={{ position: 'absolute', left: 32, bottom: 32, width: 60, height: 60, zIndex: 5 }}>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: 60, height: 4, background: '#fff' }}></div>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: 4, height: 60, background: '#fff' }}></div>
      </div>
      <div style={{ position: 'absolute', right: 32, bottom: 32, width: 60, height: 60, zIndex: 5 }}>
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 60, height: 4, background: '#fff' }}></div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 4, height: 60, background: '#fff' }}></div>
      </div>
    </div>
  );
};

export default NewsSection; 