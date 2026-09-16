import java.util.*;
public class substring {
    public static void main(String[] args) {
        String sentence="My name is Tony";
        // substring(beg index,end index)
        // here we need tony as our output so we run the substring till string's length from 11 one index less is considered in this function the end index of this function will be length()-1.


        // so if we want a part of name of TonyStark we run the substring from 0 to 4th index for Stark we run the code from 4th index and no ending index is entered as when the Last index i.e. 'K's' position in the string we dont need a ending index. 

        String name = sentence.substring(11,sentence.length());
        System.out.println(name);


        // Strings are immutable Once they are stored in the memory they cant be modified, deleted from middle, add something to the middle or anywhere new string must be created to cause any change.
    }
    
}
