---
title: Transition Management
description: Transition Management options for Users
---

# Transition Management

::: feat
Transitions|v4
:::

::: info
**Note:** Transitions are not supported by Tizen Players for the following Widgets:

- [Video](/guide/media/modules/video)
- [Video In](/guide/media/modules/video-in)
- [Local Video](/guide/media/modules/local-video)
:::

Transitions are managed from the **Transitions** page under the **Administration** section of the main CMS menu. Configure which Transitions should be available to Users for assignment to Media items:

![Transitions Grid](/img/v4_tour_transitions_grid.png)

- **Fade In** - Increase Opacity from 0 to 100.
- **Fade Out** - Decrease Opacity from 100 to 0.
- **Fly** - Fly in or out on a compass point. 

## Transition Defaults

::: info
Global default settings can be set for Transitions by Administrators from the [CMS Settings](/guide/tour/cms-settings#defaults) page.
:::

Default Transitions can be easily enabled for all Widgets added to a Layout by ticking the **Automatically apply Transitions?** box from the Layout property panel:

![Transitions Layout](/img/v4_tour_transitions_layout.png)

::: info
**NOTE:** When Transition Defaults have been applied, the Widget Transition fields will show as blank entries:

![Transitions Widget](/img/v4_tour_transitions_widget.png)

This is because only **manually** entered Transitions for a Widget will be shown in the form fields.
:::

## Playlist Transitions

These are the Transitions between **Media items** on a [Playlist](/guide/media/playlists) and are set as **In** and **Out** transitions.

::: tip
The Transition form adapts depending on the Transition selected and the options available for that transition. In most cases it is necessary to select a duration for the Transition in Milliseconds and in the case of Fly, a direction must also be selected.
:::

## Playlist Exit Transition

A Playlist Exit Transition happens when the last Media Item to be displayed on a [Playlist](/guide/media/playlists) is shown and allows for a different Exit Transition to be set. 