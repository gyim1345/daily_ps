import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class oddEvenTest {
    @Test
    public void testSolution() {
        OddEven oddeven = new OddEven();
        int input =3;
        String result = oddeven.solution(input);
        assertEquals("Odd", result);
    }
}
