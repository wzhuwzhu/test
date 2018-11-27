package com.springboot.demo.function;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.demo.controller.*;
import com.springboot.demo.entity.*;

@Service
public interface StaffManagementFunction {
	StaffManagementViewObject findStaffByName(String name);
	
	StaffManagementViewObject findStaffById(Long id);
	
	StaffManagementViewObject addStaff(StaffManagementArgumentObject staffManagementArgumentObject) throws Exception;
	
	StaffManagementViewObject updateStaff(StaffManagementArgumentObject staffManagementArgumentObject) throws Exception;
	
	List<StaffManagementViewObject> findAllStaff();
	
	void deleteById(Long id);
	
	List<StaffManagementViewObject> findStaffByKeys(StaffManagementArgumentObject staffManagementArgumentObject) throws Exception;
}
