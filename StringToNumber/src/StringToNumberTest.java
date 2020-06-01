import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class StringToNumberTest {
    @Test
    public void testSolution() {
        StringToNumber stringToNumber = new StringToNumber();
        String input = "-1234";
        int result = stringToNumber.solution(input);
        assertEquals(-1234, result);
    }
}
