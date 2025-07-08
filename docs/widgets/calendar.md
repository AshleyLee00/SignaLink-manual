---
title: 캘린더
description: iCal 피드에서 가져온 캘린더 이벤트 표시
---

# 캘린더

**요소**를 사용하여 레이아웃의 어디든 iCal 피드에서 가져온 캘린더 이벤트를 표시하거나 **정적 템플릿**을 선택하여 레이아웃/재생목록에 결과를 표시하세요.

::: info
캘린더 보기|v4
:::

캘린더 데이터는 구성된 요소와 정적 템플릿에 공급되는 iCal 피드에서 제공됩니다.

::: tip
ICS 피드 URL이 CMS에서 사용 가능한지 확인하세요. 인증 없이 브라우저에서 피드가 로드되면 CMS에서 문제없이 표시되어야 합니다.

애플리케이션에서 Google 캘린더를 보는 방법에 대한 자세한 정보는 다음 링크에서 **캘린더 가져오기(보기 전용)** 옵션을 선택하세요: https://support.google.com/calendar/answer/37648?hl=en
:::

## 캘린더 요소

캘린더 위젯을 [레이아웃](layouts_editor.html)에 추가할 때 [요소](layouts_editor#content-data-widgets-and-elements)를 선택할 수 있어 사용자가 사용할 캘린더 위젯의 구성 요소와 배치 위치를 더 잘 제어할 수 있습니다.

![캘린더 요소](/img/v4_media_modules_calendar_elements.png)

각 요소는 속성 패널에 구성 옵션 세트가 있습니다. **구성** 탭에서 결과를 반환할 iCal 피드를 입력하세요.

추가된 각 요소에 사용할 [데이터 슬롯](layouts_editor.html#content-data-slots)을 지정하여 항목이 어떻게 순환되어야 하는지 제어하세요. 데이터 요소는 도형과 텍스트를 추가하기 위해 [전역 요소](layouts_editor.html#content-global-elements)를 추가하여 더욱 보완할 수 있으며, 이 모든 것을 [요소 그룹](layouts_editor.html#content-grouping-elements)에 넣어 더 쉽게 구성하고 배치할 수 있습니다.

[스텐실](layouts_editor.html#content-stencils)을 활용하여 레이아웃에 사전 디자인된 요소 그룹을 추가하세요.

::: tip
스텐실의 모든 요소는 구성 시 '하나'로 취급되며 마우스 오른쪽 버튼 클릭으로 쉽게 복제할 수 있습니다!
:::

## 캘린더 정적 템플릿

[정적 템플릿](layouts_editor.html#content-static-templates)은 반환된 결과가 어떻게 배치되고 스타일링되어야 하는지 정의하며 사전 스타일링된 템플릿을 사용하여 데이터를 표시하는 간단한 방법입니다.

![캘린더 요소](/img/v4_media_modules_calendar_templates.png)

템플릿은 속성 패널의 다양한 옵션을 사용하여 디자인 외관에 변경사항을 만들도록 구성할 수 있습니다. 레이아웃/재생목록에 추가된 각 템플릿에 대해 **구성** 탭에서 결과를 반환할 iCal을 입력하세요.

## 개요

- 지정된 날짜 범위 내의 이벤트를 반환합니다.
- 피드에서 종일 이벤트와 현재 이벤트를 제외하여 표시되지 않도록 하는 옵션.
- 이벤트 및 캘린더 시간대 사용.
- 항목당 지속 시간 설정.
- 표시할 이벤트 수 지정.
- 특정 조건이 감지되면 웹 훅 트리거 실행.
- 이 미디어의 데이터는 플레이어에서 오프라인 재생을 위해 캐시됩니다.

### 웹 훅 트리거

트리거 탭에서 **현재 이벤트** 또는 **이벤트 없음**이 있을 때 웹 훅 [액션](layouts_interactive_actions.html)을 트리거합니다.

::: tip
**예시 시나리오**:

사용자가 레이아웃에 캘린더 위젯을 사용하여 회의실 캘린더를 구성하여 방의 현재 점유 상태를 표시하고 비어있거나 사용 중일 때 LED 조명을 변경하여 표시하고 싶어합니다.

- 사용자는 먼저 LED IoT 장치나 일부 Philips 상용 디스플레이의 내장 LED에 명령을 발행하는 [셸 명령](displays_command_functionality.html#content-shell-commands)을 생성해야 합니다.
- 다음으로 **레이아웃**에 [대화형 액션](layouts_interactive_actions.html)을 정의해야 하며, 이는 [셸 명령 위젯](media_module_shellcommand.html)과 함께 **위젯으로 이동**하고 **화면을 대상으로**합니다.
- **트리거** 탭에서 **현재 이벤트**와 **이벤트 없음**에 대한 **웹 훅**을 트리거할 코드를 할당하세요.
::: 