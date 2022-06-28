CREATE TABLE WORKSPACES
(
    WorkspacesId VARCHAR(10),
        Locations CHAR(10) NOT NULL,
     Seating  VARCHAR(20)NOT NULL,
   Availabilty CHAR(10)NOT NULL,
    LeaseTerm  VARCHAR(20)NOT NULL,
    Prohibtations  CHAR(10)NOT NULL,
    PRIMARY KEY(WorkspacesId)
);
INSERT INTO WORKSPACES
VALUES('1','Hawkward Rd,NW','4','Available','4 Weeks','No')

INSERT INTO WORKSPACES 
VALUES('2','Range Dr,NW','4','Not Available','----','No')

INSERT INTO WORKSPACES 
VALUES('3','Barlow Square,SE','5','Available','8 Weeks','Yes*')

INSERT INTO WORKSPACES 
VALUES('4','Olympic Crescent,SE','10','Available','4 Months','No')

INSERT INTO WORKSPACES 
VALUES('5','Coral Spring BLVD,NE','15','Available','5 Weeks','No')

INSERT INTO WORKSPACES 
VALUES('6','Bowness Rd,NW','12','Available','4 Months','Yes')