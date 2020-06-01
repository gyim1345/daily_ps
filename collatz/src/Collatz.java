public class Collatz {
    public int solution(int num) {
        int currentNumber = num;
        int count = 0;
        int loopCount = 0;
        while (currentNumber != 1) {
            if (currentNumber == 1) {
                return count;
            }
            if (loopCount == 626331) {
                return -1;
            }
            if (currentNumber % 2 == 0) {
                currentNumber = currentNumber / 2;
                count += 1;
                continue;
            }
            if (currentNumber % 2 == 1) {
                currentNumber = currentNumber * 3 + 1;
                count += 1;
                continue;
            }
            loopCount += 1;
        }
        return count;
    }
}
