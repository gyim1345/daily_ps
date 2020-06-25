import org.junit.Assert;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertThat;

public class KakaoFriendsColoringBookTest {
    @Test
    public void solutionTest() {
        KakaoFriendsColoringBook kakaoFriendsColoringBook = new KakaoFriendsColoringBook();
        int[][] picture = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
//        assertThat(kakaoFriendsColoringBook.solution(6,4,picture)).isEqualTo(new int[] {4, 5});
        int[][] picture2 = {{0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0}, {0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0}, {0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0}, {0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0}, {0, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 0}, {0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0}, {0, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0}, {0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 0}, {0, 0, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0}, {0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0}, {0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0}};
        Assert.assertArrayEquals(kakaoFriendsColoringBook.solution(6,4,picture), new int[] {4, 5});
        Assert.assertArrayEquals(kakaoFriendsColoringBook.solution(13,16,picture2), new int[] {12, 120});
    }

    @Test
    public void dfsTest() {
        KakaoFriendsColoringBook kakaoFriendsColoringBook = new KakaoFriendsColoringBook();
        int[][] picture = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
        Assert.assertEquals(Arrays.deepToString(KakaoFriendsColoringBook.dfs(picture, 1, 0 ,0)), Arrays.deepToString(new int [][] {{0, 0, 0, 0}, {0, 2, 2, 0}, {0, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}}));
    }

    @Test
    public void getLengthTest() {
        KakaoFriendsColoringBook kakaoFriendsColoringBook = new KakaoFriendsColoringBook();
        int[][] picture = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
        Assert.assertEquals(KakaoFriendsColoringBook.getLength(picture), 11);
    }

}
