import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Eye, Menu, MessageCircle, Search, Users, X, Megaphone, MapPin } from 'lucide-react';

const logoUrl = 'https://new.hotpara.com/files/attach/images/228/549/256/c1b6aa36fae6e07bbbde6d435a43bd50.gif';
const stories = [
  { category: '비행 후기', tone: 'blue', date: '2025.10.25', title: '가을 하늘, 최고의 비행', desc: '오늘은 정말 완벽한 날씨였습니다. 오랜만에 느끼는 상쾌한 바람과 함께...', author: '김민수', views: 128, comments: 12, image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=900&q=85' },
  { category: '활공장 정보', tone: 'mint', date: '2025.10.22', title: '가평 연인산 활공장 안내', desc: '가평 연인산 활공장은 사계절 내내 좋은 비행 조건을 제공하는 인기 활공장입니다.', author: '관리자', views: 342, comments: 18, image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85' },
  { category: '모임 소식', tone: 'purple', date: '2025.10.20', title: '10월 정기 비행 모임 후기', desc: '이번 10월 정기 비행 모임이 성공적으로 진행되었습니다. 함께해 주신 모든 분들께...', author: '박지현', views: 96, comments: 7, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85' }
];
const gallery = [
  ['https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=700&q=80', '가을 하늘 아래'],
  ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80', '산과 바람'],
  ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80', '함께하는 비행'],
  ['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80', '아름다운 풍경']
];
const notices = [
  ['2025 연말 정기총회 안내', '2025.10.15'],
  ['동호회 규정 개정 안내', '2025.10.08'],
  ['신규 회원 가입 안내', '2025.09.25'],
  ['비행 안전 수칙 안내', '2025.09.10']
];
function Brand() {
  return <a className="brand" href="#home" aria-label="열풍패러글라이딩 클럽 홈"><img src={logoUrl} alt="열풍패러글라이딩 클럽 로고" /><span className="brand-copy"><strong>열풍패러글라이딩 클럽</strong><small>HOTWIND PARAGLIDING CLUB</small></span></a>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [notice, setNotice] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const filteredStories = stories.filter(s => !query || (s.title + s.desc + s.category).toLowerCase().includes(query.toLowerCase()));
  return <div className="site-shell">
    <header className="header">
      <Brand />
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        { [['홈','home'],['비행 이야기','stories'],['비행 갤러리','gallery'],['모임 일정','events'],['활공장 정보','spots'],['동호회 소개','about']].map(([label,id]) => <button key={id} className={id === 'home' ? 'nav-active' : ''} onClick={() => go(id)}>{label}</button>)}
      </nav>
      <div className="header-tools"><button aria-label="검색" onClick={() => setSearchOpen(!searchOpen)}><Search size={20}/></button><button className="desktop-menu" aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button></div>
    </header>
    {searchOpen && <div className="search-panel"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="비행 이야기 검색하기"/><button onClick={()=>{setQuery('');setSearchOpen(false)}} aria-label="검색 닫기"><X size={18}/></button></div>}
    <main>
      <section className={'hero hero-slide-'+slide} id="home">
        <img className="hero-image" src={slide === 1 ? 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90' : slide === 2 ? 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90' : 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=2200&q=90'} alt="패러글라이딩과 산악 풍경"/>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <div className="hero-brand"><img src={logoUrl} alt="열풍 로고"/><div><strong>열풍패러글라이딩 클럽</strong><span>HOTWIND PARAGLIDING CLUB</span></div></div>
          <h1>하늘을 나는 즐거움,<br/><em>열풍과 함께!</em></h1>
          <p>열풍패러글라이딩 클럽은 패러글라이딩을 사랑하는 사람들이 모여<br className="desktop-break"/> 함께 비행하고, 소통하며, 즐기는 동호회입니다.</p>
          <button className="join-button" onClick={()=>go('events')}>동호회 가입하기 <ArrowRight size={20}/></button>
        </div>
        <div className="hero-controls"><div className="hero-dots">{[0,1,2].map(n=><button key={n} className={slide===n?'dot selected':'dot'} aria-label={`슬라이드 ${n+1}`} onClick={()=>setSlide(n)}/>)}</div><button onClick={()=>setSlide((slide+2)%3)} aria-label="이전 슬라이드"><ChevronLeft/></button><button onClick={()=>setSlide((slide+1)%3)} aria-label="다음 슬라이드"><ChevronRight/></button></div>
      </section>
      <div className="page-content">
        <div className="main-column">
          <section className="content-section" id="stories">
            <div className="section-heading"><div><h2>최신 비행 이야기</h2><span className="heading-line"/></div><button className="more-link" onClick={()=>setNotice('전체 비행 이야기는 게시판 기능 연결 후 이용할 수 있습니다.')}>더보기 <ArrowRight size={14}/></button></div>
            {searchOpen && <p className="search-count">검색 결과 {filteredStories.length}건</p>}
            <div className="story-cards">{filteredStories.map(s=><article className="story-card" key={s.title}><button className="story-photo" onClick={()=>setNotice('게시글 상세보기는 게시판 기능 연결 후 이용할 수 있습니다.')}><img src={s.image} alt={s.title}/><span className={'category '+s.tone}>{s.category}</span></button><div className="story-body"><h3>{s.title}</h3><p>{s.desc}</p><div className="story-footer"><span className="author-avatar">{s.author.slice(0,1)}</span><span>{s.author}</span><time>{s.date}</time><span className="story-stat"><Eye size={13}/>{s.views}</span><span className="story-stat"><MessageCircle size={13}/>{s.comments}</span></div></div></article>)}</div>
          </section>
          <section className="content-section gallery-section" id="gallery"><div className="section-heading"><div><h2>비행 갤러리</h2><span className="heading-line"/></div><button className="more-link" onClick={()=>setNotice('사진 업로드와 전체 갤러리는 기능 연결 후 이용할 수 있습니다.')}>더보기 <ArrowRight size={14}/></button></div><div className="gallery-grid">{gallery.map(([src,title])=><button key={title} className="gallery-tile" onClick={()=>setNotice('사진 갤러리는 실제 동호회 사진 연결 후 이용할 수 있습니다.')}><img src={src} alt={title}/><span>{title}<ArrowUpRight size={15}/></span></button>)}</div></section>
        </div>
        <aside className="sidebar">
          <section className="side-card" id="events"><div className="side-heading"><h2><CalendarDays size={19}/> 다음 모임 일정</h2><button onClick={()=>setNotice('전체 모임 일정은 일정 관리 기능 연결 후 이용할 수 있습니다.')}>전체보기 <ArrowRight size={13}/></button></div><div className="event-inner"><div className="event-date"><strong>11.08</strong><span>토요일</span></div><div className="event-info"><h3>정기 비행 모임</h3><p><MapPin size={13}/> 가평 연인산 활공장</p><span className="attendees"><Users size={14}/> 12 / 20명</span><button onClick={()=>setNotice('참가 신청은 실제 운영진 연락처 또는 신청 폼 연결 후 이용할 수 있습니다.')}>참가 신청하기</button></div></div></section>
          <section className="side-card notice-card"><div className="side-heading"><h2><Megaphone size={19}/> 공지사항</h2><button onClick={()=>setNotice('공지사항 게시판 연결 후 전체 공지를 확인할 수 있습니다.')}>전체보기 <ArrowRight size={13}/></button></div><ul>{notices.map(([title,date])=><li key={title}><button onClick={()=>setNotice(title+' — 공지 상세 내용은 게시판 연결 후 확인할 수 있습니다.')}><span>{title}</span><time>{date}</time></button></li>)}</ul></section>
          <section className="side-card about-card" id="about"><div className="side-heading"><h2>열풍 클럽 소개</h2></div><p>좋은 바람과 좋은 사람들. 안전을 가장 먼저 생각하며 함께 하늘을 즐깁니다.</p><button className="about-link" onClick={()=>setNotice('클럽 소개와 가입 안내를 실제 운영 정보로 연결할 수 있습니다.')}>동호회 알아보기 <ArrowRight size={14}/></button></section>
        </aside>
      </div>
      <section className="spot-strip" id="spots"><div><span className="spot-kicker">FLYING SPOTS</span><h2>다음 비행은 어디로 떠나볼까요?</h2><p>활공장 정보와 안전한 비행 팁을 함께 나눠요.</p></div><button onClick={()=>setNotice('활공장 정보는 실제 운영진 자료를 연결한 뒤 제공됩니다.')}>활공장 정보 보기 <ArrowRight size={16}/></button></section>
    </main>
    <footer className="footer"><Brand/><span>하늘을 나는 즐거움, 열풍과 함께!</span><small>© 2026 HOTWIND PARAGLIDING CLUB</small></footer>
    {notice && <div className="modal-backdrop" onClick={()=>setNotice('')}><div className="notice-modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setNotice('')} aria-label="닫기"><X/></button><div className="modal-logo"><img src={logoUrl} alt="열풍 로고"/></div><h2>열풍패러글라이딩 클럽</h2><p>{notice}</p><button className="modal-confirm" onClick={()=>setNotice('')}>확인</button></div></div>}
  </div>;
}