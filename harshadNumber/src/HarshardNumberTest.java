import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class HarshardNumberTest {
    @Test
    public void testSolution() {
        HarshardNumber harshardNumber = new HarshardNumber();
        int input = 10;
        boolean result = harshardNumber.solution(input);
        assertEquals(true, result);
//        assertEquals(false, harshardNumber.solution(11));
//        assertTrue(result);
//        assertEquals()
    }

}

