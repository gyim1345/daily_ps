import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

public class spicyTest {
    @Test
    public void solutionTest() {
        spicy spicy = new spicy();
        assertEquals(spicy.solution(new int[] {1, 3, 2, 9, 10, 12},7), 2);
        assertEquals(spicy.solution(new int[] {1, 2, 3, 4, 5, 6},999), -1);
    }
}
