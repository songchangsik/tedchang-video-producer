import { PortfolioData } from '../types';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  "hero": {
    "name": "테드창",
    "role": "PD",
    "subRoles": "브랜드 콘텐츠 · 예능형 연출 · 유튜브",
    "slogan": "끝까지 보는 데는 이유가 있죠",
    "videoBackgroundUrl": "/intro.mp4",
    "stat1Value": "3년",
    "stat1Label": "개인 유튜브 운영",
    "stat2Value": "100+",
    "stat2Label": "영상 제작",
    "subtitle": "그 이유부터 기획하고, 촬영하고, 편집합니다."
  },
  "about": {
    "oneLiner": "재미없던 영상도 살립니다, 심폐소생술 전문",
    "paragraphs": [
      "광고팀에서 기업 유튜브 콘텐츠를 제작하며, 브랜드 톤을 예능형 콘텐츠로 풀어냈습니다",
      "개인 유튜브를 3년간 직접 운영하며, 아이디어를 실제 콘텐츠로 끝까지 완성해왔습니다",
      "브랜드 콘텐츠와 개인 채널을 모두 경험하며, 목적에 맞게 톤을 조절해왔습니다"
    ],
    "profileImageUrl": "/assets/media/01_item_about_profileImageUrl.jpg",
    "strengths": [
      {
        "title": "아이디어 구체화",
        "description": "생각을 실제 촬영 가능한 기획으로"
      },
      {
        "title": "빠른 피드백 반영",
        "description": "의견을 받아 결과물에 바로 적용"
      },
      {
        "title": "실행과 마무리",
        "description": "맡은 아이디어를 실제 결과물까지"
      }
    ]
  },
  "skills": {
    "tools": [
      {
        "name": "Final Cut Pro",
        "desc": "메인 편집 · 컷편집"
      },
      {
        "name": "Photoshop",
        "desc": "썸네일 · 이미지 편집"
      },
      {
        "name": "Motion",
        "desc": "타이틀 · 모션 효과"
      },
      {
        "name": "Runway",
        "desc": "AI 영상 · 생성형 효과"
      },
      {
        "name": "Vrew",
        "desc": "자막 · 텍스트 기반 편집"
      },
      {
        "name": "Illustrator",
        "desc": "벡터 그래픽 · 디자인 리소스"
      }
    ],
    "competencies": [
      "기획",
      "촬영",
      "편집",
      "썸네일",
      "쇼츠",
      "롱폼"
    ]
  },
  "featuredWorks": [
    {
      "id": "fw-1",
      "title": "파리바게뜨 몽골 진출 ",
      "category": "Global Branding",
      "client": "Paris Baguette UK",
      "thumbnailUrl": "/assets/media/02_item_featuredWorks_0_thumbnailUrl.png",
      "videoUrl": "https://youtu.be/fAD0QHQkoQ8?si=UmM_tDNpcc9DyoUu",
      "planningIntent": "몽골 현지 학생 / '몽골에서 만나는 한국'이라는 예상 밖의 소재를 통해 시청자의 궁금증을 자극하고, 파리바게뜨 브랜드를 콘텐츠에 자연스럽게 녹여냈습니다",
      "role": "메인 PD (기획 80%, 편집 100%, 썸네일 100%)",
      "performance": "조회수 56만 회 · 좋아요 9,600개 ",
      "behindStory": "롱폼 촬영이 처음인 출연진과 함께한 프로젝트였습니다. 대본과 구성을 촘촘하게 준비했지만 예상치 못한 누락이 발생했고, 완성도를 위해 추가 촬영을 진행했습니다.",
      "storyboardImages": [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
      ],
      "tags": [
        "브랜딩",
        "영국런칭",
        "현지촬영",
        "숏폼"
      ]
    },
    {
      "id": "fw-2",
      "title": "텍사스 파리바게뜨 공장 2027년 착공 홍보",
      "category": "Web Entertainment",
      "client": "Baskin Robbins Korea",
      "thumbnailUrl": "/assets/media/03_item_featuredWorks_1_thumbnailUrl.png",
      "videoUrl": "https://youtu.be/ZUrWfZ07bro?si=__jd_uD1v6--UBaU",
      "planningIntent": "미국 빵집과는 다른 파리바게뜨만의 매력을 보여주고 싶었습니다. 다양한 빵과 편하게 머물 수 있는 매장 분위기를 자연스럽게 담아 브랜드의 장점을 전달하는 데 집중했습니다.",
      "role": "메인 PD (기획 80%, 편집 100%, 썸네일 100%)",
      "performance": "조회수 23만 회 · 좋아요 1,600개 ",
      "behindStory": "시차로 인해 실시간 화상 미팅이 쉽지 않았고, 촬영 과정에서 일부 필수 대사가 누락되었습니다. 부족한 부분은 자막으로 보완해 자연스러운 흐름을 유지했습니다.",
      "storyboardImages": [
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
      ],
      "tags": [
        "웹예능",
        "멀티캠",
        "챌린지",
        "B급재미"
      ]
    },
    {
      "id": "fw-3",
      "title": "광화문 상미당, 80년 만에 파리바게뜨로 재오픈",
      "category": "Branded Content",
      "client": "Dunkin Donuts",
      "thumbnailUrl": "/assets/media/04_item_featuredWorks_2_thumbnailUrl.png",
      "videoUrl": "https://youtu.be/LTHEIKElau0?si=zq1wAcx1tEdaAS12",
      "planningIntent": "젠슨 황의 한국 방문 당시 화제가 된 치맥 에피소드로 시청자의 관심을 먼저 끌고, 이후 광화문 파리바게뜨를 디저트 코스로 자연스럽게 연결했습니다.",
      "role": "메인 PD (기획 100%, 촬영 60%, 편집 100%, 썸네일 100%)",
      "performance": "조회수 11만 회 · 좋아요 2,500개 ",
      "behindStory": "야외 촬영 특성상 동선과 구도 확보에 제약이 있었고, 광고주의 현장 요청 사항도 수시로 반영하며 촬영을 진행했습니다.",
      "storyboardImages": [],
      "tags": [
        "시트콤",
        "오피스",
        "콜라보",
        "전환율상승"
      ]
    },
    {
      "id": "fw-4",
      "title": "SPC 가평휴게소 콘텐츠",
      "category": "Premium Cinematic",
      "client": "Fashion5",
      "thumbnailUrl": "/assets/media/05_item_featuredWorks_3_thumbnailUrl.png",
      "videoUrl": "https://youtu.be/_pco1MF9zMA?si=RFReW7_OMzSRly0i",
      "planningIntent": "SPC가 운영하는 가평휴게소에서만 만날 수 있는 한정 메뉴를 중심으로, 브랜드의 차별점을 자연스럽게 콘텐츠에 담았습니다.",
      "role": "메인 PD (기획 100%, 촬영 50%, 편집 100%, 썸네일 100%)",
      "performance": "조회수 7.7만 회 · 좋아요 1,000개 ",
      "behindStory": "휴게소 특성상 유동인구가 많아 촬영 동선 확보가 쉽지 않았고, 필요한 디테일 컷을 놓치지 않기 위해 동선을 나눠 촬영했습니다.",
      "storyboardImages": [],
      "tags": [
        "시네마틱",
        "4K",
        "ASMR",
        "색보정"
      ]
    },
    {
      "id": "fw-5",
      "title": "케이팝 데몬 헌터스 × 파리바게뜨 협업 콘텐츠",
      "category": "Commercial Shorts",
      "client": "City Deli",
      "thumbnailUrl": "/assets/media/06_item_featuredWorks_4_thumbnailUrl.png",
      "videoUrl": "https://youtu.be/c2vE-pWkCFE?si=VtpczKVqS3yPHc7w",
      "planningIntent": "화제성이 높은 케이팝 데몬 헌터스 IP를 활용해 시청자의 관심을 끌고, 파리바게뜨 협업 제품을 자연스럽게 소개하는 콘텐츠를 기획했습니다.",
      "role": "메인 PD (기획 30%, 편집 100%, 썸네일 100%)",
      "performance": "조회수 6만 회 · 좋아요 409개 ",
      "behindStory": "",
      "storyboardImages": [],
      "tags": [
        "숏폼",
        "스피드램핑",
        "트랜지션",
        "앱유도"
      ]
    },
    {
      "id": "fw-6",
      "title": "SPC 브랜드 크리스마스 한정상품 소개",
      "category": "Personal Project",
      "client": "TEDCHANGG (개인 채널)",
      "thumbnailUrl": "/assets/media/07_item_featuredWorks_5_thumbnailUrl.png",
      "videoUrl": "https://youtu.be/zpzLuHSvwww?si=FGBUpl6cOUpkZQbs",
      "planningIntent": "크리스마스 홈파티 분위기를 연출해 SPC 브랜드의 시즌 한정상품을 자연스럽게 소개하는 콘텐츠를 기획했습니다.",
      "role": "메인 PD (기획 60%, 촬영 70%, 편집 100%, 썸네일 90%)",
      "performance": "조회수 6.5만 회 · 좋아요 646개 ",
      "behindStory": "모든 상품을 SPC 본사에서 직접 픽업해야 했고, 예기치 못한 상황에 대비해 동일 상품을 추가로 준비했습니다. 이동량이 많을 것을 예상해 미리 큰 에코백을 준비했고, 덕분에 촬영을 차질 없이 진행할 수 있었습니다.",
      "storyboardImages": [],
      "tags": [
        "100만뷰",
        "알고리즘",
        "A/B테스트",
        "데이터분석"
      ]
    }
  ],
  "personalYoutube": {
    "channelName": "테드창",
    "channelHandle": "@tedchangg",
    "description": "하고 싶은 건, 직접 만들어 올립니다",
    "items": [
      {
        "id": "yt-1",
        "title": "이번 여행에서 이게 정말 필요한걸까",
        "thumbnailUrl": "/assets/media/08_item_personalYoutube_items_0_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/l6X5vK2Une4",
        "views": "128만 회",
        "isBest": true,
        "planningIntent": "시청자가 이탈하는 초반 5초 구간의 시청 지속율을 높이기 위해 강렬한 예고편과 시각 효과 배치.",
        "shootingPoint": "얼굴 크게 잡는 아이레벨 샷과 손짓 활용으로 친근감 유도.",
        "editingPoint": "3초마다 사운드 효과 및 자막 줌인 기법 적용하여 지루함 제거.",
        "keyLearnings": "알고리즘의 핵심은 '첫 30초 이탈률 방지'와 '썸네일 클릭률(CTR 10% 이상)'의 조화임을 입증."
      },
      {
        "id": "yt-2",
        "title": " 말 못 하는 게 이렇게 고된 거였니",
        "thumbnailUrl": "/assets/media/09_item_personalYoutube_items_1_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/zHRL92OPt0c?si=AnNRu4C8ICBJyP9K",
        "views": "85만 회",
        "isBest": true,
        "planningIntent": "영상 제작 초보자 및 지망생들이 가장 필요로 하는 단축키와 실전 편집 템플릿 정보 제공.",
        "shootingPoint": "화면 녹화(Screen Capture)와 PD 실물 리액션을 PIP(Picture-in-Picture)로 합성.",
        "editingPoint": "핵심 팁 마다 자막 팝업 모션과 강조 사운드 효과 삽입.",
        "keyLearnings": "정보성 영상에서도 재미있는 캐릭터성과 오디오 임팩트가 더해지면 완주율이 올라감을 파악."
      },
      {
        "id": "yt-3",
        "title": " 노스탤지어도 모르는 놈한테는 장가 안가",
        "thumbnailUrl": "/assets/media/10_item_personalYoutube_items_2_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/OD9mzEWRxNY?si=bdqpobgu7dywHPPO",
        "views": "64만 회",
        "isBest": true,
        "planningIntent": "장비가 부족한 1인 크리에이터를 위해 단 1대의 카메라로 멀티캠 효과를 내는 구도 설계 가이드.",
        "shootingPoint": "Master Shot과 Tight Close-up을 재연 촬영하여 컷 분할 연출.",
        "editingPoint": "인물 움직임에 맞춘 오토 리프레임 모션과 트랜지션 추가.",
        "keyLearnings": "기획 단계에서 컷 구도를 미리 머릿속에 계산하면 편집 시간이 절반으로 줄어듦."
      },
      {
        "id": "yt-4",
        "title": " 넌 웃는모습이 제일 예뻐",
        "thumbnailUrl": "/assets/media/11_item_personalYoutube_items_3_thumbnailUrl.jpg",
        "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "views": "42만 회",
        "isBest": false,
        "planningIntent": "모바일 화면에서도 한눈에 읽히는 고대비 텍스트와 표정 합성 포토샵 작업 공개.",
        "shootingPoint": "썸네일용 다양한 리액션 사진 표정 10종 미리 촬영하여 누끼 작업.",
        "editingPoint": "스트로크, 그림자 효과, 텍스트 기울이기 등 명확한 시인성 부여.",
        "keyLearnings": "텍스트는 5자 이내, 인물 표정이 70% 이상의 시선을 사로잡음."
      },
      {
        "id": "yt-5",
        "title": " 여기 꽃이 있는데 꽃보러 어딜 간다는거야",
        "thumbnailUrl": "/assets/media/12_item_personalYoutube_items_4_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/VFhaAQKjmWc?si=uktls0f6XuePSzRZ",
        "views": "31만 회",
        "isBest": false,
        "planningIntent": "상업 영상과 예능 콘텐츠의 경계선에서 자연스럽게 제품을 노출하는 컷 리듬 분석.",
        "shootingPoint": "제품의 PPL 컷을 리드미컬하게 인서트하기 위한 오디오 비트 맞춤 촬영.",
        "editingPoint": "BGM 음악의 드롭(Drop) 비트에 정확히 맞춰 화면을 스위칭.",
        "keyLearnings": "음악 비트와 자막이 일치할 때 시청자는 몰입감을 최대로 느낌."
      },
      {
        "id": "yt-6",
        "title": " 너네 솔직히 초면 아니지, 나 몰래 만나고 있었던 거지",
        "thumbnailUrl": "/assets/media/13_item_personalYoutube_items_5_thumbnailUrl.webp",
        "videoUrl": "https://youtu.be/CPB0UOsBBs4?si=apIF4ZdKGeSnq1kY",
        "views": "29만 회",
        "isBest": false,
        "planningIntent": "저작권 걱정 없이 사용할 수 있는 유용한 사이트와 예능 폴리 오디오 팁 공유.",
        "shootingPoint": "데스크 세팅 환경에서 마이크 음질 테스트와 함께 시연.",
        "editingPoint": "사이트별 장단점 표 요약 렌더링 및 템플릿 제공.",
        "keyLearnings": "유용한 정보 저장을 위한 북마크 공유율이 높아 채널 유입 기여."
      },
      {
        "id": "yt-7",
        "title": " 청춘 페스티벌 가는 청춘 호소인 둘",
        "thumbnailUrl": "/assets/media/14_item_personalYoutube_items_6_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/mYLZj-ec4wc?si=E-DLt0xTTceee5SX",
        "views": "53만 회",
        "isBest": true,
        "planningIntent": "유튜브 알고리즘 추천 페이지에 노출되기까지의 타겟 맞춤 키워드 기획 전략 분석.",
        "shootingPoint": "화이트보드 판서 느낌으로 아이디어 구조화 시각화.",
        "editingPoint": "타임라인을 1분 단위로 쪼개어 그래픽 자료 제시.",
        "keyLearnings": "지속적인 업로드 주기와 일관된 타겟 톤앤매너의 가치 파악."
      },
      {
        "id": "yt-8",
        "title": " 나이 한 살 더 먹은 소감이 어떠세요",
        "thumbnailUrl": "/assets/media/15_item_personalYoutube_items_7_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/BbWzX4jHavs?si=FeHv4ImpAstXM2gc",
        "views": "38만 회",
        "isBest": false,
        "planningIntent": "롱폼 영상의 하이라이트를 숏츠로 재가공하여 본편 유입 링크를 배치하는 선순환 구조 설계.",
        "shootingPoint": "세로형 촬영과 가로형 촬영을 겸하는 스마트한 카메라 구도 기법.",
        "editingPoint": "숏츠 하단 '관련 동영상' 버블 가이드 강조 효과 연출.",
        "keyLearnings": "숏츠는 채널 유입의 문이고, 롱폼은 팬덤 형성의 장이다."
      },
      {
        "id": "yt-9",
        "title": " 수원은 뭐하고 놀아야 되니",
        "thumbnailUrl": "/assets/media/16_item_personalYoutube_items_8_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/zb4XEfhz4fU?si=jM9AUWpQFwxz1tzo",
        "views": "45만 회",
        "isBest": false,
        "planningIntent": "시네마틱 톤앤매너 완성을 위한 다빈치 리졸브 색보정 파이프라인 공개.",
        "shootingPoint": "LOG 프로필 촬영 워크플로우 실습.",
        "editingPoint": "컬러 스페이스 변환과 커스텀 LUT 적용.",
        "keyLearnings": "색감 전달 하나로 브랜드 고급감이 크게 달라짐을 확인."
      },
      {
        "id": "yt-10",
        "title": " 네 명 다 좀 시끄럽긴 한데, 심성은",
        "thumbnailUrl": "/assets/media/17_item_personalYoutube_items_9_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/XYIE12x81yU?si=mu0TY_yuQ8UO9bDY",
        "views": "61만 회",
        "isBest": false,
        "planningIntent": "시선 이동 경로를 고려한 모바일 최적화 타이포그래피 레이아웃 노하우.",
        "shootingPoint": "시선 집중용 제스처 가이드 촬영.",
        "editingPoint": "텍스트 가독성을 높이는 콘트라스트 보정.",
        "keyLearnings": "모바일 화면 비율에서의 시인성이 클릭률을 좌우함."
      },
      {
        "id": "yt-11",
        "title": " 우리끼리 강릉도 와보고 오래 살고 볼일이다 애들아",
        "thumbnailUrl": "/assets/media/18_item_personalYoutube_items_10_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/ySrr9gdc1tY?si=8jeKX16rOZyVv-gF",
        "views": "77만 회",
        "isBest": false,
        "planningIntent": "최소한의 모바일 장비만으로 초고화질 예능 콘텐츠를 연출하는 기법.",
        "shootingPoint": "모바일 짐벌과 자연광 활용 인물 샷.",
        "editingPoint": "모바일 컷편집 앱과 오디오 노이즈 제거.",
        "keyLearnings": "장비보다 중요한 것은 명확한 기획과 편집 리듬감."
      },
      {
        "id": "yt-12",
        "title": " 당신과 함께하는 드라이브는 어디든 즐거워",
        "thumbnailUrl": "/assets/media/19_item_personalYoutube_items_11_thumbnailUrl.jpg",
        "videoUrl": "https://youtu.be/6objFybqse0?si=5gUngyNUf7MUAoAG",
        "views": "50만 회",
        "isBest": false,
        "planningIntent": "광고주 피드백을 최소화하는 스토리보드 구성 및 예능형 브랜디드 콘텐츠.",
        "shootingPoint": "제품 인서트 샷과 인물 반응의 자연스러운 오버랩.",
        "editingPoint": "브랜드 아이덴티티 컬러 모션 자막 도입.",
        "keyLearnings": "상업성과 콘텐츠 재미의 절묘한 균형점 확보."
      }
    ]
  },
  "otherWorks": [
    {
      "id": "ow-1",
      "brand": "Parisbaguette",
      "title": "파리바게뜨 계절 시즌 신제품 메인 프로모션 영상",
      "thumbnailUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "role": "기획 & 메인 편집",
      "period": "2025.03 - 2025.04",
      "toolsUsed": [
        "Final Cut Pro",
        "Photoshop",
        "After Effects"
      ]
    },
    {
      "id": "ow-2",
      "brand": "Baskin Robbins",
      "title": "배스킨라빈스 이달의 맛 SNS 캠페인 쇼츠 3종",
      "thumbnailUrl": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "role": "촬영 & 숏폼 모션편집",
      "period": "2025.01 - 2025.02",
      "toolsUsed": [
        "Final Cut Pro",
        "After Effects",
        "Vrew"
      ]
    },
    {
      "id": "ow-3",
      "brand": "Dunkin",
      "title": "던킨 모닝콤보 출근길 브랜디드 오피스 웹예능",
      "thumbnailUrl": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "role": "총괄 연출 & 편집",
      "period": "2024.10 - 2024.11",
      "toolsUsed": [
        "Final Cut Pro",
        "Photoshop",
        "Runway"
      ]
    },
    {
      "id": "ow-4",
      "brand": "Fashion5",
      "title": "패션5 시그니처 케이크 시네마틱 티저 비주얼",
      "thumbnailUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "role": "4K DIT & 컬러그레이딩",
      "period": "2024.08 - 2024.09",
      "toolsUsed": [
        "Final Cut Pro",
        "Photoshop",
        "Illustrator"
      ]
    },
    {
      "id": "ow-5",
      "brand": "Paris Croissant",
      "title": "파리크라상 클래식 베이커리 제작 다큐멘터리",
      "thumbnailUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "role": "기획, 촬영, 종합편집",
      "period": "2024.05 - 2024.06",
      "toolsUsed": [
        "Final Cut Pro",
        "Vrew",
        "After Effects"
      ]
    },
    {
      "id": "ow-6",
      "brand": "City Deli",
      "title": "시티델리 도심 속 라이프스타일 도시락 브랜딩",
      "thumbnailUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "role": "기획 & 숏폼 연출",
      "period": "2024.02 - 2024.03",
      "toolsUsed": [
        "Final Cut Pro",
        "Photoshop"
      ]
    }
  ],
  "plannings": [
    {
      "id": "plan-1",
      "title": "남들이 좋다는 거, 진짜 좋을까?",
      "client": "콜라오빠콜라형",
      "summary": "SNS에서 화제가 되는 트렌드를 직접 체험하고, 광고가 아닌 실제 경험을 바탕으로 검증하는 체험형 리얼 콘텐츠.",
      "whyMade": "SNS를 통해 새로운 유행이 빠르게 확산되지만, 실제 경험보다 과장된 후기나 광고성 콘텐츠가 많아 신뢰도가 낮아지고 있다.\n\n직접 체험하고 솔직한 기준으로 평가하는 콘텐츠에 대한 수요가 꾸준히 증가하고 있으며, 단순 리뷰가 아닌 '직접 검증'하는 포맷은 정보와 예능을 동시에 제공할 수 있다.",
      "target": "20 - 30대 트렌드에 관심이 많고, 직접 경험한 솔직한 후기를 선호하는 시청자",
      "problem": "기존 해외 광고는 일방적인 제품 소개에 그쳐 시청 지속율이 평균 15초 미만에 불과함.",
      "insight": "영국 틱톡/유튜브에서 인기 있는 'Street Taste Test' 및 'Blind Challenge' 예능 요소와 K-디저트 비주얼의 조화.",
      "concept": "'바이럴은 믿지 말고, 직접 해보자.'",
      "references": "영국 인기 유튜버 'Sidemen'의 길거리 챌린지 앵글 + tvN 예능 자막 톤앤매너",
      "shootingMethod": "소형 미러리스 3대(메인 앵글, 인플루언서 앵글, 현장 스케치)로 자발적이고 자연스러운 세팅",
      "thumbnailDirection": "충격받은 표정의 현지인 얼굴 + '런던 사람들이 한국 빵을 먹고 한 말?' 직관적 타이포",
      "expectedPerformance": "초반 30초 이탈률 20% 이하, 오가닉 뷰 100만 회 이상 및 SNS 자발적 밈 확산"
    },
    {
      "id": "plan-2",
      "title": "오빠가 대신 물어봄 / 오대봄",
      "client": "콜라오빠콜라형",
      "summary": "사람들이 속으로는 궁금하지만 직접 묻기 어려웠던 질문을 콜라오빠가 대신 물어보고, 예상 밖의 솔직한 답변을 끌어내는 인터뷰 콘텐츠.",
      "whyMade": "콜라오빠의 편한 이미지와 직설적인 화법을 활용해, 다른 인터뷰에서는 쉽게 나오지 않는 질문을 대신 던지는 콘텐츠를 기획했다.",
      "target": "직접 묻기 어려운 현실적인 궁금증을 가진 20 - 30대",
      "problem": "단순 아이스크림 컷과 예쁜 모델 출연만으로는 시청자의 클릭을 유발하지 못함.",
      "insight": "시청자들은 자신이 좋아하는 출연진이 진심으로 내기하고 당황하는 모습에 열광함.",
      "concept": "궁금한 건 많은데 내가 묻기는 좀 그렇잖아..\n\n직업, 연애, 돈, 외모처럼 누구나 한 번쯤 궁금했던 질문을 콜라오빠가 대신 물어본다.\n\n다소 민감한 질문도 편하게 웃으며 대화를 이어가고, 출연자의 진짜 경험이 자연스럽게 나오도록 만드는 것이 핵심이다.\n\nex) 피부과 직원에게 '돈 아까운 시술 하나만 말해주세요'\nex) 웨딩플래너에게 '파혼 직전 커플은 티가 나요?'",
      "references": "유튜브 '문명특급' 인터뷰 템포 + '무한도전' 자막 타격감",
      "shootingMethod": "스튜디오 멀티캠 + 슬로모션 아이스크림 푸드 샷 믹스",
      "thumbnailDirection": "아이스크림을 입에 물고 경악하는 메인 출연진 짤 + '이 맛이 이긴다고?' 텍스트",
      "expectedPerformance": "시청 지속 시간 4분 이상 달성, 매장 방문 구매 인증샷 이벤트 참여율 200% 증대"
    },
    {
      "id": "plan-3",
      "title": "1439분 친구",
      "client": "콜라오빠콜라형",
      "summary": "1439는 하루 1,440분에서 마지막 1분을 뺀 숫자다. 처음 만난 사람과 하루를 함께 보내지만, 마지막 1분에는 다시 각자의 일상으로 돌아간다. 인터뷰 대신 친구가 되어 함께 시간을 보내며, 그 과정에서 자연스럽게 흘러나오는 하루와 이야기를 담아내는 리얼 브이로그 콘텐츠다.",
      "whyMade": "요즘 인터뷰 콘텐츠는 질문과 답변이 중심이다. 1439는 처음 만난 사람과 하루를 함께 보내며, 시간이 흐를수록 자연스럽게 나오는 대화와 관계를 담아낸다.",
      "target": "사람들의 다양한 삶과 이야기에 관심 있는 20 - 40대",
      "problem": "모닝커피 마케팅이 지나치게 진지하거나 진상 광고처럼 느껴질 수 있음.",
      "insight": "월요일 아침 출근 직후의 슬럼프를 부장님과의 티키타카로 위트 있게 풀어내면 공감 형성.",
      "concept": "'인터뷰가 아닌, 친구가 되어 이야기를 만든다.'",
      "references": "유튜브 '너덜너덜' 오피스 숏츠 + '좋소좋소 좋은중소' 현실적 톤",
      "shootingMethod": "핸드헬드 카메라인 척하는 유연한 워킹 샷으로 리얼리티 감성 전달",
      "thumbnailDirection": "출근 도장 찍기 직전의 사원의 얼빠진 표정 + '월요일 8시 59분' 붉은 타이포",
      "expectedPerformance": "유튜브 인기 급상승 동영상 진입, 모바일 쿠폰 등록률 30% 증가"
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "리서치 & 타겟 분석",
      "englishTitle": "Research & Target Analysis",
      "description": "트렌드 키워드, 타겟 시청자의 틱톡/유튜브 데이터 및 경쟁 채널 시청 지속율 분석",
      "details": [
        "최신 밈 및 유행음악 리서치",
        "타겟 연령대별 주 시청 시간대 파악",
        "알고리즘 벤치마킹 및 차별화 지점 도출"
      ]
    },
    {
      "step": "02",
      "title": "콘텐츠 기획 & 구상",
      "englishTitle": "Content Planning & Scripting",
      "description": "핵심 메시지 도출, 스크립트 작성, 3초 스키프 방지 Hook 및 스토리보드 제작",
      "details": [
        "기획 의도 및 핵심 콘셉트 수립",
        "대사/자막 템포가 포함된 구성안 작성",
        "스토리보드 및 앵글 콘티 연출"
      ]
    },
    {
      "step": "03",
      "title": "현장 연출 & 촬영",
      "englishTitle": "Shooting & Direction",
      "description": "조명, 오디오, 조명 세팅 및 현장 인물 리액션을 이끌어내는 프로페셔널 촬영",
      "details": [
        "멀티캠 & 라이팅 세팅",
        "현장 사운드 믹싱 및 마이크 세팅",
        "출연진 연출 및 즉흥 리액션 유도"
      ]
    },
    {
      "step": "04",
      "title": "컷 편집 & 그래픽",
      "englishTitle": "Editing & Motion Graphics",
      "description": "속도감 있는 컷편집, 예능 자막 효과, 오디오 사운드 디자인 및 컬러그레이딩",
      "details": [
        "1차 컷편집 및 타임라인 오디오 싱크",
        "예능 타이포 모션 & 타격감 사운드 효과",
        "브랜드 톤앤매너에 맞는 색보정"
      ]
    },
    {
      "step": "05",
      "title": "고클릭률 썸네일",
      "englishTitle": "High-CTR Thumbnail Design",
      "description": "모바일 시인성을 극대화한 썸네일 3~4종 제작 및 A/B 테스트 준비",
      "details": [
        "얼굴 표정 누끼 & 고대비 색상 적용",
        "5자 이내 직관적 어그로 타이포",
        "CTR 10% 이상 목표 디자인"
      ]
    },
    {
      "step": "06",
      "title": "퍼블리싱 & 최적화",
      "englishTitle": "Publishing & SEO",
      "description": "검색 최적화 태그, 타임스탬프, 카드/최종화면 및 커뮤니티 예고 포스팅",
      "details": [
        "검색 키워드 태그 & 설명란 세팅",
        "최종화면 및 관련 동영상 세팅",
        "업로드 타이밍 스케줄링"
      ]
    },
    {
      "step": "07",
      "title": "성과 측정 & 피드백",
      "englishTitle": "Analytics & Feedback",
      "description": "시청 지속 유효율 그래프 분석, 클릭률(CTR) 추적 및 다음 제작 피드백 적용",
      "details": [
        "구간별 시청자 이탈률 리포트 도출",
        "댓글 반응 및 정성적 피드백 집계",
        "다음 콘텐츠 개선안 데이터화"
      ]
    }
  ],
  "behindPhotos": [
    {
      "id": "bh-1",
      "title": "영국 런던 현지 로케이션 세팅",
      "category": "현장 스케치",
      "imageUrl": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "description": "파리바게뜨 UK 런칭 촬영 당시, 야외 라이팅과 오디오를 체크하는 현장 모습",
      "date": "2025.03"
    },
    {
      "id": "bh-2",
      "title": "4K 미러리스 & 짐벌 세팅",
      "category": "장비 세팅",
      "imageUrl": "https://images.unsplash.com/photo-1512790182412-b19e6d611397?auto=format&fit=crop&w=800&q=80",
      "description": "빠른 이동과 와이드/타이트 컷을 동시에 커버하기 위한 메인 리그 세팅",
      "date": "2025.01"
    },
    {
      "id": "bh-3",
      "title": "배스킨라빈스 예능 멀티캠 현장",
      "category": "촬영 모습",
      "imageUrl": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      "description": "출연진의 예기치 못한 폭소를 놓치지 않기 위해 3대 카메라인 멀티캠 구도 지시",
      "date": "2024.11"
    },
    {
      "id": "bh-4",
      "title": "사무실 후반 편집 데스크",
      "category": "오피스 라이프",
      "imageUrl": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      "description": "듀얼 모니터 환경에서 타임라인 오디오 믹싱과 색보정 작업을 진행 중인 모니터",
      "date": "2024.10"
    },
    {
      "id": "bh-5",
      "title": "기획 회의 & 아이디어 화이트보드",
      "category": "오피스 라이프",
      "imageUrl": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      "description": "신제품 마케팅 팀과 함께 썸네일 카피 및 초반 Hook 5초 시나리오 난상 토론",
      "date": "2024.08"
    },
    {
      "id": "bh-6",
      "title": "스튜디오 조명 및 블루스크린 세팅",
      "category": "장비 세팅",
      "imageUrl": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80",
      "description": "합성 작업이 필요한 숏폼 그래픽 촬영을 위해 핀조명 3점 조명 기법 세팅",
      "date": "2024.06"
    }
  ],
  "contact": {
    "blogUrl": "https://blog.naver.com/tedchangg",
    "blogLabel": "BLOG",
    "blogDisplayText": "블로그",
    "youtubeHandle": "유튜브",
    "instagramHandle": "인스타그램",
    "email": "thdckdtlr332@gmail.com",
    "youtubeUrl": "https://youtube.com/@tedchangg",
    "instagramUrl": "https://instagram.com/changchanghanna1",
    "resumePdfUrl": "https://drive.google.com/drive/folders/13zqqX_SIEQD-LJp1C-fIwHI0fLvsq2Fu?usp=sharing",
    "portfolioPdfUrl": "#"
  }
};
