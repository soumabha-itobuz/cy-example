Feature: Admin dashboard outlets
    Scenario: Add, edit , list, delete outlets
    When Loggedin in admin dashboard 
    Then Add outlets
    Then Added outlets should be listed in list 
    Then Edit new added item from list 
    Then Edit data needs to check from list page 
    Then Delete new item from list 
    Then verify deleted items removed from list 