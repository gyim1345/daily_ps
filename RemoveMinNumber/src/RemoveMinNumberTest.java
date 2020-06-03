import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

public class RemoveMinNumberTest {
    @Test
    public void solutionTest() {
        RemoveMinNumber removeMin = new RemoveMinNumber();
        int[] result = removeMin.solution(new int[]{9,6,8,7});
        assertEquals(Arrays.toString(new int[]{9,8,7}), Arrays.toString(result));
    }
}
