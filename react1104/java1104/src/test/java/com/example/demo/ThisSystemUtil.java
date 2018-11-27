package com.springboot.demo.common;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.UUID;


public class ThisSystemUtil {

	public static int parseInt(String target,int defaultValue){
    	try{
    		return Integer.parseInt(target.trim()); 
    	}catch(Exception e){
    		return defaultValue; 
    	}
    	
    	
    /*
     * public static  String  md5(String inputStr){
        BigInteger bigInteger=null;
        try {
         MessageDigest md = MessageDigest.getInstance("MD5");   
         byte[] inputData = inputStr.getBytes(); 
         md.update(inputData);   
         bigInteger = new BigInteger(md.digest());
         bigInteger=bigInteger.abs();
        } catch (Exception e) {e.printStackTrace();}
        return bigInteger.toString(16);
    }
    	
    }
    public static String uuid(){
    	String uuid=UUID.randomUUID().toString();
    	char[] cs=new char[32];
    	char c=0;
    	for(int i=uuid.length(),j=0;i-->0;){
    		if((c=uuid.charAt(i))!='-'){
    			cs[j++]=c;
    		}
    	}
    	return new String(cs);
    }
    public static void main(String[] args) {
    	for(int i=10;i-->0;){
    		String u=uuid();
    		System.out.println(u);
    	}
	}
	*/
}
}