---
title: 임베드 콘텐츠
description: 레이아웃과 재생목록에 표시할 HTML과 JavaScript 임베드
---

# 임베드 콘텐츠

레이아웃과 재생목록에 표시할 HTML과 JavaScript를 임베드하세요.

::: info
임베드 HTML|v4
:::

## 개요

- 핵심 애플리케이션을 수정하지 않고 사용자 정의 향상을 만드세요.
- 투명한 배경이 있는 콘텐츠의 경우 위젯을 투명한 배경으로 표시하도록 체크하세요.
- 레이아웃과 함께 콘텐츠를 확대/축소하세요.
- 화면 밖에서 콘텐츠를 미리 로드하세요.

- 임베드할 텍스트 또는 HTML을 입력하세요.
- CSS 스타일시트를 사용하여 시각적 스타일링을 제어하세요.
- 문서의 HEAD에 콘텐츠를 임베드하기 위해 `script` 태그를 포함하세요. (아래 섹션을 참조하세요.)

::: info
**참고:**

- 투명한 배경과 확대/축소는 Windows v2 R253부터 사용 가능합니다.

- 화면 밖 미리 로드는 현재 Android v2 R207부터만 사용 가능합니다.
:::

### 임베드할 HEAD 콘텐츠

JavaScript는 `script` 태그로 감싸야 합니다. SignaLink는 자동으로 jQuery를 추가합니다.

`EmbedInit()` 메서드는 플레이어에 의해 호출되며 적절한 시간에 사용자 정의 JavaScript를 안전하게 시작하는 데 사용할 수 있습니다. 이 메서드는 모든 새로운 임베드 미디어 항목에서 기본값으로 설정됩니다.

```html
<script type="text/javascript">
function EmbedInit()
{
    // Init will be called when this page is loaded in the client.

    return;
}
</script>
```

::: tip
Windows 플레이어에서 Active-X 콘텐츠가 있는 임베드 HTML을 표시하려면 IE의 보안 설정을 사용하여 로컬 파일이 기본적으로 활성 콘텐츠를 실행할 수 있도록 하세요. 이는 도구 -> 인터넷 옵션 -> 고급 -> 보안 -> "내 컴퓨터의 파일에서 활성 콘텐츠 실행 허용"에서 수행할 수 있습니다.
::: 