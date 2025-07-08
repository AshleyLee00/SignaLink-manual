---
title: 위젯
description: 위젯을 사용하여 동적 레이아웃 생성
---

# 위젯

위젯은 SignaLink의 핵심 구성 요소이며 **레이아웃** 또는 **플레이리스트**에서 콘텐츠를 표시하는 데 사용됩니다.

## 기능 개요

- 선택할 수 있는 강력한 위젯 선택
- 빠르고 쉽게 콘텐츠 생성
- 제3자 통합 콘텐츠
- 화면에 동적 콘텐츠 표시
- CMS의 다른 사용자가 사용할 수 있도록 모듈 선택

모든 위젯에는 SignaLink에게 사용자로부터 어떤 정보가 필요한지, 어떻게 표시되어야 하는지에 대한 구성 정보를 알려주는 관련 [모듈]( /media/widgets)이 있습니다.

::: tip
위젯은 관리자가 CMS의 **모듈** 섹션에서 비활성화/활성화할 수 있습니다.
:::

## 위젯 유형

SignaLink는 다음과 같은 위젯 유형을 제공합니다:

### 기본 위젯
- [오디오]( /media/widgets/audio) - 오디오 파일 재생
- [이미지]( /media/widgets/image) - 이미지 파일 표시
- [비디오]( /media/widgets/video) - 비디오 파일 재생
- [시계]( /media/widgets/clock) - 아날로그/디지털 시계
- [카운트다운]( /widgets/countdown) - 카운트다운 타이머

### 데이터 위젯
- [캘린더]( /media/widgets/calendar) - iCal 피드 이벤트 표시
- [통화]( /media/widgets/currencies) - 환율 정보 표시
- [데이터셋]( /media/widgets/dataset) - 데이터셋 정보 표시
- [마스토돈]( /media/widgets/mastodon) - 소셜 미디어 피드
- [긴급 경보]( /media/widgets/emergency-alerts) - CAP 피드 경보

### 미디어 위젯
- [HLS]( /media/widgets/hls) - 라이브 스트리밍
- [로컬 비디오]( /media/widgets/local-video) - 로컬 파일/URL 비디오
- [웹페이지]( /media/widgets/webpage) - 웹페이지 임베드
- [임베드 콘텐츠]( /media/widgets/embedded) - HTML/JavaScript 임베드

### 특수 위젯
- [대시보드]( /media/widgets/dashboard) - SignaLink 대시보드 서비스
- [Google 교통]( /media/widgets/google-traffic) - Google Maps 교통 정보
- [메뉴 보드: 카테고리]( /media/widgets/menu-boards-category) - 메뉴 보드 카테고리

::: tip
각 위젯의 상세한 사용법과 구성 옵션은 위의 링크를 통해 확인할 수 있습니다.
:::

## 위젯 사용법

위젯은 **도구상자**에서 사용할 수 있습니다:

- 사용 가능한 위젯을 보려면 상단 버튼을 클릭하세요.

![위젯](/img/v4_layouts_editor_widgets.png)

위젯은 **즐겨찾기**로 표시하여 더 쉬운 선택을 위해 자체 섹션에 나타날 수 있습니다:

- 위젯 카드의 왼쪽 상단에 있는 별 아이콘을 클릭하세요.

![즐겨찾기 위젯](/img/v4_layouts_editor_widgets_favourites.png)

::: tip
즐겨찾기 섹션에서 선택을 해제하려면 별을 클릭하세요.
:::

`>`가 있는 위젯은 추가 위젯 템플릿을 선택하기 위해 열어야 합니다:

![위젯 시계](/img/v4_layouts_editor_widgets_clock_example.png)

드래그 앤 드롭하거나 위젯 카드를 클릭하여 강조 표시한 다음 캔버스를 클릭하여 레이아웃에 추가하세요:

- 위치 지정 및 크기 조정
- **속성 패널**에서 사용 가능한 옵션으로 구성

![시계 구성](/img/v4_layouts_editor_clock_configuration.png)

## 데이터 위젯

데이터 위젯은 외부 데이터 소스를 사용하여 동적 콘텐츠를 표시합니다. 자세한 내용은 [데이터 위젯 가이드]( /layouts/editor/data-widgets)를 참조하세요.

## 다음 단계

[데이터 위젯]( /layouts/editor/data-widgets)
[레이아웃 에디터]( /layouts/editor) 