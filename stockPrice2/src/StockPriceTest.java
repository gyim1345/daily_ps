import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class StockPriceTest {
    @Test
    public void StockPriceTest() {
        StockPrice stockPrice = new StockPrice();
        assertEquals(Arrays.toString(stockPrice.solution(new int [] {1,2,3,2,3})), Arrays.toString(new int[] {4,3,1,1,0}));
    }
}
