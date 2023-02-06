import java.util.*;

public class Main
{
	public static void main(String[] args) {
	    String a="COVID . rare";
	    int sum=0,j=0;
	    int temp[]=new int[100];
	    int length=a.length();
	    System.out.println("Length: "+length);
	    for(int i=0;i<a.length();i++)
	    {
	        char ch=a.charAt(i);
	        temp[j]=(int)ch;
	        if(Character.isUpperCase(ch))
    	        {
    	            temp[j]=temp[j]-38;
    	            sum=sum+temp[j];
    	            System.out.println(ch+":"+ temp[j]);
    	            j++;
    	            
    	        }
    	    else if(Character.isLowerCase(ch))
    	        {
    	            temp[j]=temp[j]-96;
    	            sum=sum+temp[j];
    	            System.out.println(ch+":"+ temp[j]);
    	            j++;
    	        }
	        else if(ch==' ')
	            {
	                temp[j]=0;
	                sum=sum+temp[j];
	                System.out.println(ch+":"+ temp[j]);
    	            j++;
	            }
	        else if(ch=='.')
	            {
	                temp[j]=99;
	                sum=sum+temp[j];
	                System.out.println(ch+":"+ temp[j]);
    	            j++;
	            }     
	    }
	    System.out.println();
	    System.out.println("Sum: "+sum);
	    System.out.println();
	    int count=0;
	    for(int i=0;i<length;i++)
	    {
	        char ch=a.charAt(i);
	        if(ch==' ')
	        {
	             count=0;
	        }
	        else if(ch!=' ')
	        {
	            
	            count++;
	            
	        }
	        int value= (temp[i]+(count*100));
	        System.out.println(ch+":"+value);
	        
	    }
	    
	}
}


