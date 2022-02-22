define({ "api": [
  {
    "type": "GET",
    "url": "/account.getList",
    "title": "account.getList",
    "group": "Account",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/account.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AccountController.php",
    "groupTitle": "Account",
    "name": "GetAccountGetlist"
  },
  {
    "type": "POST",
    "url": "/account.create",
    "title": "account.create",
    "group": "Account",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currency_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/accounts.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AccountController.php",
    "groupTitle": "Account",
    "name": "PostAccountCreate"
  },
  {
    "type": "POST",
    "url": "/account.delete",
    "title": "account.delete",
    "group": "Account",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/accounts.delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AccountController.php",
    "groupTitle": "Account",
    "name": "PostAccountDelete"
  },
  {
    "type": "GET",
    "url": "/admin_dashboard.getList",
    "title": "admin_dashboard.getList",
    "group": "AdminDashboard",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"day,week,month\""
            ],
            "optional": false,
            "field": "period",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "1",
              "3",
              "5",
              "all"
            ],
            "optional": false,
            "field": "currency_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin_dashboard.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdminDashboardController.php",
    "groupTitle": "AdminDashboard",
    "name": "GetAdmin_dashboardGetlist"
  },
  {
    "type": "GET",
    "url": "/administrators.getList",
    "title": "administrators.getList",
    "group": "Administrator",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Max: <code>200</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "profile"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "email"
            ],
            "optional": true,
            "field": "search_field",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/administrators.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdministratorsController.php",
    "groupTitle": "Administrator",
    "name": "GetAdministratorsGetlist"
  },
  {
    "type": "GET",
    "url": "/advertiser.getList",
    "title": "advertiser.getList",
    "group": "Advertiser",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Max: <code>200</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "profile",
              "accounts"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "email"
            ],
            "optional": true,
            "field": "search_field",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "hashes[]",
            "description": "<p>Get advertisers by this hashes</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/advertiser.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdvertisersController.php",
    "groupTitle": "Advertiser",
    "name": "GetAdvertiserGetlist"
  },
  {
    "type": "GET",
    "url": "/advertiser.getSummary",
    "title": "advertiser.getSummary",
    "group": "Advertiser",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/advertiser.getSummary"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdvertisersController.php",
    "groupTitle": "Advertiser",
    "name": "GetAdvertiserGetsummary"
  },
  {
    "type": "POST",
    "url": "/advertiser.changeProfile",
    "title": "advertiser.changeProfile",
    "group": "Advertiser",
    "permission": [
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "user_id",
            "description": "<p>Advertiser ID. Required for admin</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "manager_id",
            "description": "<p>Advertiser's managera ID. Required for admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "info",
            "description": "<p>Required for admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "skype",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "telegram",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "whatsapp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "ru",
              "en"
            ],
            "optional": false,
            "field": "interface_locale",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "Pacific/Kwajalein",
              "Pacific/Samoa",
              "America/Adak",
              "America/Anchorage",
              "America/Los_Angeles",
              "US/Mountain",
              "US/Central",
              "US/Eastern",
              "America/Argentina/Buenos_Aires",
              "America/Noronha",
              "America/La_Paz",
              "Atlantic/Cape_Verde",
              "Europe/London",
              "Europe/Madrid",
              "Europe/Kiev",
              "Europe/Moscow",
              "Asia/Tbilisi",
              "Asia/Yekaterinburg",
              "Asia/Almaty",
              "Asia/Bangkok",
              "Asia/Hong_Kong",
              "Asia/Tokyo",
              "Asia/Vladivostok",
              "Asia/Magadan",
              "Pacific/Auckland"
            ],
            "optional": false,
            "field": "timezone",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/advertiser.changeProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdvertisersController.php",
    "groupTitle": "Advertiser",
    "name": "PostAdvertiserChangeprofile"
  },
  {
    "type": "GET",
    "url": "/api_log.getList",
    "title": "api_log.getList",
    "group": "ApiLog",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_from",
            "description": "<p>Date in format:<code>Y-m-d</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_to",
            "description": "<p>Date in format:<code>Y-m-d</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "user_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "api_methods[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..200",
            "optional": true,
            "field": "per_page",
            "defaultValue": "50",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api_log.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ApiLogController.php",
    "groupTitle": "ApiLog",
    "name": "GetApi_logGetlist"
  },
  {
    "type": "GET",
    "url": "/api_log.search",
    "title": "api_log.search",
    "group": "ApiLog",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api_log.search"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ApiLogController.php",
    "groupTitle": "ApiLog",
    "name": "GetApi_logSearch"
  },
  {
    "type": "GET",
    "url": "/auth.getUser",
    "title": "auth.getUser",
    "description": "<p>Get user info by token for authentication purpose.</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/auth.getUser"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Auth",
    "name": "GetAuthGetuser"
  },
  {
    "type": "POST",
    "url": "/auth.loginAsUser",
    "title": "auth.loginAsUser",
    "description": "<p>Login as user</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_hash",
            "description": "<p>Hash of user to log in</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/auth.loginAsUser"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Auth",
    "name": "PostAuthLoginasuser"
  },
  {
    "type": "POST",
    "url": "/auth.logoutAsUser",
    "title": "auth.logoutAsUser",
    "description": "<p>Logout from user cabinet and log in to own.</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foreign_user_hash",
            "description": "<p>Hash of user to logout</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/auth.logoutAsUser"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Auth",
    "name": "PostAuthLogoutasuser"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "remember",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/login"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Auth",
    "name": "PostLogin"
  },
  {
    "type": "POST",
    "url": "/logout",
    "title": "logout",
    "group": "Auth",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/logout"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Auth",
    "name": "PostLogout"
  },
  {
    "type": "POST",
    "url": "/passwordReset",
    "title": "passwordReset",
    "description": "<p>Send email with link to recovery account password.</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Exising user's email in system</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Secret string which was sent in email</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/passwordReset"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/ResetPasswordController.php",
    "groupTitle": "Auth",
    "name": "PostPasswordreset"
  },
  {
    "type": "POST",
    "url": "/promoQuestion",
    "title": "promoQuestion",
    "group": "Auth",
    "permission": [
      {
        "name": "unauthorized",
        "title": "Unauthorized users",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/promoQuestion"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/RegistrationController.php",
    "groupTitle": "Auth",
    "name": "PostPromoquestion"
  },
  {
    "type": "POST",
    "url": "/recoveryPasswordSend",
    "title": "recoveryPasswordSend",
    "description": "<p>Send email with link to recovery account password.</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Exising user's email in system.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/recoveryPasswordSend"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/ForgotPasswordController.php",
    "groupTitle": "Auth",
    "name": "PostRecoverypasswordsend"
  },
  {
    "type": "POST",
    "url": "/registration",
    "title": "registration",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "advertiser",
              "publisher"
            ],
            "optional": false,
            "field": "user_role",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique email in the system</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Required if <code>user_role</code>=<code>publisher</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "g-recaptcha-response",
            "description": "<p>Required if <code>user_role</code>=<code>publisher</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Required if <code>user_role</code>=<code>advertiser</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts",
            "description": "<p>Required if <code>user_role</code>=<code>advertiser</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "geo",
            "description": "<p>Required if <code>user_role</code>=<code>advertiser</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/registration"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/RegistrationController.php",
    "groupTitle": "Auth",
    "name": "PostRegistration"
  },
  {
    "type": "DELETE",
    "url": "/auth_token.deleteByHash",
    "title": "auth_token.deleteByHash",
    "group": "AuthToken",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/auth_token.deleteByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AuthTokenController.php",
    "groupTitle": "AuthToken",
    "name": "DeleteAuth_tokenDeletebyhash"
  },
  {
    "type": "DELETE",
    "url": "/auth_token.deleteExceptCurrenToken",
    "title": "auth_token.deleteExceptCurrenToken",
    "group": "AuthToken",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/auth_token.deleteExceptCurrenToken"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AuthTokenController.php",
    "groupTitle": "AuthToken",
    "name": "DeleteAuth_tokenDeleteexceptcurrentoken"
  },
  {
    "type": "GET",
    "url": "/auth_token.getList",
    "title": "auth_token.getList",
    "group": "AuthToken",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/auth_token.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AuthTokenController.php",
    "groupTitle": "AuthToken",
    "name": "GetAuth_tokenGetlist"
  },
  {
    "type": "GET",
    "url": "/balance_transaction.getList",
    "title": "balance_transaction.getList",
    "group": "BalanceTransaction",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_to",
            "description": "<p>Format: Y-m-d</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "users_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "country_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[transaction_hash",
              "lead_hash]"
            ],
            "optional": true,
            "field": "search_field",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "currency"
            ],
            "optional": true,
            "field": "group_by",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "currency_ids",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "advertiser.hold",
              "advertiser.unhold",
              "advertiser.deposit",
              "advertiser.write-off",
              "advertiser.cancel",
              "publisher.hold",
              "publisher.unhold",
              "publisher.cancel",
              "publisher.withdraw",
              "publisher.withdraw_cancel"
            ],
            "optional": false,
            "field": "types[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_from",
            "description": "<p>Format: Y-m-d. Default: -7 days</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/balance_transaction.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BalanceTransactionController.php",
    "groupTitle": "BalanceTransaction",
    "name": "GetBalance_transactionGetlist"
  },
  {
    "type": "POST",
    "url": "/balance_transaction.create",
    "title": "balance_transaction.create",
    "description": "<p>Create advertiser.write-off transaction.</p>",
    "group": "BalanceTransaction",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of advertiser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "advertiser.write-off"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "balance_sum",
            "description": "<p>Amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/balance_transaction.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BalanceTransactionController.php",
    "groupTitle": "BalanceTransaction",
    "name": "PostBalance_transactionCreate"
  },
  {
    "type": "POST",
    "url": "/balance_transaction.edit",
    "title": "balance_transaction.edit",
    "group": "BalanceTransaction",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/balance_transaction.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BalanceTransactionController.php",
    "groupTitle": "BalanceTransaction",
    "name": "PostBalance_transactionEdit"
  },
  {
    "type": "GET",
    "url": "/browser.getList",
    "title": "browser.getList",
    "group": "Browser",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "ids[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/browser.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/BrowserController.php",
    "groupTitle": "Browser",
    "name": "GetBrowserGetlist"
  },
  {
    "type": "GET",
    "url": "/cloak_domain_paths.getList",
    "title": "cloak_domain_paths.getList",
    "group": "CloakDomainPath",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "domain",
              "flow",
              "cloak"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/cloak_domain_paths.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CloakDomainPathsController.php",
    "groupTitle": "CloakDomainPath",
    "name": "GetCloak_domain_pathsGetlist"
  },
  {
    "type": "POST",
    "url": "/cloak_domain_paths.create",
    "title": "cloak_domain_paths.create",
    "group": "CloakDomainPath",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flow_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Unique path per domain.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cloak_system_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_cache_result",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifiers",
            "description": "<p>Campaign ids, each with a new line. <br>Required if <code>status=moneypage_for</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "safepage",
              "moneypage",
              "moneypage_for"
            ],
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "data1",
              "data2",
              "data3",
              "data4"
            ],
            "optional": true,
            "field": "data_parameter",
            "description": "<p>Required if <code>status=moneypage_for</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/cloak_domain_paths.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CloakDomainPathsController.php",
    "groupTitle": "CloakDomainPath",
    "name": "PostCloak_domain_pathsCreate"
  },
  {
    "type": "POST",
    "url": "/cloak_domain_paths.edit",
    "title": "cloak_domain_paths.edit",
    "group": "CloakDomainPath",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flow_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Unique path per domain.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cloak_system_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_cache_result",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifiers",
            "description": "<p>Campaign ids, each with a new line. <br>Required if <code>status=moneypage_for</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "safepage",
              "moneypage",
              "moneypage_for"
            ],
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "data1",
              "data2",
              "data3",
              "data4"
            ],
            "optional": true,
            "field": "data_parameter",
            "description": "<p>Required if <code>status=moneypage_for</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/cloak_domain_paths.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CloakDomainPathsController.php",
    "groupTitle": "CloakDomainPath",
    "name": "PostCloak_domain_pathsEdit"
  },
  {
    "type": "GET",
    "url": "/country.getById",
    "title": "country.getById",
    "group": "Country",
    "permission": [
      {
        "name": "authorized",
        "title": "All authorized users",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "country_id",
            "optional": false,
            "field": "page",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/country.getById"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CountryController.php",
    "groupTitle": "Country",
    "name": "GetCountryGetbyid"
  },
  {
    "type": "GET",
    "url": "/country.getList",
    "title": "country.getList",
    "group": "Country",
    "permission": [
      {
        "name": "authorized",
        "title": "All authorized users",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "offers_quantity"
            ],
            "optional": false,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1"
            ],
            "optional": false,
            "field": "only_my",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/country.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CountryController.php",
    "groupTitle": "Country",
    "name": "GetCountryGetlist"
  },
  {
    "type": "GET",
    "url": "/country.getListForOfferFilter",
    "title": "country.getListForOfferFilter",
    "group": "Country",
    "permission": [
      {
        "name": "authorized",
        "title": "All authorized users",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/country.getListForOfferFilter"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CountryController.php",
    "groupTitle": "Country",
    "name": "GetCountryGetlistforofferfilter"
  },
  {
    "type": "GET",
    "url": "/deposit.getList",
    "title": "deposit.getList",
    "group": "Deposit",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "advertiser",
              "advertiser.profile",
              "admin"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "advertiser_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_from",
            "description": "<p>Format: Y-m-d. Default: -7 days</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_to",
            "description": "<p>Format: Y-m-d. Default: today</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_ids[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/deposit.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DepositController.php",
    "groupTitle": "Deposit",
    "name": "GetDepositGetlist"
  },
  {
    "type": "GET",
    "url": "/offer.getCountByLabels",
    "title": "offer.getCountByLabels",
    "group": "Deposit",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nember[]",
            "optional": false,
            "field": "labels[]",
            "description": "<p>Id's of labels</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/offer.getCountByLabels"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferController.php",
    "groupTitle": "Deposit",
    "name": "GetOfferGetcountbylabels"
  },
  {
    "type": "POST",
    "url": "/deposit.create",
    "title": "deposit.create",
    "group": "Deposit",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advertiser_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Deposit and balance's transaction description</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "allowedValues": [
              "advertiser",
              "advertiser.profile",
              "admin"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Deposit and balance's transaction creation date in Y-m-d H:i:s format</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "invoice",
            "description": "<p>Invoice file</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "contract",
            "description": "<p>Contract file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "cash",
              "swift",
              "epayments",
              "webmoney",
              "paxum",
              "privat24",
              "bitcoin",
              "other"
            ],
            "optional": false,
            "field": "replenishment_method",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/deposit.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DepositController.php",
    "groupTitle": "Deposit",
    "name": "PostDepositCreate"
  },
  {
    "type": "POST",
    "url": "/deposit.edit",
    "title": "deposit.edit",
    "group": "Deposit",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Deposit and balance's transaction description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "advertiser",
              "advertiser.profile",
              "admin"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Format: Y-m-d H:i:s</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "cash",
              "swift",
              "epayments",
              "webmoney",
              "paxum",
              "privat24",
              "bitcoin",
              "other"
            ],
            "optional": false,
            "field": "replenishment_method",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/deposit.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DepositController.php",
    "groupTitle": "Deposit",
    "name": "PostDepositEdit"
  },
  {
    "type": "GET",
    "url": "/stat.getDeviceReport",
    "title": "stat.getDeviceReport",
    "group": "DeviceStat",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_to",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_geo_country_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flow_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_field",
            "description": "<p><code>datetime, offer, offer_country(Choco Lite, Румыния),country, device_type, os_platform, browser, landing, transit, data1, data2, data3, data4</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": false,
            "field": "sorting",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<code> title, total_count, real_approve, approve, approved_count, held_count, cancelled_count, trashed_count, cr, cr_unique, epc, epc_unique expected_approve, bot_count, safepage_count, flow_hosts, hits, traffback_count, held_payout </code><br>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_field",
            "description": "<p>Cannot be the same as <code>group_field</code> Publisher allowed values: <code>datetime, offer,offer_country, country, device_type, os_platform, browser, landing, transit, data1, data2, data3, data4</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_parent_field",
            "description": "<p>Cannot be the same as <code>group_field</code> and <code>parent_value</code> Publisher allowed values: <code>datetime, offer, offer_country, country, device_type, os_platform, browser, landing, transit, data1, data2, data3, data4</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_parent_value",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/stat.getDeviceReport"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/StatisticController.php",
    "groupTitle": "DeviceStat",
    "name": "GetStatGetdevicereport"
  },
  {
    "type": "GET",
    "url": "/domain.getByHash",
    "title": "domain.getByHash",
    "group": "Domain",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "paths"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain.getByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "GetDomainGetbyhash"
  },
  {
    "type": "GET",
    "url": "/domain.getList",
    "title": "domain.getList",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "flow_hash",
            "description": "<p>Get domains assigned to this flow.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "with_public",
            "description": "<p>If set <code>with_public=0</code> - returns only domains for specified <code>flow_hash</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "entity",
              "entity.offer",
              "entity.locale",
              "flow",
              "paths",
              "replacements"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "tds",
              "landing",
              "transit",
              "flow",
              "redirect"
            ],
            "optional": true,
            "field": "entity_types[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "GetDomainGetlist"
  },
  {
    "type": "GET",
    "url": "/domain.getRedirectDomain",
    "title": "domain.getRedirectDomain",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/domain.getRedirectDomain"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "GetDomainGetredirectdomain"
  },
  {
    "type": "POST",
    "url": "/domain.activate",
    "title": "domain.activate",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain.activate"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "PostDomainActivate"
  },
  {
    "type": "POST",
    "url": "/domain.clearCache",
    "title": "domain.clearCache",
    "group": "Domain",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain.clearCache"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "PostDomainClearcache"
  },
  {
    "type": "POST",
    "url": "/domain.create",
    "title": "domain.create",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Admin allowed values: <code>custom,system</code><br> Publisher allowed values: <code>parked</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entity_type",
            "description": "<p>Admin allowed values: <code>tds,redirect,landing,transit</code><br> Publisher allowed values: <code>flow</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "donor_url",
            "description": "<p>For parked domains that uses new cloaking</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_public",
            "defaultValue": "1",
            "description": "<p>For parked domains it shows that domain can use for all flows</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fallback_flow_hash",
            "description": "<p>Required if donor_url is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "entity_hash",
            "description": "<p>Required for custom type. Landing or transit hash.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_active",
            "defaultValue": "1",
            "description": "<p>Only for system type</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "PostDomainCreate"
  },
  {
    "type": "POST",
    "url": "/domain.deactivate",
    "title": "domain.deactivate",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of not last redirect or tds domain.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain.deactivate"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "PostDomainDeactivate"
  },
  {
    "type": "POST",
    "url": "/domain.delete",
    "title": "deposit.delete",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/deposit.delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "PostDomainDelete"
  },
  {
    "type": "POST",
    "url": "/domain.edit",
    "title": "deposit.edit",
    "group": "Domain",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Admin allowed values: <code>custom,system</code><br> Publisher allowed values: <code>parked</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entity_type",
            "description": "<p>Admin allowed values: <code>tds,redirect,landing,transit</code><br> Publisher allowed values: <code>flow</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "donor_url",
            "description": "<p>For parked domains that uses new cloaking</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_public",
            "description": "<p>1 = Available for all flows</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fallback_flow_hash",
            "description": "<p>Required if donor_url is empty</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "entity_hash",
            "description": "<p>Required for custom type. Landing or transit hash.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/deposit.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainController.php",
    "groupTitle": "Domain",
    "name": "PostDomainEdit"
  },
  {
    "type": "GET",
    "url": "/domain_replacements.getList",
    "title": "domain_replacements.getList",
    "group": "DomainReplacement",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/domain_replacements.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainReplacementController.php",
    "groupTitle": "DomainReplacement",
    "name": "GetDomain_replacementsGetlist"
  },
  {
    "type": "POST",
    "url": "/domain_replacements.sync",
    "title": "domain_replacements.sync",
    "group": "DomainReplacement",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"domain_hash\": \"vW0vR01w\", \"replacements\": [\n {\"from\": \"text to replace\", \"to\": \"replacement text\"}, {\"from\": \"text1 to replace\", \"to\": \"replacement text1\"}\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DomainReplacementController.php",
    "groupTitle": "DomainReplacement",
    "name": "PostDomain_replacementsSync"
  },
  {
    "type": "GET",
    "url": "/flow_flow_widget.getCustomCodeList",
    "title": "flow_flow_widget.getCustomCodeList",
    "group": "FlowFlowWidget",
    "permission": [
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/flow_flow_widget.getCustomCodeList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowFlowWidgetController.php",
    "groupTitle": "FlowFlowWidget",
    "name": "GetFlow_flow_widgetGetcustomcodelist"
  },
  {
    "type": "POST",
    "url": "/flow_flow_widget.moderate",
    "title": "flow_flow_widget.moderate",
    "group": "FlowFlowWidget",
    "permission": [
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/flow_flow_widget.moderate"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowFlowWidgetController.php",
    "groupTitle": "FlowFlowWidget",
    "name": "PostFlow_flow_widgetModerate"
  },
  {
    "type": "POST",
    "url": "/flow.create",
    "title": "flow.create",
    "group": "Flow",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/flow.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowController.php",
    "groupTitle": "Flow",
    "name": "PostFlowCreate"
  },
  {
    "type": "POST",
    "url": "/flow.createVirtual",
    "title": "flow.createVirtual",
    "group": "Flow",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landing_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transit_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/flow.createVirtual"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowController.php",
    "groupTitle": "Flow",
    "name": "PostFlowCreatevirtual"
  },
  {
    "type": "POST",
    "url": "/flow.delete",
    "title": "flow.delete",
    "group": "Flow",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flow_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/flow.delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowController.php",
    "groupTitle": "Flow",
    "name": "PostFlowDelete"
  },
  {
    "type": "POST",
    "url": "/flow.edit",
    "title": "flow.edit",
    "group": "Flow",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "landings",
            "description": "<p>Array of landing hashes</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "transits",
            "description": "<p>Array of transit hashes</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_detect_bot",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_hide_target_list",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_noback",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_show_requisite",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_remember_landing",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_remember_transit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extra_flow_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tb_url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100000",
            "optional": true,
            "field": "back_action_sec",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100000",
            "optional": true,
            "field": "back_call_btn_sec",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100000",
            "optional": true,
            "field": "back_call_form_sec",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100000",
            "optional": true,
            "field": "vibrate_on_mobile_sec",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/flow.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowController.php",
    "groupTitle": "Flow",
    "name": "PostFlowEdit"
  },
  {
    "type": "POST",
    "url": "/flow.editVirtual",
    "title": "flow.editVirtual",
    "group": "Flow",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flow_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landing_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transit_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/flow.editVirtual"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/FlowController.php",
    "groupTitle": "Flow",
    "name": "PostFlowEditvirtual"
  },
  {
    "type": "GET",
    "url": "/stat.getByGeo",
    "title": "stat.getByGeo",
    "group": "HourlyStat",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "country_id",
              "target_geo_country_id"
            ],
            "optional": false,
            "field": "group_by",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_from",
            "defaultValue": "today",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_to",
            "defaultValue": "today",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "flow_hashes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "landing_hashes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "transit_hashes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "country_ids",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "publisher_hashes",
            "description": "<p>Only for admin user role</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "country",
              "target_geo_country"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/stat.getByGeo"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/StatisticController.php",
    "groupTitle": "HourlyStat",
    "name": "GetStatGetbygeo"
  },
  {
    "type": "GET",
    "url": "/stat.getByLead",
    "title": "stat.getByLead",
    "group": "HourlyStat",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advetiser"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_id",
            "description": "<p>Filter by currency for publisher and admin roles</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_ids[]",
            "description": "<p>Filter by currency for advertiser role</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "01...23"
            ],
            "optional": true,
            "field": "hour",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "flow_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "offer_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "publisher_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "publisher_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "advertiser_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "landing_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "transit_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "Desctop=>1",
              "MobilePhone=>2",
              "Tablet=>3"
            ],
            "optional": true,
            "field": "device_type_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "os_platform_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "browser_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "new",
              "approved",
              "cancelled",
              "trashed"
            ],
            "optional": true,
            "field": "lead_statuses",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "target_geo_country_ids",
            "description": "<p>Filter by target geo country</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "country_ids",
            "description": "<p>Filter by visitor country</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "region_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "city_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date_from",
            "defaultValue": "7 days ago",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date_to",
            "defaultValue": "today",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "created_at",
              "processed_at"
            ],
            "optional": true,
            "field": "group_by",
            "description": "<p>Date filter column for advertiser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "created_at",
              "processed_at"
            ],
            "optional": true,
            "field": "date_filter_column",
            "defaultValue": "created_at",
            "description": "<p>Date filter column for admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "created_at",
              "initialized_at",
              "processed_at"
            ],
            "optional": true,
            "field": "sort_by",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "sorting",
            "description": "<p>Required if sort_by is set</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search_field",
            "description": "<p>Advertiser allowed values: <code>publisher_hash,flow_hash,phone,hash</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Value of search_field column Admin allowed values: <code>id,hash,phone,name</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/stat.getByLead"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/StatisticController.php",
    "groupTitle": "HourlyStat",
    "name": "GetStatGetbylead"
  },
  {
    "type": "GET",
    "url": "/stat.getReport",
    "title": "stat.getReport",
    "group": "HourlyStat",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_to",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_geo_country_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flow_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_field",
            "description": "<p><code>datetime, hour, week_day, offer, flow, landing, transit, device_type, os_platform, browser, offer_country, country, target_geo_country, region, city, data1, data2, data3, data4</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": false,
            "field": "sorting",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<code> title,total_count,approve,real_approve,approved_count,held_count,cancelled_count,trashed_count,cr, cr_unique, epc, epc_unique expected_approve,bot_count, safepage_count, flow_hosts, hits, traffback_count, held_payout </code><br>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_field",
            "description": "<p>Cannot be the same as <code>group_field</code> Publisher allowed values: <code>datetime, hour, week_day, offer, flow, landing, transit, device_type, os_platform, browser, offer_country, country, target_geo_country, region, city, data1, data2, data3, data</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_parent_field",
            "description": "<p>Cannot be the same as <code>group_field</code> and <code>parent_value</code> Publisher allowed values: <code>datetime, hour, week_day, offer, flow, landing, transit, device_type, os_platform, browser, offer_country, country, target_geo_country, region, city, data1, data2, data3, data</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_parent_value",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/stat.getReport"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/StatisticController.php",
    "groupTitle": "HourlyStat",
    "name": "GetStatGetreport"
  },
  {
    "type": "GET",
    "url": "/landing.getList",
    "title": "landing.getList",
    "group": "Landing",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "offers",
              "publishers",
              "locale",
              "target",
              "domains"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>String for search by title. To search by hash, search have to start with <code>hash:</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "hashes[]",
            "description": "<p>Get landings by this hashes</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hash"
            ],
            "optional": true,
            "field": "key_by",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/landing.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LandingController.php",
    "groupTitle": "Landing",
    "name": "GetLandingGetlist"
  },
  {
    "type": "POST",
    "url": "/landing.create",
    "title": "landing.create",
    "group": "Landing",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "locale_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_active",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_private",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_responsive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_advertiser_viewable",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_external",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_back_action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_back_call",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_vibrate_on_mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "thumb_path",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_address_on_success",
            "description": "<p>Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_email_on_success",
            "description": "<p>Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_custom_success",
            "description": "<p>Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "subdomain",
            "description": "<p>Unique for landings and transits. Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "realpath",
            "description": "<p>Path to landing files. Required if: <code>is_external=0</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/landing.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LandingController.php",
    "groupTitle": "Landing",
    "name": "PostLandingCreate"
  },
  {
    "type": "POST",
    "url": "/landing.edit",
    "title": "landing.edit",
    "group": "Landing",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "locale_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_active",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_private",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_responsive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_advertiser_viewable",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_external",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_back_action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_back_call",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_vibrate_on_mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "thumb_path",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_address_on_success",
            "description": "<p>Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_email_on_success",
            "description": "<p>Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_custom_success",
            "description": "<p>Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "subdomain",
            "description": "<p>Unique for landings and transits. Required if: <code>is_external=0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "realpath",
            "description": "<p>Path to landing files. Required if: <code>is_external=0</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/landing.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LandingController.php",
    "groupTitle": "Landing",
    "name": "PostLandingEdit"
  },
  {
    "type": "GET",
    "url": "/lead.buildReport",
    "title": "lead.buildReport",
    "group": "Lead",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_to",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_id",
            "description": "<p>Required for publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_field",
            "description": "<p>Admin allowed values: <code>created_at,processed_at,publisher_id,advertiser_id,offer_hash,country_id</code><br> Publisher allowed values: <code>created_at,processed_at,offer_hash,country_id</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": false,
            "field": "sorting",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Admin allowed values: <code>title,total_count,approved_count,held_count,cancelled_count,trashed_count, rub_approved_payout,rub_held_payout,rub_profit,usd_approved_payout,usd_held_payout,usd_profit, eur_approved_payout,eur_held_payout,eur_profit</code><br></p> <p>Publisher allowed values: <code>title,total_count,approved_count,held_count,cancelled_count,trashed_count, rub_approved_payout,rub_held_payout,usd_approved_payout,usd_held_payout,eur_approved_payout,eur_held_payout</code><br></p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_ids[]",
            "description": "<p>Only for admins</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_field",
            "description": "<p>Cannot be the same as <code>group_field</code> Admin allowed values: <code>created_at,processed_at,publisher_id,advertiser_id,offer_hash,country_id</code> Publisher allowed values: <code>created_at,processed_at,offer_hash,country_id</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_parent_field",
            "description": "<p>Cannot be the same as <code>group_field</code> and <code>parent_value</code> Admin allowed values: <code>created_at,processed_at,publisher_id,advertiser_id,offer_hash,country_id</code> Publisher allowed values: <code>created_at,processed_at,offer_hash,country_id</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_parent_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "target_geo_country_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "publisher_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": "<p>Only for admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "advertiser_hashes[]",
            "description": "<p>Only for admin.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/lead.buildReport"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LeadController.php",
    "groupTitle": "Lead",
    "name": "GetLeadBuildreport"
  },
  {
    "type": "GET",
    "url": "/lead.getByHash",
    "title": "lead.getByHash",
    "group": "Lead",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "with[]",
            "description": "<p>Admin allowed values: <code>postbackin_logs,status_log.integration,status_log</code><br> Publisher allowed values: <code>postbackin_logs,status_log,status_log</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/lead.getByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LeadController.php",
    "groupTitle": "Lead",
    "name": "GetLeadGetbyhash"
  },
  {
    "type": "GET",
    "url": "/lead.getListOnHold",
    "title": "lead.getListOnHold",
    "group": "Lead",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/lead.getListOnHold"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LeadController.php",
    "groupTitle": "Lead",
    "name": "GetLeadGetlistonhold"
  },
  {
    "type": "GET",
    "url": "/lead.getUncompleted",
    "title": "lead.getUncompleted",
    "group": "Lead",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advertiser_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/lead.getUncompleted"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LeadController.php",
    "groupTitle": "Lead",
    "name": "GetLeadGetuncompleted"
  },
  {
    "type": "POST",
    "url": "/lead.completeByIds",
    "title": "lead.completeByIds",
    "group": "Lead",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advertiser_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advertiser_currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "rate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "profit_at",
            "description": "<p>Format: Y-m-d</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/lead.completeByIds"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/LeadController.php",
    "groupTitle": "Lead",
    "name": "PostLeadCompletebyids"
  },
  {
    "type": "POST",
    "url": "/manager.changeProfile",
    "title": "manager.changeProfile",
    "group": "Manager",
    "permission": [
      {
        "name": "manager",
        "title": "Requests from manager subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "user_id",
            "description": "<p>manager ID. Required for admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "skype",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "telegram",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "phone",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/manager.changeProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ManagerController.php",
    "groupTitle": "Manager",
    "name": "PostManagerChangeprofile"
  },
  {
    "type": "POST",
    "url": "/manager.create",
    "title": "manager.create",
    "group": "Manager",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique email for user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/manager.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ManagerController.php",
    "groupTitle": "Manager",
    "name": "PostManagerCreate"
  },
  {
    "type": "DELETE",
    "url": "/news.delete",
    "title": "news.delete",
    "group": "News",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/news.delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/NewsController.php",
    "groupTitle": "News",
    "name": "DeleteNewsDelete"
  },
  {
    "type": "GET",
    "url": "/news.getByHash",
    "title": "news.getByHash",
    "group": "News",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "offer"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/news.getByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/NewsController.php",
    "groupTitle": "News",
    "name": "GetNewsGetbyhash"
  },
  {
    "type": "GET",
    "url": "/news.getList",
    "title": "news.getList",
    "group": "News",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_from",
            "defaultValue": "7 days ago",
            "description": "<p>Format: <code>Y-m-d</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_to",
            "defaultValue": "today",
            "description": "<p>Format: <code>Y-m-d</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": "<p>To get news without offer send offer_hashes[]=0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100",
            "optional": true,
            "field": "per_page",
            "defaultValue": "25",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "only_my",
            "description": "<p>0-all news;<br> 1-show news which belongs to offers which have created flows by publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "offer"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/news.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/NewsController.php",
    "groupTitle": "News",
    "name": "GetNewsGetlist"
  },
  {
    "type": "POST",
    "url": "/news.create",
    "title": "news.create",
    "group": "News",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "published_at",
            "description": "<p>Format:<code>Y-m-d H:i:s</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "offer_edited",
              "offer_stopped",
              "offer_created",
              "promo_created",
              "system",
              "stock"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/news.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/NewsController.php",
    "groupTitle": "News",
    "name": "PostNewsCreate"
  },
  {
    "type": "POST",
    "url": "/news.edit",
    "title": "news.edit",
    "group": "News",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "published_at",
            "description": "<p>Format:<code>Y-m-d H:i:s</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "offer_edited",
              "offer_stopped",
              "offer_created",
              "promo_created",
              "system",
              "stock"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/news.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/NewsController.php",
    "groupTitle": "News",
    "name": "PostNewsEdit"
  },
  {
    "type": "POST",
    "url": "/news.read",
    "title": "news.read",
    "group": "News",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/news.read"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/NewsController.php",
    "groupTitle": "News",
    "name": "PostNewsRead"
  },
  {
    "type": "GET",
    "url": "/offer_labels.getList",
    "title": "offer_labels.getList",
    "group": "OfferLabel",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "offers_count"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/offer_labels.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferLabelController.php",
    "groupTitle": "OfferLabel",
    "name": "GetOffer_labelsGetlist"
  },
  {
    "type": "POST",
    "url": "/offer.create",
    "title": "offer.create",
    "group": "Offer",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "translations[]",
            "description": "<p>title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "agreement",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "thumb_path",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_private",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"title\":\"Chocolite\",\"url\":\"http://google.com\",\"type\":\"CPA\",\"agreement\":\"Правила\",\n\"description\":\"Описание\",\"is_private\":1,\n\"thumb_path\":\"/var/www/backend.affninja/storage/app/temp/zMp1GpT5KZ1dGU6x.png\",\n\"translations\":[{\"locale_id\":2,\"title\":\"Chocolite EN\",\"description\":\"Описание EN\",\"agreement\":\"Правила EN\"}]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferController.php",
    "groupTitle": "Offer",
    "name": "PostOfferCreate"
  },
  {
    "type": "POST",
    "url": "/offer.edit",
    "title": "offer.edit",
    "group": "Offer",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "title_en",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "agreement",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "agreement_en",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": false,
            "field": "description_en",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "thumb_path",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "inactive",
              "active",
              "archived"
            ],
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_private",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_active",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/offer.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferController.php",
    "groupTitle": "Offer",
    "name": "PostOfferEdit"
  },
  {
    "type": "POST",
    "url": "/offer.syncLabels",
    "title": "offer.syncLabels",
    "group": "Offer",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"id\":\"1\",\"labels\":[{\"label_id\":\"1\",\"available_at\":\"\"},{\"label_id\":\"2\",\"available_at\":\"2018-01-01 12:00:12\"}]}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/offer.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferController.php",
    "groupTitle": "Offer",
    "name": "PostOfferSynclabels"
  },
  {
    "type": "POST",
    "url": "/offer.syncPublishers",
    "title": "offer.syncPublishers",
    "description": "<p>Set permissions by user groups. To forbid access for all publishers, do not send publishers[] param.</p>",
    "group": "Offer",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "publishers",
            "description": "<p>[]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"offer_id\": 1, \"publishers\": [\n {\"publisher_id\": 1}, {\"publisher_id\": 2}\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferController.php",
    "groupTitle": "Offer",
    "name": "PostOfferSyncpublishers"
  },
  {
    "type": "POST",
    "url": "/offer.syncUserGroups",
    "title": "offer.syncUserGroups",
    "description": "<p>Set permissions by user groups. To forbid access for all groups, do not send user_groups[] param.</p>",
    "group": "Offer",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "user_groups",
            "description": "<p>[]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"offer_id\": 1, \"user_groups\": [\n {\"user_group_id\": 1}, {\"user_group_id\": 2}\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OfferController.php",
    "groupTitle": "Offer",
    "name": "PostOfferSyncusergroups"
  },
  {
    "type": "GET",
    "url": "/os_platform.getList",
    "title": "os_platform.getList",
    "group": "OsPlatform",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "ids[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/os_platform.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/OsPlatformController.php",
    "groupTitle": "OsPlatform",
    "name": "GetOs_platformGetlist"
  },
  {
    "type": "GET",
    "url": "/payment.getList",
    "title": "payment.getList",
    "group": "Payment",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "processed_user",
              "paid_user",
              "user.publisher"
            ],
            "optional": true,
            "field": "with[]",
            "description": "<p>For admins</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "publisher_hashes[]",
            "description": "<p>For admins</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..200",
            "optional": true,
            "field": "per_page",
            "defaultValue": "50",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_ids[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "pending",
              "cancelled",
              "accepted",
              "paid"
            ],
            "optional": true,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "webmoney",
              "epayments",
              "paxum"
            ],
            "optional": true,
            "field": "payment_systems[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/payment.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payment",
    "name": "GetPaymentGetlist"
  },
  {
    "type": "POST",
    "url": "/payment.accept",
    "title": "payment.accept",
    "group": "Payment",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[..255]",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/payment.accept"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payment",
    "name": "PostPaymentAccept"
  },
  {
    "type": "POST",
    "url": "/payment.cancel",
    "title": "payment.cancel",
    "group": "Payment",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[..255]",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/payment.cancel"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payment",
    "name": "PostPaymentCancel"
  },
  {
    "type": "POST",
    "url": "/payment.create",
    "title": "payment.create",
    "group": "Payment",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment_system_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requisite_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "payout",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "publisher_id",
            "description": "<p>Required for admins.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "processed_user",
              "paid_user",
              "user.publisher"
            ],
            "optional": true,
            "field": "with[]",
            "description": "<p>For admins</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/payment.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payment",
    "name": "PostPaymentCreate"
  },
  {
    "type": "POST",
    "url": "/payment.pay",
    "title": "payment.pay",
    "group": "Payment",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/payment.pay"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payment",
    "name": "PostPaymentPay"
  },
  {
    "type": "GET",
    "url": "/payment_requisites.getListForPayment",
    "title": "payment_requisites.getListForPayment",
    "group": "PaymentSystem",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "publisher_id",
            "description": "<p>Required for admins.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": false,
            "field": "currency_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/payment_requisites.getListForPayment"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PaymentRequisitesController.php",
    "groupTitle": "PaymentSystem",
    "name": "GetPayment_requisitesGetlistforpayment"
  },
  {
    "type": "GET",
    "url": "/publisher.getList",
    "title": "publisher.getList",
    "group": "Publisher",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "id",
              "hash",
              "email",
              "phone",
              "skype",
              "telegram",
              "balance",
              "hold"
            ],
            "optional": true,
            "field": "search_field",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Numeric[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_id",
            "description": "<p>Required if search_field is <code>balance</code> or <code>hold</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric[]",
            "allowedValues": [
              "less",
              "more"
            ],
            "optional": true,
            "field": "constraint",
            "description": "<p>Required if search_field is <code>balance</code> or <code>hold</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "profile",
              "group"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "hashes[]",
            "description": "<p>Get publishers by these hashes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "email",
              "created_at",
              "balance_rub",
              "balance_usd",
              "balance_eur"
            ],
            "optional": true,
            "field": "sort_by",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "sorting",
            "description": "<p>Required if sort_by is set</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "group_ids",
            "description": "<p>Find publishers by these group ids.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "locked",
              "active"
            ],
            "optional": true,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "50",
            "description": "<p>Max: <code>200</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/publisher.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PublisherController.php",
    "groupTitle": "Publisher",
    "name": "GetPublisherGetlist"
  },
  {
    "type": "GET",
    "url": "/publisher.getSummary",
    "title": "publisher.getSummary",
    "group": "Publisher",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "id",
              "hash",
              "email",
              "phone",
              "skype",
              "telegram",
              "balance",
              "hold"
            ],
            "optional": true,
            "field": "search_field",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Numeric[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "currency_id",
            "description": "<p>Required if search_field is <code>balance</code> or <code>hold</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric[]",
            "allowedValues": [
              "less",
              "more"
            ],
            "optional": true,
            "field": "constraint",
            "description": "<p>Required if search_field is <code>balance</code> or <code>hold</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "group_ids",
            "description": "<p>Find publishers by these group ids.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "locked",
              "active"
            ],
            "optional": true,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/publisher.getSummary"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PublisherController.php",
    "groupTitle": "Publisher",
    "name": "GetPublisherGetsummary"
  },
  {
    "type": "POST",
    "url": "/publisher.changeProfile",
    "title": "publisher.changeProfile",
    "group": "Publisher",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "skype",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "telegram",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "data",
              "utm"
            ],
            "optional": true,
            "field": "data_type",
            "description": "<p>Required for publisher.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_hash",
            "description": "<p>Publisher hash. Required for admin and support</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "support_id",
            "defaultValue": "0",
            "description": "<p>Editable only by admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "comment",
            "description": "<p>Editable only by admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "group_id",
            "defaultValue": "0",
            "description": "<p>ID of user group. Editable only by admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "Pacific/Kwajalein",
              "Pacific/Samoa",
              "America/Adak",
              "America/Anchorage",
              "America/Los_Angeles",
              "US/Mountain",
              "US/Central",
              "US/Eastern",
              "America/Argentina/Buenos_Aires",
              "America/Noronha",
              "America/La_Paz",
              "Atlantic/Cape_Verde",
              "Europe/London",
              "Europe/Madrid",
              "Europe/Kiev",
              "Europe/Moscow",
              "Asia/Tbilisi",
              "Asia/Yekaterinburg",
              "Asia/Almaty",
              "Asia/Bangkok",
              "Asia/Hong_Kong",
              "Asia/Tokyo",
              "Asia/Vladivostok",
              "Asia/Magadan",
              "Pacific/Auckland"
            ],
            "optional": false,
            "field": "timezone",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/publisher.changeProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/PublisherController.php",
    "groupTitle": "Publisher",
    "name": "PostPublisherChangeprofile"
  },
  {
    "type": "GET",
    "url": "/manager.getList",
    "title": "manager.getList",
    "group": "Support",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100",
            "optional": true,
            "field": "per_page",
            "defaultValue": "25",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "profile"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/manager.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ManagerController.php",
    "groupTitle": "Support",
    "name": "GetManagerGetlist"
  },
  {
    "type": "GET",
    "url": "/support.getList",
    "title": "support.getList",
    "group": "Support",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..100",
            "optional": true,
            "field": "per_page",
            "defaultValue": "25",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "profile"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/support.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/SupportController.php",
    "groupTitle": "Support",
    "name": "GetSupportGetlist"
  },
  {
    "type": "POST",
    "url": "/support.changeProfile",
    "title": "support.changeProfile",
    "group": "Support",
    "permission": [
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "user_id",
            "description": "<p>Support ID. Required for admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "skype",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "telegram",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "phone",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/support.changeProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/SupportController.php",
    "groupTitle": "Support",
    "name": "PostSupportChangeprofile"
  },
  {
    "type": "POST",
    "url": "/support.create",
    "title": "support.create",
    "group": "Support",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique email for user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/support.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/SupportController.php",
    "groupTitle": "Support",
    "name": "PostSupportCreate"
  },
  {
    "type": "GET",
    "url": "/target_geo.getById",
    "title": "target_geo.getById",
    "group": "TargetGeo",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target_geo.getById"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetGeoController.php",
    "groupTitle": "TargetGeo",
    "name": "GetTarget_geoGetbyid"
  },
  {
    "type": "POST",
    "url": "/target_geo_integrations.create",
    "title": "target_geo_integrations.create",
    "group": "TargetGeoIntegration",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advertiser_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_geo_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charge",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "api",
              "redirect"
            ],
            "optional": false,
            "field": "integration_type",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target_geo_integrations.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetGeoIntegrationController.php",
    "groupTitle": "TargetGeoIntegration",
    "name": "PostTarget_geo_integrationsCreate"
  },
  {
    "type": "POST",
    "url": "/target_geo_integrations.edit",
    "title": "target_geo_integrations.edit",
    "group": "TargetGeoIntegration",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advertiser_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currency_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charge",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "api",
              "redirect"
            ],
            "optional": false,
            "field": "integration_type",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target_geo_integrations.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetGeoIntegrationController.php",
    "groupTitle": "TargetGeoIntegration",
    "name": "PostTarget_geo_integrationsEdit"
  },
  {
    "type": "GET",
    "url": "/target.delete",
    "title": "target.delete",
    "group": "Target",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target.delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetController.php",
    "groupTitle": "Target",
    "name": "GetTargetDelete"
  },
  {
    "type": "GET",
    "url": "/target.getList",
    "title": "target.getList",
    "group": "Target",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetController.php",
    "groupTitle": "Target",
    "name": "GetTargetGetlist"
  },
  {
    "type": "POST",
    "url": "/target.create",
    "title": "target.create",
    "group": "Target",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "label",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "CPA",
              "CPL"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_template_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "locale_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_active",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_default",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_private",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_autoapprove",
            "defaultValue": "0",
            "description": "<p>May be set to <code>1</code> only if <code>type=CPL</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "external",
              "internal"
            ],
            "optional": false,
            "field": "landing_type",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetController.php",
    "groupTitle": "Target",
    "name": "PostTargetCreate"
  },
  {
    "type": "POST",
    "url": "/target.edit",
    "title": "target.edit",
    "group": "Target",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "label",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "CPA",
              "CPL"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_template_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "locale_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_active",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_default",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_private",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_autoapprove",
            "defaultValue": "0",
            "description": "<p>May be set to <code>1</code> only if <code>type=CPL</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetController.php",
    "groupTitle": "Target",
    "name": "PostTargetEdit"
  },
  {
    "type": "POST",
    "url": "/target.syncPublishers",
    "title": "target.syncPublishers",
    "description": "<p>Set permissions by user groups. To forbid access for all publishers, do not send publishers[] param.</p>",
    "group": "Target",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "publishers",
            "description": "<p>[]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"target_id\": 1, \"publishers\": [\n {\"publisher_id\": 1}, {\"publisher_id\": 2}\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetController.php",
    "groupTitle": "Target",
    "name": "PostTargetSyncpublishers"
  },
  {
    "type": "POST",
    "url": "/target.syncUserGroups",
    "title": "target.syncUserGroups",
    "description": "<p>Set permissions by user groups. To forbid access for all groups, do not send user_groups[] param.</p>",
    "group": "Target",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "user_groups",
            "description": "<p>[]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"target_id\": 1, \"user_groups\": [\n {\"user_group_id\": 1}, {\"user_group_id\": 2}\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetController.php",
    "groupTitle": "Target",
    "name": "PostTargetSyncusergroups"
  },
  {
    "type": "GET",
    "url": "/target_template.getList",
    "title": "target_template.getList",
    "group": "TargetTemplate",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "translations"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target_template.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetTemplateController.php",
    "groupTitle": "TargetTemplate",
    "name": "GetTarget_templateGetlist"
  },
  {
    "type": "POST",
    "url": "/target_template.create",
    "title": "target_template.create",
    "group": "TargetTemplate",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target_template.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetTemplateController.php",
    "groupTitle": "TargetTemplate",
    "name": "PostTarget_templateCreate"
  },
  {
    "type": "POST",
    "url": "/target_template.edit",
    "title": "target_template.edit",
    "group": "TargetTemplate",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/target_template.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TargetTemplateController.php",
    "groupTitle": "TargetTemplate",
    "name": "PostTarget_templateEdit"
  },
  {
    "type": "GET",
    "url": "/ticket.getByHash",
    "title": "ticket.getByHash",
    "group": "Ticket",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "user",
              "messages.user",
              "messages.user.profile",
              "messages.user.group"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.getByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "GetTicketGetbyhash"
  },
  {
    "type": "GET",
    "url": "/ticket.getList",
    "title": "ticket.getList",
    "group": "Ticket",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "with[]",
            "description": "<p>Admin allowed values: <code>user.group,last_message_user.profile,responsible_user</code><br> Other allowed values: <code>last_message_user.profile</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "GetTicketGetlist"
  },
  {
    "type": "POST",
    "url": "/ticket.close",
    "title": "ticket.close",
    "group": "Ticket",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.close"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "PostTicketClose"
  },
  {
    "type": "POST",
    "url": "/ticket.create",
    "title": "ticket.create",
    "group": "Ticket",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_message",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "with[]",
            "description": "<p>Publisher allowed values: <code>last_message_user.profile</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "PostTicketCreate"
  },
  {
    "type": "POST",
    "url": "/ticket.defer",
    "title": "ticket.defer",
    "group": "Ticket",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "responsible_user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deferred_until_at",
            "description": "<p>Date in format <code>Y-m-d H:i:s</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.defer"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "PostTicketDefer"
  },
  {
    "type": "POST",
    "url": "/ticket.markAsRead",
    "title": "ticket.markAsRead",
    "group": "Ticket",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.markAsRead"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "PostTicketMarkasread"
  },
  {
    "type": "POST",
    "url": "/ticket.open",
    "title": "ticket.open",
    "group": "Ticket",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket.open"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketController.php",
    "groupTitle": "Ticket",
    "name": "PostTicketOpen"
  },
  {
    "type": "POST",
    "url": "/ticket_messages.create",
    "title": "ticket_messages.create",
    "group": "Ticket",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticket_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "user.profile"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ticket_messages.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TicketMessageController.php",
    "groupTitle": "Ticket",
    "name": "PostTicket_messagesCreate"
  },
  {
    "type": "GET",
    "url": "/transit.getList",
    "title": "transit.getList",
    "group": "Transit",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "offers",
              "publishers",
              "locale",
              "target",
              "domains"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>String for search by title. To search by hash, search have to start with <code>hash:</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "hashes[]",
            "description": "<p>Get transits by this hashes</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "offer_hashes[]",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hash"
            ],
            "optional": true,
            "field": "key_by",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/transit.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TransitController.php",
    "groupTitle": "Transit",
    "name": "GetTransitGetlist"
  },
  {
    "type": "GET",
    "url": "/advertiser.getByHash",
    "title": "advertiser.getByHash",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/advertiser.getByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdvertisersController.php",
    "groupTitle": "User",
    "name": "GetAdvertiserGetbyhash"
  },
  {
    "type": "GET",
    "url": "/user.getBalance",
    "title": "user.getBalance",
    "group": "User",
    "permission": [
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/user.getBalance"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "GetUserGetbalance"
  },
  {
    "type": "GET",
    "url": "/user.getByHash",
    "title": "user.getByHash",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.getByHash"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "GetUserGetbyhash"
  },
  {
    "type": "GET",
    "url": "/user.getList",
    "title": "user.getList",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "administrator",
              "advertiser",
              "publisher",
              "suport"
            ],
            "optional": true,
            "field": "role[]",
            "description": "<p>Get users by specicified roles.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "hashes[]",
            "description": "<p>Get users by these hashes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "search",
            "description": "<p>Search string. Uses for search by email.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "..50",
            "optional": true,
            "field": "per_page",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "GetUserGetlist"
  },
  {
    "type": "GET",
    "url": "/user.getStatisticSettings",
    "title": "user.getStatisticSettings",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "sampleRequest": [
      {
        "url": "/user.getStatisticSettings"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "GetUserGetstatisticsettings"
  },
  {
    "type": "DELETE",
    "url": "/user_groups.delete",
    "title": "user_groups.delete",
    "group": "UserGroup",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user group to delete.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_groups.delete"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupsController.php",
    "groupTitle": "UserGroup",
    "name": "DeleteUser_groupsDelete"
  },
  {
    "type": "GET",
    "url": "/user_groups.getById",
    "title": "user_groups.getById",
    "group": "UserGroup",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "users"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_groups.getById"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupsController.php",
    "groupTitle": "UserGroup",
    "name": "GetUser_groupsGetbyid"
  },
  {
    "type": "GET",
    "url": "/user_groups.getList",
    "title": "user_groups.getList",
    "group": "UserGroup",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "users"
            ],
            "optional": true,
            "field": "with[]",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_groups.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupsController.php",
    "groupTitle": "UserGroup",
    "name": "GetUser_groupsGetlist"
  },
  {
    "type": "POST",
    "url": "/user_groups.create",
    "title": "user_groups.create",
    "group": "UserGroup",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>e.g.: fff, e3e3e3, f0000f</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric[]",
            "optional": true,
            "field": "users[]",
            "description": "<p>Users in groups</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_groups.create"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupsController.php",
    "groupTitle": "UserGroup",
    "name": "PostUser_groupsCreate"
  },
  {
    "type": "POST",
    "url": "/user_groups.edit",
    "title": "user_groups.edit",
    "group": "UserGroup",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user group to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>e.g.: fff, e3e3e3, f0000f</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric[]",
            "optional": true,
            "field": "users[]",
            "description": "<p>Users in groups</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_groups.edit"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupsController.php",
    "groupTitle": "UserGroup",
    "name": "PostUser_groupsEdit"
  },
  {
    "type": "GET",
    "url": "/user_group_target_geo.getList",
    "title": "user_group_target_geo.getList",
    "group": "UserGroupTargetGeo",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_geo_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_group_target_geo.getList"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupTargetGeoController.php",
    "groupTitle": "UserGroupTargetGeo",
    "name": "GetUser_group_target_geoGetlist"
  },
  {
    "type": "POST",
    "url": "/user_group_target_geo.sync",
    "title": "user_group_target_geo.sync",
    "group": "UserGroupTargetGeo",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_geo_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "stakes",
            "description": "<p>Must have only one item with <code>is_default=1</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"target_geo_id\": 1, \"stakes\": [\n {\"user_group_id\": 1, \"payout\": 18.00, \"currency_id\": 3, \"is_default\": 0}\n]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupTargetGeoController.php",
    "groupTitle": "UserGroupTargetGeo",
    "name": "PostUser_group_target_geoSync"
  },
  {
    "type": "GET",
    "url": "/user_user_permissions.getForUser",
    "title": "user_user_permissions.getForUser",
    "group": "UserPermission",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_hash",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_user_permissions.getForUser"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserUserPermissionsController.php",
    "groupTitle": "UserPermission",
    "name": "GetUser_user_permissionsGetforuser"
  },
  {
    "type": "POST",
    "url": "/user_user_permissions.sync",
    "title": "user_user_permissions.sync",
    "group": "UserPermission",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "support",
        "title": "Requests from support subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_hash",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions[]",
            "description": "<p>IDs of user permissions</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_user_permissions.sync"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserUserPermissionsController.php",
    "groupTitle": "UserPermission",
    "name": "PostUser_user_permissionsSync"
  },
  {
    "type": "POST",
    "url": "/administrator.changeProfile",
    "title": "administrator.changeProfile",
    "description": "<p>Change profile for administrator user role.</p>",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Present</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>Present</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telegram",
            "description": "<p>Present</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "Pacific/Kwajalein",
              "Pacific/Samoa",
              "America/Adak",
              "America/Anchorage",
              "America/Los_Angeles",
              "US/Mountain",
              "US/Central",
              "US/Eastern",
              "America/Argentina/Buenos_Aires",
              "America/Noronha",
              "America/La_Paz",
              "Atlantic/Cape_Verde",
              "Europe/London",
              "Europe/Madrid",
              "Europe/Kiev",
              "Europe/Moscow",
              "Asia/Tbilisi",
              "Asia/Yekaterinburg",
              "Asia/Almaty",
              "Asia/Bangkok",
              "Asia/Hong_Kong",
              "Asia/Tokyo",
              "Asia/Vladivostok",
              "Asia/Magadan",
              "Pacific/Auckland"
            ],
            "optional": false,
            "field": "timezone",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/administrator.changeProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AdministratorsController.php",
    "groupTitle": "User",
    "name": "PostAdministratorChangeprofile"
  },
  {
    "type": "POST",
    "url": "/user.block",
    "title": "user.block",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of user with <code>active</code> status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason_for_blocking",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.block"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserBlock"
  },
  {
    "type": "POST",
    "url": "/user.changePassword",
    "title": "user.changePassword",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..",
            "optional": false,
            "field": "new_password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..",
            "optional": false,
            "field": "new_password_confirmation",
            "description": "<p>Must be the same as <code>new_password</code> parameter</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.changePassword"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserChangepassword"
  },
  {
    "type": "POST",
    "url": "/user.createAdministrator",
    "title": "user.createAdministrator",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.createAdministrator"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserCreateadministrator"
  },
  {
    "type": "POST",
    "url": "/user.createAdvertiser",
    "title": "user.createAdvertiser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "manager_id",
            "description": "<p>Advertiser's manager ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "info",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "skype",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "telegram",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "whatsapp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "1",
              "3",
              "5"
            ],
            "optional": true,
            "field": "accounts",
            "description": "<p>Currency ids to create accounts.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.createAdvertiser"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserCreateadvertiser"
  },
  {
    "type": "POST",
    "url": "/user.createPublisher",
    "title": "user.createPublisher",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "group_id",
            "defaultValue": "0",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.createPublisher"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserCreatepublisher"
  },
  {
    "type": "POST",
    "url": "/user.regeneratePassword",
    "title": "user.regeneratePassword",
    "description": "<p>Regenerate password for publisher and support user role.</p>",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.regeneratePassword"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserRegeneratepassword"
  },
  {
    "type": "POST",
    "url": "/user.unlock",
    "title": "user.unlock",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of user with <code>locked</code> status</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.unlock"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserUnlock"
  },
  {
    "type": "POST",
    "url": "/user.updateStatisticSettings",
    "title": "user.updateStatisticSettings",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Requests from control subdomain",
        "description": ""
      },
      {
        "name": "advertiser",
        "title": "Requests from office subdomain",
        "description": ""
      },
      {
        "name": "publisher",
        "title": "Requests from my subdomain",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "mark_roi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "columns",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user.updateStatisticSettings"
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User",
    "name": "PostUserUpdatestatisticsettings"
  }
] });
