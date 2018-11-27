package com.springboot.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.springboot.demo.controller.StaffManagementArgumentObject;
import com.springboot.demo.entity.*;

@Mapper
public interface StaffManagementMapper {
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
    
    StaffManagement selectLike(@Param("value")String keyword);
    
    void deleteByUniqueField(@Param("key")String ukfield,@Param("value")Object keyword);
    
    boolean exists(@Param("key")String ukfield,@Param("value")Object keyword)throws Exception;
    
    List<StaffManagement> selectAll();
    
    List<StaffManagement> selectKeysLike(StaffManagementArgumentObject inputRecord);
}