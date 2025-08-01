---
title: Dataset Widget
description: Display information held in datasets as tickers or tables
---

# DataSet

Display data held in a DataSet anywhere on a Layout using **Elements** or include **Static Templates** to show Tickers and Tables of data in Layouts/Playlists.

::: info
DataSets|v4
:::

The DataSet Widget primarily consists of a DataSet source which feeds into configured Elements and Static Templates.

::: tip
[DataSets](/guide/media/datasets) need to be created and defined prior to adding the DataSet Widget to Layouts/Playlists. 
:::

## DataSet Elements

[Elements](/guide/layouts/editor/data-widgets#data-widgets-and-elements) are available for selection when adding a DataSet Widget to a [Layout](/guide/layouts/editor) to give Users more control over what components of the DataSet Widget to use and where they can be placed. 

![DataSet Elements](/img/v4_media_module_dataset_elements.png)

::: tip
You will see a message in the properties panel should you try to use an Element that has no matching field type in your DataSet!
:::

Each Element has a set of configuration options in the Properties Panel. A DataSet must be selected to use as the data source from the **Configure** tab for each Element used on the Layout. Control how items should be cycled by specifying a [Data Slot](/guide/layouts/editor/data-widgets#data-slots) to use for each of the added Elements. Data Elements can be further complimented by adding [Global Elements](/guide/layouts/editor/global-elements) to add shapes and text which can all be put into an [Element Group](/guide/layouts/editor#grouping-elements) for easier configuration and positioning.

## DataSet Static Templates

[Static Templates](/guide/layouts/editor/data-widgets#static-templates) define how returned data should be laid out and styled and are a simple way to show your data using pre-styled templates.

![DataSet Templates](/img/v4_media_module_dataset_templates.png)

Templates can be configured to affect the behaviour of returned results as well as make changes to the design appearance using a range of options in the Properties Panel. A DataSet must be selected to use as the data source from the **Configure** tab for each Template added to the Layout/Playlist.

## Overview

- Update Elements and Templates with new data by editing the underlying [DataSet](/guide/media/datasets#adding-data-to-columns) data.
- Update DataSet Widget content without accessing Layouts or Playlists.
- Order and Filter results by any column.

- Shuffle items to play in a random sequence.
- Content for this media is cached by the Players for off-line playback.
- Set a 'freshness check' to determine when to switch to the 'No data' message when a Player is offline. 