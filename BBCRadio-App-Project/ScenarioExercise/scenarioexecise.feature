Feature: Radio Nav Drawer

@Add1
Scenario Outline: Navigating to local radio
  Given I can see the radio nav
  When I select <section> in the radio nav
  Then the <section> drawer is open
  Then the user can navigate to all local radio
  

@Add2
Scenario Outline: Navigating to local radio
  Given I can see the radio nav
  When I select <section> in the radio nav
  Then the <section> drawer is open
  When I select a network on the all station page
  Then I can be taken to appropriate network homepage
  

Add3
Scenario Outline: Navigating to local radio
  Given I can see the radio nav
  And I click ob iPlayer Radio logo on radio nav
  Then the <section> drawer is open
  Then I can see the radio home page
