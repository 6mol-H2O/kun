package cdqc.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Kerr
 * @create 2021-11-25 15:42
 */
@Data
@TableName("userinfo")
public class UserInfo {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String openid;
    private Long now;
    private Long achieve;
    private Long wit;
    private Long social;
    private Long power;
}
