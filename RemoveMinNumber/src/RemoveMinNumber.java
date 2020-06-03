import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class RemoveMinNumber {
    public int[] solution(int[] arr) {

        if (arr.length <= 1) return new int[]{ -1 };

        //list 사용
        List<Integer> list =  Arrays.stream(arr).boxed().collect(Collectors.toList());
        int min = list.indexOf(Collections.min(list));
        list.remove(min);
        return list.stream().mapToInt(Integer::intValue).toArray();

        //stream 사용
//        int min = Arrays.stream(arr).min().getAsInt();
//        return Arrays.stream(arr).filter(i -> i != min).toArray();
    }
}
