INSERT INTO public."Locations"
Values 
(1, 'Location 1', 1),
(2, 'Location 2', 1),
(3, 'Location 3', 2),
(4, 'Location 4', 2),
(5, 'Location 5', 3);

INSERT INTO public."Adverts"
Values 
(1, 'Drink Fresh', '2023-04-01', '2023-04-15', 15 , '1.jpg'),
(2, 'Coca Cola', '2023-05-01', '2023-05-15', 15 , 'b.jpg'),
(3, 'Enjoy Summer Days', '2023-06-01', '2023-06-15', 15 , 'c.jpg'),
(4, 'Taste The Feeling', '2023-07-01', '2023-07-15', 15 , 'd.png'),
(5, 'Fresh & Cold', '2023-08-01', '2023-08-15', 15 , 'e.jpg');


INSERT INTO public."Location_Adverts"
Values 
(1,1),
(2,1),
(3,1),
(1,2),
(1,3),
(2,3),
(1,4),
(2,4),
(3,4),
(4,4),
(5,4),
(1,5),
(2,5),
(3,5);