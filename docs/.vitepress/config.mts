import { defineConfig } from 'vitepress'

const nav = [
  { text: '투어', link: '/tour/' },
  { text: '사용자', link: '/users/' },
  { text: '디스플레이', link: '/displays/' },
  { text: '레이아웃', link: '/layouts/' },
  { text: '스케줄링', link: '/scheduling/' },
]

// 수동으로 사이드바 정의
const sidebar = {
  '/': [
    {
      text: '시작하기',
      collapsed: true,
      items: [
        { text: '투어', link: '/tour/' },
        { text: '최초 사용자 액세스', link: '/tour/user-access' },
        { text: 'CMS 네비게이션', link: '/tour/cms-navigation' },
        { text: 'CMS 관리자 설정', link: '/tour/cms-settings' },
        { text: '폴더', link: '/tour/folders' },
        { text: '태그 관리', link: '/tour/tags' },
        { text: '전환 관리', link: '/tour/transitions' }
      ]
    },
    {
      text: '사용자 관리',
      collapsed: true,
              items: [
          { text: '사용자 관리', link: '/users/' },
          { text: '관리자', link: '/users/administration' },
          { text: '대시보드', link: '/users/dashboards' },
          { text: '기능 및 공유', link: '/users/features-and-sharing' },
          { text: '그룹', link: '/users/groups' },
          { text: '알림', link: '/users/notifications' },
          { text: '글로벌 요소 사용', link: '/users/using-global-elements' },
          { text: '라이브러리 검색 사용', link: '/users/using-library-searches' }
        ]
    },
    {
      text: '디스플레이',
      collapsed: true,
              items: [
          { text: '디스플레이 개요', link: '/displays/' },
          { text: '디스플레이란?', link: '/displays/what-is-a-display' },
          { text: '디스플레이 그룹', link: '/displays/display-groups' },
          { text: '동기화 그룹', link: '/displays/sync-groups' },
          { text: '설정', link: '/displays/settings' },
          { text: '구성', link: '/displays/configuration' },
          { text: '명령', link: '/displays/commands' },
          { text: '메트릭', link: '/displays/metrics' }
        ]
    },
    {
      text: '레이아웃',
      collapsed: true,
              items: [
          { text: '레이아웃 개요', link: '/layouts/' },
          { text: '레이아웃 에디터', link: '/layouts/editor' },
          { text: '레이아웃 에디터 개요', link: '/layouts/layout-editor-overview' },
          { text: '데이터 위젯', link: '/layouts/editor/data-widgets' },
          { text: '글로벌 요소', link: '/layouts/editor/global-elements' },
          { text: '라이브러리 검색', link: '/layouts/editor/library-search' },
          { text: '플레이리스트', link: '/layouts/editor/playlists' },
          { text: '게시 옵션', link: '/layouts/editor/publish-options' },
          { text: '위젯', link: '/layouts/editor/widgets' },
          { text: '템플릿', link: '/layouts/templates' },
          { text: '오버레이', link: '/layouts/overlay' },
          { text: '인터랙티브 액션', link: '/layouts/interactive-actions' },
          { text: '캠페인', link: '/layouts/campaigns' },
          { text: '광고 캠페인', link: '/layouts/ad-campaigns' }
        ]
    },
    {
      text: '미디어',
      collapsed: true,
              items: [
          { text: '미디어 개요', link: '/media/' },
          { text: '라이브러리', link: '/media/library' },
          { text: '플레이리스트', link: '/media/playlists' },
          { text: '모듈 관리', link: '/media/modules' },
          { text: '커넥터 관리', link: '/media/connectors' },
          { text: '대시보드 서비스', link: '/media/dashboard-service' },
          { text: '이미지 크기 조정', link: '/media/resizing-images' },
          { text: '라이브러리 정리', link: '/media/tidy-library' }
        ]
    },
    {
      text: '위젯',
      collapsed: true,
              items: [
          { text: '위젯 개요', link: '/media/widgets/' },
          { text: '오디오', link: '/media/widgets/audio' },
          { text: '캘린더', link: '/media/widgets/calendar' },
          { text: '시계', link: '/media/widgets/clock' },
          { text: '카운트다운', link: '/media/widgets/countdown' },
          { text: '통화', link: '/media/widgets/currencies' },
          { text: '대시보드', link: '/media/widgets/dashboard' },
          { text: '데이터셋', link: '/media/widgets/dataset' },
          { text: '임베디드', link: '/media/widgets/embedded' },
          { text: '긴급 알림', link: '/media/widgets/emergency-alerts' },
          { text: '플래시', link: '/media/widgets/flash' },
          { text: '구글 트래픽', link: '/media/widgets/google-traffic' },
          { text: 'HLS', link: '/media/widgets/hls' },
          { text: 'HTML 패키지', link: '/media/widgets/html-package' },
          { text: '이미지', link: '/media/widgets/image' },
          { text: '로컬 비디오', link: '/media/widgets/local-video' },
          { text: '마스토돈', link: '/media/widgets/mastodon' },
          { text: '메뉴 보드 카테고리', link: '/media/widgets/menu-boards-category' },
          { text: '비디오', link: '/media/widgets/video' },
          { text: '웹페이지', link: '/media/widgets/webpage' }
        ]
    },
    {
      text: '스케줄링',
      collapsed: true,
              items: [
          { text: '스케줄링 개요', link: '/scheduling/' },
          { text: '이벤트', link: '/scheduling/events' }
        ]
    }
  ]
}

