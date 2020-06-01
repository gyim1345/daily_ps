import javax.swing.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Queue;
import java.util.stream.IntStream;
import java.util.stream.Stream;

/*
# 행렬의 덧셈
        ## 이해
        행렬의 덧셈은 행과 열의 크기가 같은 두 행령의 같은 행 같은 열의 값을 서로 더한 결과를
        구해야한다.

        ## 구해야하는것
        arr1과 arr2의 행렬의 덧셈 결과를 가진 배열

        ## 계획
        map으로 arr1 와 arr2를 비교하면서 서로 같은 인덱스 값들을 더해준 배열을 리턴한다.
*/
public class ArraySum {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int[][] answer = {{}};
//        System.out.print(Arrays.deepToString(arr1)+Arrays.deepToString(arr2));
//        mapWithIndex(Arrays.stream(arr1), (Integer index, Array arr))
//        Arrays.stream(arr1)
//        System.out.println(Arrays.stream(arr1).map(x -> x.reduce((a,b) -> a+b)));
//        System.out.println(IntStream.range(0,arr3.length).mapToObj(index-> index + " " + arr3[index]));
//        IntStream.range(0,arr1.length).mapToObj(index->
//                index + " " + Arrays.toString(arr1[index]) + " " + Arrays.toString(arr2[index]))
//                .forEach(System.out::println);
        Stream<Object> asd = IntStream.range(0,arr1.length).mapToObj(index->
                IntStream.range(0,arr1[index].length).mapToObj(index1->
                        arr1[index][index1] + arr2[index][index1]
                        ).toArray());
        System.out.println(Arrays.deepToString(asd.toArray()));
//            asd.forEach(x -> System.out.println(toObject(x)));
                Stream.of(asd).forEach(x->x.mapToInt(Double::intValue));
                return asd;
//        asd.forEach(x-> x.forEach(y-> System.out.println(y)));
//                .mapToInt(Integer::intValue)
//                .map(i-> String.valueOf(i))
//                .forEach(System.out::println);
//        int [][] fuck = new int[arr1.length][arr1[0].length];
//        for(int i =0; i < arr1.length; i++) {
//            for(int j = 0; j < arr1[i].length; j++) {
//
//                fuck[i][j] = arr1[i][j] + arr2[i][j];
//            }
//        }
//        System.out.println(Arrays.deepToString(fuck));
//        int [][] expectedResult = {{4,6}, {7,9}};
//        return fuck;
    }
}
