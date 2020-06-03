import org.junit.Test;
import static org.junit.Assert.*;

public class ascendingNumbersTest {
    @Test
    public void solutionTest() {
        ascendingNumbers sortNumbers = new ascendingNumbers();
        long result = sortNumbers.solution(118372);
        assertEquals(873211, result);
    }
}
