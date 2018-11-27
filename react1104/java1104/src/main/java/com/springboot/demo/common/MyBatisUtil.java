package com.springboot.demo.common;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;
 
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
 
public class MyBatisUtil {
 
	private static SqlSessionFactory sessionFactory = null;
	private static ThreadLocal<SqlSession> threadlocal = new ThreadLocal<SqlSession>();
 
	static {
		String resource = "E:\\workspace\\181104\\react1104\\java1104\\src\\main\\resources\\mybatis-config.xml";
		InputStream is = null;
		try {
			is = new FileInputStream(resource);
			System.out.println("Successfully found mybatis-config.xml!");
		} catch (IOException e) {
			e.printStackTrace();
		}

		sessionFactory = new SqlSessionFactoryBuilder().build(is);
		System.out.println("Successfully created sessionFactoryBuilder!");
	}
 
	public static SqlSession getSession(){
		SqlSession session = sessionFactory.openSession();
		System.out.println("Session creation succeed!");
		return session;
	}
	
	public static void closeSession(){
		//璇诲彇鍑虹嚎绋嬪彉閲忎腑session瀵硅薄
		SqlSession session = threadlocal.get();
		//濡傛灉session瀵硅薄涓嶄负绌猴紝鍏抽棴sessoin瀵硅薄锛屽苟娓呯┖绾跨▼鍙橀噺
		if(session!=null){
			session.close();
			threadlocal.set(null);
		}
	}
	
	
	/*
	鐢ㄩ潤鎬佷唬鐮佸潡杩涜鍒涘缓SqlSessionFactory锛屽彧鍦ㄧ被鍔犺浇鏃跺垱寤轰竴娆★紝淇濊瘉浜嗘暣涓▼搴忚繍琛屾椂鍙湁涓�涓伐鍘傚疄渚嬨��
	鐢ㄧ嚎绋嬪彉閲忎繚瀛榮ession瀵硅薄锛屾槸涓轰簡绾跨▼瀹夊叏鐫�鎯筹紝杩欐牱鑷繁鐨勭嚎绋嬬鐞嗚嚜宸辩嚎绋嬬殑session锛屼笉浼氬嚭鐜板瀹炰緥鍚屾椂璋冪敤鍚屼竴涓猻ession瀵硅薄锛岄�犳垚鏁版嵁涓嶅噯纭殑鎯呭喌鍑虹幇銆�
	MyBatisUtil.getSession(); 鍗冲彲鑾峰緱session瀵硅薄锛�
	MyBatisUtil.closeSession();聽 鍗冲彲鍏抽棴绾跨▼瀵硅薄锛屽姟蹇呰鍦╯ession浣跨敤瀹屾瘯鍚庡叧闂璼ession銆�
	 */
	
}
