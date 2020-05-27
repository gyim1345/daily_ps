import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class addDigitsTest{
    @Test
    public void testSolution() {
        addDigits testAddDigits = new addDigits();
        int result = testAddDigits.solution(123);
        assertEquals(6, result, 0);
    }
}
