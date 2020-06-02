import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class xSpaceNNumbersTest {
    @Test
    public void solutionTest() {
        xSpaceNNumbers test = new xSpaceNNumbers();
        long[] result = test.solution(2,5);
        assertEquals(Arrays.toString(new long []{2,4,6,8,10}), Arrays.toString(result));
    }
}
