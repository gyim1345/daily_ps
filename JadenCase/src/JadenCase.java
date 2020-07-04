import org.junit.Test;

import java.util.Arrays;
import java.util.stream.Stream;

import static org.junit.Assert.*;

public class JadenCase {
    public String solution(String s) {
        String[] a =  Stream.of(s.toLowerCase().split(" "))
                .map(x -> x.substring(0,1).toUpperCase() + x.substring(1))
                .toArray(String[]::new);

//        String[] a =  s.toLowerCase().split(" ");
//        for(int i =0; i<a.length; i +=1 ) {
//            String[] b = a[i].split("");
//            b[0] = b[0].toUpperCase();
//            a[i] = String.join("", b);
//        }
//
        return s.substring(s.length()-1) == " " ? String.join(" ", a) + " " : String.join(" ", a) ;
    }


    @Test
    public void solutionTest() {
        assertEquals(solution("3people unFollowed me"), "3people Unfollowed Me");
        assertEquals(solution("for the last week"), "For The Last Week");
    }

}



