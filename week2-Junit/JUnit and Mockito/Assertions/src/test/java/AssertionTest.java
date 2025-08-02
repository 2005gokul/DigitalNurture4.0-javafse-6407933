import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionTest {

    @Test
    public void testBasicAssertions() {
        // Check if 2 + 3 is equal to 5
        assertEquals("2 + 3 should be 5", 5, 2 + 3);

        // Check if 5 is greater than 3
        assertTrue("5 is greater than 3", 5 > 3);

        // Check if 5 is not less than 3
        assertFalse("5 is not less than 3", 5 < 3);

        // Check if the object is null
        Object obj = null;
        assertNull("Object should be null", obj);

        // Check if the string is not null
        String name = "VelTech";
        assertNotNull("Name should not be null", name);
    }
}
