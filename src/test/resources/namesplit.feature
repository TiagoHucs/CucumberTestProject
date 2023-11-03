Feature: the version can be retrieved
  Scenario: namesplitservice can split names
    When the service is called passing "Tiago Santos Hucs"
    Then the service will returns "Tiago" , "Santos" and "Hucs" separated
