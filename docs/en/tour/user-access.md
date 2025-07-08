---
title: First time User Access
description: First Time User Access to the CMS
---

# First time User Access

Enter the web address (URL) of your CMS instance. Your **Super Administrator** will be able to tell you where to go to log in and give you your initial login credentials to access the CMS.

During the CMS installation process, a **Username** and **Password** is provided which grants unrestricted access to all areas of the CMS as a [Super Administrator User](/guide/users/administration#super-admin-user). Administrators have a number of login management options which can be set for [Users](/guide/users/administration) from [CMS Settings](/guide/tour/cms-settings#users).

## Login

The CMS is protected by an authentication system, enter your **Username** and **Password** and click to login. All pages in the CMS are authenticated and if you are not logged in a login form will appear.

::: tip
The CMS uses cookies to track whether a User is logged in or not. If you are experiencing trouble logging in you may need to adjust your browser settings for cookies.
:::

Once logged in you will see your [User Dashboard](/guide/users/dashboards), which serves as your homepage. 

::: tip
The Dashboard and main menu items are based on the enabled [Features](/guide/users/features-and-sharing) you have been given within the system!
:::

We recommend that Users change their password after first time log in from the **Edit Profile** section of the **User Profile**.

## User Profile

Located in the top right of the CMS, click on the icon to manage your **User Profile** settings, reshow the short '**Welcome**' tour of the CMS to assist with navigation and functionality, and securely **Logout** of the CMS after each User session:

![User Profile](/img/v4_tour_user_profile.png)

::: tip
The CMS time and timezone which has been set in the **Regional** [CMS Settings](/guide/tour/cms-settings#regional) are shown here!
:::

## Preferences

Preferences can be set which will only be enabled for the logged in User. 

::: tip
The list of options may differ from what is shown below as they are dependent on the [Feature](/guide/users/features-and-sharing) access enabled for each User.
:::

Use the available options to enhance your User role within the CMS:

![User Preferences](/img/v4_tour_user_profile_preferences.png)

::: tip
If you make changes to the **Navigational Menu** positioning for your CMS, ensure you refresh your browser to apply the change!
:::

## Edit Profile

We strongly recommend that all Users change their initial password after first login. You may have also been prompted by the system to change your password from [User Settings](/guide/users/administration#force-password-change) applied by your Administrator.

- Click on **Edit Profile** to open:

![User Profile](/img/v4_tour_user_profile_edit.png)

You may have to adhere to a [Password Policy](/guide/tour/cms-settings#password-policy), as set by your Administrator when attempting to change your password. A text prompt will be shown to explain what is needed (minimum number of characters etc.) in order to meet the requirements of the set policy.

If you have a [Forgotten your Password](/guide/tour/cms-settings#password-reminder) reset link on the Login page, ensure that your correct **Email** address is entered in your User Profile. Once clicked a Password Reset Notification will be sent to your email address with further instructions to ensure you quickly regain access to the CMS.

## Two Factor Authentication

Users can configure Two Factor Authentication options for **Email** or **Google Authentication** to complete login by entering a code to further confirm the identify of who is logging into the CMS. 

### Email

::: info
**NOTE:** Administrators will need to ensure that a **Sending Email** address has been added via the [CMS Settings](/guide/tour/cms-settings#network) page in order for Users to start receiving email notifications.
:::

- Select Email
- Ensure that an **Email** address has been provided on the User Profile form and click to **Save**.

Once enabled, on each login after entering the **Username** and **Password** you will be asked to provide the 6 digit code shown in the **email** sent to the provided email address to complete log in.

### Google Authenticator

::: info
**NOTE:** Administrators will need to enter the name via the [CMS Settings](/guide/tour/cms-settings) page, that should appear as the issuer with the Google Authenticator app. 
:::

- Install the [Google Authenticator app](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) to your mobile device.
- Select Google Authenticator.
- Scan the **QR code** shown on the Edit User Profile form and enter the code displayed into the Access Code field and **Save** to complete the set up.

![QR Code](/img/v4_tour_user_2fa_qrcode.png)

Once enabled, after entering the **Username** and **Password** you will be asked to provide the 6 digit **code** displayed in the Google Authenticator app to complete log in each time.

::: tip
Ensure that your phone and server have the correct time and date to avoid errors.
You will need to enter your password to verify any changes made to the **Two Factor Authentication** options.
:::

### Generate Recovery Codes

On saving a Two Factor Authentication option you will now need to generate recovery codes to be used if access to the configured email address or Google Authenticator app is lost.

- Click on **Generate**.
- **Copy** the codes and store them in a safe place like Password Manager.
- Click **Save** to make the codes active.

If you need to view the generated codes at anytime, click on **Show**.

::: info
**NOTE:** Clicking on Generate will invalidate any existing generated codes.
:::

::: tip
If you have no access to the email or app and cannot retrieve recovery codes, please contact your Administrator to [Reset Two Factor Authentication](/guide/users/administration#reset-two-factor-authentication)!
:::

### My Applications

Applications that a User has authorised to act on their behalf within the CMS can be viewed here. Any questions regarding Applications please speak with your Administrator.

::: tip
At the current time the CMS does not provide individual Users with a method of revoking access to an application. Please speak with your Administrator to request removal of an [Application](/guide/tour/cms-settings#applications).
:::

#### Next...

[Navigating the CMS](/guide/tour/cms-navigation) 