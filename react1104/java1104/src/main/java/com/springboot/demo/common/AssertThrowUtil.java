package com.springboot.demo.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.commons.lang3.time.DateUtils;

public class AssertThrowUtil {
	
    public static String assertStringNotBlank(String Message,String input){
        if(input==null||(input=input.trim()).length()==0){
            throw new ThisSystemException(Message);
        }
        return input;
    }
    
    public static Long assertLongNotBlank(String Message,Long input){
        if(input==null){
            throw new ThisSystemException(Message);
        }
        return input;
    }
    
    public static void assertTrue(String message,boolean b){
    	if(!b){
    		throw new ThisSystemException(message);
    	}
    	
    }
    
    public static void assertFalse(String message,boolean b){
    	if(b){
    		throw new ThisSystemException(message);
    	}
    }
    
    public static void assertPatternMatch(String message,String reg,String target){
    	Pattern pattern=Pattern.compile(reg);
    	Matcher matcher = pattern.matcher(target);
    	if(!matcher.matches()){
    		throw new ThisSystemException(message);
    	}
    }
      
    public static Date assertDatePatternAndParse(String message,String reg,String target,String [] datePattern) throws ParseException{
    	Date date = null;
    	if(target!=null&&(target=target.trim()).length()!=0) {
    		Pattern stringPattern=Pattern.compile(reg);
        	Matcher matcher = stringPattern.matcher(target.trim());
        	if(!matcher.matches()){
        		throw new ThisSystemException(message);
        	}
        	date = DateUtils.parseDate(target.trim(), datePattern);
    	}
    	return date;
    }
    
    public static Integer assertIntPatternAndParse(String message,String reg,String target){
    	Integer input = null;
    	if(target!=null||(target=target.trim()).length()!=0) {
    		Pattern stringPattern=Pattern.compile(reg);
        	Matcher matcher = stringPattern.matcher(target.trim());
        	if(!matcher.matches()){
        		throw new ThisSystemException(message);
        	}
        	input = Integer.parseInt(target.trim());
    	}
    	return input;
    }

	public static String parseDateToString(Date target){
    	String output = null;
    	if(target!=null) {
    		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
    		output = sdf.format(target);
        	}
    	return output;
    }
	
	public static String parseYearToString(Date target){
    	String output = null;
    	if(target!=null) {
    		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
    		output = sdf.format(target);
        	}
    	return output;
    }
	
	public static String parseGenderToString(Boolean target){
    	String output = null;
    	if(target!=null) {
    		output = (target)?"male":"female";
        	}
    	return output;
    }
	
	public static Boolean parseStringToGender(String target){
    	Boolean output = null;
    	if(target!=null) {
    		output = (target=="male")?true:false;
        	}
    	return output;
    }
	
	public static String parseInputToString(Object target){
    	String output = null;
    	if(target!=null) {
    		output = target.toString().trim();
        	}
    	return output;
    }
    /*
    public static void assertNotNull(String message,Object o){
    	if(o==null){
    		throw new ThisSystemException(message);
    	}
    }
    public static void assertNull(String message,Object o){
    	if(o!=null){
    		throw new ThisSystemException(message);
    	}
    }
    public static void assertEquals(String message,Object a,Object b){
    	if(a==null?a!=b:!a.equals(b)){
    		throw new ThisSystemException(message);
    	}
    }
    public static void assertNotEquals(String message,Object a,Object b){
    	if(a==null?a==b:a.equals(b)){
    		throw new ThisSystemException(message);
    	}
    }
    
    public static void main(String[] args) {
    	
    	Pattern pattern=Pattern.compile("[\u4e00-\u9fa5]{2,}");
    	Matcher matcher = pattern.matcher("张飞");
    	if(matcher.matches()){
    		System.out.println("ddd");
    		
    	}
	}
	*/
}
