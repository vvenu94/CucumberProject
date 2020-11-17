
@hotel
Feature: Verifying Adactin details
@reg 
  Scenario Outline: Validating Hotels name DropDown
    Given User is on Adactin site
    When User should enter "<userName>" and "<password>"
    And User in search hotel page enter "<location>","<hotel>","<roomType>","<noOfRooms>","<checkInDate>","<checkOutDate>","<adulPerRoom>"and "<childrenPerRoom>"
    And User in select hotel page select hotel
    And User in book hotel page enter "<firstName>","<lastName>" and "<address>"
      | ccNo             | ccType           | expiryMonth | expiryYear | cvvNo |
      | 0123456789987456 | American Express | January     |       2022 |   123 |
      | 0123456789987456 | VISA             | March       |       2021 |   372 |
      | 0123456789987456 | Other            | January     |       2022 |   123 |
      | 0123456789987456 | Master Card      | March       |       2021 |   372 |
    Then User should verify url navigated to booking confirmation page and ordernumber generated

    Examples: 
      | userName  | password | location  | hotel          | roomType     | noOfRooms | checkInDate | checkOutDate | adulPerRoom | childrenPerRoom | firstName | lastName | address  |              
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Standard     | 1 - One   | 16/10/2020  | 16/10/2020   | 3 - Three   | 4 - Four        | last      | f        | paris    | 
      | vvenu1994 | DRVU6C   | Paris     | Hotel Sunshine | Deluxe       | 1 - One   | 16/10/2020  | 16/10/2020   | 2 - Two     | 4 - Four        | last      | f        | paris    | 
      | vvenu1994 | DRVU6C   | Brisbane  | Hotel Hervey   | Standard     | 1 - One   | 16/10/2020  | 16/10/2020   | 4 - Four    | 3 - Three       | last      | l        | paris    | 
      | vvenu1994 | DRVU6C   | Paris     | Hotel Cornice  | Double       | 3 - Three | 16/10/2020  | 16/10/2020   | 2 - Two     | 1 - One         | last      | f        | paris    | 
     