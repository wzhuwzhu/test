package com.springboot.demo.function;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import com.springboot.demo.common.*;
import com.springboot.demo.controller.*;
import com.springboot.demo.entity.*;
import com.springboot.demo.mapper.*;

@Service
public class StaffManagementFunctionImpl implements StaffManagementFunction{
	@Override
	public	StaffManagementViewObject findStaffByName(String name){
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		name=AssertThrowUtil.assertStringNotBlank("Name cannot be blank!",name);
		
        StaffManagement staff=smMapper.selectByUniqueField("name", name); 
        MyBatisUtil.closeSession();
        if(staff != null){
        	String gender = AssertThrowUtil.parseGenderToString(staff.getGender());
        	String yearOfGraduation = AssertThrowUtil.parseYearToString(staff.getYearOfGraduation());
        	String enrolledSince = AssertThrowUtil.parseDateToString(staff.getEnrolledSince());
        	String yearOfBirth = AssertThrowUtil.parseYearToString(staff.getYearOfBirth());
        	
        	StaffManagementViewObject staffVO = new StaffManagementViewObject();
        	staffVO.setId(staff.getId());
        	staffVO.setName(staff.getName());
        	staffVO.setGender(gender);
        	staffVO.setDepartment(staff.getDepartment());
        	staffVO.setPosition(staff.getPosition());
        	staffVO.setPermission(staff.getPermission());
        	staffVO.setTechnicalTitle(staff.getTechnicalTitle());
        	staffVO.setDegree(staff.getDegree());
        	staffVO.setGraduatedFrom(staff.getGraduatedFrom());
        	staffVO.setMajor(staff.getMajor());
        	staffVO.setYearOfGraduation(yearOfGraduation);
        	staffVO.setEnrolledSince(enrolledSince);
        	staffVO.setPhoneNo(staff.getPhoneNo());
        	staffVO.setHometown(staff.getHometown());
        	staffVO.setYearOfBirth(yearOfBirth);
        	staffVO.setRemark(staff.getRemark());
        	
        	return staffVO;
		}
        throw new ThisSystemException("Cannot find this staff[\"+name+\"].");
	};
	
	@Override
	public	StaffManagementViewObject findStaffById(Long id){
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		StaffManagement staff=smMapper.selectByUniqueField("id", id); 
		MyBatisUtil.closeSession();
        if(staff != null){
        	String gender = AssertThrowUtil.parseGenderToString(staff.getGender());
        	String yearOfGraduation = AssertThrowUtil.parseYearToString(staff.getYearOfGraduation());
        	String enrolledSince = AssertThrowUtil.parseDateToString(staff.getEnrolledSince());
        	String yearOfBirth = AssertThrowUtil.parseYearToString(staff.getYearOfBirth());
        	
        	StaffManagementViewObject staffVO = new StaffManagementViewObject();
        	staffVO.setId(staff.getId());
        	staffVO.setName(staff.getName());
        	staffVO.setGender(gender);
        	staffVO.setDepartment(staff.getDepartment());
        	staffVO.setPosition(staff.getPosition());
        	staffVO.setPermission(staff.getPermission());
        	staffVO.setTechnicalTitle(staff.getTechnicalTitle());
        	staffVO.setDegree(staff.getDegree());
        	staffVO.setGraduatedFrom(staff.getGraduatedFrom());
        	staffVO.setMajor(staff.getMajor());
        	staffVO.setYearOfGraduation(yearOfGraduation);
        	staffVO.setEnrolledSince(enrolledSince);
        	staffVO.setPhoneNo(staff.getPhoneNo());
        	staffVO.setHometown(staff.getHometown());
        	staffVO.setYearOfBirth(yearOfBirth);
        	staffVO.setRemark(staff.getRemark());
        	
        	return staffVO;
		}
        throw new ThisSystemException("Cannot find this staff["+id+"].");
	};
	
