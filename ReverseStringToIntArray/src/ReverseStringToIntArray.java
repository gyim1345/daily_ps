import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


public class ReverseStringToIntArray {
    public int[] solution(long n) {
        int[] answer = {};
        List<Integer> ans = Arrays.asList(Long.toString(n).split("")).stream().map(x -> Integer.valueOf(x)).collect(Collectors.toList());
        Collections.reverse(ans);
        return ans.stream().mapToInt(i -> i).toArray();
//        System.out.println( StringUtils.reverse(Long.toString(n)).split(""));

//        System.out.println( Arrays.toString(Long.toString(n).split("")));
//        return answer;
    }
}
