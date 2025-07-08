---
title: Currencies Widget
description: Display exchange rates for currency pairs
---

# Currencies

Display exchange rates for currency pairs anywhere on a Layout using **Elements** or select a **Static Template** to display results in Layouts/Playlists.

::: info
Currencies|v4
:::

The Currencies Widget relies in part on the [Alpha Vantage API](https://www.alphavantage.co/) to retrieve exchange rate data which feeds into configured Elements and Static Templates.

::: tip
Please visit [Alpha Vantage](https://www.alphavantage.co/support/#api-key) to create an account and obtain an API key to enter into the Alpha Vantage [Connector.](/guide/media/modules#connectors)
:::

The Currencies Module is configured for **SignaLink Cloud** hosted customers with an API key provided as part of the service.

## Currencies Elements

[Elements](/guide/layouts/editor/data-widgets#data-widgets-and-elements) are available for selection when adding the Currencies Widget to a [Layout](/guide/layouts/editor) to give Users more control over what components of the Currencies Widget to use and where they can be placed.

![Currencies Elements](/img/v4_media_modules_currencies_elements.png)

Each Element has a set of configuration options in the Properties Panel.  Enter **Currencies** using their acronyms/abbreviations you wish to show as well as a **Base** currency from the **Configure** tab.

Control how items should be cycled by specifying a [Data Slot](/guide/layouts/editor/data-widgets#data-slots) to use for each of the added Elements. Data Elements can be further complimented by adding [Global Elements](/guide/layouts/editor/global-elements) to add shapes and text which can all be put into an [Element Group](/guide/layouts/editor#grouping-elements) for easier configuration and positioning.

## Currencies Static Templates

[Static Templates](/guide/layouts/editor/data-widgets#static-templates) define how returned data should be laid out and styled and are a simple way to show your data using pre-styled templates.

![Currencies Templates](/img/v4_media_modules_currencies_templates.png)

Templates can be configured to make changes to the design appearance using a range of options in the Properties Panel. Enter **Currencies** using their acronyms/abbreviations you wish to show as well as a **Base** currency from the **Configure** tab for each Template added to the Layout/Playlist.

## Overview

- Reverse conversion to use the base currency as the comparison.
- Content for this media is cached by the Players for off-line playback.
- Duration can be applied per item or per page. 