	@Override
	public	StaffManagementViewObject addStaff(StaffManagementArgumentObject staffManagementArgumentObject) throws Exception{
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		
				if(staffManagementArgumentObject==null){
					throw new IllegalArgumentException("argumentObject cannot be blank");
				}
				
				String name=AssertThrowUtil.assertStringNotBlank("Name cannot be blank!",staffManagementArgumentObject.getName());
				
				AssertThrowUtil.assertFalse("Staff already exists!",smMapper.exists("name",name));
				
				Date yearOfGraduation = AssertThrowUtil.assertDatePatternAndParse("Illegal input!","\\d{4}",staffManagementArgumentObject.getYearOfGraduation(),new String[]{"yyyy"});
				Date enrolledSince = AssertThrowUtil.assertDatePatternAndParse("Illegal input!","\\d{8}",staffManagementArgumentObject.getEnrolledSince(),new String[]{"yyyymmdd"});
				Date yearOfBirth = AssertThrowUtil.assertDatePatternAndParse("Illegal input!","\\d{4}",staffManagementArgumentObject.getYearOfBirth(),new String[]{"yyyy"});
				
				StaffManagement staff=new StaffManagement();
								
				boolean gender="male".equals(staffManagementArgumentObject.getGender());
				
				staff.setName(name);
				staff.setGender(gender);
				staff.setDepartment(staffManagementArgumentObject.getDepartment());
				staff.setPosition(staffManagementArgumentObject.getPosition());
				staff.setPermission(staffManagementArgumentObject.getPermission());
				staff.setTechnicalTitle(staffManagementArgumentObject.getTechnicalTitle());
				staff.setDegree(staffManagementArgumentObject.getDegree());
				staff.setGraduatedFrom(staffManagementArgumentObject.getGraduatedFrom());
				staff.setMajor(staffManagementArgumentObject.getMajor());
				staff.setYearOfGraduation(yearOfGraduation);
				staff.setEnrolledSince(enrolledSince);
				staff.setPhoneNo(staffManagementArgumentObject.getPhoneNo());
				staff.setHometown(staffManagementArgumentObject.getHometown());
				staff.setYearOfBirth(yearOfBirth);
				staff.setRemark(staffManagementArgumentObject.getRemark());
				
				smMapper.insertSelective(staff);
				session.commit();
				MyBatisUtil.closeSession();
				
				String genderVO = AssertThrowUtil.parseGenderToString(staff.getGender());
	        	String yearOfGraduationVO = AssertThrowUtil.parseYearToString(staff.getYearOfGraduation());
	        	String enrolledSinceVO = AssertThrowUtil.parseDateToString(staff.getEnrolledSince());
	        	String yearOfBirthVO = AssertThrowUtil.parseYearToString(staff.getYearOfBirth());
	        	
	        	StaffManagementViewObject staffVO = new StaffManagementViewObject();
	        	staffVO.setId(staff.getId());
	        	staffVO.setName(staff.getName());
	        	staffVO.setGender(genderVO);
	        	staffVO.setDepartment(staff.getDepartment());
	        	staffVO.setPosition(staff.getPosition());
	        	staffVO.setPermission(staff.getPermission());
	        	staffVO.setTechnicalTitle(staff.getTechnicalTitle());
	        	staffVO.setDegree(staff.getDegree());
	        	staffVO.setGraduatedFrom(staff.getGraduatedFrom());
	        	staffVO.setMajor(staff.getMajor());
	        	staffVO.setYearOfGraduation(yearOfGraduationVO);
	        	staffVO.setEnrolledSince(enrolledSinceVO);
	        	staffVO.setPhoneNo(staff.getPhoneNo());
	        	staffVO.setHometown(staff.getHometown());
	        	staffVO.setYearOfBirth(yearOfBirthVO);
	        	staffVO.setRemark(staff.getRemark());
	        	
	        	return staffVO;
	}
	
