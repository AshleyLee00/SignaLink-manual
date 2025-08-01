---
title: 플레이리스트
description: 플레이리스트는 여러 레이아웃에서 재사용할 수 있는 순서가 있는 콘텐츠의 타임라인을 포함합니다
---

# 플레이리스트

플레이리스트는 미디어 항목의 시퀀스(예: 이미지 슬라이드쇼)를 표시하는 데 사용됩니다. 플레이리스트를 만드는 두 가지 방법이 있습니다:

- 레이아웃과 독립적으로 플레이리스트를 생성합니다. 글로벌 플레이리스트는 레이아웃을 생성하지 않고도 디스플레이에 예약할 수 있습니다. 레이아웃 에디터 외부에서 생성된 플레이리스트는 여전히 레이아웃 에디터의 플레이리스트 추가 기능에서 선택할 수 있습니다.
- 레이아웃 에디터에서 레이아웃에 직접 [플레이리스트 추가]( /layouts/editor/playlists). 로컬 플레이리스트는 글로벌 플레이리스트로 재사용을 위해 저장되도록 변환할 수 있습니다. 저장된 플레이리스트는 레이아웃에 추가하기 위해 레이아웃 에디터에 표시됩니다.

## 기능 개요:

- 레이아웃과 독립적으로 생성 및 구성.
- 콘텐츠를 [동적으로](/media/playlists#dynamically-adding-media) 추가하고 유지.
- 레이아웃에 접근하지 않고 플레이리스트 콘텐츠 업데이트.
- 레이아웃에 추가할 필요 없이 플레이리스트 그리드에서 직접 예약.
- 표시할 다양한 플레이리스트의 콘텐츠 결합.
- 플레이리스트에서 표시할 최대 항목 수 설정.
- 다음 항목으로 이동하기 전에 플레이리스트의 각 항목이 표시되어야 하는 시간 제어.
- 플레이리스트에 추가된 미디어 항목에 대한 만료 날짜 설정.

## 플레이리스트 생성

디스플레이에 표시할 여러 콘텐츠 항목을 보유하기 위해 플레이리스트를 생성하여 리소스를 간소화하고 시간을 절약하세요. 특정 요구사항, 위치, 주제 카테고리 등에 대한 콘텐츠를 대상으로 하고 수집하기 위해 플레이리스트를 생성하세요.

레이아웃과 독립적으로 생성된 플레이리스트는 플레이리스트에 콘텐츠를 추가하거나 관리하기 위해 레이아웃이나 레이아웃 에디터에 대한 추가 사용자 접근이 필요하지 않습니다. 플레이리스트에 대한 모든 변경사항은 해당 플레이리스트를 이미 포함하는 모든 레이아웃/스케줄에서 업데이트됩니다.

- 메인 CMS 메뉴의 **라이브러리** 섹션에서 **플레이리스트**를 선택하세요.

- **플레이리스트 추가** 버튼을 클릭하고 폼 필드를 완성하세요:

![플레이리스트 추가](/img/v4_media_playlists_add.png)

[폴더]( /tour/folders)는 사용자 객체를 다른 사용자/사용자 그룹과 쉽게 [공유]( /users/features-and-sharing)하고, 구성하고, 검색하는 데 사용됩니다. 폴더에 저장된 플레이리스트는 해당 폴더에 적용된 접근 옵션을 상속받습니다.

::: tip
사용자가 플레이리스트의 콘텐츠(예: 이미지/비디오 미디어 파일)에도 접근해야 하는 경우, 이들도 같은 폴더에 저장되어 있는지 확인하세요!
:::

- CMS에서 쉽게 식별할 수 있도록 플레이리스트에 **이름**을 지정하고 선택적 [태그]( /tour/tags)를 포함하세요.

플레이리스트에 [미디어]( /media/library) 콘텐츠를 추가하는 두 가지 옵션이 있습니다:

- [동적]( /media/playlists#dynamically-adding-media) 옵션을 사용하여 기준에 따라 라이브러리 기반 미디어를 자동으로 할당.
- 폼 저장 시 열리는 [플레이리스트 에디터]( /media/playlists#playlist-editor)를 사용하여 미디어를 수동으로 할당.

## 미디어 동적 추가

- 체크되면 **필터** 탭을 클릭하고 일치하는 라이브러리 미디어를 채우기 위해 필요한 기준을 설정하세요.
- 자동으로 할당할 수 있는 수를 제한하기 위해 라이브러리 미디어 파일의 **최대 수**를 제공하세요.

설정된 기준과 일치하는 CMS 라이브러리에 이미 있는 미디어가 표시됩니다:

![동적 할당](/img/v4_media_playlists_dynamic.png)

이 플레이리스트에 대한 설정된 기준을 충족하는 라이브러리에 추가되는 향후 미디어 파일은 자동으로 이 목록에 추가됩니다.

::: tip
기준을 설정하되 동적 옵션을 체크하지 않으면 라이브러리 미디어를 플레이리스트에 일회성 할당으로 미리 채울 수도 있습니다!
:::

- **저장**을 클릭하세요.

::: tip
동적 플레이리스트는 먼저 레이아웃에 추가하지 않고도 디스플레이에 전체 화면으로 표시되도록 예약할 수 있다는 것을 알고 계셨나요? 플레이리스트의 행 메뉴를 사용하고 예약을 선택하세요!
:::

## 플레이리스트 에디터

- 도구 상자에서 플레이리스트에 추가할 콘텐츠를 선택하세요.
- 구성 옵션이 속성 패널에 로드됩니다.

![플레이리스트 타임라인](/img/v4_media_playlists_timeline.png)

::: tip
**플레이리스트 에디터**에는 텍스트, HTML 또는 JavaScript를 제공하는 **리치 텍스트 에디터**와 플레이리스트 내에 빈 '슬롯'을 생성하는 **스페이서**라는 두 개의 추가 위젯이 포함되어 있습니다.
:::

항목이 플레이리스트 타임라인에 추가됨에 따라 지속 시간이 분/초를 표시하도록 업데이트됩니다.

- 드래그 앤 드롭으로 시퀀스를 재정렬하세요.

- 눈금자 아이콘을 클릭하여 **스케일 모드 변경**:

![스케일 모드](/img/v4_media_playlists_scale_mode.png)

스케일 옵션을 사용하여 확대/축소하여 가시적 시간 범위를 줄이거나 늘리세요.

항목은 목록의 특정 지점에 추가할 수 있으며, 드래그하거나 클릭하여 플레이리스트 내의 위치 마커에 콘텐츠를 추가하세요.

![타임라인에 추가](/img/v4_media_playlists_add_timeline.png)

::: tip
변경사항을 되돌리려면 도구 모음 하단의 실행 취소 버튼을 사용하세요.
:::

항목을 마우스 오른쪽 버튼으로 클릭하여 [위젯 만료 날짜]( /media/playlists#widget-expiry-dates) 및 [플레이리스트 전환]( /tour/transitions) 설정을 포함한 추가 [컨텍스트 메뉴]( /layouts/editor/context-menu) 옵션에 접근할 수 있습니다.

::: tip
전환이 기본적으로 위젯에 적용되면 속성 패널이 비어 있습니다. 수동으로 입력된 전환만 폼에 표시됩니다!
:::

플레이리스트 에디터 하단의 **여러 위젯 선택** 버튼을 사용하여 한 번의 클릭으로 여러 선택을 삭제하세요:

![다중 선택](/img/v4_media_playlists_multi_select.png)

::: tip
'글로벌' 플레이리스트는 먼저 레이아웃에 추가하지 않고도 디스플레이에 전체 화면으로 표시되도록 예약할 수 있다는 것을 알고 계셨나요? 플레이리스트의 행 메뉴를 사용하고 예약을 선택하세요!
:::

## 위젯 만료 날짜

플레이리스트에 추가된 항목은 시작 및 종료 시간을 설정하는 추가 옵션이 있습니다.

::: tip
위젯 만료 날짜는 v4부터 사용 가능합니다
:::

- 플레이리스트의 항목을 마우스 오른쪽 버튼으로 클릭하여 **만료 날짜 편집**하거나 플레이리스트에 직접 [미디어 업로드]( /media/library#add-media-upload) 시 설정하세요.

[라이브러리 검색]( /layouts/editor/library-search)에서 업로드하면 추가 **만료 날짜 설정** 옵션이 있습니다:

![만료 날짜](/img/v4_media_playlists_upload_expiry.png)

여러 미디어 파일을 업로드할 때 **업로드 시작** 버튼을 클릭하면 모든 파일이 같은 날짜/시간과 폴더 위치로 업로드됩니다.

::: tip
파일마다 다른 만료 날짜와 폴더 위치를 설정하기 위해 파일 행 끝의 **파란색 업로드** 버튼을 사용하여 항목을 개별적으로 업로드할 수도 있습니다.
:::

**만료 날짜**가 설정된 플레이리스트의 모든 항목은 아이콘을 표시하며, 마우스를 올리면 추가 정보가 표시됩니다:

![만료 날짜](/img/v4_media_playlists_expiry_dates.png)

::: tip
종료 날짜가 지나면 항목이 플레이리스트에서 제거됩니다. 만료 시 삭제로 설정되지 않은 만료된 항목은 시작 및 종료 시간을 필요에 따라 재조정할 수 있도록 플레이리스트 에디터에서만 표시됩니다.
:::

- 변경사항을 만들거나 항목에서 제거하기 위해 아이콘을 클릭하세요.

## 플레이리스트 임베딩

플레이리스트는 얼마나 많은 콘텐츠가 표시되어야 하는지, 얼마나 오래 표시되어야 하는지, 그리고 재생 순서를 결정하기 위해 다른 플레이리스트 타임라인에 추가할 수 있습니다.

- 플레이리스트 에디터에서 새로 추가하거나 도구 상자에서 사용 가능한 '글로벌' 플레이리스트 목록에서 선택하세요.
- 구성 옵션이 속성 패널에 표시됩니다:

![플레이리스트 임베딩](/img/v4.1_media_playlists_embedding.png)

- 필요한 경우 `+` 버튼을 사용하여 **플레이리스트**를 선택하는 드롭다운 메뉴를 사용하여 여러 플레이리스트를 추가하고 구성하세요.

- **스팟** 옵션은 플레이리스트에서 얼마나 많은 콘텐츠가 표시되어야 하는지와 얼마나 오래 표시되어야 하는지를 정의하는 데 사용됩니다.

스팟에는 플레이리스트 콘텐츠를 채우기 전용으로 사용하고 이 플레이리스트의 콘텐츠를 다른 선택된 플레이리스트에 **채우기** 또는 **패딩**으로 추가하는 옵션도 있습니다:

- 이 플레이리스트는 목록에서 **첫 번째**로 추가된 플레이리스트여야 합니다.
- **스팟** 필드에 **0**을 입력하여 전체 플레이리스트가 무시되고 재생 순서에서 제외되도록 하세요. **스팟 채우기** 옵션을 사용하여 이 플레이리스트의 콘텐츠가 다른 플레이리스트와 함께 어떻게 분배되어야 하는지 선택하세요.

::: warning
**참고:** 위젯에 **시작 날짜**를 설정하면 지정된 총 수보다 적은 스팟이 표시될 수 있다는 점에 유의하세요!
:::

**스팟 채우기** 필드의 드롭다운 메뉴를 사용하여 선택된 플레이리스트에 지정된 재생 스팟을 충족할 만큼 충분한 위젯이 없는 경우 남은 스팟을 어떻게 채워야 하는지 선택하세요.

::: tip
**스팟**, **스팟 길이** 및 **스팟 채우기**는 모두 선택사항이며 이 기능이 필요하지 않으면 비워둘 수 있습니다!
:::

**플레이리스트 순서**의 드롭다운을 사용하여 모든 플레이리스트가 재생되도록 어떻게 순서를 정해야 하는지 선택하세요.

::: tip
**자동**은 각 목록의 총 항목 수를 사용하고 가장 작은 목록으로 나누어 각 플레이리스트에서 균등한 재생을 보장하기 위해 각 목록에서 항목을 얼마나 자주 가져와야 하는지 결정합니다.
:::

플레이리스트 끝에 순서가 지정되지 않은 콘텐츠를 처리하기 위해 **남은 위젯** 옵션에서 선택하세요.

::: tip
레이아웃의 **새 플레이리스트**에 플레이리스트를 추가하면 **랜덤 위젯** 기능을 포함한 추가 [주기 기반 재생]( /layouts/editor/playlists#cycle-based-playback) 옵션이 있습니다.
글로벌 플레이리스트에 플레이리스트를 추가할 때는 주기 기반 재생이 지원되지 않습니다!
:::

## 플레이리스트 그리드

저장된 플레이리스트는 메인 CMS 메뉴의 **라이브러리** 섹션에서 **플레이리스트**를 통해 볼 수 있습니다:

![플레이리스트 그리드](/img/v4.1_media_playlists_grid.png)

각 플레이리스트에는 작업/바로가기 메뉴에 접근하는 데 사용되는 행 메뉴가 있으며, 주목할 만한 설정은 다음과 같습니다:

- **타임라인** - 타임라인의 콘텐츠를 변경하기 위해 플레이리스트 에디터를 엽니다.
- **편집** - 동적 플레이리스트의 필터 탭을 사용하여 동적으로 할당된 미디어 목록을 보고 기준을 변경합니다.
- **사용 보고서** - 플레이리스트가 표시되는 위치와 포함된 레이아웃을 확인합니다.
- **예약** - 플레이리스트를 디스플레이에 전체 화면으로 표시하도록 직접 예약합니다.

::: tip
예약된 플레이리스트에 대한 모든 변경사항은 생성되는 대로 플레이어에 자동으로 푸시됩니다.
::: 