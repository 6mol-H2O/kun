package cdqc.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Kerr
 * @create 2021-12-13 20:09
 */
@Data
@TableName("sizhengke")
public class sizhengke {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String question;
    private String backpicurl;
    private String answerone;
    private String answertwo;
    private String answerthree;
    private String answer;
    private String picurl;
}
