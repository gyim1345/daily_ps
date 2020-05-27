import java.util.*;
import static org.junit.Assert.*;
import org.junit.*;

//N이 주어지면 각 자리수를 배열에 넣는다. 배열에 있는것들을 저장해서 돌려준다.

public class addDigits {

//    public int solution(int n) {
//        int answer = 0;
//        String nn = Integer.toString(n);
//        for (int i = 0; i < nn.length(); i++) {
//            answer =  answer +Integer.parseInt(Character.toString(nn.charAt(i)));
//        }
//
//        return answer;
//    }

//    public int solution(int n) {
//        int answer = 0;
//        String nn = Integer.toString(n);
//        for (int i = 0; i < nn.length(); i++) {
//            answer =  answer + Integer.valueOf(nn.substring(i,i+1));
//        }
//
//        return answer;
//    }

//    public int solution(int n) {
//        int answer = 0;
//        String[] array = String.valueOf(n).split("");
//        for(String s : array){
//            answer += Integer.parseInt(s);
//        }
//        return answer;
//    }


    public int solution(int n) {
        int answer = 0;

        while (n != 0) {
            answer += n % 10;
            n /= 10;
        }

        return answer;
    }



}

