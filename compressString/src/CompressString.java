import java.util.ArrayList;
import java.util.Collections;

public class CompressString {
    public int solution(String s) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        for (int i = 1; i < s.length(); i += 1) {
            ArrayList<String> result = new ArrayList<String>();
            int count = 0;
            String duplicate = s.substring(0,i);

            for(int j = 0; j<= s.length(); j+= i) {
                String target = j+i>s.length() ? "" : s.substring(j, j + i);
                if(duplicate.equals(target)) {
                    count += 1;
                } else {
                    String prefix;
                    if( count >= 2) {
                        prefix = Integer.toString(count);
                        result.add(prefix + duplicate);

                    } else result.add(duplicate);
                    duplicate = target;
                    count = 1;
                }
                if( j + i > s.length()) {
                    result.add(s.substring(j));
                }
            }
            answer.add(String.join("", result).length());
        }
        return Collections.min(answer);
    }
}
