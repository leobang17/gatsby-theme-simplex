---
title: Gatsby Theme Simplex 사용법
createdAt: 2023-04-08
---

# Gatsby Theme Simplex

Gatsby Theme Simplex는 *Gatsby 프레임워크*를 기반으로 구축된 블로그 스타터입니다. 마크다운을 사용하여 글을 작성할 수 있으며, 코드를 수정해 사용자의 필요에 맞게 블로그를 꾸밀 수 있습니다.

Gatsby Theme Simplex는 다음과 같은 기술들을 사용합니다.

- [GatsbyJS](https://www.gatsbyjs.com/docs)
- [ReactJS](https://react.dev/reference/react)
- [Typescript](https://www.typescriptlang.org/docs/)
- [MaterialUI](https://mui.com/material-ui/getting-started/overview/)
- [EmotionJS](https://emotion.sh/docs/introduction)

## ✨ 제공하는 기능

- MDX
- Syntax 하이라이팅
- [목차 (Table Of Contents)](#gatsby-theme-simplex의-목차-table-of-contents)
- [카테고리](#gatsby-theme-simplex의-카테고리)
- 수식 지원 (Katex)
- 반응형 웹
- SEO
- 유저 커스텀

## 🚀 Quick start

## ⚙️ 블로그 설정하기

`blog.config.json` 파일을 통해 블로그의 기본적인 설정을 커스터마이징할 수 있습니다.
`blog.config.json`은 다음과 같이 구성되어있습니다.

```json
{
  "metadata": {
    "title": "블로그 제목",
    "description": "블로그에 대한 간략한 설명",
    "siteUrl": "해당 블로그의 site url"
  },
  "social": {
    "github": "작성자의 github 링크"
  },
  "bio": {
    "name": "작성자 이름 (혹은 닉네임)"
  },
  "tableOfContents": {
    "maxDepth": 4
  },
  "category": {
    "maxDepth": 1
  },
  "theme": {
    "light": {
      "main": "메인으로 이용하고 싶은 색",
      "sub": "서브로 이용하고 싶은 색"
    }
  }
}
```

각 프로퍼티에 대한 설명과 설정되지 않은 경우의 *기본값*은 하단의 `프로퍼티 명세`를 참고하십시오.

> 프로퍼티를 빈 문자열, 즉 `""`로 남겨두면 *기본값*으로 설정됩니다.

#### 프로퍼티 명세

| 프로퍼티                   | 설명                                                                                                  | 타입                                                                                            | 기본값                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `metadata.title`           | 블로그 제목을 입력합니다.                                                                             | `string`                                                                                        | _Blog Simplex_                                                         |
| `metadata.description`     | 블로그 설명을 입력합니다                                                                              | `string`                                                                                        | _Blog created using the "gatsby-theme-simplex" theme. Find on Github._ |
| `metadata.siteUrl`         | 해당 블로그의 url을 입력합니다                                                                        | `string`                                                                                        | _https://github.com/leobang17/gatsby-theme-simplex_                    |
| `social.github`            | 작성자의 github 링크를 입력합니다.                                                                    | `string`                                                                                        | _https://github.com/leobang17/gatsby-theme-simplex_                    |
| `bio.name`                 | 작성자의 이름 혹은 닉네임을 입력합니다.                                                               | `string`                                                                                        | _"Default Name"_                                                       |
| `tableOfContents.maxDepth` | 자동으로 생성되는 [카테고리](#gatsby-theme-simplex의-카테고리)의 depth를 설정합니다.                  | `1 \|       2                                                    \|                   3  \|  4` | _4_                                                                    |
| `category.maxDepth`        | 자동으로 생성되는 [목차](#gatsby-theme-simplex의-목차-table-of-contents)의 깊이 (depth)를 설정합니다. | `1       \| 2`                                                                                  | _2_                                                                    |
| `theme.light.main`         | 메인으로 이용하고 싶은 색의 Hex 코드를 입력합니다.                                                    | `string`                                                                                        | _#00B7C2_                                                              |
| `theme.light.sub`          | 서브로 이용하고 싶은 색의 Hex 코드를 입력합니다.                                                      | `string`                                                                                        | _#146C94_                                                              |

## 💡 Gatsby Theme Simplex 이해하기

### Gatsby Theme Simplex의 디렉토리 구조

```
.
└── gatsby-theme-simplex/
    ├── documents/ ---------------------------------------------------------- 작성글
    ├── src/
    │   ├── components/ ---------------------------------------------- React 컴포넌트
    │   ├── hooks/ ---------------------------------------------------- React Hooks
    │   ├── nodeApi/ ----------------------------------- Gatsby Node API와 관련한 함수
    │   ├── pages/ ------------------------- File System Route API를 이용해 생성할 페이지
    │   ├── styles/ ----------------------- 스타일링 (디자인시스템, css, 반응형, Emotionjs)
    │   ├── templates/ ------------------------------ createPage로 생성할 페이지의 템플릿
    │   └── utils/ ----------------------------------- vanilla TS utility functions
    ├── static/ ----------------------------------------------------------- 정적 파일
    ├── blog.config.json ---------------------------------------- 블로그의 기본적인 설정
    ├── gatsby-browser.tsx ------------------------------------- Gatsby Browser API
    ├── gatsby-config.ts -------------------------------------------- Gatsby 설정파일
    ├── gatsby-node.ts ---------------------------------------- Gatsby Node API 구현
    └── package.json ------------------------------------------ 프로젝트 의존성 관리 파일
```

모든 수정 사항들은 [Gatsby 프레임워크](https://www.gatsbyjs.com/docs)에 대한 깊은 이해를 바탕으로 이루어지길 권합니다.

### Gatsby Theme Simplex의 카테고리

카테고리는 `/documents` 내부의 디렉토리 구조에 따라 자동으로 생성됩니다. 즉, `/documents` 내에 하위 디렉토리를 생성하여 글을 여러 카테고리로 구성할 수 있습니다.

예를들어, `context-switching.mdx` 글을 `ComputorScience`라는 이름의 카테고리로 편입시키고 싶다면, 다음과 같은 디렉토리 구조를 형성할 수 있습니다.

```
gatsby-theme-simplex/
├── ...
├── documents/
│   └── ComputorScience/
│       └── context-switching.mdx
└── ...
```

#### 재귀적으로 생성되는 서브 카테고리

카테고리 내부의 **서브 카테고리**를 생성해 보다 세분화된 카테고리 구조를 구성할 수 있습니다.

예를들어, `ComputorScience`의 하위 카테고리인 `OperatingSystem` 아래에 `context-switching.mdx` 글을 배치하고 싶은 경우, 다음과 같은 디렉토리 구조를 고려할 수 있습니다.

```
gatsby-theme-simplex/
├── ...
├── documents/
│   └── ComputorScience/
│       └── OperatingSystem/
│           └── context-switching.mdx
└── ...
```

서브 카테고리는 **재귀적**으로 생성됩니다. 생성 가능한 서브 카테고리의 깊이는 `blog.config.json` 설정 파일의 `category.maxDepth` 프로퍼티에 의해 결정되며, 필요에 맞게 조정할 수 있습니다. 서브 카테고리의 깊이의 기본 값은 `2`입니다.

### Gatsby Theme Simplex의 목차 (Table Of Contents)

Gatsby Theme Simplex는 아티클 페이지에서 "목차" 기능을 제공합니다. 목차 기능은 마크다운 문서에 있는 Header 문법을 기반으로 탐색 계층 구조를 Tree로 생성합니다.

목차 Tree의 하위 목차 노드는 **재귀적**으로 생성됩니다. Header의 오름차순에 따라 트리 구조를 만듭니다. `H1` 헤더가 루트 노드가 되고, `H2` 헤더가 첫 번째 수준의 하위 노드가 되는 식입니다.

사용자는 최대 깊이에 대한 값을 설정하여 *생성가능한 목차의 최대 깊이*를 설정할 수 있습니다. 생성 가능한 자식 목차의 최대 깊이는 `blog.config.json` 설정 파일의 `tableOfContents.maxDepth` 프로퍼티에 의해 결정됩니다.

예를 들어 최대 깊이를 4로 설정하면 Tree에는 `H4`까지의 Header만 포함되며 해당 수준을 초과하는 Header는 무시됩니다. 사용자가 `H5`까지의 모든 Header를 포함하려면 최대 깊이를 5로 설정하면 됩니다. 하위 목차의 최대 깊이의 기본값은 `4`입니다.

## ✍️ 글 작성하기

모든 작성 글은 `/documents`의 하위 디렉토리에 Markdown 확장자(`.md` 혹은 `.mdx`)로 생성해야합니다. 기초적인 마크다운 문법은 [마크다운 가이드](https://www.markdownguide.org/basic-syntax/) 문서를 참조하십시오.

> `/documents`의 하위 디렉토리에 폴더링을 할 경우 자동으로 **카테고리**가 생성되는데, 이에 대한 설명은 [Gatsby Theme Simplex의 카테고리](#gatsby-theme-simplex의-카테고리) 항목을 참조하십시오.

### Frontmatter 입력하기

모든 마크다운 글은 본문 작성에 앞서 Frontmatter를 입력해야합니다. 입력해야하는 폼은 다음과 같습니다.

```md
---
title: 글의 제목
createdAt: YYYY-mm-dd (글의 작성일자)
---

... 본문
```

#### Frontmatter 입력폼을 위한 VSCode 스니펫 "post"

Gatsby Theme Simplex에는 Frontmatter의 입력 양식을 자동완성하는 **스니펫**이 준비되어 있습니다. VSCode로 작성하는 경우 이 기능을 이용할 수 있습니다. 새로운 마크다운 파일을 생성하고 `post`를 입력하여 가장 상단에 나타나는 스니펫을 사용할 수 있습니다.

해당 스니펫은 사용자 PC의 시스템 타임을 참조하여 `createdAt` 항목을 자동으로 완성시킵니다.

<br />

##### 마크다운 파일에서 스니펫 기능이 동작하지 않을 경우

`settings.json`에 다음 내용을 추가합니다.

```json
// settings.json
"[markdown]": {
      "editor.quickSuggestions": true
  }

```

### 글 본문에 이미지 첨부하기

Gatsby Theme Simplex는 이미지 첨부 기능을 지원합니다. 이미지를 첨부하는 방식은 두 가지가 있습니다.

1. [프로젝트의 내부 파일 시스템에 이미지를 저장하거나](#프로젝트-내부에-저장된-이미지-첨부하기-recommended)
2. [외부 링크를 사용하여 이미지를 출력할 수 있습니다](#외부-이미지-링크를-통해-이미지-첨부하기)

현재 외부 링크를 통한 이미지 출력은 caption 기능을 지원하지 않으므로 프로젝트 내부에 저장하는 것을 권장합니다.

#### 프로젝트 내부에 저장된 이미지 첨부하기 (권장)

**다음의 디렉토리 구조를 따라하길 권장합니다.** 작성하려는 글과 동일한 위치에 `/imgs` 폴더를 생성합니다. 이 `/imgs` 폴더는 해당 폴더가 위치한 바로 상위의 카테고리에 속하는 글의 모든 이미지를 저장하는 데 사용됩니다.

```
gatsby-theme-simplex/
├── ...
├── documents/ ---------------------------------------------------------- 작성글
│   └── ExampleCategory/ ------------------------------------------  예시 카테고리
│       ├── imgs/ -------------------- ExampleCategory 하위의 글들이 이용할 이미지 경로
│       │   └── example-image.png ------------------------------------ 예시 이미지
│       └── example-article.mdx ---------------------------------------- 예시 글
└── ...

```

예를들어, `OperatingSystem` 카테고리 하위에 `context-switching.mdx`와 `Paterson-solution.mdx`의 두 글이 존재한다고 가정합니다. `/documents/OperatingSystem/imgs` 디렉토리 하위에는 `OperatingSystem` 카테고리에 직접 속하는 글들과 연관한 이미지들을 저장합니다.

위의 디렉토리 구조를 채택할 경우, 다음의 마크다운 문법을 이용해 저장된 이미지를 글에 출력할 수 있습니다.

```md
![Image description](./imgs/example-image1.png)
```

`alt`에 해당하는 텍스트는 첨부되는 이미지의 caption으로 하단에 표시됩니다.

**위의 디렉토리 구조를 채택하지 않을수도 있습니다.** 이 경우 글에 첨부하려는 이미지가 저장된 위치의 상대 경로를 계산하여 괄호 `()` 안에 입력하면 됩니다.

#### 외부 이미지 링크를 통해 이미지 첨부하기

다음의 마크다운 문법을 이용해 외부 이미지 링크의 이미지를 출력합니다.

```md
![Image description](https://example-image-url.com/)
```

현재 외부 이미지 링크에서 이미지를 출력하는 방식은 이미지에 대한 caption 기능을 제공하지 않습니다.

### 수식 입력하기

Gatsby Theme Simplex는 수식 기능을 지원합니다.

다음과 같은 문법을 이용해 **수식 블록**을 작성할 수 있습니다.

```mdx
$$
a^2 + b^2 = c^2
$$
```

다음과 같은 문법을 이용해 **인라인 수식**을 작성할 수 있습니다.

```mdx
$a^2 + b^2 = c^2$
```

수식 문법은 [TeX](https://en.wikipedia.org/wiki/TeX) 문법을 준수하며, [gatsby remark katex](https://www.gatsbyjs.com/plugins/gatsby-remark-katex/?=katex) 플러그인을 이용해 [KaTeX 라이브러리](https://github.com/KaTeX/KaTeX)를 지원합니다.

수식 작성 방식에 대한 더 많은 정보는 [KaTeX에서 지원하는 TeX 문법](https://katex.org/docs/support_table.html)를 참고하십시오.

## 💫 Deploy
