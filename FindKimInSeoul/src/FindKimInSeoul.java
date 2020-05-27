public class FindKimInSeoul {
    public String solution(String[] seoul) {
        String answer = "";
        String target = "Kim";
        int count = 0;
        for(String name : seoul) {
            if(name == target){
                break;
            }
            count +=1;
        }
        return "김서방은 " + String.valueOf(count) + "에 있다";
    }
}
