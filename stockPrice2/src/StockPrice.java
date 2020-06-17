import java.util.ArrayList;
import java.util.stream.Stream;

public class StockPrice {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];

//        ArrayList<Integer> arrayList = new ArrayList<>();
        for(int i =0; i< prices.length; i ++) {

            for(int j =i+1; j< prices.length; j++) {
                if(prices[j]<prices[i]) {
//                    arrayList.add(j-i);
                    answer[i] = j-i;
                    break;
                }
                if(j == prices.length-1 ){
                    answer[i] = j-i;
//                    arrayList.add(j-i);
                }
            }
        }
//        arrayList.add(0);
        return answer;
//        return arrayList.stream().mapToInt(i -> i).toArray();
    }
}
