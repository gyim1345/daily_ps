import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class FindKimInSeoulTest {
        @Test
        public void testSolution() {
            FindKimInSeoul findKim = new FindKimInSeoul();
            String[] input = { "Jane", "Kim"};
            String result = findKim.solution(input);
            assertEquals("김서방은 1에 있다", result);
        }

}
