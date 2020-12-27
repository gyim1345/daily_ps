import java.util.Arrays;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CompressStringTest {
        @Test
        public void solutionTest() {
            CompressString compressString = new CompressString();
            int answer = compressString.solution("aabbaccc");
            assertEquals(answer, 7);
            int answer2 = compressString.solution("ababcdcdababcdcd");
            assertEquals(answer2, 9);
            int answer3 = compressString.solution("abcabcdede");
            assertEquals(answer3, 8);

        }

}
