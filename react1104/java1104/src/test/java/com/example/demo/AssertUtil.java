package com.springboot.demo.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.commons.lang3.time.DateUtils;

public class AssertUtil {
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

}
