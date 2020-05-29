import java.util.Arrays;

import java.util.Optional;
import java.util.stream.Stream;

public class HarshardNumber {
    public boolean solution(int x) {
        return x % Integer.valueOf(Arrays.stream(String.valueOf(x)
                .split(""))
                .reduce((a, b) ->
                        String.valueOf(Integer.valueOf(a) + Integer.valueOf(b))
                ).get()) == 0;
    }
}
