---
title: Calendar Widget
description: Display calendar events pulled in from an iCal feed
---

# Calendar

Display Calendar events pulled in from an iCal feed anywhere on a Layout using **Elements** or select a **Static Template** to display results in Layouts/Playlists.

::: info
Calendar View|v4
:::

Calendar data is provided by an iCal feed which will feed into configured Elements and Static Templates.

::: tip
Ensure that the ICS feed URL is available to the CMS. If the feed loads in a browser without authentication then the feed should display in the CMS without issue.

For further information on how to view your Google Calendar in applications, use the following link selecting the **Get your calendar (view only)** option: https://support.google.com/calendar/answer/37648?hl=en
:::

## Calendar Elements

[Elements](/guide/layouts/editor/data-widgets#data-widgets-and-elements) are available for selection when adding the Calendar Widget to a [Layout](/guide/layouts/editor) to give Users more control over what components of the Calendar Widget to use and where they can be placed.

![Calendar Elements](/img/v4_media_modules_calendar_elements.png)

Each Element has a set of configuration options in the Properties Panel.  Enter the iCal feed to use to return results from the **Configure** tab.

Control how items should be cycled by specifying a [Data Slot](/guide/layouts/editor/data-widgets#data-slots) to use for each of the added Elements. Data Elements can be further complimented by adding [Global Elements](/guide/layouts/editor/global-elements) to add shapes and text which can all be put into an [Element Group](/guide/layouts/editor#grouping-elements) for easier configuration and positioning.

Take advantage of [Stencils](/guide/layouts/editor#stencils) to add a predesigned group of Elements to your Layout. 

::: tip
All Elements in the Stencil are treated as 'one' when configured and can be easily duplicated from a right click!
:::

## Calendar Static Templates

[Static Templates](/guide/layouts/editor/data-widgets#static-templates) define how returned results should be laid out and styled and are a simple way to show your data using pre-styled templates.

![Calendar Elements](/img/v4_media_modules_calendar_templates.png)

Templates can be configured to make changes to the design appearance using a range of options in the Properties Panel. Enter an iCal to return results from the **Configure** tab for each Template added to the Layout/Playlist.

## Overview

- Return events within a specified date range.
- Options to exclude all day and current events from the feed so they won't be shown.
- Use event and calendar timezones.
- Set duration per item.
- Specify how many events to display.
- Execute a Web Hook trigger when certain conditions are detected.
- Data for this media is cached by the Players for off-line playback.

### Web Hook Triggers 

Trigger a Web Hook [Action](/guide/layouts/interactive-actions) when there is a **Current Event** or **No Event** from the Trigger tab.

::: tip
**Example Scenario**:

A user has a meeting room calendar configured using the Calendar Widget on a Layout which shows the current occupancy for a room and would like to change LED lights to show when vacant or in use.

- The user would first need to create [Shell Commands](/guide/displays/commands#shell-commands) which issued commands to an LED IoT device or the inbuilt LEDS's on some of the Philips Commercial Displays.
- Next an [Interactive Action](/guide/layouts/interactive-actions) would need to be defined on the **Layout**, which would **Navigate to Widget** and **Target the Screen**, with the [Shell Command Widget.](/guide/widgets/shell-command) 
- From the **Trigger** tab, assign the code's to trigger the **Web Hooks** for **Current Event** and **No Event**.
::: 