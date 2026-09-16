import java.util.*;

public class lengthcharat{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String name = "Tony Stark";
        System.out.println(name.length());
        // charAt = accsesses the character one at a time.
        for (int i = 0; i < name.length(); i++) {
            System.out.println(name.charAt(i));
        }
        //comparision of two strings
        String name1="Tony";
        String name2="Tony";
        //1 s1 > s2 : +ve value
        //2 s1 == s2 : 0
        //3 s1 < s2 : -ve value

        //hello wello h<w - h lost== -ve value 
        //disimilar characters are compared
 

        // if(name1.compareTo(name2)==0){
        //     System.out.println("Strings are equal");
        // }else {
        //     System.out.println("Strings are not not equal");
        // }




        if(name1 == name2){
            System.out.println("Strings are equal");
        }else {
            System.out.println("Strings are not equal");
        }
        

        if(new String("Tony")== new String("Tony")){
            System.out.println("Strings are equal");
        }else{
            System.out.println("Strings are not equal");
        }
        
        
    }
}
