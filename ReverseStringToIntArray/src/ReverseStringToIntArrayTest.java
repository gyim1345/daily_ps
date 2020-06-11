import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class ReverseStringToIntArrayTest {
    @Test
    public void solutionTest() {
        ReverseStringToIntArray getResult = new ReverseStringToIntArray();
        int[] result = getResult.solution(12345L);
        int[] expected = {5,4,3,2,1};
        assertEquals(Arrays.toString(expected), Arrays.toString(result));
    }
}
