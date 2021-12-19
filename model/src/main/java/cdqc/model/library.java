package cdqc.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Kerr
 * @create 2021-12-12 19:06
 */
@Data
@TableName("library")
public class library {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String text;
    private String picurl;
    private long dialog;
    private long game;
    private long back;
}
