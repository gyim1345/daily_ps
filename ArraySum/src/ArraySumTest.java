import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ArraySumTest {
    @Test
    public void testSolution() {
        ArraySum arraysum = new ArraySum();
//        int [][] arr1 = {{1,2},{2,3}};
//        int [][] arr2 = {{3,4},{5,6}};
//        int [][] expectedResult = {{4,6}, {7,9}};
//
//        int [][] actualResult = arraysum.solution(arr1, arr2);
//        assertEquals(expectedResult, actualResult);

        int [][] arr11 = {{1},{2}};
        int [][] arr21 = {{3},{4}};
        int [][] expectedResult1 = {{4},{6}};

        int [][] actualResult1 = arraysum.solution(arr11, arr21);
        assertEquals(expectedResult1, actualResult1);






    }
}
