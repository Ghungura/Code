Feature:validate calculatoe functionality
@smoke
Scenario: calculator add functionality
Given I will navigate to "Calc" Site
When I add two numbers "3" and "5"
Then the output displayed should be "4"

Scenario Outline: calculator add functionality
Given I will navigate to "Calc" Site
When I add two numbers "<key1>" and "<key2>"
Then the output displayed should be "<key3>"
Examples:
| key1 | key2 | key3 |
| 2  | 3  | 5  |
| 1  | 2  | 3  |

