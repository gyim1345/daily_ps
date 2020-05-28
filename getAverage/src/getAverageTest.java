import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class getAverageTest {
    @Test
    public void testSolution() {
        getAverage average = new getAverage();
        double result = average.solution(new int[]{1, 2, 3, 4});
        assertEquals(2.5, result, 0);
    }
}
