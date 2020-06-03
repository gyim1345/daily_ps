import java.util.Arrays;
import java.util.Collections;

public class ascendingNumbers {
    public long solution(long n) {
        String[] array = String.valueOf(n).split("");
        Arrays.sort(array);
        System.out.println(Arrays.toString(array));
        Collections.reverse(Arrays.asList(array));
        return  Long.parseLong(String.join("",array));
//        StringBuilder word = new StringBuilder();
//        word.append(n);
//        System.out.println(word);
//        word = word.reverse();
//        return Long.parseLong(word.toString());
    }
}
