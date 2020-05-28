import org.junit.Test;

import java.util.Arrays;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;

public class getAverage {
    public double solution(int[] arr) {
        return Arrays.stream(arr).average().getAsDouble();
    }
}

