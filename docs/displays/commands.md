---
title: 명령 기능
description: XMR, 일정 또는 레이아웃에서 실행할 명령 구성
---

# 명령 기능

SignaLink의 명령 기능은 사용자가 **XMR**, **일정** 또는 **레이아웃**에서 실행할 명령 세트를 구성하는 데 사용됩니다.

::: tip
명령은 모든 플레이어에 적용할 명령 문자열을 가질 수 있거나 플레이어별로 다른 명령 문자열을 가질 수 있으며, 이는 네트워크가 혼합되어 있거나 다른 디스플레이에 연결되어 있거나 플레이어 하드웨어가 약간 다른 경우에 특히 유용합니다.
:::

**명령 레코드**가 생성되어 **디스플레이 프로필**, **예약된 이벤트** 및 **셸 명령 위젯**에서 사용할 수 있는 "일반 명령"을 만들 수 있습니다.

::: tip
명령은 RS232, Android 인텐트 및 Philips SoC(시스템 온 칩) 기능에 쉽게 접근할 수 있게 해줍니다!
:::

## 명령 관리

명령은 CMS 메인 메뉴의 **디스플레이** 섹션에서 **명령**을 통해 생성되고 관리됩니다:

![디스플레이 명령](/img/v4_displays_commands.png)

