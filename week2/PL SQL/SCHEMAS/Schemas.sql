-- DROP TABLES (optional cleanup, to avoid errors if rerun)
BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE Transactions CASCADE CONSTRAINTS';
   EXECUTE IMMEDIATE 'DROP TABLE Accounts CASCADE CONSTRAINTS';
   EXECUTE IMMEDIATE 'DROP TABLE Loans CASCADE CONSTRAINTS';
   EXECUTE IMMEDIATE 'DROP TABLE Customers CASCADE CONSTRAINTS';
EXCEPTION
   WHEN OTHERS THEN
      NULL; -- Ignore errors if tables don't exist
END;
/

-- CREATE TABLES
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- INSERT DATA INTO Customers
INSERT INTO Customers VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);
INSERT INTO Customers VALUES (2, 'Jay', TO_DATE('1960-06-19', 'YYYY-MM-DD'), 15000, SYSDATE);
INSERT INTO Customers VALUES (3, 'Joe', TO_DATE('2000-01-01', 'YYYY-MM-DD'), 20000, SYSDATE);
INSERT INTO Customers VALUES (4, 'Bob', TO_DATE('1974-06-27', 'YYYY-MM-DD'), 27900, SYSDATE);
INSERT INTO Customers VALUES (5, 'Sus', TO_DATE('1982-05-11', 'YYYY-MM-DD'), 5000, SYSDATE);

-- INSERT DATA INTO Accounts
INSERT INTO Accounts VALUES (1, 1, 'Savings', 1000, SYSDATE);
INSERT INTO Accounts VALUES (2, 2, 'Checking', 15000, SYSDATE);
INSERT INTO Accounts VALUES (3, 3, 'Checking', 20000, SYSDATE);
INSERT INTO Accounts VALUES (4, 4, 'Savings', 27900, SYSDATE);
INSERT INTO Accounts VALUES (5, 5, 'Savings', 5000, SYSDATE);

-- INSERT DATA INTO Transactions
INSERT INTO Transactions VALUES (1, 1, SYSDATE, 200, 'Deposit');
INSERT INTO Transactions VALUES (2, 2, SYSDATE, 500, 'Deposit');
INSERT INTO Transactions VALUES (3, 3, SYSDATE, 400, 'Deposit');
INSERT INTO Transactions VALUES (4, 4, SYSDATE, 600, 'Deposit');
INSERT INTO Transactions VALUES (5, 5, SYSDATE, 900, 'Deposit');

-- INSERT DATA INTO Loans
INSERT INTO Loans VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));
INSERT INTO Loans VALUES (2, 2, 6000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));
INSERT INTO Loans VALUES (3, 3, 4000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));
INSERT INTO Loans VALUES (4, 4, 4000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));
INSERT INTO Loans VALUES (5, 5, 2000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

-- COMMIT DATA
COMMIT;
SELECT * FROM Customers;
SELECT * FROM Accounts;
SELECT * FROM Transactions;
SELECT * FROM Loans;