	@Override
	public	StaffManagementViewObject updateStaff(StaffManagementArgumentObject staffManagementArgumentObject) throws Exception{
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		
				if(staffManagementArgumentObject==null){
					throw new IllegalArgumentException("argumentObject cannot be blank");
				}
				
				String name = staffManagementArgumentObject.getName();
				AssertThrowUtil.assertTrue("Staff doesn't exist!",smMapper.exists("name",name));
				
				StaffManagement staff=smMapper.selectByUniqueField("id", staffManagementArgumentObject.getId());
				Date yearOfGraduation = AssertThrowUtil.assertDatePatternAndParse("Illegal input!","\\d{4}",staffManagementArgumentObject.getYearOfGraduation(),new String[]{"yyyy"});
				Date enrolledSince = AssertThrowUtil.assertDatePatternAndParse("Illegal input!","\\d{8}",staffManagementArgumentObject.getEnrolledSince(),new String[]{"yyyymmdd"});
				Date yearOfBirth = AssertThrowUtil.assertDatePatternAndParse("Illegal input!","\\d{4}",staffManagementArgumentObject.getYearOfBirth(),new String[]{"yyyy"});
				boolean gender="male".equals(staffManagementArgumentObject.getGender());
				
				staff.setName(name);
				staff.setGender(gender);
				staff.setDepartment(staffManagementArgumentObject.getDepartment());
				staff.setPosition(staffManagementArgumentObject.getPosition());
				staff.setPermission(staffManagementArgumentObject.getPermission());
				staff.setTechnicalTitle(staffManagementArgumentObject.getTechnicalTitle());
				staff.setDegree(staffManagementArgumentObject.getDegree());
				staff.setGraduatedFrom(staffManagementArgumentObject.getGraduatedFrom());
				staff.setMajor(staffManagementArgumentObject.getMajor());
				staff.setYearOfGraduation(yearOfGraduation);
				staff.setEnrolledSince(enrolledSince);
				staff.setPhoneNo(staffManagementArgumentObject.getPhoneNo());
				staff.setHometown(staffManagementArgumentObject.getHometown());
				staff.setYearOfBirth(yearOfBirth);
				staff.setRemark(staffManagementArgumentObject.getRemark());
				
				smMapper.updateByPrimaryKeySelective(staff);
				session.commit();
				MyBatisUtil.closeSession();
				
				String genderVO = AssertThrowUtil.parseGenderToString(staff.getGender());
	        	String yearOfGraduationVO = AssertThrowUtil.parseYearToString(staff.getYearOfGraduation());
	        	String enrolledSinceVO = AssertThrowUtil.parseDateToString(staff.getEnrolledSince());
	        	String yearOfBirthVO = AssertThrowUtil.parseYearToString(staff.getYearOfBirth());
	        	
	        	StaffManagementViewObject staffVO = new StaffManagementViewObject();
	        	staffVO.setId(staff.getId());
	        	staffVO.setName(staff.getName());
	        	staffVO.setGender(genderVO);
	        	staffVO.setDepartment(staff.getDepartment());
	        	staffVO.setPosition(staff.getPosition());
	        	staffVO.setPermission(staff.getPermission());
	        	staffVO.setTechnicalTitle(staff.getTechnicalTitle());
	        	staffVO.setDegree(staff.getDegree());
	        	staffVO.setGraduatedFrom(staff.getGraduatedFrom());
	        	staffVO.setMajor(staff.getMajor());
	        	staffVO.setYearOfGraduation(yearOfGraduationVO);
	        	staffVO.setEnrolledSince(enrolledSinceVO);
	        	staffVO.setPhoneNo(staff.getPhoneNo());
	        	staffVO.setHometown(staff.getHometown());
	        	staffVO.setYearOfBirth(yearOfBirthVO);
	        	staffVO.setRemark(staff.getRemark());
	        	
	        	return staffVO;
	}
	
