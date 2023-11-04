Feature: the NameSplitService can be called

  Scenario: namesplitservice can split a name
    When the service is called passing "Tiago Santos Hucs"
    Then the service will returns "Tiago" , "Santos" and "Hucs" separated

  Scenario: namesplitservice can split other name
    When the service is called passing "Juca Souza Silva"
    Then the service will returns "Juca" , "Souza" and "Silva" separated