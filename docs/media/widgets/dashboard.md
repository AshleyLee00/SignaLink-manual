---
title: 대시보드
description: SignaLink 대시보드 서비스를 사용하도록 구성된 대시보드 표시
---

# 대시보드

대시보드 위젯은 [SignaLink 대시보드 서비스](/docs/setup/SignaLink-dashboard-service)를 사용하도록 구성된 [대시보드](media_dashboard_service.html)를 표시하는 데 사용됩니다.

**참고:** 이 상용 위젯은 **SignaLink 대시보드 서비스**의 일부이며 [여기](/pricing#dashboards)에서 자세히 설명하는 대로 구성에 API가 필요합니다.

::: info
대시보드|v4
:::

## 구성

- 커넥터에 구성된 대시보드와 일치하는 대시보드 서비스를 선택하세요.
- 임베드할 URL을 입력하세요.

::: tip
이 서비스와 함께 사용할 URL을 얻는 방법, 인증 메커니즘 및 가능한 제한사항에 대한 자세한 정보는 다음 페이지를 참조하세요: [SignaLink 대시보드 서비스](/setup/SignaLink-dashboard-service)
:::

- 분 단위로 업데이트 간격을 제공하세요.

::: info
**참고:** 대시보드당 입력할 수 있는 최소 새로 고침 간격은 5분입니다. 5분보다 더 자주 대시보드 서비스 업데이트를 지원하지 않기 때문입니다.
:::

대시보드 위젯에 URL을 처음 입력할 때는 대시보드 콘텐츠를 렌더링하는 데 걸리는 시간과 서비스의 현재 사용량에 따라 로드하는 데 몇 분이 걸릴 수 있습니다.

디스플레이에 대시보드를 표시하면 서비스가 지정한 간격으로 대시보드를 업데이트하여 항상 표시할 준비가 되어 있고 디스플레이에 즉시 나타납니다.

일정 시간 동안 디스플레이에 대시보드 표시를 중단하면 서비스가 새로 고침을 중단하지만, 해당 대시보드가 다시 표시될 때 자동으로 다시 시작됩니다.

::: tip
기본적으로 **Power BI**의 보고서는 미국 날짜 형식으로 렌더링됩니다. 대체 날짜 형식을 사용하려면 대시보드 위젯에 전달하는 URL에 다음 매개변수를 추가하세요. 아래 예시는 `en-GB`용입니다:

`&language=en&formatLocale=en-GB`
:::

**참고:** SignaLink가 대시보드 서비스 요청에서 오류를 감지하면 사용자에게 문제가 발생한 위치를 알려주기 위해 스크린샷 위에 빨간색 배너 메시지가 표시됩니다. 이는 로그인한 사용자에게만 레이아웃 디자이너 미리보기에 표시됩니다. 예약된 레이아웃을 표시하는 레이아웃 미리보기와 디스플레이는 문제가 해결될 때까지 마지막 좋은 캡처 또는 스피너 아이콘을 계속 표시합니다.

아래에 스크린샷과 함께 오류 메시지 예시가 표시됩니다:

![오류 메시지 예시](/img/v4_media_modules_dashboard_error.png) 