명령의 행 메뉴를 사용하여 편집, 삭제 및 [공유](/users/features-and-sharing#content-share) 옵션을 설정하세요.

### 명령 추가

**명령 추가** 버튼을 클릭하고 관련 폼 필드를 완료하세요:

![명령 추가](/img/v4_displays_commands_add_command.png)

**명령** 드롭다운 메뉴를 사용하여 구성할 다음 옵션 중 하나를 선택하세요:

#### 자유 텍스트

명령 문자열을 입력하세요

::: tip
명령 문자열은 최종 실행된 명령을 나타내며 셸에 대한 직접 호출이거나 아래 "헬퍼" 섹션에서 지정된 **헬퍼**를 가질 수 있습니다.
:::

#### Philips Android

::: info
Phillips 상업용 디스플레이 통합은 Android v2 R200부터 사용할 수 있습니다.
:::

다음 명령을 사용하여 일부 상업용 Phillips 디스플레이 측면에 있는 LED를 제어할 수 있습니다:

```
tpv_led|off
tpv_led|red
tpv_led|green
tpv_led|blue
tpv_led|white
```

Android v2 R215부터 다음 명령을 사용하여 화면 백라이트를 켜고 끄는 통합이 추가되었습니다:

```
tpv|backlighton
tpv|backlightoff
```

::: tip
아래 명령은 특정 Android 4 모델에서만 사용할 수 있습니다. 2016 모델 [10BDL3051T](https://www.philips.co.uk/p-p/10BDL3051T_00/signage-solutions-multi-touch-display)

```
tpv|screenoff
tpv|screenon
```

`screenoff`는 화면을 끄고 낮은 전력 상태로 전환하며, `screenon`으로 다시 켤 수 있습니다.

다른 모든 모델의 경우 `screenoff`가 완전히 전원을 끄게 되어 현장 재시작이 필요하므로 `backlighton/off`를 사용하세요!
:::

음소거/음소거 해제 명령도 v2 R215부터 추가되었습니다:

```
tpv|mute
tpv|unmute
```

**참고:** `backlighton/off`는 오디오를 음소거하지 않으므로 오디오가 재생 중인 경우 위의 `mute/unmute` 명령도 동시에 예약하고 싶을 것입니다.

#### RS232

RS232 명령은 명령 문자열에 `rs232` 접두사를 사용하여 플레이어에서 실행할 수 있습니다. 명령 형식은 `rs232|<connection string>|<command>`입니다.

Windows에서는 다음 형식으로 연결 문자열을 제공해야 합니다:

```
<COM#>,<Baud Rate>,<Data Bits>,<Parity|None,Odd,Even,Mark,Space>,<StopBits|None,One,Two,OnePointFive>,<Handshake|None,XOnXOff,RequestToSend,RequestToSendXOnXOff>,<HexSupport|0,1,default 0>
```

**참고:** 명령을 HEX 형식으로 보내야 하는 경우 명령 문자열에 바이트 문자열을 지정해야 합니다. 예: `7E 00 00 FF 00 00 00 00 00 00 00 00 00 00 00 00 00 FF`, 이는 플레이어에 의해 바이트 스트림으로 변환됩니다. 연결 문자열의 `HexSupport` 요소를 `1`로 설정해야 합니다.

Android에서는 다음 형식으로 연결 문자열을 제공해야 합니다:

```
<DeviceName>,<Baud Rate>,<Data Bits>,<Parity>,<StopBits>,<FlowControl>
```

각 설정은 해당하는 숫자로 나타냅니다:

```
DATA_BITS_5 = 5;
DATA_BITS_6 = 6;
DATA_BITS_7 = 7;
DATA_BITS_8 = 8;
PARITY_NONE = 0;
PARITY_ODD = 1;
PARITY_EVEN = 2;
PARITY_MARK = 3;
PARITY_SPACE = 4;
STOP_BITS_1 = 1;
STOP_BITS_15 = 3;
STOP_BITS_2 = 2;
FLOW_CONTROL_OFF = 0;
FLOW_CONTROL_RTS_CTS = 1;
FLOW_CONTROL_DSR_DTR = 2;
FLOW_CONTROL_XON_XOFF = 3;
```

명령 자체는 연결 세부사항을 사용하여 RS232를 통해 전송되는 문자열입니다.

#### Android 인텐트

Android 디스플레이 프로필은 `intent` 헬퍼를 사용하여 명령이 실행될 때 호출되어야 하는 인텐트를 지정할 수 있습니다. 명령 형식은 `intent|<type|activity,service,broadcast>|<activity>|[<extras>]`입니다.

`[<extras>]`는 **Android v2 R206**부터 사용할 수 있는 선택적 매개변수로, 인텐트에 추가 데이터를 제공하는 데 사용됩니다. 이는 최소 하나의 객체가 포함된 배열을 포함하는 JSON 형식의 문자열이어야 합니다. 객체 형식은 아래와 같으며 한 줄에 있어야 합니다.

```json
{
  "name": "<extra name>",
  "type": "<type|string,int,bool,intArray>",
  "value": <the value of the above type>
}
```

예를 들어, 일부 디바이스에서는 펌웨어를 프로그래밍하여 켜기/끄기 시간을 설정할 수 있습니다.

```
[{
  "name": "timeon",
  "type": "intArray",
  "value": [2018, 7, 28, 8, 40]
}, {
  "name": "timeoff",
  "type": "intArray",
  "value": [2018, 7, 28, 21, 40]
}]
```

이는 명령에서 다음과 같이 설정됩니다:

```
intent|broadcast|activity|[{ "name": "timeon", "type": "intArray", "value": [2018, 7, 28, 8, 40] }, { "name": "timeoff", "type": "intArray", "value": [2018, 7, 28, 21, 40] }]
```

::: tip
인텐트 헬퍼가 포함된 명령은 Windows 플레이어에서 무시됩니다!
:::

### 헬퍼

**명령 헬퍼**는 더 고급 작업을 수행하기 위해 명령 문자열에 추가할 수 있는 접두사입니다. 접두사가 없는 명령은 플레이어를 실행하는 운영 체제의 셸에서 실행됩니다. Windows에서는 `cmd.exe`, Android에서는 `shell`입니다.

::: warning
SignaLink for Android [시간대 변경을 위한 헬퍼 명령](/docs/setup/helper-command-to-change-time-zone)
:::

### 검증

**검증 문자열**은 **명령** 출력과 비교에 사용되며 일치하면 명령이 성공한 것으로 간주됩니다. 검증 문자열은 정확히 일치해야 합니다.

이는 'Reboot'라는 명령이 있는 혼합 Windows 및 Android 플레이어 네트워크에 유용할 수 있습니다. Windows에서 'Reboot'의 명령 문자열은 `shutdown /r /t 0`이고, Android에서는 `reboot`입니다.

::: tip
이는 혼합되지 않은 네트워크에서도 유용할 수 있습니다 - HDMI/RS232를 통해 연결된 다른 모니터가 있는 Windows 플레이어 네트워크를 상상해보세요. 'Monitor On'이라는 단일 명령을 만들 수 있으며, 다른 브랜드의 모니터는 다른 디스플레이 설정 프로필로 나타내고, 각각 모니터를 켜고 끄는 다른 명령 문자열을 가질 수 있습니다.
:::

### 사용 가능한 곳

명령이 사용 가능한 디스플레이 유형을 선택하세요. 비워두면 모든 유형의 디스플레이에 명령이 적용됩니다.

::: tip
**명령** 및 **검증** 문자열은 [디스플레이 프로필]( /displays/settings#setting_on_the_display)을 편집하고 **명령** 탭을 사용하여 재정의할 수 있습니다!
:::

## XMR 명령 전송

행 메뉴를 사용하여 디스플레이/디스플레이 그룹에서 **XMR**을 통해 명령을 실행하세요:

## 명령 스케줄링

**명령을 스케줄**하여 특정 시간에 실행되도록 하세요

- CMS 메인 메뉴에서 **스케줄**을 클릭하세요.
- 스케줄 그리드 상단에서 [이벤트 추가](scheduling_events)를 선택하세요.

- 이벤트 유형 드롭다운에서 **명령**을 선택하세요.
- 폼 필드를 완성하고 사용할 **명령**과 **시작 시간**을 선택하세요.

::: tip
예약된 명령은 플레이어에서 한 번 실행되며 **시작** 날짜와 시간만 필요합니다. 명령은 선택한 시간 후 최대 10초까지 실행될 수 있습니다.
:::

## 셸 명령

[셸 명령 위젯](media_module_shellcommand.html)을 사용하여 레이아웃 활동을 기반으로 외부 명령을 실행하세요.

명령을 소스로 하는 셸 명령은 일반 셸 명령과 동일한 방식으로 작동합니다. 명령은 위젯이 레이아웃에 표시될 때 실행됩니다.

셸 명령은 모든 플레이어에 대한 옵션이 제공되는 명령 문자열일 수도 있습니다. 이를 통해 사용자는 일회용으로 '임시' 명령을 추가할 수 있습니다.

::: tip
가능한 경우 관리자가 미리 정의된 명령을 생성하는 것을 권장합니다!
:::

## 모니터 켜기/끄기

### HDMI-CEC

HDMI-CEC는 HDMI 커넥터가 있는 거의 모든 새로운 대형 화면 TV에 구현된 버스입니다. 이 버스(일반 HDMI 케이블 내에서 물리적으로 연결됨)는 전원 켜기, 전원 끄기, 볼륨 조정, 비디오 소스 선택 및 TV 리모컨을 통해 액세스할 수 있는 많은 기능을 수행할 수 있는 제어 신호를 지원합니다. 또한 HDMI 버스의 대부분의 다른 하드웨어를 제어할 수 있습니다.

SignaLink는 제조업체 사양이 다양하기 때문에 HDMI-CEC에 대한 직접 인터페이스를 제공하지 않지만, 배치 파일을 통해 HDMI-CEC를 제어할 수 있습니다.

### 시리얼/RS232

산업용 모니터는 종종 모니터 패널을 켜고 끄기 위한 시리얼 인터페이스를 가지고 있습니다. SignaLink는 RS232 명령 헬퍼를 사용하여 이러한 명령을 모니터로 보낼 수 있습니다 - 보통 HEX 모드에서.

다음 모니터와 명령이 테스트되었습니다:

#### NEC E464

- 전원 켜기 - `rs232|COM1,9600,8,None,One,None,1|01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 31 03 73 0d`
- 전원 끄기 - `rs232|COM1,9600,8,None,One,None,1|01 30 41 30 41 30 43 02 43 32 30 33 44 36 30 30 30 34 03 76 0d`

#### Sharp LC-42D69U

- 전원 켜기 - `rs232|COM1,9600,8,None,One,None,1|50 4F 57 52 31 20 20 20 0D`
- 전원 끄기 - `rs232|COM1,9600,8,None,One,None,1|50 4F 57 52 00 20 20 20 0D`

#### LG 55LK520

- 전원 켜기 - `rs232|COM1,9600,8,None,One,None,1|6B 61 20 30 30 20 30 31 0D`
- 전원 끄기 - `rs232|COM1,9600,8,None,One,None,1|6B 61 20 30 30 20 30 30 0D`

::: tip
각 브랜드의 다른 모델도 동일한 명령을 사용해야 한다는 점에 유의해야 합니다.
::: 