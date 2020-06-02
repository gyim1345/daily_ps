import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


public class GCFLCM {
    public int[] solution(int n, int m) {
        return new int[] {gcd(n,m) , n*m/gcd(n,m)};
    }

    public int gcd (int n,int m) {
        return Arrays.stream(commonDivisor(n)).filter(x-> Arrays.stream(commonDivisor(m)).anyMatch(a -> a == x)).max().getAsInt();
    }

    public int[] commonDivisor (int n) {
        return IntStream.range(1,n+1).mapToObj(index-> index).filter(x-> n % x == 0).mapToInt(x->x).toArray();
    }
}

// Arrays.asList(new int[]{1,2,3}).contains(3)