export default defineConfig({
  title: "SignaLink",
  description: "SignaLink Documentation",
  base: '/SignaLink-manual/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/signalink/favicon.png' }],
    ['link', { rel: 'preload', href: '/Pretendard-Regular.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' }],
    ['link', { rel: 'preload', href: '/Pretendard-Bold.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' }]
  ],
  vite: {
    css: {
      devSourcemap: true
    }
  },
  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      title: 'SignaLink',
      description: 'SignaLink 문서',
      link: '/',
      themeConfig: {
        nav,
        sidebar,
        footer: {
          message: '새로운 디지털사이니지의 시작 SignaLink',
          copyright: '저작권 © 2024- SignaLink'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: '검색',
                    buttonAriaLabel: '문서 검색'
                  },
                  modal: {
                    noResultsText: '결과가 없습니다',
                    resetButtonTitle: '검색 초기화',
                    footer: {
                      selectText: '선택',
                      navigateText: '이동',
                      closeText: '닫기'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'SignaLink',
      description: 'SignaLink Documentation',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Tour', link: '/en/tour/index' },
          { text: 'Users', link: '/en/users/' },
          { text: 'Displays', link: '/en/displays/' },
          { text: 'Layouts', link: '/en/layouts/' },
          { text: 'Scheduling', link: '/en/scheduling/' },
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/en/' },
                { text: 'Tour', link: '/en/tour/index' },
                { text: 'User Access', link: '/en/tour/user-access' },
                { text: 'CMS Navigation', link: '/en/tour/cms-navigation' },
                { text: 'CMS Settings', link: '/en/tour/cms-settings' },
                { text: 'Folders', link: '/en/tour/folders' },
                { text: 'Tags', link: '/en/tour/tags' },
                { text: 'Transitions', link: '/en/tour/transitions' }
              ]
            },
            {
              text: 'User Management',
              collapsed: true,
                              items: [
                  { text: 'User Management', link: '/en/users/' },
                  { text: 'Administration', link: '/en/users/administration' },
                  { text: 'Dashboards', link: '/en/users/dashboards' },
                  { text: 'Features and Sharing', link: '/en/users/features-and-sharing' },
                  { text: 'Groups', link: '/en/users/groups' },
                  { text: 'Notifications', link: '/en/users/notifications' },
                  { text: 'Using Global Elements', link: '/en/users/using-global-elements' },
                  { text: 'Using Library Searches', link: '/en/users/using-library-searches' }
                ]
            },
            {
              text: 'Displays',
              collapsed: true,
              items: [
                { text: 'Display Overview', link: '/en/displays/' },
                { text: 'What is a Display?', link: '/en/displays/what-is-a-display' },
                { text: 'Display Groups', link: '/en/displays/display-groups' },
                { text: 'Sync Groups', link: '/en/displays/sync-groups' },
                { text: 'Settings', link: '/en/displays/settings' },
                { text: 'Configuration', link: '/en/displays/configuration' },
                { text: 'Commands', link: '/en/displays/commands' },
                { text: 'Metrics', link: '/en/displays/metrics' }
              ]
            },
            {
              text: 'Layouts',
              collapsed: true,
              items: [
                { text: 'Layout Overview', link: '/en/layouts/' },
                { text: 'Layout Editor', link: '/en/layouts/editor' },
                { text: 'Layout Editor Overview', link: '/en/layouts/layout-editor-overview' },
                { text: 'Data Widgets', link: '/en/layouts/editor/data-widgets' },
                { text: 'Global Elements', link: '/en/layouts/editor/global-elements' },
                { text: 'Library Search', link: '/en/layouts/editor/library-search' },
                { text: 'Playlists', link: '/en/layouts/editor/playlists' },
                { text: 'Publish Options', link: '/en/layouts/editor/publish-options' },
                { text: 'Widgets', link: '/en/layouts/editor/widgets' },
                { text: 'Templates', link: '/en/layouts/templates' },
                { text: 'Overlay', link: '/en/layouts/overlay' },
                { text: 'Interactive Actions', link: '/en/layouts/interactive-actions' },
                { text: 'Campaigns', link: '/en/layouts/campaigns' },
                { text: 'Ad Campaigns', link: '/en/layouts/ad-campaigns' }
              ]
            },
            {
              text: 'Media',
              collapsed: true,
              items: [
                { text: 'Media Overview', link: '/en/media/' },
                { text: 'Library', link: '/en/media/library' },
                { text: 'Playlists', link: '/en/media/playlists' },
                { text: 'Datasets', link: '/en/media/datasets' },
                { text: 'Module Management', link: '/en/media/modules' },
                { text: 'Connector Management', link: '/en/media/connectors' },
                { text: 'Dashboard Service', link: '/en/media/dashboard-service' },
                { text: 'Image Resizing', link: '/en/media/resizing-images' },
                { text: 'Tidy Library', link: '/en/media/tidy-library' }
              ]
            },
            {
              text: 'Widgets',
              collapsed: true,
              items: [
                { text: 'Audio', link: '/en/media/widgets/audio' },
                { text: 'Clock', link: '/en/media/widgets/clock' },
                { text: 'Image', link: '/en/media/widgets/image' }
              ]
            },
            {
              text: 'Scheduling',
              collapsed: true,
              items: [
                { text: 'Scheduling Overview', link: '/en/scheduling/' },
                { text: 'Events', link: '/en/scheduling/events' }
              ]
            },
            {
              text: 'Troubleshooting',
              collapsed: true,
              items: [
                { text: 'Troubleshooting', link: '/en/troubleshooting' }
              ]
            }
          ]
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present SignaLink'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
                  button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search for docs'
                  },
                  modal: {
                    noResultsText: 'No results found',
                    resetButtonTitle: 'Clear search',
                    footer: {
                      selectText: 'to select',
                      navigateText: 'to navigate',
                      closeText: 'to close'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  themeConfig: {
    logo: { 
      src: '/signalink/favicon.png', 
      width: 32, 
      height: 32,
      alt: 'SignaLink'
    },
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로',
    outlineTitle: '목차',
    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    }
  }
}) 