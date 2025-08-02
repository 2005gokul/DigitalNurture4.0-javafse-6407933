--Scenario 2: A customer can be promoted to VIP status based on their balance.
--Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.
ALTER TABLE Customers MODIFY IsVIP VARCHAR2(5);
BEGIN
    FOR c IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers SET IsVIP = 'TRUE' WHERE CustomerID = c.CustomerID;
        ELSE
            UPDATE Customers SET IsVIP = 'FALSE' WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;
END;
/
SELECT * FROM Customers;
