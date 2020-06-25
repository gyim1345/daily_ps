import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

public class KakaoFriendsColoringBook {
    public int[] solution(int m, int n, int[][] picture) {
        int[][] pic = new int[m][n];
        for(int i = 0; i < m; i++) {
            for( int j = 0; j< n; j++) {
                pic[i][j] = picture[i][j];
            }
        }
        int zero= getLength(pic);

        List<Integer> a = new ArrayList<>();
        for(int y = 0; y<m; y++){
            for(int x = 0; x<n; x++) {
                if (pic[y][x] != 0) {
                    pic = dfs(pic, pic[y][x], x,y);
                    int newLength = getLength(pic);
                    a.add(zero - newLength);
                    zero = newLength;
                }
            }
        }
        return new int[] { a.size(), Collections.max(a)};
    }

    private int getLength(int[][] picture) {
        return Stream.of(picture).flatMapToInt(array-> Arrays.stream(array)).filter(x-> x != 0).toArray().length;
    }

    public static int[][] dfs(int[][] picture, int currentNumber, int x, int y) {
        picture[y][x] = 0;

        if(x+1 < picture[0].length) {
            if (picture[y][x + 1] == currentNumber) {
                picture = dfs(picture, currentNumber, x + 1, y);
            }
        }

        if(y+1 < picture.length) {
            if (picture[y + 1][x] == currentNumber) {
                picture = dfs(picture, currentNumber, x, y + 1);
            }
        }

        if(x-1 >= 0) {
            if (picture[y][x - 1] == currentNumber) {
                picture = dfs(picture, currentNumber, x - 1, y);
            }
        }

        if(y-1 >= 0) {
            if (picture[y-1][x] == currentNumber) {
                picture = dfs(picture, currentNumber, x, y- 1);
            }
        }

        return picture;

    }

}
