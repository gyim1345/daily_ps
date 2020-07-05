import java.util.Arrays;

public class PhoneNumberList {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);
        for(int i = 0; i < phone_book.length; i++ ) {
            for(int j = i+1; j < phone_book.length; j++) {
                if(phone_book[j].startsWith(phone_book[i])) {
                    return false;
                }
            }
        }
        return true;
    }
//        String[] phone_book_sorted = Stream.of(phone_book).sorted((s1, s2) -> s1.length() - s2.length()).toArray(String[]::new);
//        System.out.println(Arrays.toString(phone_book_sorted));
//        for(int i = 0; i < phone_book_sorted.length; i++ ) {
//            for(int j = i+1; j < phone_book_sorted.length; j++) {
//                if(phone_book_sorted[i].equals(phone_book_sorted[j].substring(0,phone_book_sorted[i].length()))) {
//                    return false;
//                }
//            }
//        }
//        return true;
//    }
}
