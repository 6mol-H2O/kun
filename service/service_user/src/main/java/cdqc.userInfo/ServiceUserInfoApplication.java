package cdqc.userInfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author Kerr
 * @create 2021-11-25 15:31
 */
@SpringBootApplication
@ComponentScan(basePackages = "cdqc")
public class ServiceUserInfoApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceUserInfoApplication.class,args);
    }
}
