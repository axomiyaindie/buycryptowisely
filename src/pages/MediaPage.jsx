// src/pages/MediaPage.jsx
import { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';
import { Badge } from '../components/common/Badge';
import { Premium3DCard } from '../components/common/Premium3DCard';
import { ScrollReveal } from '../components/common/ScrollReveal';

// Directly imports the arrays from your dedicated data manager file
import { ARTICLES, VIDEOS, EXPERTS } from '../data/mediaData';

export const MediaPage = ({ translations }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Safe validation check for Assamese language configuration
  const isAssamese = translations?.heroHeading1 === "আপোনাৰ সম্পূৰ্ণ";

  // Dynamic language routing parameters
  const getTitle = (item) => isAssamese ? (item.titleAs || item.name) : (item.titleEn || item.name);
  const getDescription = (item) => isAssamese ? (item.descriptionAs || item.descriptionEn) : item.descriptionEn;
  const getExpertRole = (item) => isAssamese ? (item.roleAs || item.roleEn) : item.roleEn;
  const getExpertBio = (item) => isAssamese ? (item.bioAs || item.bioEn) : item.bioEn;

  const VideoModal = ({ video, onClose }) => {
    if (!video) return null;
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={onClose}>
        <div style={{ position: 'relative', width: '90%', maxWidth: 900, background: COLORS.bgCard, borderRadius: BORDER_RADIUS.lg, overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`} title={getTitle(video)} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
          <div style={{ padding: SPACING.lg }}>
            <div style={{ marginBottom: SPACING.sm }}><Badge variant="default">{video.channel}</Badge></div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.text, marginBottom: SPACING.sm }}>{getTitle(video)}</h3>
            <button onClick={onClose} style={{ padding: `${SPACING.sm}px ${SPACING.lg}px`, background: COLORS.primary, border: 'none', borderRadius: BORDER_RADIUS.md, color: '#FFF', cursor: 'pointer', width: '100%' }}>{isAssamese ? 'বন্ধ কৰক' : 'Close'}</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
      
      {/* Page Header */}
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: SPACING.xl }}>
          <Badge>Media Hub</Badge>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: COLORS.text, marginTop: SPACING.md, marginBottom: SPACING.md }}>
            {isAssamese ? 'শিক্ষামূলক সম্পদ' : 'Educational Resources'}
          </h1>
          <p style={{ fontSize: 16, color: COLORS.textSec, maxWidth: 600, margin: "0 auto" }}>
            {isAssamese ? 'বিশ্বাসযোগ্য উৎসৰ পৰা সংগৃহীত ভিডিঅ, আৰ্টিকেল আৰু বিশেষজ্ঞৰ বিশ্লেষণ' : 'Curated videos, articles, and expert analysis from trusted industry sources'}
          </p>
        </div>
      </ScrollReveal>

      {/* Global Disclaimer */}
      <ScrollReveal delay={0.05}>
        <div style={{ background: COLORS.red + '10', border: `1px solid ${COLORS.red}`, borderRadius: BORDER_RADIUS.lg, padding: SPACING.md, marginBottom: SPACING.xl, textAlign: 'center' }}>
          <span style={{ fontWeight: 600, marginRight: SPACING.sm }}>Disclaimer</span>
          <span style={{ color: COLORS.textSec, fontSize: 14 }}>
            {isAssamese ? 'এই সমলসমূহ কেৱল শিক্ষামূলক উদ্দেশ্যেৰে দিয়া হৈছে। ক্ৰিপ্টো বিনিয়োগ উচ্চ বিপদজনক। নিজৰ গৱেষণা কৰক (DYOR)।' : 'This content is for educational purposes only. Cryptocurrency investments are high risk. Always do your own research (DYOR).'}
          </span>
        </div>
      </ScrollReveal>

      {/* SECTION 1: ARTICLES */}
      <div style={{ marginBottom: SPACING.xxxl }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.lg, borderBottom: `2px solid ${COLORS.border}`, paddingBottom: SPACING.sm }}>
          <span style={{ fontSize: 24 }}>📰</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: COLORS.text }}>
            {isAssamese ? 'পঢ়িবলগীয়া আৰ্টিকেল' : 'Featured Articles'}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: SPACING.lg }}>
          {ARTICLES.map((item, index) => (
            <ScrollReveal key={item.id} delay={(index % 4) * 0.05}>
              <Premium3DCard>
                <div onClick={() => window.open(item.url, "_blank")} style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: BORDER_RADIUS.lg, overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease", height: "100%" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.primary} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.border}>
                  <img src={item.image} alt={getTitle(item)} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                  <div style={{ padding: SPACING.lg }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: SPACING.sm }}><Badge variant="default">{item.source}</Badge><span style={{ fontSize: 12, color: COLORS.textMuted }}>{item.readTime}</span></div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, marginBottom: SPACING.sm, lineHeight: 1.4 }}>{getTitle(item)}</h3>
                    <p style={{ fontSize: 13, color: COLORS.textSec, lineHeight: 1.5, marginBottom: SPACING.md }}>{getDescription(item)}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 12, color: COLORS.textMuted }}>{item.date}</span><span style={{ fontSize: 13, color: COLORS.primary, fontWeight: 500 }}>{isAssamese ? 'পঢ়ক →' : 'Read more →'}</span></div>
                  </div>
                </div>
              </Premium3DCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* SECTION 2: VIDEOS */}
      <div style={{ marginBottom: SPACING.xxxl }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.lg, borderBottom: `2px solid ${COLORS.border}`, paddingBottom: SPACING.sm }}>
          <span style={{ fontSize: 24 }}>▶️</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: COLORS.text }}>
            {isAssamese ? 'শৈক্ষিক ভিডিঅ' : 'Educational Videos'}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: SPACING.lg }}>
          {VIDEOS.map((item, index) => (
            <ScrollReveal key={item.id} delay={(index % 4) * 0.05}>
              <Premium3DCard>
                <div onClick={() => setSelectedVideo(item)} style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: BORDER_RADIUS.lg, overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease", height: "100%" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.primary} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.border}>
                  <div style={{ position: "relative" }}>
                    <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={getTitle(item)} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 50, height: 50, background: "rgba(0,0,0,0.75)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#fff" }}>▶</div>
                    <span style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.8)", padding: "2px 6px", borderRadius: 4, fontSize: 11, color: "#fff" }}>{item.duration}</span>
                  </div>
                  <div style={{ padding: SPACING.lg }}>
                    <Badge variant="default" style={{ marginBottom: SPACING.sm }}>{item.channel}</Badge>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, marginBottom: SPACING.sm, lineHeight: 1.4 }}>{getTitle(item)}</h3>
                    {item.warning && <div style={{ background: COLORS.red + '10', borderLeft: `3px solid ${COLORS.red}`, padding: '4px 8px', fontSize: 11, color: COLORS.red, marginTop: SPACING.sm }}>{item.warning}</div>}
                  </div>
                </div>
              </Premium3DCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* SECTION 3: EXPERTS */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.lg, borderBottom: `2px solid ${COLORS.border}`, paddingBottom: SPACING.sm }}>
          <span style={{ fontSize: 24 }}>👥</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700, color: COLORS.text }}>
            {isAssamese ? 'ক্ৰিপ্টো ব্যক্তিত্বৰ প্ৰফাইল' : 'Expert Profiles'}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: SPACING.lg }}>
          {EXPERTS.map((item, index) => (
            <ScrollReveal key={item.id} delay={(index % 4) * 0.05}>
              <Premium3DCard>
                <div onClick={() => window.open(item.twitterUrl, "_blank")} style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: BORDER_RADIUS.lg, cursor: "pointer", transition: "all 0.3s ease", height: "100%", padding: SPACING.lg, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.primary} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.border}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: SPACING.sm, marginBottom: SPACING.md }}>
                      <img src={item.avatar} alt={item.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: 'cover', border: `1px solid ${COLORS.border}` }} onError={(e) => e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0052FF&color=fff`} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.xs }}>
                          <span style={{ fontWeight: 700, fontSize: 15, color: COLORS.text }}>{item.name}</span>
                          {item.verified && <span style={{ fontSize: 14, color: '#1D9BF0' }}>✓</span>}
                        </div>
                        <div style={{ fontSize: 12, color: COLORS.textMuted }}>@{item.handle}</div>
                      </div>
                      <span style={{ fontSize: 18, color: COLORS.textMuted }}>𝕏</span>
                    </div>
                    <div style={{ fontSize: 11, color: COLORS.primary, fontWeight: 600, textTransform: 'uppercase', marginBottom: SPACING.xs }}>
                      {getExpertRole(item)}
                    </div>
                    <p style={{ fontSize: 13, color: COLORS.textSec, lineHeight: 1.5, marginBottom: SPACING.md }}>
                      {getExpertBio(item)}
                    </p>
                  </div>
                  <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: SPACING.sm, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: COLORS.textMuted }}>{isAssamese ? 'প্ৰফাইল খোলক' : 'View live feed'}</span>
                    <span style={{ fontSize: 12, color: '#1D9BF0', fontWeight: 600 }}>{isAssamese ? 'টুইটাৰ ↗' : 'Open Twitter ↗'}</span>
                  </div>
                </div>
              </Premium3DCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};