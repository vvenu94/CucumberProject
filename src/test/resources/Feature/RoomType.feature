@Roomtype
Feature: Verifying Adactin details
@sanity
  Scenario Outline: Validating Hotels Type DropDown
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
      | vvenu1994 | DRVU6C   | Sydney    | Hotel Sunshine | Standard     | 1 - One   | 16/10/2020  | 17/10/2020   | 4 - Four    | 0 - None        | venu      | s        | fdghs    |
      | vvenu1994 | DRVU6C   | Melbourne | Hotel Cornice  | Double       | 1 - One   | 17/10/2020  | 21/10/2020   | 2 - Two     | 0 - None        | raj       | d        | adayar   |
      | vvenu1994 | DRVU6C   | Brisbane  | Hotel Hervey   | Deluxe       | 1 - One   | 20/10/2020  | 25/10/2020   | 3 - Three   | 3 - Three       | anil      | c        | chrompet |
      | vvenu1994 | DRVU6C   | New York  | Hotel Creek    | Super Deluxe | 1 - One   | 18/10/2020  | 19/10/2020   | 2 - Two     | 0 - None        | array     | s        | chennai  |
