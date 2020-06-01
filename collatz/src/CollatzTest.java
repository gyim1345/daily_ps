import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CollatzTest {
    @Test
    public void solutionTest() {
        Collatz collatz = new Collatz();
        int result = collatz.solution(6);
        assertEquals(8,result, 0);

        int result1 = collatz.solution(16);
        assertEquals(4,result1, 0);

        int result2 = collatz.solution(626331);
        assertEquals(-1,result2, 0);

    }
}
