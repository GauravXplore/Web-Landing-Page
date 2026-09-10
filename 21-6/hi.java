import java.util.*;
class hawww{
        public static void main(String[]args){
        String name = "Columbina";
        String sentence="My name is Columbina Hyposelenia";
        System.out.println(sentence);
        try (Scanner sc = new Scanner(System.in)) {
			System.out.println("Enter your name: ");
            name= sc.nextLine();
		} 
            System.out.println("Your name is "+ name);
    }
}