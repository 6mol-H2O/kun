package cdqc.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Kerr
 * @create 2021-12-12 19:44
 */
@Data
@TableName("activity")
public class Activity {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String question;
    private String questionpic;
    private String backpic;
    private String answerone;
    private String answertwo;
    private String answerthree;
    private String correct;
}
