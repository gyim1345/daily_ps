import java.util.ArrayList;
import java.util.Arrays;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class HarshardNumber {
    public boolean solution(int x) {
//        List<Integer> listInt = new ArrayList<>();
//        listInt.add(1);
//        listInt.add(2);
//        System.out.println(listInt);
//        int[] c = listInt.stream().mapToInt(Integer::intValue).toArray();
//        System.out.println(c);
//
//        List<String> listString = new ArrayList<>(Arrays.asList(new String[]{"a","b"}));
//        listString.stream().toArray();
//        System.out.println(listString);

        int[] arrayInt = {1,2,3};
        Stream streamInt = Stream.of(arrayInt);
//        Integer[] integerArray = streamInt.toArray(size ->new Integer[size]);

        int [] shit = streamInt.mapToInt(q -> q).toArray();

        Stream<String> cities = Stream.of("London", "Paris", "Tokyo");
        String[] arrayOfCities = cities.toArray(String[]::new);
        System.out.println(Arrays.toString(arrayOfCities));

//
        return x % Integer.valueOf(Arrays.stream(String.valueOf(x)
                .split(""))
                .reduce((a, b) ->
                        String.valueOf(Integer.valueOf(a) + Integer.valueOf(b))
                ).get()) == 0;
    }
}
