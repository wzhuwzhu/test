package com.springboot.demo;
//package com.springboot.demo.test;

import com.springboot.demo.controller.StaffManagementArgumentObject;
import com.springboot.demo.controller.StaffManagementViewObject;
import com.springboot.demo.entity.*;
import com.springboot.demo.StaffManagementFunctionImplTest;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StaffManagementControllerTest {
	StaffManagementControllerTest() {}
	private StaffManagementFunctionImplTest function = new StaffManagementFunctionImplTest();
	private final org.slf4j.Logger log = LoggerFactory.getLogger(StaffManagementControllerTest.class);
	
	public StaffManagementControllerTest(StaffManagementFunctionImplTest function) {
		this.function = function;
	}
	
	@GetMapping("/staffs")
	List<StaffManagementViewObject> staffs() {
		return function.findAllStaff();
	}
	
	@GetMapping("staff/{id}")
	StaffManagementViewObject getStaffById(Long id) {
		StaffManagementViewObject staff = function.findStaffById(id);
		if (staff == null) {
			new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		//return ResponseEntity.ok().body(staff);
		return staff;
	}
	
	@GetMapping("staff/{name}")
	ResponseEntity<?> getStaffByName(@PathVariable String name) {
		StaffManagementViewObject staff = function.findStaffByName(name);
		if (staff == null) {
			new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		return ResponseEntity.ok().body(staff);
	}
	
	@PostMapping("/staff")
	StaffManagementViewObject createStaff(StaffManagementArgumentObject staffAO) throws Exception {
		log.info("Request to create staff: {}", staffAO);
		StaffManagementViewObject result = function.addStaff(staffAO);
		return result;
	}
	
	@PutMapping("/staff/{id}")
	StaffManagementViewObject editStaff(Long id, StaffManagementArgumentObject staffAO) throws Exception {
		staffAO.setId(id);
		log.info("Request to update staff: {}", staffAO);
		StaffManagementViewObject result = function.updateStaff(staffAO);
		return result;
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
		return staffs;
	}
	
	public static void main(String[] args) throws Exception {
		StaffManagementControllerTest controller = new StaffManagementControllerTest();
		StaffManagementArgumentObject staffAO1 = new StaffManagementArgumentObject();
		staffAO1.setPhoneNo("18");
		List<StaffManagementViewObject> staffListVO1 = controller.getStaffByKeys(staffAO1);
		System.out.println("Controller.getStaffByKeys succeed!" +staffListVO1.size() + staffListVO1);
		}
}