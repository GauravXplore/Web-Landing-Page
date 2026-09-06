import java.util.*;
class hawww{
        public static void main(String[]args){
        String name = "Columbina";
        String sentence="My name is Columbina Hyposelenia";
        System.out.println(sentence);
        try (var in = new Scanner(System.in)) {
            System.out.print("Enter your name: ");
            name= in.nextLine();
        }
        System.out.println("Your name is "+ name);
    }
}