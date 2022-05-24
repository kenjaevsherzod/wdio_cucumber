# feature file
Feature: Gmail Functionality
    To check for some functionalities on gmail website

    # A distinct scenario to navigate to homepage
    Background:
        Given I am on the homepage


    @extended
    Scenario: To check if the sign in instead button is visible on create account page
        Given I am on create account page
        Then it should display the create account page with the sign in instead button

    @extended
    Scenario: To check if the show password checkbox is working properly
        Given I am on create account page
        When I enter my valid details in create account fields
        And I click on the show password checkbox
        Then It should be ticked and the password and confirm password fields should be visible

    @smoke
    Scenario: To check functionality with valid Email and Empty password
        When I try to submit a form with valid Email and empty password
        Then It should display error on the password field

    # scenario outline to check if account will be created with different password combination
    @smoke
    Scenario Outline: To check validity of account creation with different password combinations
        Given I am on create account page
        When  I enter my valid details in create account fields
        And I enter good or bad "<passwords>" and "<confirm_passwords>" requirements
        Then "<error>". Error Should be displayed

        Examples:
            | passwords     | confirm_passwords | error |
            | police        | police            | Yes   |
            | administrator | administrator     | Yes   |
            | Col15         | Col15             | Yes   |
            | popular12     | popular12         | Yes   |
            | policemen     | policemen         | No    |


    @smoke
    Scenario: To login user in with valid data
        When I enter valid credentials to log in
        Then It should should navigate to my account page and inboxes