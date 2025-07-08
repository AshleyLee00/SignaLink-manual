---
title: Campaigns
description: Create a Layout List Campaign to ensure the play order of Layouts
---

# Campaigns

SignaLink has two **Campaign** types:

- [Layout List](/guide/layouts/campaigns#content-create-a-layout-list) - a collection of Layouts in an ordered list.
- [Ad Campaign](/guide/layouts/ad-campaigns) - allows for the creation of advertising campaigns ([Feature](/guide/users/features-and-sharing#content-features) enabled).

## Create a Layout List

A **Layout List Campaign** allows a User to set the playback of a group of Layouts in a defined order. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/rMuYujq_LV8" title="Layout List Campaign" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: tip
If you think of a Layout as a single slide in a presentation deck, a Campaign is the entire presentation!
:::

Click on **Campaigns** under the **Design** section of the main CMS menu:

![Campaigns](/img/v4_layouts_campaigns_grid.png)

- Click the **Add Campaign** button at the top of the grid.

- Select **Layout List** from the drop down and complete the form fields:

![Add Layout List Campaign](/img/v4_layouts_campaign_add_layout_list.png)

[Folders](/guide/tour/folders) are used to organise, search and easily [Share](/guide/users/features-and-sharing#content-share) User objects with other Users/User Groups. Campaigns saved to a Folder will inherit the access options applied to that Folder. 

::: tip
If users should also have access to the Layouts/Layout content, ensure that this is also saved to the same Folder!
:::

- Give your Campaign a **Name** for easy identification in the CMS including optional [Tags](/guide/tour/tags).

::: tip
Tags and Folders can also be assigned to multiple Campaigns using the [With Selected](/guide/tour/cms-navigation#content-multi-select---with-selected) option at the bottom of the Campaign grid!
:::

### Cycle Based Playback

When a **Campaign** is scheduled with **Cycle Based Playback** enabled, 1 Layout will be shown for a set Play Count. The same Layout will be shown each Schedule loop until the Play Count has been achieved.

::: info
Campaign Cycle Playback feature is available from v4.
:::

Once enabled, provide a **Play Count** to determine how many 'plays' a Layout should have before moving onto the next Layout in the Campaign.

### List Play Order

For Campaigns that do not have Cycle Based Playback enabled, **List Play Order** options can be used to determine how Layouts assigned to the Campaign will play when scheduled at the same time as another Campaign with the same Display Order:

**Round Robin** - Layouts from each Campaign will play interleaved.

**Block** - Layouts will play in their entirety from a Campaign before moving onto the next Campaign.

## Add Layouts to a Campaign

On **Saving**, the form will re-open with additional tabs.

Use the **Layouts** tab to select which Layouts to add:

![Assign Layouts](/img/v4_campaigns_assign_layouts.png)

- Using the `+` icon to select which **Layouts** to add.

- Selected Layouts will be added to the 'staging area' at the top of the form.
- Layouts can be **re-ordered** from here by drag and drop.
- Remove a Layout by clicking the `-` icon.
- Click **Save** to keep changes.

::: tip
The Reference tab can be used to provide reference information for the selected Campaign. Once added, this information can be viewed in the Campaign grid and via the API.
:::

Use the row menu from the Campaign grid to easily make copies of a Campaign as well as enable [Share](/guide/users/features-and-sharing#content-share) options for selected Users/User Groups.

::: tip
Layouts can be directly assigned to Campaigns from the [Layouts](/guide/layouts#content-layout-grid) grid. Use the row menu for the Layout to add and click **Assign to Campaign**. Layouts will be assigned to the end of the selected Campaign by default!
::: 