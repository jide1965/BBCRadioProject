$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\myselenium\\app\\bbcradionav\\drawer\\radionavdrawers.feature");
formatter.feature({
  "line": 1,
  "name": "Radio Nav Drawers",
  "description": "AS A user\r\nI WANT to see more content associated with navigation links\r\nSo THAT I can easily find what I am looking for",
  "id": "radio-nav-drawers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Launching bbc radio website",
  "description": "",
  "id": "radio-nav-drawers;launching-bbc-radio-website;of-browser;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I go to \"bbcradio\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "bbcradio",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "RadioNavDrawerTest.I_go_to(String,String)"
});
formatter.result({
  "duration": 15019535623,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Opening and closing the drawers",
  "description": "",
  "id": "radio-nav-drawers;opening-and-closing-the-drawers;of-sections;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I select \"Stations\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the \"Stations\" drawer is \"open\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I select \"Stations\" in the radio nav \"again\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the \"Stations\" drawer is \"closed\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 256043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 1411050417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 5
    },
    {
      "val": "open",
      "offset": 26
    }
  ],
  "location": "RadioNavDrawerTest.Then_the_drawer(String,String)"
});
formatter.result({
  "duration": 421621141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 10
    },
    {
      "val": "again",
      "offset": 38
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav_again(String,String)"
});
formatter.result({
  "duration": 193380881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 5
    },
    {
      "val": "closed",
      "offset": 26
    }
  ],
  "location": "RadioNavDrawerTest.Then_the_drawer(String,String)"
});
formatter.result({
  "duration": 196974025,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Opening and closing the drawers",
  "description": "",
  "id": "radio-nav-drawers;opening-and-closing-the-drawers;of-sections;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I select \"Categories\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the \"Categories\" drawer is \"open\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I select \"Categories\" in the radio nav \"again\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the \"Categories\" drawer is \"closed\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 275431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 380895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 5
    },
    {
      "val": "open",
      "offset": 28
    }
  ],
  "location": "RadioNavDrawerTest.Then_the_drawer(String,String)"
});
formatter.result({
  "duration": 199226513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 10
    },
    {
      "val": "again",
      "offset": 40
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav_again(String,String)"
});
formatter.result({
  "duration": 101604854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 5
    },
    {
      "val": "closed",
      "offset": 28
    }
  ],
  "location": "RadioNavDrawerTest.Then_the_drawer(String,String)"
});
formatter.result({
  "duration": 134857269,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Opening and closing the drawers",
  "description": "",
  "id": "radio-nav-drawers;opening-and-closing-the-drawers;of-sections;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I select \"Schedules\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the \"Schedules\" drawer is \"open\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I select \"Schedules\" in the radio nav \"again\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the \"Schedules\" drawer is \"closed\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 225249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedules",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 347342663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedules",
      "offset": 5
    },
    {
      "val": "open",
      "offset": 27
    }
  ],
  "location": "RadioNavDrawerTest.Then_the_drawer(String,String)"
});
formatter.result({
  "duration": 140534677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedules",
      "offset": 10
    },
    {
      "val": "again",
      "offset": 39
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav_again(String,String)"
});
formatter.result({
  "duration": 131148364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedules",
      "offset": 5
    },
    {
      "val": "closed",
      "offset": 27
    }
  ],
  "location": "RadioNavDrawerTest.Then_the_drawer(String,String)"
});
formatter.result({
  "duration": 165521320,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Opening a drawer should close the other drawers",
  "description": "",
  "id": "radio-nav-drawers;opening-a-drawer-should-close-the-other-drawers;of-sections;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select \"Stations\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the \"Stations\" drawer is \"open\" and the other drawers are \"closed\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 222968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 94257184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 5
    },
    {
      "val": "open",
      "offset": 26
    },
    {
      "val": "closed",
      "offset": 59
    }
  ],
  "location": "RadioNavDrawerTest.the_drawer_is_open_and_the_other_drawers_are_closed(String,String,String)"
});
formatter.result({
  "duration": 192174,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Opening a drawer should close the other drawers",
  "description": "",
  "id": "radio-nav-drawers;opening-a-drawer-should-close-the-other-drawers;of-sections;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select \"Categories\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the \"Categories\" drawer is \"open\" and the other drawers are \"closed\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 207571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 335093695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 5
    },
    {
      "val": "open",
      "offset": 28
    },
    {
      "val": "closed",
      "offset": 61
    }
  ],
  "location": "RadioNavDrawerTest.the_drawer_is_open_and_the_other_drawers_are_closed(String,String,String)"
});
formatter.result({
  "duration": 157389,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Opening a drawer should close the other drawers",
  "description": "",
  "id": "radio-nav-drawers;opening-a-drawer-should-close-the-other-drawers;of-sections;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select \"Schedules\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the \"Schedules\" drawer is \"open\" and the other drawers are \"closed\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 745887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedules",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 201304504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedules",
      "offset": 5
    },
    {
      "val": "open",
      "offset": 27
    },
    {
      "val": "closed",
      "offset": 60
    }
  ],
  "location": "RadioNavDrawerTest.the_drawer_is_open_and_the_other_drawers_are_closed(String,String,String)"
});
formatter.result({
  "duration": 192175,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Selecting all categories navigates to all categories page",
  "description": "",
  "id": "radio-nav-drawers;selecting-all-categories-navigates-to-all-categories-page;of-sections;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@todo"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I can see the \"radio nav\"",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I select \"Categories\" in the radio nav",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I select the all \"categories\" link",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I am on the all \"categories\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "radio nav",
      "offset": 15
    }
  ],
  "location": "RadioNavDrawerTest.I_can_see_the_radio_nav(String)"
});
formatter.result({
  "duration": 351844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories",
      "offset": 10
    }
  ],
  "location": "RadioNavDrawerTest.I_select_section_in_the_radio_nav(String)"
});
formatter.result({
  "duration": 476127912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "categories",
      "offset": 18
    }
  ],
  "location": "RadioNavDrawerTest.I_select_the_all_categories_link(String)"
});
formatter.result({
  "duration": 218406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "categories",
      "offset": 17
    }
  ],
  "location": "RadioNavDrawerTest.I_am_on_the_all_categories_page(String)"
});
formatter.result({
  "duration": 175637,
  "status": "passed"
});
});