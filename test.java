import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        System.out.println("Enter Number Of Students");
        try (Scanner sc = new Scanner(System.in)) {
            int size = Integer.valueOf(sc.nextLine());
            int arr[] = new int[size];
            for (int i = 0; i < arr.length; i++) {
                System.out.println("enter index "+(1+i)+" number element");
                arr[i] = sc.nextInt();                                
            }
            for (int i = (size - 1); i >= 0; i--) {
                int count = 0;
                for (int j = i; j >= 0; j--) {
                    if (arr[i] < arr[j])
                        count++;
                }
                arr[i] = count;
            }
            for (int i : arr) {
                System.out.print(" "+i);                
            }

        }

    }
}
