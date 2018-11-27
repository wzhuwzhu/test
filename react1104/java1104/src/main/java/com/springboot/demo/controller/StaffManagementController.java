package com.springboot.demo.controller;

import com.springboot.demo.entity.*;
import com.springboot.demo.function.*;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StaffManagementController {
	private StaffManagementFunction function;
	private final org.slf4j.Logger log = LoggerFactory.getLogger(StaffManagementController.class);
	
	public StaffManagementController(StaffManagementFunction function) {
		this.function = function;
	}
	
	@GetMapping("/staffs")
	List<StaffManagementViewObject> staffs() {
		return function.findAllStaff();
	}
	
	@GetMapping("staff/{id}")
	ResponseEntity<?> getStaffById(@PathVariable Long id) {
		StaffManagementViewObject staff = function.findStaffById(id);
		if (staff == null) {
			new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		return ResponseEntity.ok().body(staff);
	}
	
	@PostMapping("/staff")
	ResponseEntity<StaffManagementViewObject> createStaff(@Valid @RequestBody StaffManagementArgumentObject staffAO) throws Exception {
		log.info("Request to create staff: {}", staffAO);
		StaffManagementViewObject result = function.addStaff(staffAO);
		return ResponseEntity.created(new URI("/api/staff/" + result.getId())).body(result);
	}
	
	@PutMapping("/staff/{id}")
	ResponseEntity<StaffManagementViewObject> editStaff(@PathVariable Long id, @Valid @RequestBody StaffManagementArgumentObject staffAO) throws Exception {
		staffAO.setId(id);
		log.info("Request to update staff: {}", staffAO);
		StaffManagementViewObject result = function.updateStaff(staffAO);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/staff/{id}")
	public ResponseEntity<?> deleteStaff(@PathVariable Long id) {
		log.info("Request to delete staff: {}", id);
		function.deleteById(id);
		return ResponseEntity.ok().build();
		}
	
	@PostMapping("staffs/find")
	List<StaffManagementViewObject> getStaffByKeys(@Valid @RequestBody StaffManagementArgumentObject staffAO) throws Exception {
		log.info("Request to search for staff: {}", staffAO);
		List<StaffManagementViewObject> staffs = function.findStaffByKeys(staffAO);
		if (staffs == null) {
			new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		//System.out.println("Search result:" + staffs + staffs.size() + ((staffAO.getPhoneNo()==null)?"null":staffAO.getPhoneNo()));
		return staffs;
		
		//return ResponseEntity.ok().body(staffs);
	}
}