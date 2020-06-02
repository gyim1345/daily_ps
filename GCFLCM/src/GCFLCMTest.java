import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;
public class GCFLCMTest {
    @Test
    public void solutionTest() {
        GCFLCM gcflcm = new GCFLCM();
        int[] result = gcflcm.solution(3,12);
        assertEquals(Arrays.toString(new int[] {3,12}), Arrays.toString(result));

    }
}
