---
title: SignaLink User Manual
description: Welcome to SignaLink - Digital Signage for All
---

# SignaLink User Manual

SignaLink software comprises of a central **Content Management System (CMS)** where content is created/uploaded and scheduled to Displays. A **Player** application downloads new content and schedules from the CMS to display on screens:

![System Architecture](/img/v4_tour_system_architecture.png)

- The Player application runs on hardware attached to each screen.
- The Player regularly connects to the CMS to check for any new/edited content or schedules which it needs to download.

This User documentation has been created to cover core concepts and CMS features to educate and showcase SignaLink capabilities to Users. Pages have been categorised into clear neat sections to make it easier to find the relevant documentation to match your User role within the CMS.

::: tip
We recommend that all Users start with the **Tour** section of this manual to assist Users with [First Time Access](/guide/tour/user-access) and to get started [Navigating the CMS](/guide/tour/cms-navigation)!
:::

Users that are **not** hosting in our SignaLink Cloud will need to install a CMS. Please refer to the Installation Guides to assist you in getting up and running with SignaLink!

If you are an Administrator, further information on the Installation and Set up of the system is available from our Administration Documentation.

If you are hosting in our SignaLink Cloud your CMS will be set up for you. Keep a look out for an email which will be sent once your CMS is ready with your connection details!

Throughout this manual you will see tables to show **Player** and **CMS** version support for key features and functionality:

![Feature Category Table](/img/v4_tour_feature_category_table.png)

::: info
**IMPORTANT:** This User Manual gives a complete overview of the CMS as a Super Administrator with full access to all Features and Sharing options within the CMS. If you have any questions regarding your User access, then please contact your Administrator.
:::

# Digital Signage For All!

SignaLink provides a flexible and powerful application which has a core ethos in "Digital Signage for all", regardless of skill level or technological knowledge.

The SignaLink software centers on 5 core concepts:

## Users

[Users](/guide/users/administration) are added to the CMS by Administrators and given a **Username** and **Password** to securely log in.

::: tip
For a corporate environment SignaLink can also integrate with SAML identity providers such as Active Directory and ADFS!
:::

SignaLink supports 3 User Types as well as [User Groups](/guide/users/groups) and multi-level [Feature and Sharing](/guide/users/features-and-sharing) access to all system and user objects within the CMS.

## Displays

A [Display](/guide/displays) is the connection from the Player to the CMS which groups together content and schedule information. Each Display is uniquely identified in the CMS so that each Display can have its own **Media** content, **Layout** designs and **Schedules** available each with uniquely identified [Reporting](/guide/displays/metrics) statistics.

## Media

Media is the content we want to show on Displays which is generally split into two categories:

- **File based media** - media uploaded and stored in the [Library](/guide/media/library) (images and video files for example)
- **Layout based media** - media configured directly on a Layout which does not have an associated file (RSS feeds and Weather forecasts for example)

::: tip
SignaLink uses powerful [Widgets](/guide/layouts/editor#widgets) which integrate dynamic third-party content from a variety of sources!
:::

## Layouts

A [Layout](/guide/layouts) is the complete content design to be shown on Displays. With a powerful [Layout Editor](/guide/layouts/editor) Users can easily create eye catching content without having to leave the SignaLink CMS. Layouts can then be added to [Campaigns](/guide/layouts/campaigns) to play sequentially when scheduled.

## Scheduling

[Scheduling](/guide/scheduling/events) is highly flexible and supports scheduling to single Displays as well as to [Display Groups](/guide/displays/groups). Displays check for new scheduled content periodically and will download new items in advance of playback.

::: tip
[Default Layouts](/guide/displays#default-layout) should be assigned to Displays to be shown when nothing else is scheduled!
:::

## Core Workflows

SignaLink gives Users 2 main workflow options:

1. Creating content from the [Layout Editor](/guide/layouts/editor)

![Workflow 1](/img/v4_tour_workflow_1.png)

2. Selecting **Video**/**Image** files or saved **Playlists** to directly [Schedule](/guide/scheduling/events#media-scheduling):

![Workflow 2](/img/v4_tour_workflow_2.png)

## Open Source

The heart of the software is Open Source, including the entire **CMS** platform and **Windows Players**, and has been for many years! We're committed to keeping it that way. The code can be downloaded and used in accordance with our **AGPLv3 Licence**.

## Content Licensing

Please ensure that any content you wish to use complies with Copyright law and is used in the manner as described within its own license. SignaLink takes no measures to regulate what is put on displays, beyond what is described in these Manual pages.

## Support

If you would like further help with the information contained in the User Manual please take a look at the [Troubleshooting](/guide/troubleshooting) section or our SignaLink Community Forum.

Customers on a Professional, Business or Enterprise Plan have access to our experts on our Help Desk. Please open a ticket via My Account if you need assistance.

#### Next...

[First time User Access](/guide/tour/user-access) 