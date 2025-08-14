import { PageLayout, SharedLayout } from "./quartz/cfg" // 페이지 레이아웃과 공유 레이아웃 타입을 가져옵니다
import * as Component from "./quartz/components" // 모든 컴포넌트를 가져옵니다

// components shared across all pages // 모든 페이지에서 공유되는 컴포넌트들
export const sharedPageComponents: SharedLayout = { // 공유 페이지 컴포넌트를 정의합니다
  head: Component.Head(), // 헤드 컴포넌트를 설정합니다
  header: [], // 헤더 컴포넌트 배열을 빈 배열로 설정합니다
  afterBody: [], // 본문 후 컴포넌트 배열을 빈 배열로 설정합니다
  footer: Component.Footer({ // 푸터 컴포넌트를 설정합니다
    links: { // 푸터 링크들을 설정합니다
      GitHub: "https://github.com/jackyzha0/quartz", // GitHub 링크
      "Discord Community": "https://discord.gg/cRFFHYye7t", // Discord 커뮤니티 링크
    },
  }),
}

// components for pages that display a single page (e.g. a single note) // 단일 페이지를 표시하는 페이지용 컴포넌트들 (예: 단일 노트)
export const defaultContentPageLayout: PageLayout = { // 기본 콘텐츠 페이지 레이아웃을 정의합니다
  beforeBody: [ // 본문 전에 표시될 컴포넌트들
    Component.ConditionalRender({ // 조건부 렌더링 컴포넌트
      component: Component.Breadcrumbs(), // 브레드크럼 컴포넌트
      condition: (page) => page.fileData.slug !== "index", // 인덱스 페이지가 아닐 때만 표시하는 조건
    }),
    Component.ArticleTitle(), // 글 제목 컴포넌트
    Component.ContentMeta(), // 콘텐츠 메타 정보 컴포넌트
    Component.TagList(), // 태그 목록 컴포넌트
  ],
  left: [ // 왼쪽 사이드바에 표시될 컴포넌트들
    Component.PageTitle(), // 페이지 제목 컴포넌트
    Component.MobileOnly(Component.Spacer()), // 모바일에서만 표시되는 간격 컴포넌트
    Component.Flex({ // 유연한 레이아웃 컴포넌트
      components: [ // 컴포넌트 배열
        {
          Component: Component.Search(), // 검색 컴포넌트
          grow: true, // 남은 공간을 차지하도록 설정
        },
        { Component: Component.Darkmode() }, // 다크모드 컴포넌트
        { Component: Component.ReaderMode() }, // 읽기 모드 컴포넌트
      ],
    }),
    Component.Explorer(), // 탐색기 컴포넌트
  ],
  right: [ // 오른쪽 사이드바에 표시될 컴포넌트들
    Component.Graph(), // 그래프 컴포넌트
    Component.DesktopOnly(Component.TableOfContents()), // 데스크톱에서만 표시되는 목차 컴포넌트
    Component.Backlinks(), // 백링크 컴포넌트
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders) // 페이지 목록을 표시하는 페이지용 컴포넌트들 (예: 태그나 폴더)
export const defaultListPageLayout: PageLayout = { // 기본 목록 페이지 레이아웃을 정의합니다
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()], // 본문 전에 표시될 컴포넌트들
  left: [ // 왼쪽 사이드바에 표시될 컴포넌트들
    Component.PageTitle(), // 페이지 제목 컴포넌트
    Component.MobileOnly(Component.Spacer()), // 모바일에서만 표시되는 간격 컴포넌트
    Component.Flex({ // 유연한 레이아웃 컴포넌트
      components: [ // 컴포넌트 배열
        {
          Component: Component.Search(), // 검색 컴포넌트
          grow: true, // 남은 공간을 차지하도록 설정
        },
        { Component: Component.Darkmode() }, // 다크모드 컴포넌트
      ],
    }),
    Component.Explorer(), // 탐색기 컴포넌트
  ],
  right: [], // 오른쪽 사이드바는 비어있습니다
}
