import { QuartzConfig } from "./quartz/cfg" // Quartz 설정 타입을 가져옵니다
import * as Plugin from "./quartz/plugins" // 모든 플러그인을 가져옵니다

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = { // Quartz 설정 객체를 정의합니다
  configuration: { // 기본 설정 섹션
    pageTitle: "Quartz 4", // 페이지 제목을 설정합니다
    pageTitleSuffix: "", // 페이지 제목 접미사를 설정합니다
    enableSPA: true, // SPA(단일 페이지 애플리케이션) 기능을 활성화합니다
    enablePopovers: true, // 팝오버 기능을 활성화합니다
    analytics: { // 분석 도구 설정
      provider: "plausible", // Plausible을 분석 제공자로 설정합니다
    },
    locale: "en-US", // 기본 언어를 영어(미국)로 설정합니다
    baseUrl: "quartz.jzhao.xyz", // 기본 URL을 설정합니다
    ignorePatterns: ["private", "templates", ".obsidian"], // 무시할 파일 패턴을 설정합니다
    defaultDateType: "modified", // 기본 날짜 타입을 수정일로 설정합니다
    theme: { // 테마 설정
      fontOrigin: "googleFonts", // 폰트 출처를 Google Fonts로 설정합니다
      cdnCaching: true, // CDN 캐싱을 활성화합니다
      typography: { // 타이포그래피 설정
        header: "Schibsted Grotesk", // 헤더 폰트를 설정합니다
        body: "Source Sans Pro", // 본문 폰트를 설정합니다
        code: "IBM Plex Mono", // 코드 폰트를 설정합니다
      },
      colors: { // 색상 설정
        lightMode: { // 라이트 모드 색상
          light: "#faf8f8", // 가장 밝은 색상
          lightgray: "#e5e5e5", // 밝은 회색
          gray: "#b8b8b8", // 회색
          darkgray: "#4e4e4e", // 어두운 회색
          dark: "#2b2b2b", // 어두운 색상
          secondary: "#284b63", // 보조 색상
          tertiary: "#84a59d", // 삼차 색상
          highlight: "rgba(143, 159, 169, 0.15)", // 하이라이트 색상
          textHighlight: "#fff23688", // 텍스트 하이라이트 색상
        },
        darkMode: { // 다크 모드 색상
          light: "#161618", // 다크 모드에서 가장 밝은 색상
          lightgray: "#393639", // 다크 모드 밝은 회색
          gray: "#646464", // 다크 모드 회색
          darkgray: "#d4d4d4", // 다크 모드 어두운 회색
          dark: "#ebebec", // 다크 모드 어두운 색상
          secondary: "#7b97aa", // 다크 모드 보조 색상
          tertiary: "#84a59d", // 다크 모드 삼차 색상
          highlight: "rgba(143, 159, 169, 0.15)", // 다크 모드 하이라이트 색상
          textHighlight: "#b3aa0288", // 다크 모드 텍스트 하이라이트 색상
        },
      },
    },
  },
  plugins: { // 플러그인 설정
    transformers: [ // 콘텐츠 변환 플러그인들
      Plugin.FrontMatter(), // 프론트매터 처리 플러그인
      Plugin.CreatedModifiedDate({ // 생성/수정 날짜 플러그인
        priority: ["frontmatter", "git", "filesystem"], // 날짜 우선순위를 설정합니다
      }),
      Plugin.SyntaxHighlighting({ // 구문 강조 플러그인
        theme: { // 구문 강조 테마
          light: "github-light", // 라이트 모드 테마
          dark: "github-dark", // 다크 모드 테마
        },
        keepBackground: false, // 배경색 유지 여부
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }), // Obsidian 스타일 마크다운 플러그인
      Plugin.GitHubFlavoredMarkdown(), // GitHub 스타일 마크다운 플러그인
      Plugin.TableOfContents(), // 목차 플러그인
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }), // 링크 크롤링 플러그인
      Plugin.Description(), // 설명 플러그인
      Plugin.Latex({ renderEngine: "katex" }), // LaTeX 렌더링 플러그인
    ],
    filters: [Plugin.RemoveDrafts()], // 콘텐츠 필터 플러그인들
    emitters: [ // 출력 생성 플러그인들
      Plugin.AliasRedirects(), // 별칭 리다이렉트 플러그인
      Plugin.ComponentResources(), // 컴포넌트 리소스 플러그인
      Plugin.ContentPage(), // 콘텐츠 페이지 플러그인
      Plugin.FolderPage(), // 폴더 페이지 플러그인
      Plugin.TagPage(), // 태그 페이지 플러그인
      Plugin.ContentIndex({ // 콘텐츠 인덱스 플러그인
        enableSiteMap: true, // 사이트맵 활성화
        enableRSS: true, // RSS 피드 활성화
      }),
      Plugin.Assets(), // 자산 플러그인
      Plugin.Static(), // 정적 파일 플러그인
      Plugin.Favicon(), // 파비콘 플러그인
      Plugin.NotFoundPage(), // 404 페이지 플러그인
      // Comment out CustomOgImages to speed up build time // 빌드 시간 단축을 위해 CustomOgImages 주석 처리
      Plugin.CustomOgImages(), // 커스텀 OG 이미지 플러그인
    ],
  },
}

export default config // 설정을 기본 내보내기로 설정합니다
