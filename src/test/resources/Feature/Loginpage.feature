Feature: Verifying Adactin details

  Scenario Outline: Validating adactin booking module
    Given User is on Adactin site
    When User should enter "<userName>" and "<password>"
    And User in search hotel page enter "<location>","<hotel>","<roomType>","<noOfRooms>","<checkInDate>","<checkOutDate>","<adulPerRoom>"and "<childrenPerRoom>"
    And User in select hotel page select hotel
    And User in book hotel page enter "<firstName>","<lastName>","<address>","<ccNo>","<ccType>", "<expiryMonth>","<expiryYear>"and"<cvvNo>"
    Then User should verify url navigated to booking confirmation page and ordernumber generated

    Examples: 
      | userName  | password | location  | hotel          | roomType     | noOfRooms | checkInDate | checkOutDate | adulPerRoom | childrenPerRoom | firstName | lastName | address  | ccNo             | ccType           | expiryMonth | expiryYear | cvvNo |  |
      | vvenu1994 | DRVU6C   | Sydney    | Hotel Sunshine | Standard     | 1 - One   | 16/10/2020  | 17/10/2020   | 4 - Four    | 0 - None        | venu      | s        | fdghs    | 0123456789987456 | American Express | January     |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Melbourne | Hotel Cornice  | Double       | 1 - One   | 17/10/2020  | 21/10/2020   | 2 - Two     | 0 - None        | raj       | d        | adayar   | 0123456789987456 | VISA             | March       |       2021 |   372 |  |
      | vvenu1994 | DRVU6C   | Brisbane  | Hotel Hervey   | Deluxe       | 1 - One   | 20/10/2020  | 25/10/2020   | 3 - Three   | 3 - Three       | anil      | c        | chrompet | 0123456789987456 | Master Card      | September   |       2022 |   452 |  |
      | vvenu1994 | DRVU6C   | New York  | Hotel Creek    | Super Deluxe | 1 - One   | 18/10/2020  | 19/10/2020   | 2 - Two     | 0 - None        | array     | s        | chennai  | 0123456789987456 | VISA             | July        |       2021 |   253 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Standard     | 1 - One   | 16/10/2020  | 16/10/2020   | 3 - Three   | 4 - Four        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Sunshine | Deluxe       | 1 - One   | 16/10/2020  | 16/10/2020   | 2 - Two     | 4 - Four        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Brisbane  | Hotel Hervey   | Standard     | 1 - One   | 16/10/2020  | 16/10/2020   | 4 - Four    | 3 - Three       | last      | l        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Cornice  | Double       | 3 - Three | 16/10/2020  | 16/10/2020   | 2 - Two     | 1 - One         | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | New York  | Hotel Creek    | Standard     | 1 - One   | 16/10/2020  | 16/10/2020   | 3 - Three   | 0 - None        | sad       | i        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Hervey   | Standard     | 2 - Two   | 16/10/2020  | 16/10/2020   | 2 - Two     | 1 - One         | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | New York  | Hotel Hervey   | Deluxe       | 3 - Three | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Brisbane  | Hotel Creek    | Super Deluxe | 4 - Four  | 16/10/2020  | 16/10/2020   | 2 - Two     | 3 - Three       | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Hervey   | Standard     | 5 - Five  | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | last      | h        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Sunshine | Standard     | 6 - Six   | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | sam       | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Sydney    | Hotel Creek    | Double       | 7 - Seven | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Standard     | 8 - Eight | 16/10/2020  | 16/10/2020   | 2 - Two     | 1 - One         | last      | s        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Sunshine | Standard     | 9 - Nine  | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | New York  | Hotel Creek    | Standard     | 10 - Ten  | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | rest      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Double       | 1 - One   | 16/10/2020  | 16/10/2020   | 1 - One     | 1 - One         | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Standard     | 2 - Two   | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Sydney    | Hotel Hervey   | Double       | 3 - Three | 16/10/2020  | 16/10/2020   | 3 - Three   | 1 - One         | ramesh    | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Standard     | 4 - Four  | 16/10/2020  | 16/10/2020   | 4 - Four    | 0 - None        | last      | h        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Hervey   | Deluxe       | 5 - Five  | 16/10/2020  | 16/10/2020   | 2 - Two     | 1 - One         | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | New York  | Hotel Creek    | Super Deluxe | 6 - Six   | 16/10/2020  | 16/10/2020   | 3 - Three   | 1 - One         | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Sunshine | Standard     | 7 - Seven | 16/10/2020  | 16/10/2020   | 2 - Two     | 2 - Two         | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Deluxe       | 8 - Eight | 16/10/2020  | 16/10/2020   | 2 - Two     | 3 - Three       | west      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | New York  | Hotel Sunshine | Standard     | 9 - Nine  | 16/10/2020  | 16/10/2020   | 3 - Three   | 4 - Four        | last      | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Sydney    | Hotel Creek    | Super Deluxe | 10 - Ten  | 16/10/2020  | 16/10/2020   | 2 - Two     | 0 - None        | sam       | a        | paris    | 0123456789987456 | American Express | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Creek    | Super Deluxe | 6 - Six   | 16/10/2020  | 16/10/2020   | 2 - Two     | 1 - One         | last      | f        | paris    | 0123456789987456 | VISA             | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Paris     | Hotel Sunshine | Standard     | 7 - Seven | 16/10/2020  | 16/10/2020   | 3 - Three   | 2 - Two         | daniel    | f        | paris    | 0123456789987456 | Master Card      | May         |       2022 |   123 |  |
      | vvenu1994 | DRVU6C   | Sydney    | Hotel Sunshine | Deluxe       | 8 - Eight | 16/10/2020  | 16/10/2020   | 2 - Two     | 3 - Three       | last      | w        | paris    | 0123456789987456 | Other            | May         |       2022 |   123 |  |