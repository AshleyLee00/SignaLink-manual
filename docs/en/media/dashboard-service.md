---
title: Dashboard Service
description: Commercial Feature to securely display dashboard services
---

# Dashboard Service

::: warning
If you would like to take advantage of this feature, please contact your Administrator.
:::

The SignaLink Dashboards Service is a commercial feature which allows Users to securely display dashboard services; Microsoft Power BI, Grafana and Matomo, on Layouts with automation and authentication handled by SignaLink.

::: warning
**Please note:** This commercial feature requires an API for configuration as further explained [here](/pricing#dashboards).
:::

Once the Connector has been configured, add dashboards to display in Layouts using the [Dashboards Widget](/guide/widgets/dashboard)

## Configure Connector

From the CMS:

- Click on **Applications** under the **Administration** section of the main menu.
- Scroll down to the **Connectors** section of the page. 
- Click the **Configure** button for the **SignaLink** **Dashboard Service** connector:

![Dashboard Connector](/img/v4_media_dashboard_connector.png)

- Enter the API key you have been given (available in [My Account](/login)).

::: tip
Customers on a Business or Enterprise Plan will have their API key pre-filled!
:::

- Tick to **Enable** to start providing the dashboard services

![Configure Connector](/img/v4_media_dashboard_configure_connector.png)

- Click to **Save.**

- Click the **Configure** button again for the SignaLink Dashboard service connector.
- Using the **Credentials** section of the form, select the dashboard service(s) you wish to use:

![Dashboard Credentials](/img/v4_media_dashboard_credentials.png)

Enter the following credentials:

- Username
- Password
- Two Factor Secret (if required)
- URL (if required)

::: tip
Grafana does not support multi factor authentication, so please leave the **Two Factor** **Secret field empty** when configuring this integration.

Please see the following page for further information on obtaining a URL to use with this service, supported authentication mechanisms and possible limitations [SignaLink Dashboard Service](/docs/setup/SignaLink-dashboard-service)
:::

- Click to **Save** and wait a few moments whilst those credentials are successfully registered.

Your Dashboard is ready to be added to Layouts using the [Dashboard Widget](/guide/widgets/dashboard) 