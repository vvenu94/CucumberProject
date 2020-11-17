
@ChildType
Feature: Verifying Adactin details
@sanity
  Scenario Outline: Validating NoOfchild DropDown module
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
      | userName  | password | location | hotel          | roomType     | noOfRooms | checkInDate | checkOutDate | adulPerRoom | childrenPerRoom | firstName | lastName | address |
      | vvenu1994 | DRVU6C   | Paris    | Hotel Creek    | Standard     | 4 - Four  | 16/10/2020  | 16/10/2020   | 4 - Four    | 0 - None        | last      | h        | paris   |
      #| vvenu1994 | DRVU6C   | New York | Hotel Creek    | Super Deluxe | 6 - Six   | 16/10/2020  | 16/10/2020   | 3 - Three   | 1 - One         | last      | f        | paris   |
      #| vvenu1994 | DRVU6C   | Paris    | Hotel Sunshine | Standard     | 7 - Seven | 16/10/2020  | 16/10/2020   | 2 - Two     | 2 - Two         | last      | f        | paris   |
      #| vvenu1994 | DRVU6C   | Paris    | Hotel Creek    | Deluxe       | 8 - Eight | 16/10/2020  | 16/10/2020   | 2 - Two     | 3 - Three       | west      | f        | paris   |
      #| vvenu1994 | DRVU6C   | New York | Hotel Sunshine | Standard     | 9 - Nine  | 16/10/2020  | 16/10/2020   | 3 - Three   | 4 - Four        | last      | f        | paris   |
