import java.lang.reflect.Array;
import java.util.Arrays;

/*
이해
받은 s를 string에서 숫자로 변경해서 리턴해라.

계획
s를 배열로 변경해서 하나씩 넘버로 출력해서 출력
만약 배열[0]이 "-"면 -먼저 출력
 */
public class StringToNumber {
    public int solution(String s) {
        return Integer.parseInt(s);
    }
}
