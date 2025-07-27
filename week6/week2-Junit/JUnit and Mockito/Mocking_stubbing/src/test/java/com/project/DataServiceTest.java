package com.project;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class DataServiceTest {

    @Test
    public void testDataProvider() {
        // Step 1: Create a mock of DataProvider
        DataProvider mockProvider = mock(DataProvider.class);

        // Step 2: Stub the fetch() method
        when(mockProvider.fetch()).thenReturn("Mocked Data");

        // Step 3: Inject mock into DataService
        DataService service = new DataService(mockProvider);

        // Step 4: Use the public method getData()
        String result = service.getData();

        // Step 5: Assert result
        assertEquals("Mocked Data", result);
    }
}

