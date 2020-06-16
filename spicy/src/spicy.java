import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.stream.Collectors;

public class spicy {
    public int solution(int[] scoville, int K) {

        PriorityQueue<Integer> queue = new PriorityQueue<Integer>(Arrays.stream(scoville).boxed().collect(Collectors.toList()));
        int count = 0;
        while (queue.peek() != null) {
            int least = queue.poll();

            if (queue.peek() == null) {
                if (least > K) {
                    return count;
                } else {
                    return -1;
                }
            }
            int secondLeast = queue.poll();
            if (least > K) {
                return count;
            }
            queue.add(least + secondLeast * 2);
            count += 1;
        }

        return -1;
    }
}
//        System.out.println(queue);
//        System.out.println(queue.poll());
//        System.out.println(queue.poll());
//
//        queue.add(1);
//        System.out.println(queue.poll());
//
//
//
//        System.out.println(queue.peek());

//        int answer = 0;
//        Arrays.sort(scoville);
//        for(int i =0; i<scoville.length-1; i ++) {
//        System.out.println(Arrays.toString(scoville) + " " + i);
//            if(scoville[i]>scoville[i+2]){
//                int temp = scoville[i];
//                scoville[i] = scoville[i+2];
//                scoville[i+2] = temp;
//            }
//            if(scoville[i]<K || scoville[i+1] <K) {
//                if(scoville[i] < scoville[i+1]){
//                scoville[i+1] = scoville[i] + scoville[i+1]*2;
//                } else {
//                    scoville[i+1] = scoville[i+1] + scoville[i]*2;
//                }
//                answer += 1;
//                continue;
//            } else {
//                break;
//            }
//
//        }
//        System.out.println(Arrays.toString(scoville));
//        int length = scoville.length-1;
//            if( scoville[length] + scoville[length-1]*2>=K || scoville[length-1] + scoville[length]*2 >=K ){
//                return answer;
//            }
//
//        return -1;
//    }
//}
