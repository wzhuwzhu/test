package com.springboot.demo;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.SqlSession;

import com.springboot.demo.common.MyBatisUtil;
import com.springboot.demo.controller.StaffManagementArgumentObject;
import com.springboot.demo.entity.*;
import com.springboot.demo.mapper.StaffManagementMapper;

@Mapper
public interface StaffManagementMapperTest {
    StaffManagement selectByPrimaryKey(Long id);
	
    Long deleteByPrimaryKey(Long id);

    Long insert(StaffManagement record);

    Long insertSelective(StaffManagement record);

    Long updateByPrimaryKeySelective(StaffManagement record);

    Long updateByPrimaryKey(StaffManagement record);
    
    /*
     * Optional<StaffManagement> selectByUniqueFieldOptional(@Param("key")String ukfield,@Param("value")Object keyword);
     */
    
    StaffManagement selectByUniqueField(@Param("key")String ukfield,@Param("value")Object keyword);
    
    StaffManagement selectLike(@Param("key")String keyword);
    
    void deleteByUniqueField(@Param("key")String ukfield,@Param("value")Object keyword);
    
    boolean exists(@Param("key")String ukfield,@Param("value")Object keyword)throws Exception;
    
    List<StaffManagement> selectAll();
    
    public static void main(String[] args) throws Exception {
    	SqlSession session = MyBatisUtil.getSession();
		StaffManagementMapperTest smMapper = session.getMapper(StaffManagementMapperTest.class);   	 
		
		StaffManagement staff4 = smMapper.selectByUniqueField("id", (long) 16);
		staff4.setDepartment("chemistry");
		Long id41 = smMapper.updateByPrimaryKeySelective(staff4);
		session.commit();
		System.out.println("Mapper.updateByPrimaryKeySelective succeed!" + staff4.getDepartment());
		MyBatisUtil.closeSession();
		}
}