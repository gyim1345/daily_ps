import org.junit.Test;
//import org.junit.Assert;
import static org.junit.Assert.assertEquals;
import static org.hamcrest.MatcherAssert.assertThat;

public class PhoneNumberListTest {
    @Test
    public void solutionTest() {
        PhoneNumberList phoneNumberList = new PhoneNumberList();
        boolean a = phoneNumberList.solution(new String[]{"119", "97674223", "1195524421"});
        assertEquals(a,false);
        boolean b = phoneNumberList.solution(new String[]{"123", "456", "789"});
        assertEquals(b,true);
        boolean c = phoneNumberList.solution(new String[]{"12", "123"});
        assertEquals(c,false);

    }
}
