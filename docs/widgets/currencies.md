---
title: 통화
description: 통화 쌍의 환율 표시
---

# 통화

**요소**를 사용하여 레이아웃의 어디든 통화 쌍의 환율을 표시하거나 **정적 템플릿**을 선택하여 레이아웃/재생목록에 결과를 표시하세요.

::: info
통화|v4
:::

통화 위젯은 구성된 요소와 정적 템플릿에 공급되는 환율 데이터를 검색하기 위해 [Alpha Vantage API](https://www.alphavantage.co/)에 부분적으로 의존합니다.

::: tip
[Alpha Vantage](https://www.alphavantage.co/support/#api-key)를 방문하여 계정을 생성하고 Alpha Vantage [커넥터](media_modules.html#content-connectors)에 입력할 API 키를 얻으세요.
:::

## 통화 요소

통화 위젯을 [레이아웃](layouts_editor.html)에 추가할 때 [요소](layouts_editor#content-data-widgets-and-elements)를 선택할 수 있어 사용자가 사용할 통화 위젯의 구성 요소와 배치 위치를 더 잘 제어할 수 있습니다.

![통화 요소](/img/v4_media_modules_currencies_elements.png)

각 요소는 속성 패널에 구성 옵션 세트가 있습니다. 표시하려는 **통화**를 약어/축약형으로 입력하고 **구성** 탭에서 **기준** 통화를 입력하세요.

추가된 각 요소에 사용할 [데이터 슬롯](layouts_editor.html#content-data-slots)을 지정하여 항목이 어떻게 순환되어야 하는지 제어하세요. 데이터 요소는 도형과 텍스트를 추가하기 위해 [전역 요소](layouts_editor.html#content-global-elements)를 추가하여 더욱 보완할 수 있으며, 이 모든 것을 [요소 그룹](layouts_editor.html#content-grouping-elements)에 넣어 더 쉽게 구성하고 배치할 수 있습니다.

## 통화 정적 템플릿

[정적 템플릿](layouts_editor.html#content-static-templates)은 반환된 데이터가 어떻게 배치되고 스타일링되어야 하는지 정의하며 사전 스타일링된 템플릿을 사용하여 데이터를 표시하는 간단한 방법입니다.

![통화 템플릿](/img/v4_media_modules_currencies_templates.png)

템플릿은 속성 패널의 다양한 옵션을 사용하여 디자인 외관에 변경사항을 만들도록 구성할 수 있습니다. 레이아웃/재생목록에 추가된 각 템플릿에 대해 표시하려는 **통화**를 약어/축약형으로 입력하고 **구성** 탭에서 **기준** 통화를 입력하세요.

## 개요

- 기준 통화를 비교로 사용하는 역변환.
- 이 미디어의 콘텐츠는 플레이어에서 오프라인 재생을 위해 캐시됩니다.
- 지속 시간은 항목당 또는 페이지당 적용할 수 있습니다. 