	@Override
	public List<StaffManagementViewObject> findAllStaff(){
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		List<StaffManagement> staffList = smMapper.selectAll();
		MyBatisUtil.closeSession();
		
		List<StaffManagementViewObject> staffVOList = new ArrayList<StaffManagementViewObject> ();
		for(int i = 0 ; i < staffList.size() ; i++)  {
			StaffManagement staff = staffList.get(i);
			String genderVO = AssertThrowUtil.parseGenderToString(staff.getGender());
	    	String yearOfGraduationVO = AssertThrowUtil.parseYearToString(staff.getYearOfGraduation());
	    	String enrolledSinceVO = AssertThrowUtil.parseDateToString(staff.getEnrolledSince());
	    	String yearOfBirthVO = AssertThrowUtil.parseYearToString(staff.getYearOfBirth());
	    	
	    	StaffManagementViewObject staffVO = new StaffManagementViewObject();
	    	staffVO.setId(staff.getId());
	    	staffVO.setName(staff.getName());
	    	staffVO.setGender(genderVO);
	    	staffVO.setDepartment(staff.getDepartment());
	    	staffVO.setPosition(staff.getPosition());
	    	staffVO.setPermission(staff.getPermission());
	    	staffVO.setTechnicalTitle(staff.getTechnicalTitle());
	    	staffVO.setDegree(staff.getDegree());
	    	staffVO.setGraduatedFrom(staff.getGraduatedFrom());
	    	staffVO.setMajor(staff.getMajor());
	    	staffVO.setYearOfGraduation(yearOfGraduationVO);
	    	staffVO.setEnrolledSince(enrolledSinceVO);
	    	staffVO.setPhoneNo(staff.getPhoneNo());
	    	staffVO.setHometown(staff.getHometown());
	    	staffVO.setYearOfBirth(yearOfBirthVO);
	    	staffVO.setRemark(staff.getRemark());
	    	
	    	staffVOList.add(staffVO);
		}
    	return staffVOList;
	}
	
	@Override
	public void deleteById(Long id) {
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		smMapper.deleteByPrimaryKey(id);
		session.commit();
		MyBatisUtil.closeSession();
	}
	
	@Override
	public	List<StaffManagementViewObject> findStaffByKeys(StaffManagementArgumentObject staffManagementArgumentObject) throws Exception {
		SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapper smMapper = session.getMapper(StaffManagementMapper.class);
		
		if(staffManagementArgumentObject==null){
			throw new IllegalArgumentException("argumentObject cannot be blank");
		}
		Long id = null;
		String genderInput = staffManagementArgumentObject.getGender();
		String gender= (genderInput==null||(genderInput=genderInput.trim()).length()==0)?
				null:((genderInput.equals("male"))?"1":"0");
		staffManagementArgumentObject.setId(id);
		staffManagementArgumentObject.setGender(gender);
		List<StaffManagement> staffList = smMapper.selectKeysLike(staffManagementArgumentObject);
		MyBatisUtil.closeSession();
		
		List<StaffManagementViewObject> staffVOList = new ArrayList<StaffManagementViewObject> ();
		for(int i = 0 ; i < staffList.size() ; i++)  {
			StaffManagement staff = staffList.get(i);
			String genderVO = AssertThrowUtil.parseGenderToString(staff.getGender());
	    	String yearOfGraduationVO = AssertThrowUtil.parseYearToString(staff.getYearOfGraduation());
	    	String enrolledSinceVO = AssertThrowUtil.parseDateToString(staff.getEnrolledSince());
	    	String yearOfBirthVO = AssertThrowUtil.parseYearToString(staff.getYearOfBirth());
	    	
	    	StaffManagementViewObject staffVO = new StaffManagementViewObject();
	    	staffVO.setId(staff.getId());
	    	staffVO.setName(staff.getName());
	    	staffVO.setGender(genderVO);
	    	staffVO.setDepartment(staff.getDepartment());
	    	staffVO.setPosition(staff.getPosition());
	    	staffVO.setPermission(staff.getPermission());
	    	staffVO.setTechnicalTitle(staff.getTechnicalTitle());
	    	staffVO.setDegree(staff.getDegree());
	    	staffVO.setGraduatedFrom(staff.getGraduatedFrom());
	    	staffVO.setMajor(staff.getMajor());
	    	staffVO.setYearOfGraduation(yearOfGraduationVO);
	    	staffVO.setEnrolledSince(enrolledSinceVO);
	    	staffVO.setPhoneNo(staff.getPhoneNo());
	    	staffVO.setHometown(staff.getHometown());
	    	staffVO.setYearOfBirth(yearOfBirthVO);
	    	staffVO.setRemark(staff.getRemark());
	    	
	    	staffVOList.add(staffVO);
		}
		return staffVOList;
	}
}
