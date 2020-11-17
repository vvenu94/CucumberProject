$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Loginpage.feature");
formatter.feature({
  "name": "Verifying Adactin details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.step({
  "name": "User should enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User in search hotel page enter \"\u003clocation\u003e\",\"\u003chotel\u003e\",\"\u003croomType\u003e\",\"\u003cnoOfRooms\u003e\",\"\u003ccheckInDate\u003e\",\"\u003ccheckOutDate\u003e\",\"\u003cadulPerRoom\u003e\"and \"\u003cchildrenPerRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.step({
  "name": "User in book hotel page enter \"\u003cfirstName\u003e\",\"\u003clastName\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ]
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "location",
        "hotel",
        "roomType",
        "noOfRooms",
        "checkInDate",
        "checkOutDate",
        "adulPerRoom",
        "childrenPerRoom",
        "firstName",
        "lastName",
        "address"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Sydney",
        "Hotel Sunshine",
        "Standard",
        "1 - One",
        "16/10/2020",
        "17/10/2020",
        "4 - Four",
        "0 - None",
        "venu",
        "s",
        "fdghs"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "1 - One",
        "17/10/2020",
        "21/10/2020",
        "2 - Two",
        "0 - None",
        "raj",
        "d",
        "adayar"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Brisbane",
        "Hotel Hervey",
        "Deluxe",
        "1 - One",
        "20/10/2020",
        "25/10/2020",
        "3 - Three",
        "3 - Three",
        "anil",
        "c",
        "chrompet"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "New York",
        "Hotel Creek",
        "Super Deluxe",
        "1 - One",
        "18/10/2020",
        "19/10/2020",
        "2 - Two",
        "0 - None",
        "array",
        "s",
        "chennai"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "16/10/2020",
        "16/10/2020",
        "3 - Three",
        "4 - Four",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Sunshine",
        "Deluxe",
        "1 - One",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "4 - Four",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Brisbane",
        "Hotel Hervey",
        "Standard",
        "1 - One",
        "16/10/2020",
        "16/10/2020",
        "4 - Four",
        "3 - Three",
        "last",
        "l",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Cornice",
        "Double",
        "3 - Three",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "1 - One",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "New York",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "16/10/2020",
        "16/10/2020",
        "3 - Three",
        "0 - None",
        "sad",
        "i",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Hervey",
        "Standard",
        "2 - Two",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "1 - One",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "New York",
        "Hotel Hervey",
        "Deluxe",
        "3 - Three",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Brisbane",
        "Hotel Creek",
        "Super Deluxe",
        "4 - Four",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "3 - Three",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Hervey",
        "Standard",
        "5 - Five",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "last",
        "h",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Sunshine",
        "Standard",
        "6 - Six",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "sam",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Sydney",
        "Hotel Creek",
        "Double",
        "7 - Seven",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Creek",
        "Standard",
        "8 - Eight",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "1 - One",
        "last",
        "s",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Sunshine",
        "Standard",
        "9 - Nine",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "New York",
        "Hotel Creek",
        "Standard",
        "10 - Ten",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "rest",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Creek",
        "Double",
        "1 - One",
        "16/10/2020",
        "16/10/2020",
        "1 - One",
        "1 - One",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Creek",
        "Standard",
        "2 - Two",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "0 - None",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Sydney",
        "Hotel Hervey",
        "Double",
        "3 - Three",
        "16/10/2020",
        "16/10/2020",
        "3 - Three",
        "1 - One",
        "ramesh",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Creek",
        "Standard",
        "4 - Four",
        "16/10/2020",
        "16/10/2020",
        "4 - Four",
        "0 - None",
        "last",
        "h",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Hervey",
        "Deluxe",
        "5 - Five",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "1 - One",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "New York",
        "Hotel Creek",
        "Super Deluxe",
        "6 - Six",
        "16/10/2020",
        "16/10/2020",
        "3 - Three",
        "1 - One",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Sunshine",
        "Standard",
        "7 - Seven",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "2 - Two",
        "last",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "Paris",
        "Hotel Creek",
        "Deluxe",
        "8 - Eight",
        "16/10/2020",
        "16/10/2020",
        "2 - Two",
        "3 - Three",
        "west",
        "f",
        "paris"
      ]
    },
    {
      "cells": [
        "vvenu1994",
        "DRVU6C",
        "New York",
        "Hotel Sunshine",
        "Standard",
        "9 - Nine",
        "16/10/2020",
        "16/10/2020",
        "3 - Three",
        "4 - Four",
        "last",
        "f",
        "paris"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Sydney\",\"Hotel Sunshine\",\"Standard\",\"1 - One\",\"16/10/2020\",\"17/10/2020\",\"4 - Four\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"venu\",\"s\" and \"fdghs\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Melbourne\",\"Hotel Cornice\",\"Double\",\"1 - One\",\"17/10/2020\",\"21/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"raj\",\"d\" and \"adayar\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Brisbane\",\"Hotel Hervey\",\"Deluxe\",\"1 - One\",\"20/10/2020\",\"25/10/2020\",\"3 - Three\"and \"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"anil\",\"c\" and \"chrompet\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"New York\",\"Hotel Creek\",\"Super Deluxe\",\"1 - One\",\"18/10/2020\",\"19/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"array\",\"s\" and \"chennai\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Creek\",\"Standard\",\"1 - One\",\"16/10/2020\",\"16/10/2020\",\"3 - Three\"and \"4 - Four\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Sunshine\",\"Deluxe\",\"1 - One\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"4 - Four\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Brisbane\",\"Hotel Hervey\",\"Standard\",\"1 - One\",\"16/10/2020\",\"16/10/2020\",\"4 - Four\"and \"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"l\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Cornice\",\"Double\",\"3 - Three\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"New York\",\"Hotel Creek\",\"Standard\",\"1 - One\",\"16/10/2020\",\"16/10/2020\",\"3 - Three\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"sad\",\"i\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Hervey\",\"Standard\",\"2 - Two\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"New York\",\"Hotel Hervey\",\"Deluxe\",\"3 - Three\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Brisbane\",\"Hotel Creek\",\"Super Deluxe\",\"4 - Four\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Hervey\",\"Standard\",\"5 - Five\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"h\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Sunshine\",\"Standard\",\"6 - Six\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"sam\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Sydney\",\"Hotel Creek\",\"Double\",\"7 - Seven\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Creek\",\"Standard\",\"8 - Eight\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"s\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Sunshine\",\"Standard\",\"9 - Nine\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"New York\",\"Hotel Creek\",\"Standard\",\"10 - Ten\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"rest\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Creek\",\"Double\",\"1 - One\",\"16/10/2020\",\"16/10/2020\",\"1 - One\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Creek\",\"Standard\",\"2 - Two\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Sydney\",\"Hotel Hervey\",\"Double\",\"3 - Three\",\"16/10/2020\",\"16/10/2020\",\"3 - Three\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"ramesh\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Creek\",\"Standard\",\"4 - Four\",\"16/10/2020\",\"16/10/2020\",\"4 - Four\"and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"h\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Hervey\",\"Deluxe\",\"5 - Five\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"New York\",\"Hotel Creek\",\"Super Deluxe\",\"6 - Six\",\"16/10/2020\",\"16/10/2020\",\"3 - Three\"and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Sunshine\",\"Standard\",\"7 - Seven\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"2 - Two\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"Paris\",\"Hotel Creek\",\"Deluxe\",\"8 - Eight\",\"16/10/2020\",\"16/10/2020\",\"2 - Two\"and \"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"west\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating adactin booking module",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Adactin site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_Adactin_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"vvenu1994\" and \"DRVU6C\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in search hotel page enter \"New York\",\"Hotel Sunshine\",\"Standard\",\"9 - Nine\",\"16/10/2020\",\"16/10/2020\",\"3 - Three\"and \"4 - Four\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_search_hotel_page_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in select hotel page select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_select_hotel_page_select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in book hotel page enter \"last\",\"f\" and \"paris\"",
  "rows": [
    {
      "cells": [
        "ccNo",
        "ccType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "VISA",
        "March",
        "2021",
        "372"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Other",
        "January",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "0123456789987456",
        "Master Card",
        "March",
        "2021",
        "372"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_in_book_hotel_page_enter_and(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify url navigated to booking confirmation page and ordernumber generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated()"
});
formatter.result({
  "status": "passed"
});
});